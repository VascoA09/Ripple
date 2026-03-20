import React, { createContext, useContext, useId } from 'react'
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react'
import './Radio.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type RadioValidation = 'positive' | 'notice' | 'negative'

export interface RadioGroupProps {
  /** Currently selected value. Controlled — required. */
  value: string
  /** Called with the new value when a radio is selected. */
  onValueChange: (value: string) => void
  /** Group label rendered as `<legend>`. */
  label?: string
  /** Supplementary context below the legend. */
  description?: string
  /** Helper text below the radio items. */
  hint?: string
  /** Validation state applied to the group. */
  validation?: RadioValidation
  /** Validation feedback message. */
  validationMessage?: string
  /** Shows a required asterisk on the legend. */
  required?: boolean
  /** Disables all radios in the group. */
  disabled?: boolean
  /** `name` attribute shared by all radios. Auto-generated when omitted. */
  name?: string
  /** Layout direction of the radio items. */
  layout?: 'stacked' | 'inline'
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'> {
  /** Value this radio represents. */
  value: string
  /** Visible label for the option. */
  label?: string
}

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface RadioContextValue {
  groupValue:    string
  onValueChange: (value: string) => void
  name:          string
  groupDisabled: boolean
}

const RadioContext = createContext<RadioContextValue | null>(null)

function useRadioContext(): RadioContextValue {
  const ctx = useContext(RadioContext)
  if (!ctx) throw new Error('<Radio> must be a descendant of <RadioGroup>')
  return ctx
}

// ---------------------------------------------------------------------------
// Validation icon
// ---------------------------------------------------------------------------

function ValidationIcon({ validation }: { validation: RadioValidation }) {
  const props = { size: 14, 'aria-hidden': true as const, className: 'radio-group__msg-icon' }
  if (validation === 'positive') return <CheckCircle  {...props} />
  if (validation === 'notice')   return <AlertCircle  {...props} />
  return                                <XCircle      {...props} />
}

// ---------------------------------------------------------------------------
// Radio (individual item)
// ---------------------------------------------------------------------------

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  function Radio({ value, label, disabled, id: idProp, className, ...rest }, ref) {
    const ctx        = useRadioContext()
    const generatedId = useId()
    const id          = idProp ?? generatedId
    const isDisabled  = disabled || ctx.groupDisabled
    const isChecked   = ctx.groupValue === value

    return (
      <label
        htmlFor={id}
        className={['radio', className].filter(Boolean).join(' ')}
        data-disabled={isDisabled || undefined}
        data-checked={isChecked || undefined}
      >
        <span className="radio__control">
          <input
            ref={ref}
            id={id}
            type="radio"
            className="radio__input"
            name={ctx.name}
            value={value}
            checked={isChecked}
            disabled={isDisabled}
            onChange={() => ctx.onValueChange(value)}
            {...rest}
          />
          {/* Custom visual circle — position absolute over the hidden input */}
          <span className="radio__circle" aria-hidden="true" />
        </span>

        {label && <span className="radio__label">{label}</span>}
      </label>
    )
  },
)

// ---------------------------------------------------------------------------
// RadioGroup
// ---------------------------------------------------------------------------

export const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  function RadioGroup(
    {
      value,
      onValueChange,
      label,
      description,
      hint,
      validation,
      validationMessage,
      required,
      disabled = false,
      name: nameProp,
      layout = 'stacked',
      children,
      className,
      style,
    },
    ref,
  ) {
    const generatedName = useId()
    const name          = nameProp ?? generatedName
    const hintId        = useId()
    const messageId     = useId()

    const describedBy = [
      hint              ? hintId    : null,
      validationMessage ? messageId : null,
    ].filter(Boolean).join(' ') || undefined

    return (
      <RadioContext.Provider value={{ groupValue: value, onValueChange, name, groupDisabled: disabled }}>
        <fieldset
          ref={ref}
          className={['radio-group', className].filter(Boolean).join(' ')}
          data-validation={validation}
          data-layout={layout}
          data-disabled={disabled || undefined}
          aria-describedby={describedBy}
          aria-required={required || undefined}
          style={style}
        >
          {label && (
            <legend className="radio-group__legend">
              {label}
              {required && (
                <span className="radio-group__required" aria-hidden="true"> *</span>
              )}
            </legend>
          )}

          {description && (
            <p className="radio-group__description">{description}</p>
          )}

          <div className="radio-group__items">
            {children}
          </div>

          {hint && (
            <p id={hintId} className="radio-group__hint">{hint}</p>
          )}

          {validationMessage && validation && (
            <p
              id={messageId}
              className="radio-group__message"
              role={validation === 'negative' ? 'alert' : undefined}
            >
              <ValidationIcon validation={validation} />
              {validationMessage}
            </p>
          )}
        </fieldset>
      </RadioContext.Provider>
    )
  },
)
