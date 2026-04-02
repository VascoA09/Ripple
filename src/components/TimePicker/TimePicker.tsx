import React, { useId, useRef, useState, useEffect } from 'react'
import { Clock, X, XCircle, AlertCircle, CheckCircle } from 'lucide-react'
import { FieldLabel } from '../FieldLabel'
import { Hint } from '../Hint'
import { Button } from '../Button'
import './TimePicker.css'

// =============================================================================
// TYPES
// =============================================================================

export type TimePickerSize       = 'small' | 'medium' | 'large'
export type TimePickerValidation = 'positive' | 'notice' | 'negative'

export interface TimePickerProps {
  /** Visible label — always required. Use hideLabel for contexts like data grids. */
  label:               string
  /** Visually hides the label while keeping it accessible. */
  hideLabel?:          boolean
  /**
   * Controlled time value in 24-hour "HH:MM" or "HH:MM:SS" format.
   * Omit for uncontrolled usage.
   */
  value?:              string
  onChange?:           (value: string) => void
  /** Helper text below the field. Replaced by validationMessage when triggered. */
  hint?:               string
  validation?:         TimePickerValidation
  validationMessage?:  string
  size?:               TimePickerSize
  disabled?:           boolean
  readOnly?:           boolean
  required?:           boolean
  /**
   * Shows a clear button when a value is set.
   * Also adds a Clear action to the panel footer.
   */
  clearable?:          boolean
  /** Adds a seconds column to the panel and seconds segment to the input. */
  showSeconds?:        boolean
  /** 12 or 24 hour display. Default: 24. */
  hourCycle?:          12 | 24
  className?:          string
}

// =============================================================================
// CONSTANTS + HELPERS
// =============================================================================

const ICON_SIZE: Record<TimePickerSize, number> = { small: 14, medium: 16, large: 18 }

const HOURS_24  = Array.from({ length: 24 }, (_, i) => i)
const HOURS_12  = Array.from({ length: 12 }, (_, i) => i + 1)  // 1–12
const MINS_SECS = Array.from({ length: 60 }, (_, i) => i)

const VALIDATION_ICON: Record<TimePickerValidation, React.ReactNode> = {
  negative: <XCircle     size={14} aria-hidden="true" className="time-picker__msg-icon" />,
  notice:   <AlertCircle size={14} aria-hidden="true" className="time-picker__msg-icon" />,
  positive: <CheckCircle size={14} aria-hidden="true" className="time-picker__msg-icon" />,
}

const pad = (n: number) => String(n).padStart(2, '0')

function parseValue(
  str: string | undefined,
  hourCycle: 12 | 24,
): { h: number | null; m: number | null; s: number | null; ampm: 'AM' | 'PM' } {
  if (!str) return { h: null, m: null, s: null, ampm: 'AM' }
  const parts = str.split(':').map(Number)
  const h24   = parts[0] ?? 0
  const m     = parts[1] ?? 0
  const s     = isNaN(parts[2]) ? null : parts[2]
  const ampm: 'AM' | 'PM' = h24 >= 12 ? 'PM' : 'AM'
  const h = hourCycle === 12 ? (h24 % 12 || 12) : h24
  return { h, m, s, ampm }
}

function buildOutput(
  h: number | null,
  m: number | null,
  s: number | null,
  ampm: 'AM' | 'PM',
  hourCycle: 12 | 24,
  showSeconds: boolean,
): string | null {
  if (h == null || m == null) return null
  if (showSeconds && s == null) return null
  const h24 = hourCycle === 12
    ? (ampm === 'AM' ? (h === 12 ? 0 : h) : (h === 12 ? 12 : h + 12))
    : h
  const parts = [pad(h24), pad(m)]
  if (showSeconds) parts.push(pad(s!))
  return parts.join(':')
}

// =============================================================================
// SCROLL COLUMN (hours / minutes / seconds)
// =============================================================================

interface TimeColumnProps {
  label:    string
  values:   number[]
  selected: number | null
  onSelect: (v: number) => void
}

function TimeColumn({ label, values, selected, onSelect }: TimeColumnProps) {
  const listRef = useRef<HTMLUListElement>(null)

  // Center the selected item on open and on selection change
  useEffect(() => {
    if (selected == null || !listRef.current) return
    const idx  = values.indexOf(selected)
    if (idx < 0) return
    const list = listRef.current
    const item = list.children[idx] as HTMLElement
    if (!item) return
    list.scrollTop = item.offsetTop - list.clientHeight / 2 + item.clientHeight / 2
  }, [selected, values])

  return (
    <div className="time-picker__column">
      <div className="time-picker__column-label" aria-hidden="true">{label}</div>
      <ul className="time-picker__column-list" ref={listRef} aria-label={label} role="listbox">
        {values.map(v => (
          <li
            key={v}
            role="option"
            aria-selected={v === selected}
            tabIndex={v === selected ? 0 : -1}
            className={[
              'time-picker__column-item',
              v === selected ? 'time-picker__column-item--selected' : '',
            ].filter(Boolean).join(' ')}
            onClick={() => onSelect(v)}
          >
            {pad(v)}
          </li>
        ))}
      </ul>
    </div>
  )
}

// =============================================================================
// AM/PM TOGGLE
// =============================================================================

interface AmPmToggleProps {
  selected: 'AM' | 'PM'
  onSelect: (v: 'AM' | 'PM') => void
}

function AmPmToggle({ selected, onSelect }: AmPmToggleProps) {
  return (
    <div className="time-picker__column">
      <div className="time-picker__column-label" aria-hidden="true">Period</div>
      <div className="time-picker__ampm">
        {(['AM', 'PM'] as const).map(v => (
          <Button
            key={v}
            variant="ghost"
            color="primary"
            size="medium"
            aria-pressed={v === selected}
            onClick={() => onSelect(v)}
            className={[
              'time-picker__ampm-btn',
              v === selected ? 'time-picker__ampm-btn--selected' : '',
            ].filter(Boolean).join(' ')}
          >
            {v}
          </Button>
        ))}
      </div>
    </div>
  )
}

// =============================================================================
// TIME PICKER
// =============================================================================

/**
 * TimePicker lets users enter or select a time value via a segmented input and
 * an optional scroll-column panel.
 *
 * Value format: "HH:MM" or "HH:MM:SS" in 24-hour notation.
 * The hourCycle prop controls display (12/24h); the value is always 24-hour.
 *
 * Keyboard — segments:
 *   ↑ / ↓          increment / decrement
 *   ← / →          move focus between segments
 *   0–9            type a digit (auto-advances on 2 digits)
 *   a / p          (AM/PM segment) set AM or PM
 *   Enter / Space  open / close the panel
 *   Escape         close the panel
 */
export function TimePicker({
  label,
  hideLabel       = false,
  value:    valueProp,
  onChange,
  hint,
  validation,
  validationMessage,
  size            = 'medium',
  disabled        = false,
  readOnly        = false,
  required        = false,
  clearable       = false,
  showSeconds     = false,
  hourCycle       = 24,
  className,
}: TimePickerProps) {
  const uid       = useId()
  const hintId    = useId()
  const messageId = useId()

  const parsed = parseValue(valueProp, hourCycle)

  const [h,    setH]    = useState<number | null>(parsed.h)
  const [m,    setM]    = useState<number | null>(parsed.m)
  const [s,    setS]    = useState<number | null>(parsed.s)
  const [ampm, setAmPm] = useState<'AM' | 'PM'>(parsed.ampm)
  const [open,    setOpen]    = useState(false)
  const [focused, setFocused] = useState(false)

  // Digit accumulation (typing into segments)
  const pendingH = useRef('')
  const pendingM = useRef('')
  const pendingS = useRef('')

  // DOM refs
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef   = useRef<HTMLDivElement>(null)
  const hRef         = useRef<HTMLSpanElement>(null)
  const mRef         = useRef<HTMLSpanElement>(null)
  const sRef         = useRef<HTMLSpanElement>(null)
  const ampmRef      = useRef<HTMLSpanElement>(null)

  // Sync from controlled value
  useEffect(() => {
    const p = parseValue(valueProp, hourCycle)
    setH(p.h)
    setM(p.m)
    setS(p.s)
    setAmPm(p.ampm)
    pendingH.current = ''
    pendingM.current = ''
    pendingS.current = ''
  }, [valueProp, hourCycle])

  // Close panel on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Close panel on Escape
  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); hRef.current?.focus() }
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  // ---------------------------------------------------------------------------
  // Derived values
  // ---------------------------------------------------------------------------

  const maxH     = hourCycle === 12 ? 12 : 23
  const minH     = hourCycle === 12 ? 1  : 0
  const hours    = hourCycle === 12 ? HOURS_12 : HOURS_24
  const hasValue = h != null && m != null && (!showSeconds || s != null)

  // ---------------------------------------------------------------------------
  // Commit helpers
  // ---------------------------------------------------------------------------

  function commit(nh: number | null, nm: number | null, ns: number | null, nAmPm: 'AM' | 'PM') {
    const out = buildOutput(nh, nm, ns, nAmPm, hourCycle, showSeconds)
    if (out != null) onChange?.(out)
  }

  function handleClear() {
    setH(null); setM(null); setS(null); setAmPm('AM')
    pendingH.current = pendingM.current = pendingS.current = ''
    setOpen(false)
    hRef.current?.focus()
  }

  function handleSetNow() {
    const now  = new Date()
    const h24  = now.getHours()
    const nm   = now.getMinutes()
    const ns   = now.getSeconds()
    const nAP: 'AM' | 'PM' = h24 >= 12 ? 'PM' : 'AM'
    const nh   = hourCycle === 12 ? (h24 % 12 || 12) : h24
    setH(nh); setM(nm); if (showSeconds) setS(ns); setAmPm(nAP)
    commit(nh, nm, showSeconds ? ns : s, nAP)
    setOpen(false)
  }

  // ---------------------------------------------------------------------------
  // Segment focus navigation
  // ---------------------------------------------------------------------------

  function focusNext(from: 'h' | 'm' | 's' | 'ampm') {
    if (from === 'h')                              mRef.current?.focus()
    else if (from === 'm' && showSeconds)          sRef.current?.focus()
    else if (from === 'm' && hourCycle === 12)     ampmRef.current?.focus()
    else if (from === 's' && hourCycle === 12)     ampmRef.current?.focus()
  }

  function focusPrev(from: 'h' | 'm' | 's' | 'ampm') {
    if      (from === 'ampm' && showSeconds) sRef.current?.focus()
    else if (from === 'ampm')                mRef.current?.focus()
    else if (from === 's')                   mRef.current?.focus()
    else if (from === 'm')                   hRef.current?.focus()
  }

  // ---------------------------------------------------------------------------
  // Digit typing
  // ---------------------------------------------------------------------------

  function handleDigit(seg: 'h' | 'm' | 's', digit: string) {
    const pending  = seg === 'h' ? pendingH : seg === 'm' ? pendingM : pendingS
    const max      = seg === 'h' ? maxH : 59
    const min      = seg === 'h' ? minH : 0
    const next     = pending.current + digit
    const val      = parseInt(next, 10)
    const cantExtend = val * 10 > max   // e.g. "3" as first hour digit in 24h → 30 > 23

    if (next.length >= 2 || cantExtend) {
      const clamped = Math.min(Math.max(val, min), max)
      pending.current = ''
      if      (seg === 'h') { setH(clamped); commit(clamped, m, s, ampm) }
      else if (seg === 'm') { setM(clamped); commit(h, clamped, s, ampm) }
      else                  { setS(clamped); commit(h, m, clamped, ampm) }
      focusNext(seg)
    } else {
      pending.current = next
      if      (seg === 'h') setH(val)
      else if (seg === 'm') setM(val)
      else                  setS(val)
    }
  }

  // ---------------------------------------------------------------------------
  // Segment increment / decrement
  // ---------------------------------------------------------------------------

  function incH() {
    const next = h == null ? minH : (h >= maxH ? minH : h + 1)
    setH(next); commit(next, m, s, ampm)
  }
  function decH() {
    const next = h == null ? maxH : (h <= minH ? maxH : h - 1)
    setH(next); commit(next, m, s, ampm)
  }
  function incM() {
    const next = m == null ? 0 : (m >= 59 ? 0 : m + 1)
    setM(next); commit(h, next, s, ampm)
  }
  function decM() {
    const next = m == null ? 59 : (m <= 0 ? 59 : m - 1)
    setM(next); commit(h, next, s, ampm)
  }
  function incS() {
    const next = s == null ? 0 : (s >= 59 ? 0 : s + 1)
    setS(next); commit(h, m, next, ampm)
  }
  function decS() {
    const next = s == null ? 59 : (s <= 0 ? 59 : s - 1)
    setS(next); commit(h, m, next, ampm)
  }
  function toggleAmPm() {
    const next: 'AM' | 'PM' = ampm === 'AM' ? 'PM' : 'AM'
    setAmPm(next); commit(h, m, s, next)
  }

  // ---------------------------------------------------------------------------
  // Keyboard handlers
  // ---------------------------------------------------------------------------

  function makeKeyDown(seg: 'h' | 'm' | 's') {
    return (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (disabled || readOnly) return
      const inc = seg === 'h' ? incH : seg === 'm' ? incM : incS
      const dec = seg === 'h' ? decH : seg === 'm' ? decM : decS
      switch (e.key) {
        case 'ArrowUp':    e.preventDefault(); inc(); break
        case 'ArrowDown':  e.preventDefault(); dec(); break
        case 'ArrowRight': e.preventDefault(); focusNext(seg); break
        case 'ArrowLeft':  e.preventDefault(); focusPrev(seg); break
        case 'Enter':
        case ' ':          e.preventDefault(); setOpen(v => !v); break
        default:
          if (/^\d$/.test(e.key)) { e.preventDefault(); handleDigit(seg, e.key) }
      }
    }
  }

  function ampmKeyDown(e: React.KeyboardEvent<HTMLSpanElement>) {
    if (disabled || readOnly) return
    switch (e.key) {
      case 'ArrowUp': case 'ArrowDown': e.preventDefault(); toggleAmPm(); break
      case 'ArrowLeft':                 e.preventDefault(); focusPrev('ampm'); break
      case 'Enter': case ' ':           e.preventDefault(); setOpen(v => !v); break
      case 'a': case 'A':               setAmPm('AM'); commit(h, m, s, 'AM'); break
      case 'p': case 'P':               setAmPm('PM'); commit(h, m, s, 'PM'); break
    }
  }

  // ---------------------------------------------------------------------------
  // Render helpers
  // ---------------------------------------------------------------------------

  const iconSz      = ICON_SIZE[size]
  const describedBy = [
    validationMessage && validation ? messageId : hint ? hintId : null,
  ].filter(Boolean).join(' ') || undefined

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div
      ref={containerRef}
      className={['time-picker', className].filter(Boolean).join(' ')}
      data-size={size}
      data-validation={validation}
      data-disabled={disabled || undefined}
    >
      {/* Label */}
      <FieldLabel
        htmlFor={`${uid}-h`}
        label={label}
        required={required}
        className={hideLabel ? 'time-picker__label--hidden' : undefined}
      />

      {/* Field + panel anchor */}
      <div className="time-picker__field-wrap">

        {/* Visible field */}
        <div
          ref={wrapperRef}
          className="time-picker__wrapper"
          data-focused={focused || undefined}
          data-disabled={disabled || undefined}
          data-readonly={readOnly || undefined}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={e => {
            if (!wrapperRef.current?.contains(e.relatedTarget as Node)) setFocused(false)
          }}
        >
          {/* Segments */}
          <div
            className="time-picker__segments"
            role="group"
            aria-label={label}
            aria-describedby={describedBy}
          >
            {/* Hours */}
            <span
              id={`${uid}-h`}
              ref={hRef}
              role="spinbutton"
              className="time-picker__segment"
              data-placeholder={h == null ? '' : undefined}
              aria-label="Hours"
              aria-valuenow={h ?? undefined}
              aria-valuemin={minH}
              aria-valuemax={maxH}
              aria-valuetext={h == null ? 'empty' : pad(h)}
              tabIndex={disabled || readOnly ? -1 : 0}
              onKeyDown={makeKeyDown('h')}
            >
              {h == null ? '--' : pad(h)}
            </span>

            <span className="time-picker__sep" aria-hidden="true">:</span>

            {/* Minutes */}
            <span
              ref={mRef}
              role="spinbutton"
              className="time-picker__segment"
              data-placeholder={m == null ? '' : undefined}
              aria-label="Minutes"
              aria-valuenow={m ?? undefined}
              aria-valuemin={0}
              aria-valuemax={59}
              aria-valuetext={m == null ? 'empty' : pad(m)}
              tabIndex={disabled || readOnly ? -1 : 0}
              onKeyDown={makeKeyDown('m')}
            >
              {m == null ? '--' : pad(m)}
            </span>

            {/* Seconds (optional) */}
            {showSeconds && <>
              <span className="time-picker__sep" aria-hidden="true">:</span>
              <span
                ref={sRef}
                role="spinbutton"
                className="time-picker__segment"
                data-placeholder={s == null ? '' : undefined}
                aria-label="Seconds"
                aria-valuenow={s ?? undefined}
                aria-valuemin={0}
                aria-valuemax={59}
                aria-valuetext={s == null ? 'empty' : pad(s!)}
                tabIndex={disabled || readOnly ? -1 : 0}
                onKeyDown={makeKeyDown('s')}
              >
                {s == null ? '--' : pad(s)}
              </span>
            </>}

            {/* AM / PM segment */}
            {hourCycle === 12 && (
              <span
                ref={ampmRef}
                role="spinbutton"
                className="time-picker__segment time-picker__segment--ampm"
                aria-label="Period"
                aria-valuetext={ampm}
                tabIndex={disabled || readOnly ? -1 : 0}
                onKeyDown={ampmKeyDown}
              >
                {ampm}
              </span>
            )}
          </div>

          {/* Clear button — shown only when clearable + has a value */}
          {clearable && hasValue && !readOnly && !disabled && (
            <button
              type="button"
              className="time-picker__action-btn"
              aria-label="Clear time"
              tabIndex={0}
              onClick={handleClear}
            >
              <X size={iconSz} aria-hidden="true" />
            </button>
          )}

          {/* Clock trigger */}
          {!readOnly && !disabled && (
            <button
              type="button"
              className="time-picker__trigger"
              aria-label={open ? 'Close time picker' : 'Open time picker'}
              aria-expanded={open}
              aria-haspopup="dialog"
              tabIndex={0}
              onClick={() => setOpen(v => !v)}
            >
              <Clock size={iconSz} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Panel */}
        {open && (
          <div
            className="time-picker__panel"
            role="dialog"
            aria-label="Select time"
            aria-modal="false"
          >
            <div className="time-picker__columns">
              <TimeColumn
                label="Hour"
                values={hours}
                selected={h}
                onSelect={nh => { setH(nh); commit(nh, m, s, ampm) }}
              />

              <div className="time-picker__col-sep" aria-hidden="true" />

              <TimeColumn
                label="Minute"
                values={MINS_SECS}
                selected={m}
                onSelect={nm => { setM(nm); commit(h, nm, s, ampm) }}
              />

              {showSeconds && <>
                <div className="time-picker__col-sep" aria-hidden="true" />
                <TimeColumn
                  label="Second"
                  values={MINS_SECS}
                  selected={s}
                  onSelect={ns => { setS(ns); commit(h, m, ns, ampm) }}
                />
              </>}

              {hourCycle === 12 && <>
                <div className="time-picker__col-sep" aria-hidden="true" />
                <AmPmToggle
                  selected={ampm}
                  onSelect={nAP => { setAmPm(nAP); commit(h, m, s, nAP) }}
                />
              </>}
            </div>

            <div className="time-picker__panel-footer">
              <Button
                variant="ghost"
                color="primary"
                size="small"
                disabled={h === null}
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button
                variant="ghost"
                color="primary"
                size="small"
                onClick={handleSetNow}
              >
                Now
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Footer: hint or validation message */}
      {(hint || (validationMessage && validation)) && (
        <div className="time-picker__footer">
          {validationMessage && validation ? (
            <p
              id={messageId}
              className="time-picker__message"
              role={validation === 'negative' ? 'alert' : undefined}
            >
              {VALIDATION_ICON[validation]}
              {validationMessage}
            </p>
          ) : hint ? (
            <Hint id={hintId} text={hint} />
          ) : null}
        </div>
      )}
    </div>
  )
}
