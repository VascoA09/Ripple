import type { CSSProperties } from 'react'
import { useId } from 'react'
import { Check, X } from 'lucide-react'
import './ProgressBar.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ProgressBarState = 'active' | 'success' | 'error'

export interface ProgressBarProps {
  /**
   * Describes what is being tracked. Required for accessibility.
   * Visually hidden when `hideLabel` is true, but always read by screen readers.
   */
  label: string
  /**
   * Progress value 0–100. Required for determinate bars.
   * Ignored when `indeterminate` is true.
   */
  value?: number
  /**
   * Custom value string shown in the header instead of the auto-calculated
   * percentage (e.g. "33.6 MB of 48 MB"). Ignored in success/error states.
   */
  valueLabel?: string
  /** Additional context text below the track (e.g. "33.6 MB of 48 MB"). */
  hint?: string
  /** Current state of the operation. Defaults to 'active'. */
  state?: ProgressBarState
  /**
   * Use when progress cannot be quantified. Renders an animated fill pattern.
   * Overrides `value`.
   */
  indeterminate?: boolean
  /** Hides the label visually. Always present in the DOM for screen readers. */
  hideLabel?: boolean
  /** Hides the value / state icon in the header. */
  hideValue?: boolean
  className?: string
  style?: CSSProperties
}

// ---------------------------------------------------------------------------
// ProgressBar
// ---------------------------------------------------------------------------

export function ProgressBar({
  label,
  value = 0,
  valueLabel,
  hint,
  state = 'active',
  indeterminate = false,
  hideLabel = false,
  hideValue = false,
  className,
  style,
}: ProgressBarProps) {
  const id      = useId()
  const labelId = `${id}-label`
  const liveId  = `${id}-live`

  // Clamp value to [0, 100]
  const clampedValue = Math.min(100, Math.max(0, value))

  // Fill width — indeterminate and success always fill fully in CSS
  const fillWidth = indeterminate || state === 'success'
    ? undefined                     // controlled via CSS animation / data-state
    : `${clampedValue}%`

  // ARIA: indeterminate bars omit valuenow/min/max
  const ariaProps = indeterminate
    ? { role: 'progressbar' as const, 'aria-label': label }
    : {
        role:           'progressbar' as const,
        'aria-valuenow': state === 'success' ? 100 : clampedValue,
        'aria-valuemin': 0,
        'aria-valuemax': 100,
        'aria-labelledby': labelId,
      }

  // Value display in header
  const displayValue = (() => {
    if (hideValue) return null
    if (state === 'success') return <Check size={16} aria-hidden="true" className="progress-bar__state-icon" />
    if (state === 'error')   return <X size={16} aria-hidden="true" className="progress-bar__state-icon" />
    if (indeterminate)       return null
    return (
      <span className="progress-bar__value" aria-hidden="true">
        {valueLabel ?? `${clampedValue}%`}
      </span>
    )
  })()

  // Live region message for completion states
  const liveMessage = state === 'success'
    ? `${label} complete`
    : state === 'error'
    ? `${label} failed`
    : ''

  return (
    <div
      className={['progress-bar', className].filter(Boolean).join(' ')}
      data-state={state}
      data-indeterminate={indeterminate ? '' : undefined}
      style={style}
    >
      {/* Header — label + value/icon */}
      {(!hideLabel || displayValue) && (
        <div className="progress-bar__header">
          <span
            id={labelId}
            className={[
              'progress-bar__label',
              hideLabel ? 'progress-bar__label--hidden' : '',
            ].filter(Boolean).join(' ')}
          >
            {label}
          </span>
          {displayValue}
        </div>
      )}

      {/* Track */}
      <div className="progress-bar__track" {...ariaProps}>
        <div
          className="progress-bar__fill"
          style={fillWidth ? { width: fillWidth } : undefined}
        />
      </div>

      {/* Hint */}
      {hint && (
        <p className="progress-bar__hint">{hint}</p>
      )}

      {/* Visually hidden live region — announces completion state changes */}
      <span
        id={liveId}
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className="progress-bar__live"
      >
        {liveMessage}
      </span>
    </div>
  )
}
