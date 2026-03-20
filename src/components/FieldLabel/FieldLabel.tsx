import { useId } from 'react'
import { HelpCircle } from 'lucide-react'
import './FieldLabel.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type FieldLabelPosition = 'stacked' | 'inline'

export interface FieldLabelProps {
  /** The visible label text. */
  label: string
  /** Additional context below the label row. */
  description?: string
  /** Renders a red asterisk (*). Apply aria-required="true" on the input. */
  required?: boolean
  /** Renders "(optional)" text. Mutually exclusive with required. */
  optional?: boolean
  /** Help text shown in a tooltip when the help icon is hovered or focused. */
  helpText?: string
  /**
   * `stacked` (default) — label sits above the control.
   * `inline` — label has a fixed min-width, designed to sit beside the control
   * in a parent flex container.
   */
  position?: FieldLabelPosition
  /** Associates the label with a form control via its id. */
  htmlFor?: string
  id?: string
  className?: string
}

// ---------------------------------------------------------------------------
// FieldLabel
// ---------------------------------------------------------------------------

export function FieldLabel({
  label,
  description,
  required,
  optional,
  helpText,
  position = 'stacked',
  htmlFor,
  id,
  className,
}: FieldLabelProps) {
  const tooltipId = useId()

  // Render as <label> when associated with a control, <div> otherwise
  const Tag = htmlFor ? 'label' : 'div'

  return (
    <Tag
      htmlFor={htmlFor}
      id={id}
      className={['field-label', className].filter(Boolean).join(' ')}
      data-position={position !== 'stacked' ? position : undefined}
    >
      {/* Label row: text + indicators + help icon */}
      <span className="field-label__header">
        <span className="field-label__text" title={label}>
          {label}
        </span>

        {required && !optional && (
          <span className="field-label__required" aria-hidden="true">
            {' *'}
          </span>
        )}

        {optional && !required && (
          <span className="field-label__optional">
            {' (optional)'}
          </span>
        )}

        {helpText && (
          <span className="field-label__help">
            <button
              type="button"
              className="field-label__help-btn"
              aria-label="Help information"
              aria-describedby={tooltipId}
            >
              <HelpCircle size={14} aria-hidden="true" />
            </button>
            <span
              id={tooltipId}
              role="tooltip"
              className="field-label__tooltip"
            >
              {helpText}
            </span>
          </span>
        )}
      </span>

      {/* Description */}
      {description && (
        <span className="field-label__description">{description}</span>
      )}
    </Tag>
  )
}
