import React, {
  useId, useRef, useState, useImperativeHandle,
} from 'react'
import {
  Search, Eye, EyeOff, X,
  XCircle, AlertCircle, CheckCircle,
} from 'lucide-react'
import './TextInput.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type TextInputValidation = 'positive' | 'notice' | 'negative'
export type TextInputSize       = 'small' | 'medium' | 'large'

export interface TextInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'id' | 'size' | 'prefix'> {
  /** Visible label. Always required — provide hideLabel for search bars and similar contexts. */
  label: string
  /** Visually hides the label while keeping it accessible. */
  hideLabel?: boolean
  /** Helper text below the field. Replaced by validationMessage when triggered. */
  hint?: string
  /** Validation state. */
  validation?: TextInputValidation
  /** Validation feedback message, rendered with the appropriate icon. */
  validationMessage?: string
  /** Height scale. Default: 'medium'. */
  size?: TextInputSize
  /**
   * Attached prefix block — displayed before the input with its own background.
   * Typical use: currency symbols ($), protocol labels (https://), or icons.
   */
  prefix?: React.ReactNode
  /**
   * Attached suffix block — displayed after the input with its own background.
   * Typical use: units (kg, %), domain suffixes (.com).
   */
  suffix?: React.ReactNode
  /** Icon rendered inside the field at the leading edge. */
  iconStart?: React.ReactNode
  /** Icon rendered inside the field at the trailing edge. Not used for type='password' or type='search'. */
  iconEnd?: React.ReactNode
  /** Shows a "current / max" character counter below the field. Requires maxLength. */
  showCounter?: boolean
  /**
   * Called when the clear button is clicked on a search input.
   * In controlled usage, update your value state inside this handler.
   */
  onClear?: () => void
  /** Applies to the root container. */
  className?: string
  /** Applies to the root container. */
  style?: React.CSSProperties
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const VALIDATION_ICON: Record<TextInputValidation, React.ReactNode> = {
  negative: <XCircle     size={14} aria-hidden="true" className="text-input__msg-icon" />,
  notice:   <AlertCircle size={14} aria-hidden="true" className="text-input__msg-icon" />,
  positive: <CheckCircle size={14} aria-hidden="true" className="text-input__msg-icon" />,
}

const ICON_SIZE: Record<TextInputSize, number> = { small: 14, medium: 16, large: 18 }

// ---------------------------------------------------------------------------
// TextInput
// ---------------------------------------------------------------------------

export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    {
      label,
      hideLabel   = false,
      hint,
      validation,
      validationMessage,
      size        = 'medium',
      prefix,
      suffix,
      iconStart,
      iconEnd,
      showCounter = false,
      onClear,
      className,
      style,
      // Extracted to handle behaviour
      type: typeProp   = 'text',
      required,
      disabled,
      readOnly,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      maxLength,
      ...rest
    },
    ref,
  ) {
    const generatedId = useId()
    const hintId      = useId()
    const messageId   = useId()
    const counterId   = useId()

    // Password visibility
    const [showPassword, setShowPassword] = useState(false)

    // Focus state — drives data-focused on wrapper for focus-ring CSS
    const [focused, setFocused] = useState(false)

    // Character count — controlled: from value prop; uncontrolled: tracked internally
    const [internalCharCount, setInternalCharCount] = useState(() => {
      const initial = value ?? defaultValue ?? ''
      return String(initial).length
    })
    const charCount = value !== undefined
      ? String(value).length
      : internalCharCount

    const internalRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(ref, () => internalRef.current!, [])

    // Resolved input type
    const resolvedType = typeProp === 'password' && showPassword ? 'text' : typeProp

    // Icon sizes
    const iconSize = ICON_SIZE[size]

    // Resolved icon start — auto-inject Search icon for type='search'
    const resolvedIconStart = typeProp === 'search' && !iconStart
      ? <Search size={iconSize} aria-hidden="true" />
      : iconStart

    // Resolved icon end — password toggle, search clear, or user icon (in priority order)
    let resolvedIconEnd: React.ReactNode = null
    if (typeProp === 'password') {
      resolvedIconEnd = (
        <button
          type="button"
          className="text-input__action-btn"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={0}
          onClick={() => {
            setShowPassword(v => !v)
            internalRef.current?.focus()
          }}
        >
          {showPassword
            ? <EyeOff  size={iconSize} aria-hidden="true" />
            : <Eye     size={iconSize} aria-hidden="true" />
          }
        </button>
      )
    } else if (typeProp === 'search' && charCount > 0) {
      resolvedIconEnd = (
        <button
          type="button"
          className="text-input__action-btn"
          aria-label="Clear"
          tabIndex={0}
          onClick={() => {
            const el = internalRef.current
            if (el) {
              el.value = ''
              el.focus()
            }
            setInternalCharCount(0)
            onClear?.()
          }}
        >
          <X size={iconSize} aria-hidden="true" />
        </button>
      )
    } else {
      resolvedIconEnd = iconEnd ?? null
    }

    const hasIconStart = !!resolvedIconStart
    const hasIconEnd   = !!resolvedIconEnd

    const hasMessage  = !!(validationMessage && validation)
    const describedBy = [
      hasMessage            ? messageId : (hint ? hintId : null),
      showCounter && maxLength != null ? counterId  : null,
    ].filter(Boolean).join(' ') || undefined

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInternalCharCount(e.target.value.length)
      onChange?.(e)
    }

    function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
      setFocused(true)
      onFocus?.(e)
    }

    function handleBlur(e: React.FocusEvent<HTMLInputElement>) {
      setFocused(false)
      onBlur?.(e)
    }

    return (
      <div
        className={['text-input', className].filter(Boolean).join(' ')}
        data-size={size}
        data-validation={validation}
        data-disabled={disabled || undefined}
        style={style}
      >
        {/* Label */}
        <label
          htmlFor={generatedId}
          className={[
            'text-input__label',
            hideLabel ? 'text-input__label--hidden' : '',
          ].filter(Boolean).join(' ')}
        >
          {label}
          {required && (
            <span className="text-input__required" aria-hidden="true"> *</span>
          )}
        </label>

        {/* Field wrapper */}
        <div
          className="text-input__wrapper"
          data-focused={focused || undefined}
          data-disabled={disabled || undefined}
          data-readonly={readOnly || undefined}
        >
          {/* Attached prefix block */}
          {prefix != null && (
            <div className="text-input__prefix" aria-hidden="true">
              {prefix}
            </div>
          )}

          {/* Input + inner icons */}
          <div
            className="text-input__inner"
            data-icon-start={hasIconStart || undefined}
            data-icon-end={hasIconEnd || undefined}
          >
            {resolvedIconStart && (
              <span className="text-input__icon-start" aria-hidden="true">
                {resolvedIconStart}
              </span>
            )}

            <input
              ref={internalRef}
              id={generatedId}
              className="text-input__field"
              type={resolvedType}
              required={required}
              disabled={disabled}
              readOnly={readOnly}
              value={value}
              defaultValue={defaultValue}
              maxLength={maxLength}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              aria-required={required || undefined}
              aria-invalid={validation === 'negative' || undefined}
              aria-describedby={describedBy}
              {...rest}
            />

            {resolvedIconEnd && (
              <span className="text-input__icon-end">
                {resolvedIconEnd}
              </span>
            )}
          </div>

          {/* Attached suffix block */}
          {suffix != null && (
            <div className="text-input__suffix" aria-hidden="true">
              {suffix}
            </div>
          )}
        </div>

        {/* Footer: hint/message + counter */}
        {(hint || hasMessage || (showCounter && maxLength != null)) && (
          <div className="text-input__footer">
            {hasMessage ? (
              <p
                id={messageId}
                className="text-input__message"
                role={validation === 'negative' ? 'alert' : undefined}
              >
                {VALIDATION_ICON[validation!]}
                {validationMessage}
              </p>
            ) : hint ? (
              <p id={hintId} className="text-input__hint">{hint}</p>
            ) : null}

            {showCounter && maxLength != null && (
              <div
                id={counterId}
                className={[
                  'text-input__counter',
                  charCount >= maxLength ? 'text-input__counter--at-limit' : '',
                ].filter(Boolean).join(' ')}
              >
                {charCount} / {maxLength}
              </div>
            )}
          </div>
        )}

        {/* Screen-reader live region — announces when char limit is reached */}
        {showCounter && maxLength != null && (
          <div className="text-input__sr-announce" aria-live="polite" aria-atomic="true">
            {charCount >= maxLength ? `Character limit of ${maxLength} reached` : ''}
          </div>
        )}
      </div>
    )
  },
)
