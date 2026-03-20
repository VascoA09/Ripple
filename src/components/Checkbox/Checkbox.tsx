import React, { useId, useEffect, useRef, useImperativeHandle } from 'react'
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
  /** Group label rendered as a <legend> */
  legend: string
  /** Appends a required asterisk to the legend */
  required?: boolean
  /** Supplementary text below the legend */
  hint?: string
  /** Validation state — propagated visually to the group container */
  validation?: CheckboxValidation
  /** Validation feedback message */
  validationMessage?: string
  children: React.ReactNode
  className?: string
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
    { legend, required, hint, validation, validationMessage, children, className },
    ref,
  ) {
    const hintId      = useId()
    const messageId   = useId()

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
        <legend className="checkbox-group__legend">
          {legend}
          {required && (
            <span className="checkbox-group__required" aria-hidden="true"> *</span>
          )}
        </legend>

        {hint && (
          <p id={hintId} className="checkbox-group__hint">
            {hint}
          </p>
        )}

        <div className="checkbox-group__items">{children}</div>

        {validationMessage && (
          <p
            id={messageId}
            className="checkbox-group__message"
            role={validation === 'negative' ? 'alert' : undefined}
          >
            {validationMessage}
          </p>
        )}
      </fieldset>
    )
  },
)
