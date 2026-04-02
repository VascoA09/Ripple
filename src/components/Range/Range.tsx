import React, { useId, useMemo, useRef, useState } from 'react'
import { XCircle } from 'lucide-react'
import { FieldLabel } from '../FieldLabel'
import './Range.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RangeSize = 'small' | 'medium'

export interface RangeIndicator {
  value: number
  label: string
}

interface RangeBaseProps {
  /** Descriptive label. Always required — use `hideLabel` if visually hidden. */
  label: string
  /** 'top' (default) or 'left' inline with track. */
  labelPosition?: 'top' | 'left'
  /** Hides the label visually; still present for screen readers. */
  hideLabel?: boolean
  /** Minimum value. Default 0. */
  min?: number
  /** Maximum value. Default 100. */
  max?: number
  /** Step increment. Default 1. */
  step?: number
  /** Track + handle size. Default 'medium'. */
  size?: RangeSize
  /**
   * Shows tick marks on the track.
   * `true` — auto-generates marks at `step` intervals (capped at 10).
   * `number[]` — marks at specific values.
   */
  markers?: boolean | number[]
  /** Text labels below the markers, providing non-numeric context. */
  indicators?: RangeIndicator[]
  /** Shows min and max values above the track ends. */
  showMinMax?: boolean
  /** Helper text below the component. */
  hint?: string
  /** Validation state. Only 'negative' (error) is supported per spec. */
  validation?: 'negative'
  /** Error message text. */
  validationMessage?: string
  /** Formats numeric values for tooltip, min/max labels, and aria-valuetext. */
  formatValue?: (value: number) => string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
}

export interface SingleRangeProps extends RangeBaseProps {
  dual?: false | undefined
  value: number
  onChange: (value: number) => void
}

export interface DualRangeProps extends RangeBaseProps {
  dual: true
  value: [number, number]
  onChange: (value: [number, number]) => void
  /** Accessible label for the low handle. Default: "Minimum {label}". */
  lowLabel?: string
  /** Accessible label for the high handle. Default: "Maximum {label}". */
  highLabel?: string
}

export type RangeProps = SingleRangeProps | DualRangeProps

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const THUMB_SIZE: Record<RangeSize, number> = { small: 16, medium: 20 }

function pct(value: number, min: number, max: number): number {
  return ((value - min) / (max - min)) * 100
}

/** Centers the tooltip/marker over the native thumb at any value position. */
function thumbOffset(p: number, thumbSize: number): string {
  const correction = thumbSize * 0.5 - (p / 100) * thumbSize
  return `calc(${p}% + ${correction}px)`
}

function buildMarkerValues(
  markers: boolean | number[],
  min: number,
  max: number,
  step: number,
): number[] {
  if (Array.isArray(markers)) return markers
  const total = (max - min) / step
  const interval = total > 10 ? Math.ceil(total / 10) * step : step
  const result: number[] = []
  for (let v = min; v <= max; v += interval) result.push(v)
  if (result[result.length - 1] !== max) result.push(max)
  return result
}

// ---------------------------------------------------------------------------
// Tooltip
// ---------------------------------------------------------------------------

function Tooltip({
  value,
  min,
  max,
  thumbSize,
  formatValue,
  visible,
}: {
  value:       number
  min:         number
  max:         number
  thumbSize:   number
  formatValue: (v: number) => string
  visible:     boolean
}) {
  const p    = pct(value, min, max)
  const left = thumbOffset(p, thumbSize)

  return (
    <div
      className="range__tooltip"
      style={{ left }}
      aria-hidden="true"
      data-visible={visible || undefined}
    >
      {formatValue(value)}
    </div>
  )
}

// ---------------------------------------------------------------------------
// Markers + Indicators
// ---------------------------------------------------------------------------

function Markers({
  markerValues,
  indicators,
  min,
  max,
  thumbSize,
}: {
  markerValues: number[]
  indicators:   RangeIndicator[]
  min:          number
  max:          number
  thumbSize:    number
}) {
  if (markerValues.length === 0 && indicators.length === 0) return null

  return (
    <>
      {/* Tick marks */}
      {markerValues.length > 0 && (
        <div className="range__markers" aria-hidden="true">
          {markerValues.map(v => (
            <div
              key={v}
              className="range__marker"
              style={{ left: thumbOffset(pct(v, min, max), thumbSize) }}
            />
          ))}
        </div>
      )}

      {/* Indicator labels */}
      {indicators.length > 0 && (
        <div className="range__indicators" aria-hidden="true">
          {indicators.map(ind => (
            <span
              key={ind.value}
              className="range__indicator"
              style={{ left: thumbOffset(pct(ind.value, min, max), thumbSize) }}
            >
              {ind.label}
            </span>
          ))}
        </div>
      )}
    </>
  )
}

// ---------------------------------------------------------------------------
// Range (main component)
// ---------------------------------------------------------------------------

export function Range(props: RangeProps) {
  const {
    label,
    labelPosition = 'top',
    hideLabel = false,
    min = 0,
    max = 100,
    step = 1,
    size = 'medium',
    markers = false,
    indicators = [],
    showMinMax = false,
    hint,
    validation,
    validationMessage,
    formatValue = String,
    disabled = false,
    className,
    style,
  } = props

  const labelId   = useId()
  const hintId    = useId()
  const messageId = useId()
  const thumbSize = THUMB_SIZE[size]

  const markerValues = useMemo(
    () => (markers ? buildMarkerValues(markers, min, max, step) : []),
    [markers, min, max, step],
  )

  const hasIndicators = indicators.length > 0
  const describedBy   = [
    hint              ? hintId    : null,
    validationMessage ? messageId : null,
  ].filter(Boolean).join(' ') || undefined

  // ---------------------------------------------------------------------------
  // Shared label block
  // ---------------------------------------------------------------------------

  const labelBlock = (
    <FieldLabel
      id={labelId}
      label={label}
      className={[
        'range__label',
        hideLabel ? 'range__label--hidden' : '',
      ].filter(Boolean).join(' ')}
    />
  )

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div
      className={[
        'range',
        `range--${size}`,
        labelPosition === 'left' ? 'range--left-label' : '',
        className,
      ].filter(Boolean).join(' ')}
      data-validation={validation}
      data-disabled={disabled || undefined}
      style={style}
    >
      {/* Label — top position */}
      {labelPosition === 'top' && labelBlock}

      {/* Body: [optional left label] + track column */}
      <div className="range__body">
        {labelPosition === 'left' && labelBlock}

        <div className="range__track-column">
          {/* Min/Max labels above track */}
          {showMinMax && (
            <div className="range__minmax" aria-hidden="true">
              <span className="range__minmax-label">{formatValue(min)}</span>
              <span className="range__minmax-label">{formatValue(max)}</span>
            </div>
          )}

          {/* Track area */}
          <div
            className={[
              'range__track-area',
              hasIndicators ? 'range__track-area--has-indicators' : '',
            ].filter(Boolean).join(' ')}
          >
            {props.dual
              ? <DualTrack {...props} min={min} max={max} step={step} size={size}
                  thumbSize={thumbSize} markerValues={markerValues} indicators={indicators}
                  formatValue={formatValue} disabled={disabled}
                  labelId={labelId} describedBy={describedBy} />
              : <SingleTrack {...props} min={min} max={max} step={step} size={size}
                  thumbSize={thumbSize} markerValues={markerValues} indicators={indicators}
                  formatValue={formatValue} disabled={disabled}
                  labelId={labelId} describedBy={describedBy} />
            }
          </div>

          {/* Hint */}
          {hint && (
            <p id={hintId} className="range__hint">{hint}</p>
          )}

          {/* Validation message */}
          {validationMessage && validation && (
            <p
              id={messageId}
              className="range__message"
              role={validation === 'negative' ? 'alert' : undefined}
            >
              <XCircle size={14} aria-hidden="true" className="range__msg-icon" />
              {validationMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------------------
// SingleTrack
// ---------------------------------------------------------------------------

interface TrackInternalProps {
  min:          number
  max:          number
  step:         number
  size:         RangeSize
  thumbSize:    number
  markerValues: number[]
  indicators:   RangeIndicator[]
  formatValue:  (v: number) => string
  disabled:     boolean
  labelId:      string
  describedBy:  string | undefined
}

function SingleTrack({
  value,
  onChange,
  min,
  max,
  step,
  thumbSize,
  markerValues,
  indicators,
  formatValue,
  disabled,
  labelId,
  describedBy,
}: SingleRangeProps & TrackInternalProps) {
  const [showTooltip, setShowTooltip] = useState(false)
  const p       = pct(value, min, max)
  const fillPct = `${p}%`

  return (
    <>
      <Tooltip
        value={value}
        min={min}
        max={max}
        thumbSize={thumbSize}
        formatValue={formatValue}
        visible={showTooltip}
      />

      <input
        type="range"
        className="range__input"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        aria-labelledby={labelId}
        aria-describedby={describedBy}
        aria-valuetext={formatValue(value)}
        style={{ '--_fill-pct': fillPct } as React.CSSProperties}
        onChange={e => onChange(Number(e.target.value))}
        onFocus={() => setShowTooltip(true)}
        onBlur={() => setShowTooltip(false)}
        onPointerDown={() => setShowTooltip(true)}
        onPointerUp={() => setShowTooltip(false)}
      />

      <Markers
        markerValues={markerValues}
        indicators={indicators}
        min={min}
        max={max}
        thumbSize={thumbSize}
      />
    </>
  )
}

// ---------------------------------------------------------------------------
// DualTrack
// ---------------------------------------------------------------------------

function DualTrack({
  value,
  onChange,
  label,
  lowLabel,
  highLabel,
  min,
  max,
  step,
  thumbSize,
  markerValues,
  indicators,
  formatValue,
  disabled,
  describedBy,
}: DualRangeProps & TrackInternalProps) {
  const [low, high] = value
  const [activeHandle, setActiveHandle] = useState<'low' | 'high' | null>(null)

  const lowRef  = useRef<HTMLInputElement>(null)
  const highRef = useRef<HTMLInputElement>(null)

  const lowPct  = pct(low, min, max)
  const highPct = pct(high, min, max)

  function handleLowChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Math.min(Number(e.target.value), high - step)
    onChange([next, high])
  }

  function handleHighChange(e: React.ChangeEvent<HTMLInputElement>) {
    const next = Math.max(Number(e.target.value), low + step)
    onChange([low, next])
  }

  const resolvedLowLabel  = lowLabel  ?? `Minimum ${label}`
  const resolvedHighLabel = highLabel ?? `Maximum ${label}`

  return (
    <>
      {/* Low handle tooltip */}
      <Tooltip
        value={low}
        min={min}
        max={max}
        thumbSize={thumbSize}
        formatValue={formatValue}
        visible={activeHandle === 'low'}
      />

      {/* High handle tooltip */}
      <Tooltip
        value={high}
        min={min}
        max={max}
        thumbSize={thumbSize}
        formatValue={formatValue}
        visible={activeHandle === 'high'}
      />

      {/* Custom fill between handles */}
      <div
        className="range__dual-fill"
        style={{
          left:  `${lowPct}%`,
          width: `${highPct - lowPct}%`,
        }}
        aria-hidden="true"
      />

      {/* Low handle — transparent native input */}
      <input
        ref={lowRef}
        type="range"
        className="range__input range__input--dual"
        min={min}
        max={max}
        step={step}
        value={low}
        disabled={disabled}
        aria-label={resolvedLowLabel}
        aria-describedby={describedBy}
        aria-valuetext={formatValue(low)}
        style={{ zIndex: activeHandle === 'low' ? 2 : 1 }}
        onChange={handleLowChange}
        onFocus={() => setActiveHandle('low')}
        onBlur={() => setActiveHandle(null)}
        onPointerDown={() => setActiveHandle('low')}
        onPointerUp={() => {
          if (document.activeElement !== lowRef.current) setActiveHandle(null)
        }}
      />

      {/* High handle — transparent native input */}
      <input
        ref={highRef}
        type="range"
        className="range__input range__input--dual"
        min={min}
        max={max}
        step={step}
        value={high}
        disabled={disabled}
        aria-label={resolvedHighLabel}
        aria-describedby={describedBy}
        aria-valuetext={formatValue(high)}
        style={{ zIndex: activeHandle === 'high' ? 2 : 1 }}
        onChange={handleHighChange}
        onFocus={() => setActiveHandle('high')}
        onBlur={() => setActiveHandle(null)}
        onPointerDown={() => setActiveHandle('high')}
        onPointerUp={() => {
          if (document.activeElement !== highRef.current) setActiveHandle(null)
        }}
      />

      <Markers
        markerValues={markerValues}
        indicators={indicators}
        min={min}
        max={max}
        thumbSize={thumbSize}
      />
    </>
  )
}
