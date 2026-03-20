import React from 'react'
import { Check, AlertCircle, XCircle } from 'lucide-react'
import './Stepper.css'

// =============================================================================
//   TYPES
// =============================================================================

export type StepperVariant = 'ordered' | 'unordered' | 'icons'
export type StepType       = 'default' | 'checked' | 'notice' | 'error'

// =============================================================================
//   CONTEXT
// =============================================================================

interface StepperContextValue {
  variant:     StepperVariant
  interactive: boolean
}

const StepperContext = React.createContext<StepperContextValue>({
  variant:     'ordered',
  interactive: false,
})

// =============================================================================
//   STEPPER ROOT
// =============================================================================

export interface StepperProps extends React.OlHTMLAttributes<HTMLOListElement> {
  /**
   * Visual style of the step indicators.
   * - 'ordered'   — numbered circles (default)
   * - 'unordered' — filled dot circles
   * - 'icons'     — custom icon per step (pass `icon` on each StepperStep)
   */
  variant?: StepperVariant
  /** When true, steps show a hover affordance and fire their onClick handler. */
  interactive?: boolean
}

export function Stepper({
  variant     = 'ordered',
  interactive = false,
  children,
  className,
  ...rest
}: StepperProps) {
  let stepNumber = 0

  const numberedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child
    stepNumber++
    return React.cloneElement(child as React.ReactElement<StepperStepProps>, {
      _stepNumber: stepNumber,
    })
  })

  return (
    <StepperContext.Provider value={{ variant, interactive }}>
      <ol
        className={['stepper', className].filter(Boolean).join(' ')}
        data-variant={variant}
        {...rest}
      >
        {numberedChildren}
      </ol>
    </StepperContext.Provider>
  )
}
Stepper.displayName = 'Stepper'

// =============================================================================
//   STEPPER STEP
// =============================================================================

export interface StepperStepProps extends React.LiHTMLAttributes<HTMLLIElement> {
  /** Step label. Keep to one line where possible. */
  title: string
  /** Supporting text rendered below the title. */
  description?: string
  /**
   * Status of this step.
   * - 'default' — pending / not yet started
   * - 'checked' — completed
   * - 'notice'  — completed with warnings
   * - 'error'   — has errors that must be resolved
   */
  type?: StepType
  /** Marks this as the step the user is currently working on. */
  active?: boolean
  /** Prevents the step from being interacted with. */
  disabled?: boolean
  /** Icon shown in the indicator circle. Only used when variant="icons". */
  icon?: React.ReactNode
  /** Metadata or supplementary content rendered below the description. */
  extras?: React.ReactNode
  /** Called when the step is clicked. Requires `interactive` on the parent Stepper. */
  onClick?: () => void
  /** @internal Injected by the parent Stepper via cloneElement. */
  _stepNumber?: number
}

export function StepperStep({
  title,
  description,
  type        = 'default',
  active,
  disabled,
  icon,
  extras,
  onClick,
  _stepNumber,
  children,
  className,
  ...rest
}: StepperStepProps) {
  const { variant, interactive } = React.useContext(StepperContext)
  const isClickable = interactive && !disabled && Boolean(onClick)

  const indicatorContent = () => {
    if (type === 'checked') return <Check       size={16} aria-hidden="true" />
    if (type === 'notice')  return <AlertCircle size={16} aria-hidden="true" />
    if (type === 'error')   return <XCircle     size={16} aria-hidden="true" />
    if (variant === 'icons')     return icon ?? null
    if (variant === 'unordered') return <span className="stepper-step__dot" aria-hidden="true" />
    return _stepNumber ?? null  // ordered: step number
  }

  const headerContent = (
    <>
      <p className="stepper-step__title">{title}</p>
      {description && <p className="stepper-step__description">{description}</p>}
    </>
  )

  return (
    <li
      className={['stepper-step', className].filter(Boolean).join(' ')}
      data-type={type}
      data-active={active || undefined}
      data-disabled={disabled || undefined}
      data-interactive={(interactive && !disabled) || undefined}
      aria-current={active ? 'step' : undefined}
      {...rest}
    >
      {/* ── Track: indicator circle + connector line ── */}
      <div className="stepper-step__track" aria-hidden="true">
        <div className="stepper-step__indicator">
          {indicatorContent()}
        </div>
        <div className="stepper-step__connector" />
      </div>

      {/* ── Body: header + extras + sub-steps ── */}
      <div className="stepper-step__body">
        {isClickable ? (
          <button
            type="button"
            className="stepper-step__trigger"
            onClick={onClick}
          >
            {headerContent}
          </button>
        ) : (
          <div className="stepper-step__header">
            {headerContent}
          </div>
        )}

        {extras && <div className="stepper-step__extras">{extras}</div>}

        {/* Sub-steps: render a nested Stepper as children */}
        {children}
      </div>
    </li>
  )
}
StepperStep.displayName = 'StepperStep'
