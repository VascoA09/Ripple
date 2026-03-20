import { AlertCircle, CheckCircle2, XCircle } from 'lucide-react'
import './ValidationMessage.css'

// =============================================================================
// TYPES
// =============================================================================

export type ValidationMessageVariant = 'positive' | 'notice' | 'negative'

export interface ValidationMessageProps {
  /** The feedback text. Keep concise and actionable. */
  message: string
  /**
   * The variant determines the icon, color, and ARIA live behaviour:
   * - `negative` — error, must be corrected. Announced assertively.
   * - `notice`   — warning or recommendation. Announced politely.
   * - `positive` — success confirmation. Announced politely.
   */
  variant: ValidationMessageVariant
  /**
   * Required. Must match the `aria-describedby` (positive/notice) or
   * `aria-errormessage` (negative) value on the associated input.
   */
  id: string
  className?: string
}

// =============================================================================
// HELPERS
// =============================================================================

const ICON = {
  positive: CheckCircle2,
  notice:   AlertCircle,
  negative: XCircle,
} as const

// =============================================================================
// VALIDATION MESSAGE
// =============================================================================

/**
 * ValidationMessage renders post-interaction feedback below a form control.
 *
 * Accessibility wiring expected on the input:
 * - negative: `aria-invalid="true"` + `aria-errormessage="<id>"`
 * - positive/notice: `aria-describedby="<id>"`
 */
export function ValidationMessage({
  message,
  variant,
  id,
  className,
}: ValidationMessageProps) {
  const Icon      = ICON[variant]
  const isError   = variant === 'negative'

  return (
    <p
      id={id}
      className={['validation-message', className].filter(Boolean).join(' ')}
      data-variant={variant}
      role={isError ? 'alert' : 'status'}
      aria-live={isError ? 'assertive' : 'polite'}
      aria-atomic="true"
    >
      <Icon size={16} aria-hidden="true" className="validation-message__icon" />
      {message}
    </p>
  )
}
