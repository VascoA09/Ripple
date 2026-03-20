import React, { useId } from 'react'
import './Switch.css'

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Visible label describing what the Switch controls.
   * Omit only when the purpose is completely obvious from surrounding context.
   */
  label?: string
  /** Position of the label relative to the track. Defaults to 'after'. */
  labelPosition?: 'before' | 'after'
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(
    { label, labelPosition = 'after', disabled, id: idProp, className, ...rest },
    ref
  ) {
    const generatedId = useId()
    const id = idProp ?? generatedId

    return (
      <label
        htmlFor={id}
        className={['switch', className].filter(Boolean).join(' ')}
        data-disabled={disabled || undefined}
        data-label-position={label ? labelPosition : undefined}
      >
        {label && labelPosition === 'before' && (
          <span className="switch__label">{label}</span>
        )}

        <span className="switch__control">
          <input
            ref={ref}
            id={id}
            type="checkbox"
            role="switch"
            className="switch__input"
            disabled={disabled}
            {...rest}
          />
          <span className="switch__track" aria-hidden="true">
            <span className="switch__handle" />
          </span>
        </span>

        {label && labelPosition === 'after' && (
          <span className="switch__label">{label}</span>
        )}
      </label>
    )
  }
)
