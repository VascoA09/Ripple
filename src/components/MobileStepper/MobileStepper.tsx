import { Check, AlertCircle, XCircle } from 'lucide-react'
import './MobileStepper.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type MobileStepperVariant = 'progress-bar' | 'active-only'
export type MobileStepperType    = 'default' | 'checked' | 'notice' | 'error'

export interface MobileStepperProps {
  /** Visual layout to render. */
  variant?: MobileStepperVariant
  /** 1-based index of the current step. */
  current: number
  /** Total number of steps in the flow. */
  total: number
  /** Name of the current step. */
  title: string
  /** Supporting text for the current step. */
  description?: string
  /**
   * Ordered list of all step names. Required for `active-only` — used to
   * render the step labels row. Must have the same length as `total`.
   */
  steps?: string[]
  /**
   * Status of the current step. Affects indicator colour in `active-only`.
   * - 'default'  — normal active step (primary fill)
   * - 'checked'  — step marked as complete (primary fill, Check icon)
   * - 'notice'   — step has a warning (notice fill, AlertCircle icon)
   * - 'error'    — step has errors to resolve (negative fill, XCircle icon)
   */
  type?: MobileStepperType
  /** Applied to the root element. */
  className?: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const INDICATOR_ICON: Partial<Record<MobileStepperType, React.ReactNode>> = {
  checked: <Check        size={16} aria-hidden="true" />,
  notice:  <AlertCircle  size={16} aria-hidden="true" />,
  error:   <XCircle      size={16} aria-hidden="true" />,
}

// ---------------------------------------------------------------------------
// MobileStepper
// ---------------------------------------------------------------------------

export function MobileStepper({
  variant     = 'progress-bar',
  current,
  total,
  title,
  description,
  steps,
  type        = 'default',
  className,
}: MobileStepperProps) {
  const progress = Math.min(1, Math.max(0, current / total))

  if (variant === 'progress-bar') {
    return (
      <nav
        className={['mobile-stepper', 'mobile-stepper--progress-bar', className].filter(Boolean).join(' ')}
        aria-label="Progress"
      >
        {/* Counter */}
        <p className="mobile-stepper__counter">
          Step {current} of {total}
        </p>

        {/* Track */}
        <div
          className="mobile-stepper__track"
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={1}
          aria-valuemax={total}
          aria-label={`Step ${current} of ${total}`}
        >
          <div
            className="mobile-stepper__fill"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        {/* Step info */}
        <div className="mobile-stepper__body" aria-live="polite" aria-atomic="true">
          <p className="mobile-stepper__title">{title}</p>
          {description && (
            <p className="mobile-stepper__description">{description}</p>
          )}
        </div>
      </nav>
    )
  }

  // active-only
  const icon = INDICATOR_ICON[type] ?? null

  return (
    <nav
      className={['mobile-stepper', 'mobile-stepper--active-only', className].filter(Boolean).join(' ')}
      aria-label="Progress"
    >
      {/* Header: indicator + step info */}
      <div className="mobile-stepper__header" aria-live="polite" aria-atomic="true">
        {/* Indicator */}
        <div
          className="mobile-stepper__indicator"
          data-type={type}
          aria-current="step"
          aria-hidden="true"
        >
          {icon ?? current}
        </div>

        {/* Step info */}
        <div className="mobile-stepper__step-info">
          <p className="mobile-stepper__title">{title}</p>
          <p className="mobile-stepper__meta">
            Step {current} of {total}
            {description && <> &middot; {description}</>}
          </p>
        </div>
      </div>

      {/* Step labels row */}
      {steps && steps.length > 0 && (
        <ol className="mobile-stepper__labels" aria-hidden="true">
          {steps.map((step, i) => {
            const status =
              i < current - 1 ? 'completed' :
              i === current - 1 ? 'current' :
              'upcoming'

            return (
              <li key={i} className="mobile-stepper__label" data-status={status}>
                {status === 'completed' && (
                  <Check size={12} aria-hidden="true" className="mobile-stepper__label-check" />
                )}
                {step}
              </li>
            )
          })}
        </ol>
      )}
    </nav>
  )
}

MobileStepper.displayName = 'MobileStepper'
