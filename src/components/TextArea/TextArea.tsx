import React, {
  useId, useRef, useState, useLayoutEffect, useImperativeHandle,
} from 'react'
import { XCircle, AlertCircle, CheckCircle } from 'lucide-react'
import './TextArea.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TextAreaValidation = 'positive' | 'notice' | 'negative'
export type TextAreaResize     = 'vertical' | 'none' | 'auto'

export interface TextAreaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style' | 'id'> {
  /** Visible label. Always required — every text area must have an associated label. */
  label: string
  /** Helper text below the field. Replaced by validationMessage when validation is triggered. */
  hint?: string
  /** Validation state. */
  validation?: TextAreaValidation
  /** Validation feedback message. Rendered with the appropriate icon. */
  validationMessage?: string
  /**
   * Resize behaviour.
   * - 'vertical' (default): manual vertical resize handle visible
   * - 'none': fixed height, no resize handle
   * - 'auto': grows with content up to optional maxHeight, then scrolls
   */
  resize?: TextAreaResize
  /**
   * Minimum height in pixels for the 'auto' resize mode.
   * Ignored for other resize modes.
   */
  minHeight?: number
  /**
   * Maximum height in pixels for the 'auto' resize mode.
   * Once reached, content scrolls within the field.
   * Ignored for other resize modes.
   */
  maxHeight?: number
  /** Shows a "current / max" character counter below the field. Requires maxLength. */
  showCounter?: boolean
  /** Applies to the root container. */
  className?: string
  /** Applies to the root container. */
  style?: React.CSSProperties
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const ICON: Record<TextAreaValidation, React.ReactNode> = {
  negative: <XCircle     size={14} aria-hidden="true" className="textarea__msg-icon" />,
  notice:   <AlertCircle size={14} aria-hidden="true" className="textarea__msg-icon" />,
  positive: <CheckCircle size={14} aria-hidden="true" className="textarea__msg-icon" />,
}

// ---------------------------------------------------------------------------
// TextArea
// ---------------------------------------------------------------------------

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      label,
      hint,
      validation,
      validationMessage,
      resize     = 'vertical',
      minHeight,
      maxHeight,
      showCounter = false,
      className,
      style,
      // Extracted from rest to set defaults or handle separately
      rows         = 3,
      maxLength,
      required,
      disabled,
      value,
      defaultValue,
      onChange,
      ...rest
    },
    ref,
  ) {
    const generatedId = useId()
    const hintId      = useId()
    const messageId   = useId()
    const counterId   = useId()

    // Track character count for the counter display.
    // When controlled (value prop present), computed directly.
    // When uncontrolled, tracked via onChange.
    const [internalCharCount, setInternalCharCount] = useState(() => {
      const initial = value ?? defaultValue ?? ''
      return String(initial).length
    })
    const charCount = value !== undefined
      ? String(value).length
      : internalCharCount

    // Internal ref used for auto-resize and exposed via forwardRef
    const internalRef = useRef<HTMLTextAreaElement>(null)
    useImperativeHandle(ref, () => internalRef.current!, [])

    // Auto-resize: adjust height to fit content
    useLayoutEffect(() => {
      if (resize !== 'auto') return
      const el = internalRef.current
      if (!el) return

      el.style.height = 'auto'
      const scrollH = el.scrollHeight
      const capped  = maxHeight !== undefined
        ? Math.min(scrollH, maxHeight)
        : scrollH
      const final   = minHeight !== undefined
        ? Math.max(capped, minHeight)
        : capped

      el.style.height    = `${final}px`
      el.style.overflowY = maxHeight !== undefined && scrollH >= maxHeight
        ? 'auto'
        : 'hidden'
    }, [charCount, resize, minHeight, maxHeight])

    function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
      setInternalCharCount(e.target.value.length)
      onChange?.(e)
    }

    const hasMessage = !!(validationMessage && validation)
    const describedBy = [
      hasMessage           ? messageId  : (hint ? hintId : null),
      showCounter && maxLength != null ? counterId  : null,
    ].filter(Boolean).join(' ') || undefined

    const autoResizeStyle: React.CSSProperties = resize === 'auto' && minHeight != null
      ? { minHeight }
      : {}

    return (
      <div
        className={['textarea', className].filter(Boolean).join(' ')}
        data-validation={validation}
        data-disabled={disabled || undefined}
        style={style}
      >
        {/* Label */}
        <label htmlFor={generatedId} className="textarea__label">
          {label}
          {required && (
            <span className="textarea__required" aria-hidden="true"> *</span>
          )}
        </label>

        {/* Field */}
        <textarea
          ref={internalRef}
          id={generatedId}
          className="textarea__field"
          rows={rows}
          maxLength={maxLength}
          required={required}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          onChange={handleChange}
          aria-required={required || undefined}
          aria-invalid={validation === 'negative' || undefined}
          aria-describedby={describedBy}
          data-resize={resize}
          style={autoResizeStyle}
          {...rest}
        />

        {/* Footer: hint/message + character counter */}
        {(hint || hasMessage || (showCounter && maxLength != null)) && (
          <div className="textarea__footer">
            {/* Hint or validation message — one or the other, never both */}
            {hasMessage ? (
              <p
                id={messageId}
                className="textarea__message"
                role={validation === 'negative' ? 'alert' : undefined}
              >
                {ICON[validation!]}
                {validationMessage}
              </p>
            ) : hint ? (
              <p id={hintId} className="textarea__hint">{hint}</p>
            ) : null}

            {/* Character counter */}
            {showCounter && maxLength != null && (
              <div
                id={counterId}
                className={[
                  'textarea__counter',
                  charCount >= maxLength ? 'textarea__counter--at-limit' : '',
                ].filter(Boolean).join(' ')}
                aria-live="off"
              >
                {charCount} / {maxLength}
              </div>
            )}
          </div>
        )}

        {/* Screen-reader-only live region for limit-reached announcement */}
        {showCounter && maxLength != null && (
          <div className="textarea__sr-announce" aria-live="polite" aria-atomic="true">
            {charCount >= maxLength ? `Character limit of ${maxLength} reached` : ''}
          </div>
        )}
      </div>
    )
  },
)
