import React from 'react'
import './Spinner.css'

// SVG geometry per size. r + strokeWidth/2 must not exceed cx (no clipping).
const SIZE_CONFIG = {
  s:  { svgSize: 16,  strokeWidth: 2, r: 6,  cx: 8,  cy: 8  },
  m:  { svgSize: 32,  strokeWidth: 3, r: 13, cx: 16, cy: 16 },
  l:  { svgSize: 64,  strokeWidth: 4, r: 28, cx: 32, cy: 32 },
  xl: { svgSize: 128, strokeWidth: 6, r: 57, cx: 64, cy: 64 },
} as const

export interface SpinnerProps {
  /** Diameter of the spinner circle */
  size?: 's' | 'm' | 'l' | 'xl'
  /** Color context — match to the background the spinner sits on */
  variant?: 'primary' | 'neutral' | 'inverse'
  /** Optional visible label rendered alongside the spinner */
  label?: string
  /** Layout of the label relative to the spinner */
  labelPosition?: 'stacked' | 'inline'
  /** Accessible name when no visible label is provided */
  'aria-label'?: string
  className?: string
}

export function Spinner({
  size = 'm',
  variant = 'primary',
  label,
  labelPosition = 'stacked',
  'aria-label': ariaLabel,
  className,
}: SpinnerProps) {
  const labelId = React.useId()
  const { svgSize, strokeWidth, r, cx, cy } = SIZE_CONFIG[size]
  const circumference = 2 * Math.PI * r
  // 75% arc with a small gap at the tail
  const dashArray = `${(circumference * 0.75).toFixed(2)} ${circumference.toFixed(2)}`

  return (
    <div
      className={['spinner', className].filter(Boolean).join(' ')}
      role="status"
      aria-live="polite"
      aria-label={label ? undefined : (ariaLabel ?? 'Loading')}
      aria-labelledby={label ? labelId : undefined}
      data-size={size}
      data-variant={variant}
      data-label-position={label ? labelPosition : undefined}
    >
      <svg
        className="spinner__svg"
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        fill="none"
        aria-hidden="true"
      >
        {/* Track: full circle, muted color */}
        <circle
          className="spinner__track"
          cx={cx}
          cy={cy}
          r={r}
          strokeWidth={strokeWidth}
        />
        {/* Indicator: 75% arc, rotated so arc starts at 12 o'clock */}
        <circle
          className="spinner__indicator"
          cx={cx}
          cy={cy}
          r={r}
          strokeWidth={strokeWidth}
          strokeDasharray={dashArray}
          strokeLinecap="round"
          transform={`rotate(-90 ${cx} ${cy})`}
        />
      </svg>

      {label && (
        <span id={labelId} className="spinner__label">
          {label}
        </span>
      )}
    </div>
  )
}
