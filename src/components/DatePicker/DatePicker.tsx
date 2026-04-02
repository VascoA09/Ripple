import React, { useId, useRef, useState, useEffect } from 'react'
import {
  Calendar, ChevronLeft, ChevronRight,
  X, XCircle, AlertCircle, CheckCircle,
} from 'lucide-react'
import { FieldLabel } from '../FieldLabel'
import { Hint } from '../Hint'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import './DatePicker.css'

// =============================================================================
// TYPES
// =============================================================================

export type DatePickerSize       = 'small' | 'medium' | 'large'
export type DatePickerValidation = 'positive' | 'notice' | 'negative'

export interface DatePickerProps {
  /** Visible label — always required. Use hideLabel for search / grid contexts. */
  label:               string
  /** Visually hides the label while keeping it accessible. */
  hideLabel?:          boolean
  /**
   * Controlled date value in ISO "YYYY-MM-DD" format.
   * Omit for uncontrolled usage.
   */
  value?:              string
  onChange?:           (value: string) => void
  /** Helper text below the field. Replaced by validationMessage when triggered. */
  hint?:               string
  validation?:         DatePickerValidation
  validationMessage?:  string
  size?:               DatePickerSize
  disabled?:           boolean
  readOnly?:           boolean
  required?:           boolean
  /**
   * Replaces the calendar button with a clear button once a date is selected.
   * Also adds Clear to the calendar footer.
   */
  clearable?:          boolean
  /** Optional icon before the date segments. Useful for contextual indicators (e.g. travel). */
  iconStart?:          React.ReactNode
  /** Shows ISO week numbers in the day view. */
  showWeekNumbers?:    boolean
  /** Shows Clear and Today quick actions in the calendar footer. */
  showFooter?:         boolean
  /** Disables all dates before today. */
  disablePast?:        boolean
  /** Disables all dates after today. */
  disableFuture?:      boolean
  /** Minimum selectable date in "YYYY-MM-DD" format. */
  minDate?:            string
  /** Maximum selectable date in "YYYY-MM-DD" format. */
  maxDate?:            string
  className?:          string
}

// =============================================================================
// CONSTANTS
// =============================================================================

const ICON_SIZE: Record<DatePickerSize, number> = { small: 14, medium: 16, large: 18 }

const MONTHS_LONG  = ['January', 'February', 'March', 'April', 'May', 'June',
                       'July', 'August', 'September', 'October', 'November', 'December']
const MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const DAY_ABBR     = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const VALIDATION_ICON: Record<DatePickerValidation, React.ReactNode> = {
  negative: <XCircle     size={14} aria-hidden="true" className="date-picker__msg-icon" />,
  notice:   <AlertCircle size={14} aria-hidden="true" className="date-picker__msg-icon" />,
  positive: <CheckCircle size={14} aria-hidden="true" className="date-picker__msg-icon" />,
}

// =============================================================================
// DATE HELPERS
// =============================================================================

const pad2 = (n: number) => String(n).padStart(2, '0')

function getTodayStr(): string {
  const d = new Date()
  return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`
}

function parseISO(str: string | undefined): { day: number | null; month: number | null; year: number | null } {
  if (!str) return { day: null, month: null, year: null }
  const parts = str.split('-').map(Number)
  if (parts.length !== 3 || parts.some(isNaN)) return { day: null, month: null, year: null }
  return { day: parts[2], month: parts[1], year: parts[0] }
}

function buildISO(d: number | null, m: number | null, y: number | null): string | null {
  if (d == null || m == null || y == null || y < 1000) return null
  const maxDay = new Date(y, m, 0).getDate()
  const clampedD = Math.min(d, maxDay)
  return `${y}-${pad2(m)}-${pad2(clampedD)}`
}

function addDays(dateStr: string, n: number): string {
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(y, m - 1, d + n)
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`
}

function isSameMonth(dateStr: string, year: number, month: number): boolean {
  const [y, m] = dateStr.split('-').map(Number)
  return y === year && m === month
}

function getISOWeek(dateStr: string): number {
  const [y, m, d] = dateStr.split('-').map(Number)
  const date = new Date(Date.UTC(y, m - 1, d))
  const day  = date.getUTCDay() || 7
  date.setUTCDate(date.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1))
  return Math.ceil((((date.getTime() - yearStart.getTime()) / 86400000) + 1) / 7)
}

interface DayCell {
  dateStr:        string
  day:            number
  isCurrentMonth: boolean
  isToday:        boolean
  isSelected:     boolean
  isDisabled:     boolean
}

function getCalendarDays(
  viewYear:   number,
  viewMonth:  number,   // 1-indexed
  selectedStr: string | null,
  todayStr:   string,
  isDisabled: (s: string) => boolean,
): DayCell[] {
  const cells: DayCell[] = []

  // Monday-based first-day offset (0=Mon…6=Sun)
  const rawFirst    = new Date(viewYear, viewMonth - 1, 1).getDay()
  const startOffset = (rawFirst + 6) % 7

  const daysInMonth     = new Date(viewYear, viewMonth, 0).getDate()
  const daysInPrevMonth = new Date(viewYear, viewMonth - 1, 0).getDate()

  // Prev-month fill
  for (let i = startOffset - 1; i >= 0; i--) {
    const d   = daysInPrevMonth - i
    const pm  = viewMonth === 1 ? 12 : viewMonth - 1
    const py  = viewMonth === 1 ? viewYear - 1 : viewYear
    const str = `${py}-${pad2(pm)}-${pad2(d)}`
    cells.push({ dateStr: str, day: d, isCurrentMonth: false,
                 isToday: str === todayStr, isSelected: str === selectedStr,
                 isDisabled: isDisabled(str) })
  }

  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    const str = `${viewYear}-${pad2(viewMonth)}-${pad2(d)}`
    cells.push({ dateStr: str, day: d, isCurrentMonth: true,
                 isToday: str === todayStr, isSelected: str === selectedStr,
                 isDisabled: isDisabled(str) })
  }

  // Next-month fill (pad to 42 cells = 6 rows)
  const nm  = viewMonth === 12 ? 1  : viewMonth + 1
  const ny  = viewMonth === 12 ? viewYear + 1 : viewYear
  const rem = 42 - cells.length
  for (let d = 1; d <= rem; d++) {
    const str = `${ny}-${pad2(nm)}-${pad2(d)}`
    cells.push({ dateStr: str, day: d, isCurrentMonth: false,
                 isToday: str === todayStr, isSelected: str === selectedStr,
                 isDisabled: isDisabled(str) })
  }

  return cells
}

// =============================================================================
// DAY VIEW
// =============================================================================

interface DayViewProps {
  viewYear:        number
  viewMonth:       number
  selectedDate:    string | null
  focusedDate:     string
  todayStr:        string
  showWeekNumbers: boolean
  isDisabled:      (s: string) => boolean
  gridRef:         React.RefObject<HTMLDivElement | null>
  onSelect:        (dateStr: string) => void
  onKeyDown:       (e: React.KeyboardEvent) => void
}

function DayView({
  viewYear, viewMonth, selectedDate, focusedDate, todayStr,
  showWeekNumbers, isDisabled, gridRef, onSelect, onKeyDown,
}: DayViewProps) {
  const cells = getCalendarDays(viewYear, viewMonth, selectedDate, todayStr, isDisabled)
  const rows  = Array.from({ length: 6 }, (_, r) => cells.slice(r * 7, r * 7 + 7))

  return (
    <div
      ref={gridRef}
      role="grid"
      aria-label={`${MONTHS_LONG[viewMonth - 1]} ${viewYear}`}
      className="date-picker__grid"
      onKeyDown={onKeyDown}
    >
      {/* Column headers */}
      <div role="row" className="date-picker__grid-row date-picker__grid-row--header">
        {showWeekNumbers && (
          <div role="columnheader" className="date-picker__week-col date-picker__week-header">
            Wk
          </div>
        )}
        {DAY_ABBR.map(d => (
          <div key={d} role="columnheader" className="date-picker__day-header" aria-label={d}>
            {d}
          </div>
        ))}
      </div>

      {/* Weeks */}
      {rows.map((row, ri) => (
        <div key={ri} role="row" className="date-picker__grid-row">
          {showWeekNumbers && (
            <div role="rowheader" className="date-picker__week-col date-picker__week-num">
              {getISOWeek(row[0].dateStr)}
            </div>
          )}
          {row.map(cell => {
            const isFocused = cell.dateStr === focusedDate
            return (
              <div key={cell.dateStr} role="gridcell" className="date-picker__cell">
                <button
                  type="button"
                  data-date={cell.dateStr}
                  className={[
                    'date-picker__day',
                    !cell.isCurrentMonth ? 'date-picker__day--adjacent'  : '',
                    cell.isToday        ? 'date-picker__day--today'      : '',
                    cell.isSelected     ? 'date-picker__day--selected'   : '',
                    cell.isDisabled     ? 'date-picker__day--disabled'   : '',
                  ].filter(Boolean).join(' ')}
                  tabIndex={isFocused ? 0 : -1}
                  disabled={cell.isDisabled}
                  aria-label={new Date(
                    Number(cell.dateStr.slice(0, 4)),
                    Number(cell.dateStr.slice(5, 7)) - 1,
                    Number(cell.dateStr.slice(8, 10)),
                  ).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                  aria-pressed={cell.isSelected}
                  aria-current={cell.isToday ? 'date' : undefined}
                  onClick={() => !cell.isDisabled && onSelect(cell.dateStr)}
                >
                  {cell.day}
                </button>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

// =============================================================================
// MONTH VIEW
// =============================================================================

interface MonthViewProps {
  viewYear:     number
  selectedDate: string | null
  onSelect:     (month: number) => void
}

function MonthView({ viewYear, selectedDate, onSelect }: MonthViewProps) {
  const selMonth = selectedDate
    ? (parseInt(selectedDate.slice(5, 7), 10))
    : null
  const selYear = selectedDate
    ? parseInt(selectedDate.slice(0, 4), 10)
    : null

  return (
    <div className="date-picker__month-grid" role="grid" aria-label={String(viewYear)}>
      {Array.from({ length: 4 }, (_, row) => (
        <div key={row} role="row" className="date-picker__month-row">
          {[0, 1, 2].map(col => {
            const m          = row * 3 + col + 1
            const isSelected = selMonth === m && selYear === viewYear
            return (
              <div key={m} role="gridcell">
                <Button
                  variant="ghost"
                  color="neutral"
                  size="medium"
                  aria-pressed={isSelected}
                  onClick={() => onSelect(m)}
                  className={[
                    'date-picker__month-btn',
                    isSelected ? 'date-picker__month-btn--selected' : '',
                  ].filter(Boolean).join(' ')}
                >
                  {MONTHS_SHORT[m - 1]}
                </Button>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

// =============================================================================
// YEAR VIEW
// =============================================================================

interface YearViewProps {
  viewYear:     number
  rangeStart:   number
  selectedDate: string | null
  onSelect:     (year: number) => void
}

function YearView({ rangeStart, selectedDate, onSelect }: YearViewProps) {
  const selYear = selectedDate ? parseInt(selectedDate.slice(0, 4), 10) : null
  const years   = Array.from({ length: 12 }, (_, i) => rangeStart + i)

  return (
    <div className="date-picker__year-grid" role="grid" aria-label={`${rangeStart}–${rangeStart + 11}`}>
      {Array.from({ length: 4 }, (_, row) => (
        <div key={row} role="row" className="date-picker__year-row">
          {[0, 1, 2].map(col => {
            const y          = years[row * 3 + col]
            const isSelected = selYear === y
            return (
              <div key={y} role="gridcell">
                <Button
                  variant="ghost"
                  color="neutral"
                  size="medium"
                  aria-pressed={isSelected}
                  onClick={() => onSelect(y)}
                  className={[
                    'date-picker__year-btn',
                    isSelected ? 'date-picker__year-btn--selected' : '',
                  ].filter(Boolean).join(' ')}
                >
                  {y}
                </Button>
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

// =============================================================================
// CALENDAR PANEL
// =============================================================================

type CalendarView = 'day' | 'month' | 'year'

interface CalendarPanelProps {
  selectedDate:    string | null
  todayStr:        string
  showWeekNumbers: boolean
  showFooter:      boolean
  isDisabled:      (s: string) => boolean
  onSelect:        (dateStr: string) => void
  onClear:         () => void
  onClose:         () => void
}

function CalendarPanel({
  selectedDate, todayStr, showWeekNumbers, showFooter,
  isDisabled, onSelect, onClear, onClose,
}: CalendarPanelProps) {
  const parsed = parseISO(selectedDate ?? undefined)
  const today  = parseISO(todayStr)

  const [view,      setView]      = useState<CalendarView>('day')
  const [viewYear,  setViewYear]  = useState(parsed.year  ?? today.year  ?? new Date().getFullYear())
  const [viewMonth, setViewMonth] = useState(parsed.month ?? today.month ?? new Date().getMonth() + 1)

  // The day grid's focused cell (roving tabIndex)
  const [focusedDate, setFocusedDate] = useState(selectedDate ?? todayStr)

  const gridRef = useRef<HTMLDivElement>(null)

  // Year range start for the year view
  const yearRangeStart = Math.floor(viewYear / 12) * 12

  // Focus the correct day cell after keyboard navigation
  function focusDay(dateStr: string) {
    requestAnimationFrame(() => {
      const btn = gridRef.current?.querySelector<HTMLButtonElement>(`[data-date="${dateStr}"]`)
      btn?.focus()
    })
  }

  // When the panel mounts, focus the selected date or today
  useEffect(() => {
    const target = selectedDate ?? todayStr
    setFocusedDate(target)
    focusDay(target)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // ---------------------------------------------------------------------------
  // Navigation
  // ---------------------------------------------------------------------------

  function prevMonth() {
    if (viewMonth === 1) { setViewYear(y => y - 1); setViewMonth(12) }
    else setViewMonth(m => m - 1)
  }

  function nextMonth() {
    if (viewMonth === 12) { setViewYear(y => y + 1); setViewMonth(1) }
    else setViewMonth(m => m + 1)
  }

  function prevYear()      { setViewYear(y => y - 1) }
  function nextYear()      { setViewYear(y => y + 1) }
  function prevYearRange() { setViewYear(y => y - 12) }
  function nextYearRange() { setViewYear(y => y + 12) }

  function cycleView() {
    setView(v => v === 'day' ? 'month' : v === 'month' ? 'year' : 'day')
  }

  // ---------------------------------------------------------------------------
  // Month / year selection from sub-views
  // ---------------------------------------------------------------------------

  function handleMonthSelect(m: number) {
    setViewMonth(m)
    setView('day')
  }

  function handleYearSelect(y: number) {
    setViewYear(y)
    setView('month')
  }

  // ---------------------------------------------------------------------------
  // Date selection
  // ---------------------------------------------------------------------------

  function handleSelect(dateStr: string) {
    // If in a month/year that differs from the grid, navigate there first
    const [y, m] = dateStr.split('-').map(Number)
    setViewYear(y)
    setViewMonth(m)
    setFocusedDate(dateStr)
    onSelect(dateStr)
  }

  function handleToday() {
    const [y, m] = todayStr.split('-').map(Number)
    setViewYear(y)
    setViewMonth(m)
    setFocusedDate(todayStr)
    setView('day')
    focusDay(todayStr)
  }

  // ---------------------------------------------------------------------------
  // Day grid keyboard navigation
  // ---------------------------------------------------------------------------

  function handleGridKeyDown(e: React.KeyboardEvent) {
    let next: string | null = null

    switch (e.key) {
      case 'ArrowLeft':  e.preventDefault(); next = addDays(focusedDate, -1); break
      case 'ArrowRight': e.preventDefault(); next = addDays(focusedDate,  1); break
      case 'ArrowUp':    e.preventDefault(); next = addDays(focusedDate, -7); break
      case 'ArrowDown':  e.preventDefault(); next = addDays(focusedDate,  7); break
      case 'PageUp': {
        // Move to last day of the current month
        e.preventDefault()
        const lastDay = new Date(viewYear, viewMonth, 0)
        next = `${lastDay.getFullYear()}-${pad2(lastDay.getMonth() + 1)}-${pad2(lastDay.getDate())}`
        break
      }
      case 'PageDown': {
        // Move to first day of the current month
        e.preventDefault()
        next = `${viewYear}-${pad2(viewMonth)}-01`
        break
      }
      case 'Home': {
        // First day of the week within the current month
        e.preventDefault()
        const [fy, fm, fd] = focusedDate.split('-').map(Number)
        const dow  = (new Date(fy, fm - 1, fd).getDay() + 6) % 7  // Mon=0
        const mDay = Math.max(fd - dow, 1)
        next = `${fy}-${pad2(fm)}-${pad2(mDay)}`
        break
      }
      case 'End': {
        // Last day of the week within the current month
        e.preventDefault()
        const [ey, em, ed]  = focusedDate.split('-').map(Number)
        const edow  = (new Date(ey, em - 1, ed).getDay() + 6) % 7
        const daysLeft = 6 - edow
        const maxDay   = new Date(ey, em, 0).getDate()
        const eDay     = Math.min(ed + daysLeft, maxDay)
        next = `${ey}-${pad2(em)}-${pad2(eDay)}`
        break
      }
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (!isDisabled(focusedDate)) handleSelect(focusedDate)
        return
      case 'Escape':
        e.preventDefault()
        onClose()
        return
      case 'Tab':
        onClose()
        return
    }

    if (next) {
      setFocusedDate(next)
      // If navigated outside the current month view, update view
      if (!isSameMonth(next, viewYear, viewMonth)) {
        const [ny, nm] = next.split('-').map(Number)
        setViewYear(ny)
        setViewMonth(nm)
      }
      focusDay(next)
    }
  }

  // ---------------------------------------------------------------------------
  // Header label
  // ---------------------------------------------------------------------------

  const headerLabel =
    view === 'day'   ? `${MONTHS_LONG[viewMonth - 1]} ${viewYear}` :
    view === 'month' ? String(viewYear) :
    `${yearRangeStart}–${yearRangeStart + 11}`

  const prevFn =
    view === 'day'   ? prevMonth    :
    view === 'month' ? prevYear     :
    prevYearRange

  const nextFn =
    view === 'day'   ? nextMonth    :
    view === 'month' ? nextYear     :
    nextYearRange

  const prevLabel =
    view === 'day'   ? 'Previous month' :
    view === 'month' ? 'Previous year'  :
    'Previous year range'

  const nextLabel =
    view === 'day'   ? 'Next month' :
    view === 'month' ? 'Next year'  :
    'Next year range'

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div className="date-picker__panel" role="dialog" aria-label="Select date" aria-modal="false">

      {/* Calendar header */}
      <div className="date-picker__cal-header">
        <Button
          variant="ghost"
          color="neutral"
          size="medium"
          iconEnd={
            <ChevronRight
              size={14}
              className={['date-picker__view-chevron', view !== 'day' ? 'date-picker__view-chevron--up' : ''].filter(Boolean).join(' ')}
              aria-hidden="true"
            />
          }
          aria-label={`Current view: ${headerLabel}. Click to change view.`}
          onClick={cycleView}
          className="date-picker__view-btn"
        >
          {headerLabel}
        </Button>

        <div className="date-picker__nav">
          <IconButton
            variant="ghost"
            color="neutral"
            size="medium"
            icon={<ChevronLeft size={16} aria-hidden="true" />}
            aria-label={prevLabel}
            onClick={prevFn}
          />
          <IconButton
            variant="ghost"
            color="neutral"
            size="medium"
            icon={<ChevronRight size={16} aria-hidden="true" />}
            aria-label={nextLabel}
            onClick={nextFn}
          />
        </div>
      </div>

      {/* Calendar body */}
      {view === 'day' && (
        <DayView
          viewYear={viewYear}
          viewMonth={viewMonth}
          selectedDate={selectedDate}
          focusedDate={focusedDate}
          todayStr={todayStr}
          showWeekNumbers={showWeekNumbers}
          isDisabled={isDisabled}
          gridRef={gridRef}
          onSelect={handleSelect}
          onKeyDown={handleGridKeyDown}
        />
      )}

      {view === 'month' && (
        <MonthView
          viewYear={viewYear}
          selectedDate={selectedDate}
          onSelect={handleMonthSelect}
        />
      )}

      {view === 'year' && (
        <YearView
          viewYear={viewYear}
          rangeStart={yearRangeStart}
          selectedDate={selectedDate}
          onSelect={handleYearSelect}
        />
      )}

      {/* Calendar footer */}
      {showFooter && (
        <div className="date-picker__cal-footer">
          <Button
            variant="ghost"
            color="primary"
            size="small"
            disabled={selectedDate === null}
            onClick={onClear}
          >
            Clear
          </Button>
          <Button
            variant="ghost"
            color="primary"
            size="small"
            onClick={handleToday}
          >
            Today
          </Button>
        </div>
      )}
    </div>
  )
}

// =============================================================================
// DATE PICKER (main component)
// =============================================================================

/**
 * DatePicker lets users enter or select a date via a segmented DD/MM/YYYY input
 * and an interactive calendar panel with day, month, and year views.
 *
 * Value format: ISO "YYYY-MM-DD". All segment interaction and calendar selection
 * emits values in this format.
 *
 * Keyboard — segments:
 *   ↑ / ↓       increment / decrement
 *   ← / →       move focus between segments
 *   0–9         type a digit (auto-advances on 2 digits or cantExtend)
 *   Enter       open / close the calendar panel
 *   Escape      close the panel
 *
 * Keyboard — calendar day grid:
 *   ← → ↑ ↓    move focus between days
 *   Page Up     jump to last day of the current month
 *   Page Down   jump to first day of the current month
 *   Home        first day of the current week within the month
 *   End         last day of the current week within the month
 *   Enter       select focused day
 *   Escape      close panel
 */
export function DatePicker({
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
  iconStart,
  showWeekNumbers = false,
  showFooter      = true,
  disablePast     = false,
  disableFuture   = false,
  minDate,
  maxDate,
  className,
}: DatePickerProps) {
  const uid       = useId()
  const hintId    = useId()
  const messageId = useId()

  const parsed = parseISO(valueProp)

  const [day,   setDay]   = useState<number | null>(parsed.day)
  const [month, setMonth] = useState<number | null>(parsed.month)
  const [year,  setYear]  = useState<number | null>(parsed.year)

  // Pending digit accumulation
  const pendingD = useRef('')
  const pendingM = useRef('')
  const pendingY = useRef('')   // year needs 4 digits

  const [open,    setOpen]    = useState(false)
  const [focused, setFocused] = useState(false)

  // DOM refs
  const containerRef = useRef<HTMLDivElement>(null)
  const wrapperRef   = useRef<HTMLDivElement>(null)
  const dRef         = useRef<HTMLSpanElement>(null)
  const mRef         = useRef<HTMLSpanElement>(null)
  const yRef         = useRef<HTMLSpanElement>(null)

  // Today's date string
  const todayStr = getTodayStr()

  // Sync from controlled value
  useEffect(() => {
    const p = parseISO(valueProp)
    setDay(p.day); setMonth(p.month); setYear(p.year)
    pendingD.current = pendingM.current = pendingY.current = ''
  }, [valueProp])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  const hasValue = day != null && month != null && year != null && String(year).length === 4

  const selectedDateStr = hasValue ? buildISO(day, month, year) : null

  function isDateDisabled(dateStr: string): boolean {
    if (disablePast    && dateStr < todayStr) return true
    if (disableFuture  && dateStr > todayStr) return true
    if (minDate        && dateStr < minDate)  return true
    if (maxDate        && dateStr > maxDate)  return true
    return false
  }

  function commit(d: number | null, m: number | null, y: number | null) {
    const out = buildISO(d, m, y)
    if (out != null) onChange?.(out)
  }

  function handleClear() {
    setDay(null); setMonth(null); setYear(null)
    pendingD.current = pendingM.current = pendingY.current = ''
    setOpen(false)
    dRef.current?.focus()
  }

  // ---------------------------------------------------------------------------
  // Segment navigation
  // ---------------------------------------------------------------------------

  function focusNext(from: 'd' | 'm' | 'y') {
    if      (from === 'd') mRef.current?.focus()
    else if (from === 'm') yRef.current?.focus()
  }

  function focusPrev(from: 'd' | 'm' | 'y') {
    if      (from === 'y') mRef.current?.focus()
    else if (from === 'm') dRef.current?.focus()
  }

  // ---------------------------------------------------------------------------
  // Digit typing — DD and MM (2-digit)
  // ---------------------------------------------------------------------------

  function handleDayDigit(digit: string) {
    const maxD   = (month != null && year != null) ? new Date(year, month, 0).getDate() : 31
    const next   = pendingD.current + digit
    const val    = parseInt(next, 10)
    const cantEx = val * 10 > maxD

    if (next.length >= 2 || cantEx) {
      const clamped = Math.min(Math.max(val, 1), maxD)
      pendingD.current = ''
      setDay(clamped)
      commit(clamped, month, year)
      focusNext('d')
    } else {
      pendingD.current = next
      setDay(val)
    }
  }

  function handleMonthDigit(digit: string) {
    const next   = pendingM.current + digit
    const val    = parseInt(next, 10)
    const cantEx = val * 10 > 12

    if (next.length >= 2 || cantEx) {
      const clamped = Math.min(Math.max(val, 1), 12)
      pendingM.current = ''
      setMonth(clamped)
      commit(day, clamped, year)
      focusNext('m')
    } else {
      pendingM.current = next
      setMonth(val)
    }
  }

  function handleYearDigit(digit: string) {
    pendingY.current += digit
    const val = parseInt(pendingY.current, 10)
    setYear(val)

    if (pendingY.current.length === 4) {
      pendingY.current = ''
      commit(day, month, val)
      // Year is the last segment — don't advance
    }
  }

  // ---------------------------------------------------------------------------
  // Segment increment / decrement
  // ---------------------------------------------------------------------------

  function incDay() {
    const maxD = (month != null && year != null) ? new Date(year, month, 0).getDate() : 31
    const next = day == null ? 1 : (day >= maxD ? 1 : day + 1)
    setDay(next); commit(next, month, year)
  }
  function decDay() {
    const maxD = (month != null && year != null) ? new Date(year, month, 0).getDate() : 31
    const next = day == null ? maxD : (day <= 1 ? maxD : day - 1)
    setDay(next); commit(next, month, year)
  }
  function incMonth() {
    const next = month == null ? 1 : (month >= 12 ? 1 : month + 1)
    setMonth(next); commit(day, next, year)
  }
  function decMonth() {
    const next = month == null ? 12 : (month <= 1 ? 12 : month - 1)
    setMonth(next); commit(day, next, year)
  }
  function incYear() {
    const next = year == null ? new Date().getFullYear() : year + 1
    setYear(next); commit(day, month, next)
  }
  function decYear() {
    const next = year == null ? new Date().getFullYear() : year - 1
    setYear(next); commit(day, month, next)
  }

  // ---------------------------------------------------------------------------
  // Keyboard handlers per segment
  // ---------------------------------------------------------------------------

  function makeKeyDown(seg: 'd' | 'm' | 'y') {
    return (e: React.KeyboardEvent<HTMLSpanElement>) => {
      if (disabled || readOnly) return
      const [inc, dec] =
        seg === 'd' ? [incDay, decDay] :
        seg === 'm' ? [incMonth, decMonth] :
        [incYear, decYear]

      const handleDigit =
        seg === 'd' ? handleDayDigit :
        seg === 'm' ? handleMonthDigit :
        handleYearDigit

      switch (e.key) {
        case 'ArrowUp':    e.preventDefault(); inc(); break
        case 'ArrowDown':  e.preventDefault(); dec(); break
        case 'ArrowRight': e.preventDefault(); focusNext(seg); break
        case 'ArrowLeft':  e.preventDefault(); focusPrev(seg); break
        case 'Enter':
        case ' ':          e.preventDefault(); setOpen(v => !v); break
        case 'Escape':     setOpen(false); break
        default:
          if (/^\d$/.test(e.key)) { e.preventDefault(); handleDigit(e.key) }
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Calendar selection callback
  // ---------------------------------------------------------------------------

  function handleCalendarSelect(dateStr: string) {
    const p = parseISO(dateStr)
    setDay(p.day); setMonth(p.month); setYear(p.year)
    pendingD.current = pendingM.current = pendingY.current = ''
    onChange?.(dateStr)
    setOpen(false)
    dRef.current?.focus()
  }

  // ---------------------------------------------------------------------------
  // Display values
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
      className={['date-picker', className].filter(Boolean).join(' ')}
      data-size={size}
      data-validation={validation}
      data-disabled={disabled || undefined}
    >
      {/* Label */}
      <FieldLabel
        htmlFor={`${uid}-d`}
        label={label}
        required={required}
        className={hideLabel ? 'date-picker__label--hidden' : undefined}
      />

      {/* Field + panel anchor */}
      <div className="date-picker__field-wrap">

        <div
          ref={wrapperRef}
          className="date-picker__wrapper"
          data-focused={focused || undefined}
          data-disabled={disabled || undefined}
          data-readonly={readOnly || undefined}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={e => {
            if (!wrapperRef.current?.contains(e.relatedTarget as Node)) setFocused(false)
          }}
        >
          {/* Optional leading icon */}
          {iconStart && (
            <span className="date-picker__icon-start" aria-hidden="true">
              {iconStart}
            </span>
          )}

          {/* Segments */}
          <div
            className="date-picker__segments"
            role="group"
            aria-label={label}
            aria-describedby={describedBy}
          >
            {/* Day */}
            <span
              id={`${uid}-d`}
              ref={dRef}
              role="spinbutton"
              className="date-picker__segment"
              data-placeholder={day == null ? '' : undefined}
              aria-label="Day"
              aria-valuenow={day ?? undefined}
              aria-valuemin={1}
              aria-valuemax={31}
              aria-valuetext={day == null ? 'empty' : pad2(day)}
              tabIndex={disabled || readOnly ? -1 : 0}
              onKeyDown={makeKeyDown('d')}
            >
              {day == null ? 'DD' : pad2(day)}
            </span>

            <span className="date-picker__sep" aria-hidden="true">/</span>

            {/* Month */}
            <span
              ref={mRef}
              role="spinbutton"
              className="date-picker__segment"
              data-placeholder={month == null ? '' : undefined}
              aria-label="Month"
              aria-valuenow={month ?? undefined}
              aria-valuemin={1}
              aria-valuemax={12}
              aria-valuetext={month == null ? 'empty' : MONTHS_LONG[month - 1]}
              tabIndex={disabled || readOnly ? -1 : 0}
              onKeyDown={makeKeyDown('m')}
            >
              {month == null ? 'MM' : pad2(month)}
            </span>

            <span className="date-picker__sep" aria-hidden="true">/</span>

            {/* Year */}
            <span
              ref={yRef}
              role="spinbutton"
              className="date-picker__segment date-picker__segment--year"
              data-placeholder={year == null ? '' : undefined}
              aria-label="Year"
              aria-valuenow={year ?? undefined}
              aria-valuemin={1900}
              aria-valuemax={2100}
              aria-valuetext={year == null ? 'empty' : String(year)}
              tabIndex={disabled || readOnly ? -1 : 0}
              onKeyDown={makeKeyDown('y')}
            >
              {year == null ? 'YYYY' : year}
            </span>
          </div>

          {/* Clear button — shown when clearable + has value */}
          {clearable && hasValue && !readOnly && !disabled && (
            <button
              type="button"
              className="date-picker__action-btn"
              aria-label="Clear date"
              tabIndex={0}
              onClick={handleClear}
            >
              <X size={iconSz} aria-hidden="true" />
            </button>
          )}

          {/* Calendar trigger */}
          {!readOnly && !disabled && (
            <button
              type="button"
              className="date-picker__trigger"
              aria-label={open ? 'Close calendar' : 'Open calendar'}
              aria-expanded={open}
              aria-haspopup="dialog"
              tabIndex={0}
              onClick={() => setOpen(v => !v)}
            >
              <Calendar size={iconSz} aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Calendar panel */}
        {open && (
          <CalendarPanel
            selectedDate={selectedDateStr}
            todayStr={todayStr}
            showWeekNumbers={showWeekNumbers}
            showFooter={showFooter}
            isDisabled={isDateDisabled}
            onSelect={handleCalendarSelect}
            onClear={handleClear}
            onClose={() => { setOpen(false); dRef.current?.focus() }}
          />
        )}
      </div>

      {/* Footer: hint or validation message */}
      {(hint || (validationMessage && validation)) && (
        <div className="date-picker__footer">
          {validationMessage && validation ? (
            <p
              id={messageId}
              className="date-picker__message"
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
