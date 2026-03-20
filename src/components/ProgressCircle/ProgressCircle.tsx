import type { CSSProperties } from 'react'
import './ProgressCircle.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ProgressCircleVariant = 'primary' | 'positive' | 'notice' | 'negative'

export interface ProgressCircleProps {
  /** Progress value 0–100. */
  value: number
  /**
   * Label rendered in the centre of the circle.
   * Defaults to `${value}%`. Use custom labels for integers ("3"),
   * fractions ("72/100"), or overflow ("99+").
   */
  label?: string
  /** Circle diameter in pixels. Default 120. Range: 80–200. */
  size?: number
  /**
   * Font size for the centre label in pixels.
   * Auto-calculated as `max(12, floor(size × 0.25))` when omitted.
   * Minimum 12px is always enforced.
   */
  labelFontSize?: number
  /** Color variant. Default 'primary'. */
  variant?: ProgressCircleVariant
  /**
   * Accessible label for screen readers.
   * Defaults to `${label ?? value + '%'}`.
   */
  ariaLabel?: string
  className?: string
  style?: CSSProperties
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n))
}

function calcStrokeWidth(size: number): number {
  return Math.max(3, Math.floor(size * 0.06))
}

function calcRadius(size: number, strokeWidth: number): number {
  // Inset by half the stroke width so the stroke doesn't clip at the edge
  return (size - strokeWidth) / 2
}

function calcCircumference(radius: number): number {
  return 2 * Math.PI * radius
}

function calcDashOffset(circumference: number, value: number): number {
  return circumference * (1 - value / 100)
}

function calcLabelFontSize(size: number, overrideFs?: number): number {
  const auto = Math.floor(size * 0.25)
  const resolved = overrideFs !== undefined ? overrideFs : auto
  return Math.max(12, resolved)
}

// ---------------------------------------------------------------------------
// ProgressCircle
// ---------------------------------------------------------------------------

export function ProgressCircle({
  value,
  label,
  size = 120,
  labelFontSize,
  variant = 'primary',
  ariaLabel,
  className,
  style,
}: ProgressCircleProps) {
  const safeValue    = clamp(value, 0, 100)
  const strokeWidth  = calcStrokeWidth(size)
  const radius       = calcRadius(size, strokeWidth)
  const circumference = calcCircumference(radius)
  const dashOffset   = calcDashOffset(circumference, safeValue)
  const cx           = size / 2
  const cy           = size / 2
  const fontSize     = calcLabelFontSize(size, labelFontSize)
  const displayLabel = label !== undefined ? label : `${safeValue}%`
  const accessibleLabel = ariaLabel ?? displayLabel

  return (
    <div
      className={['progress-circle', className].filter(Boolean).join(' ')}
      data-variant={variant}
      style={{
        width:  size,
        height: size,
        ...style,
      }}
      role="progressbar"
      aria-valuenow={safeValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={accessibleLabel}
    >
      <svg
        className="progress-circle__svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        aria-hidden="true"
        focusable="false"
      >
        {/* Track — full circle */}
        <circle
          className="progress-circle__track"
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
        />

        {/* Progress arc — starts at 12 o'clock via rotation */}
        <circle
          className="progress-circle__arc"
          cx={cx}
          cy={cy}
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      </svg>

      {/* Centre label */}
      <span
        className="progress-circle__label"
        aria-hidden="true"
        style={{ fontSize }}
      >
        {displayLabel}
      </span>
    </div>
  )
}
