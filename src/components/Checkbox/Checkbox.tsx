import React, { useId, useEffect, useRef, useImperativeHandle } from 'react'
import { XCircle, AlertCircle, CheckCircle } from 'lucide-react'
import { FieldLabel } from '../FieldLabel'
import { Hint } from '../Hint'
import './Checkbox.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CheckboxValidation = 'positive' | 'notice' | 'negative'

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  /** Visible label — omit only when purpose is clear from surrounding context */
  label?: string
  /**
   * Tri-state: shows a dash indicator. Used for parent checkboxes when some
   * but not all children are selected. Overrides `checked` visually.
   */
  indeterminate?: boolean
  /** Validation state applied to the checkbox border and background */
  validation?: CheckboxValidation
}

export interface CheckboxGroupProps {
  /** Group label, rendered via FieldLabel inside a <legend>. */
  legend:              string
  /** Sub-label below the legend. Forwarded to FieldLabel's description. */
  description?:        string
  /** Appends a required asterisk to the legend. */
  required?:           boolean
  /** Appends "(optional)" to the legend. Mutually exclusive with required. */
  optional?:           boolean
  /** Help tooltip on the legend. Forwarded to FieldLabel's helpText. */
  helpText?:           string
  /** Supplementary text below the legend, rendered via Hint. */
  hint?:               string
  /** Validation state — propagated visually to the group container. */
  validation?:         CheckboxValidation
  /** Validation feedback message with contextual icon. */
  validationMessage?:  string
  children:            React.ReactNode
  className?:          string
}

// ---------------------------------------------------------------------------
// Validation icons
// ---------------------------------------------------------------------------

const VALIDATION_ICON: Record<CheckboxValidation, React.ReactNode> = {
  negative: <XCircle     size={14} aria-hidden="true" className="checkbox-group__msg-icon" />,
  notice:   <AlertCircle size={14} aria-hidden="true" className="checkbox-group__msg-icon" />,
  positive: <CheckCircle size={14} aria-hidden="true" className="checkbox-group__msg-icon" />,
}

// ---------------------------------------------------------------------------
// Icons
// ---------------------------------------------------------------------------

function CheckIcon() {
  return (
    <svg
      className="checkbox__icon checkbox__icon--check"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 6L5 9L10 3"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DashIcon() {
  return (
    <svg
      className="checkbox__icon checkbox__icon--dash"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 6H9.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Checkbox
// ---------------------------------------------------------------------------

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    { label, indeterminate, validation, disabled, id: idProp, className, ...rest },
    ref,
  ) {
    const generatedId = useId()
    const id = idProp ?? generatedId

    // Need a local ref to set the indeterminate DOM property
    const innerRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => innerRef.current!)

    useEffect(() => {
      if (innerRef.current) {
        innerRef.current.indeterminate = indeterminate ?? false
      }
    }, [indeterminate])

    return (
      <label
        htmlFor={id}
        className={['checkbox', className].filter(Boolean).join(' ')}
        data-disabled={disabled || undefined}
        data-validation={validation}
      >
        <span className="checkbox__control">
          <input
            ref={innerRef}
            id={id}
            type="checkbox"
            className="checkbox__input"
            disabled={disabled}
            {...rest}
          />
          <span className="checkbox__box" aria-hidden="true">
            <CheckIcon />
            <DashIcon />
          </span>
        </span>

        {label && <span className="checkbox__label">{label}</span>}
      </label>
    )
  },
)

// ---------------------------------------------------------------------------
// CheckboxGroup
// ---------------------------------------------------------------------------

export const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  function CheckboxGroup(
    {
      legend, description, required, optional, helpText,
      hint, validation, validationMessage, children, className,
    },
    ref,
  ) {
    const hintId    = useId()
    const messageId = useId()

    return (
      <fieldset
        ref={ref}
        className={['checkbox-group', className].filter(Boolean).join(' ')}
        data-validation={validation}
        aria-describedby={
          [hint ? hintId : null, validationMessage ? messageId : null]
            .filter(Boolean)
            .join(' ') || undefined
        }
      >
        {/* FieldLabel inside <legend> keeps semantic fieldset/legend association
            for screen readers while gaining Ripple's label capabilities. */}
        <legend className="checkbox-group__legend">
          <FieldLabel
            label={legend}
            description={description}
            required={required}
            optional={optional}
            helpText={helpText}
          />
        </legend>

        {hint && <Hint id={hintId} text={hint} />}

        <div className="checkbox-group__items">{children}</div>

        {validationMessage && (
          <p
            id={messageId}
            className="checkbox-group__message"
            role={validation === 'negative' ? 'alert' : undefined}
          >
            {validation && VALIDATION_ICON[validation]}
            {validationMessage}
          </p>
        )}
      </fieldset>
    )
  },
)
