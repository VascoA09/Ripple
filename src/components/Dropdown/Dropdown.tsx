import React, { useId, useRef, useState, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { Hint } from '../Hint'
import { ValidationMessage } from '../ValidationMessage'
import './Dropdown.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type DropdownSize       = 'small' | 'medium' | 'large'
export type DropdownValidation = 'negative' | 'notice' | 'positive'

export interface DropdownOption {
  label:        string
  value:        string
  disabled?:    boolean
  description?: string
  icon?:        React.ReactNode
  group?:       string
}

export interface DropdownProps {
  label?:             string
  placeholder?:       string
  /** Controlled selected value */
  value?:             string
  defaultValue?:      string
  options:            DropdownOption[]
  onChange?:          (value: string) => void
  disabled?:          boolean
  required?:          boolean
  size?:              DropdownSize
  validation?:        DropdownValidation
  validationMessage?: string
  helperText?:        string
  id?:                string
  className?:         string
  'aria-label'?:      string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Groups options by their `group` key, preserving insertion order. */
function buildGroups(options: DropdownOption[]): Map<string, DropdownOption[]> {
  const map = new Map<string, DropdownOption[]>()
  for (const opt of options) {
    const key = opt.group ?? ''
    if (!map.has(key)) map.set(key, [])
    map.get(key)!.push(opt)
  }
  return map
}

/**
 * Returns the flat list of options in rendering order (grouped).
 * This is the canonical index space for focusedIndex.
 */
function flattenGroups(groups: Map<string, DropdownOption[]>): DropdownOption[] {
  return Array.from(groups.values()).flat()
}

// ---------------------------------------------------------------------------
// Dropdown
// ---------------------------------------------------------------------------

export function Dropdown({
  label,
  placeholder = 'Select...',
  value: valueProp,
  defaultValue,
  options,
  onChange,
  disabled,
  required,
  size = 'medium',
  validation,
  validationMessage,
  helperText,
  id: idProp,
  className,
  'aria-label': ariaLabel,
}: DropdownProps) {
  const uid       = useId()
  const id        = idProp ?? uid
  const labelId   = label ? `${id}-label` : undefined
  const listboxId = `${id}-listbox`
  const helperId  = helperText ? `${id}-helper` : undefined
  const msgId     = validationMessage ? `${id}-msg` : undefined

  const isControlled = valueProp !== undefined
  const [internalValue, setInternalValue] = useState(defaultValue ?? '')
  const selectedValue = isControlled ? (valueProp ?? '') : internalValue

  const [open, setOpen]               = useState(false)
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [isKeyboardNav, setIsKeyboardNav] = useState(false)

  const triggerRef = useRef<HTMLButtonElement>(null)
  const listboxRef = useRef<HTMLUListElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Build group structure once per options change
  const groups      = buildGroups(options)
  const flatOptions = flattenGroups(groups)

  const optionId = (index: number) => `${id}-option-${index}`

  // Keyboard navigation helpers (operate on flatOptions indices)
  const getNext = (from: number): number => {
    for (let i = from + 1; i < flatOptions.length; i++) {
      if (!flatOptions[i].disabled) return i
    }
    return from
  }
  const getPrev = (from: number): number => {
    for (let i = from - 1; i >= 0; i--) {
      if (!flatOptions[i].disabled) return i
    }
    return from
  }
  const getFirst = (): number => flatOptions.findIndex(o => !o.disabled)
  const getLast  = (): number => {
    for (let i = flatOptions.length - 1; i >= 0; i--) {
      if (!flatOptions[i].disabled) return i
    }
    return -1
  }

  // Close on outside click / focus loss
  useEffect(() => {
    if (!open) return
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) {
        setOpen(false)
        setFocusedIndex(-1)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [open])

  // Scroll focused option into view
  useEffect(() => {
    if (focusedIndex < 0 || !listboxRef.current) return
    const el = listboxRef.current.querySelector<HTMLElement>(`#${CSS.escape(optionId(focusedIndex))}`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [focusedIndex])

  const handleSelect = (opt: DropdownOption) => {
    if (opt.disabled) return
    if (!isControlled) setInternalValue(opt.value)
    onChange?.(opt.value)
    setOpen(false)
    setFocusedIndex(-1)
    triggerRef.current?.focus()
  }

  const openPanel = (initialIndex?: number) => {
    const idx = initialIndex !== undefined
      ? initialIndex
      : selectedValue
        ? flatOptions.findIndex(o => o.value === selectedValue)
        : getFirst()
    setFocusedIndex(idx >= 0 ? idx : getFirst())
    setOpen(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (!open) {
          openPanel()
        } else if (focusedIndex >= 0) {
          handleSelect(flatOptions[focusedIndex])
        }
        break
      case 'ArrowDown':
        e.preventDefault()
        setIsKeyboardNav(true)
        if (!open) {
          openPanel(getFirst())
        } else {
          setFocusedIndex(i => getNext(i < 0 ? -1 : i))
        }
        break
      case 'ArrowUp':
        e.preventDefault()
        setIsKeyboardNav(true)
        if (!open) {
          openPanel(getLast())
        } else {
          setFocusedIndex(i => getPrev(i < 0 ? flatOptions.length : i))
        }
        break
      case 'Home':
        e.preventDefault()
        if (open) setFocusedIndex(getFirst())
        break
      case 'End':
        e.preventDefault()
        if (open) setFocusedIndex(getLast())
        break
      case 'Escape':
        e.preventDefault()
        setOpen(false)
        setFocusedIndex(-1)
        break
      case 'Tab':
        setOpen(false)
        setFocusedIndex(-1)
        break
    }
  }

  const selectedOption = flatOptions.find(o => o.value === selectedValue)
  const chevronSize    = size === 'small' ? 14 : size === 'large' ? 18 : 16
  const activedescendant = focusedIndex >= 0 && open ? optionId(focusedIndex) : undefined
  const isNegative   = validation === 'negative'
  const describedBy  = [helperId, !isNegative ? msgId : undefined].filter(Boolean).join(' ') || undefined

  // Build render data: groups with stable flat indices
  const renderGroups: Array<{
    groupName: string
    items: Array<{ option: DropdownOption; idx: number }>
  }> = []
  let counter = 0
  for (const [groupName, opts] of groups.entries()) {
    renderGroups.push({
      groupName,
      items: opts.map(option => ({ option, idx: counter++ })),
    })
  }
  const hasGroups = renderGroups.some(g => g.groupName !== '')

  return (
    <div
      ref={containerRef}
      className={['dropdown', className].filter(Boolean).join(' ')}
      data-size={size}
      data-open={open || undefined}
      data-disabled={disabled || undefined}
      data-validation={validation}
    >
      {/* Label */}
      {label && (
        <label id={labelId} htmlFor={id} className="dropdown__label">
          {label}
          {required && <span className="dropdown__required" aria-hidden="true"> *</span>}
        </label>
      )}

      {/* Field wrap — position anchor for the listbox */}
      <div className="dropdown__field-wrap">
        {/* Trigger */}
        <button
          ref={triggerRef}
          id={id}
          type="button"
          className="dropdown__trigger"
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listboxId}
          aria-labelledby={!ariaLabel ? labelId : undefined}
          aria-label={ariaLabel}
          aria-activedescendant={activedescendant}
          aria-describedby={describedBy}
          aria-errormessage={isNegative ? msgId : undefined}
          aria-required={required || undefined}
          aria-invalid={isNegative || undefined}
          disabled={disabled}
          onClick={() => {
            if (open) {
              setOpen(false)
              setFocusedIndex(-1)
            } else {
              openPanel()
            }
          }}
          onKeyDown={handleKeyDown}
        >
          {selectedOption?.icon && (
            <span className="dropdown__trigger-leading" aria-hidden="true">
              {selectedOption.icon}
            </span>
          )}
          <span className={selectedOption ? 'dropdown__trigger-value' : 'dropdown__trigger-placeholder'}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <ChevronDown size={chevronSize} className="dropdown__chevron" aria-hidden="true" />
        </button>

        {/* Listbox panel */}
        {open && (
          <ul
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            className="dropdown__listbox"
            aria-label={ariaLabel ?? label}
          >
            {renderGroups.map((group, groupIdx) => (
              <React.Fragment key={group.groupName || '__ungrouped'}>
                {/* Divider above each group (except first) when groups exist */}
                {hasGroups && groupIdx > 0 && (
                  <li role="presentation" className="dropdown__group-divider" aria-hidden="true" />
                )}

                {/* Group header */}
                {group.groupName && (
                  <li role="presentation" className="dropdown__group-header">
                    {group.groupName}
                  </li>
                )}

                {/* Options */}
                {group.items.map(({ option, idx }) => {
                  const isSelected = option.value === selectedValue
                  const isFocused  = focusedIndex === idx

                  return (
                    <li
                      key={option.value}
                      id={optionId(idx)}
                      role="option"
                      className="dropdown__option"
                      aria-selected={isSelected}
                      aria-disabled={option.disabled || undefined}
                      data-selected={isSelected || undefined}
                      data-active={isFocused || undefined}
                      data-disabled={option.disabled || undefined}
                      data-keyboard-active={isFocused && isKeyboardNav ? true : undefined}
                      onMouseDown={e => e.preventDefault()}
                      onMouseEnter={() => { if (!option.disabled) { setFocusedIndex(idx); setIsKeyboardNav(false) } }}
                      onClick={() => handleSelect(option)}
                    >
                      {/* Checkmark column — always reserves space */}
                      <span className="dropdown__option-check" aria-hidden="true">
                        {isSelected && <Check size={12} strokeWidth={2.5} />}
                      </span>

                      {option.icon && (
                        <span className="dropdown__option-icon" aria-hidden="true">{option.icon}</span>
                      )}

                      <span className="dropdown__option-content">
                        <span className="dropdown__option-label">{option.label}</span>
                        {option.description && (
                          <span className="dropdown__option-description">{option.description}</span>
                        )}
                      </span>
                    </li>
                  )
                })}
              </React.Fragment>
            ))}
          </ul>
        )}
      </div>

      {/* Helper text (hidden when validation message is shown) */}
      {helperText && !validationMessage && (
        <Hint id={helperId} text={helperText} />
      )}

      {/* Validation message */}
      {validationMessage && validation && (
        <ValidationMessage id={msgId!} message={validationMessage} variant={validation} />
      )}
    </div>
  )
}
