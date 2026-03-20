import React, {
  useId,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react'
import { ChevronDown, Check, X } from 'lucide-react'
import './Combobox.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ComboboxOption {
  value: string
  label: string
  /** Secondary line below the label */
  description?: string
  /** Icon rendered before the label — caller sizes it (16px recommended) */
  icon?: React.ReactNode
  /** Prevents selection */
  disabled?: boolean
  /** Group key — options sharing the same group name are rendered together */
  group?: string
}

export type ComboboxValidation = 'positive' | 'notice' | 'negative'

interface ComboboxBaseProps {
  options: ComboboxOption[]
  label?: string
  placeholder?: string
  hint?: string
  validation?: ComboboxValidation
  validationMessage?: string
  size?: 'small' | 'medium' | 'large'
  /** Label stacked above input (default) or inline to the left */
  labelPosition?: 'stacked' | 'inline'
  disabled?: boolean
  required?: boolean
  /** Text shown when no options match the query */
  noResultsText?: string
  id?: string
  className?: string
}

export interface ComboboxSingleProps extends ComboboxBaseProps {
  selection?: 'single'
  value?: string | null
  onChange?: (value: string | null) => void
}

export interface ComboboxMultiProps extends ComboboxBaseProps {
  selection: 'multi'
  value?: string[]
  onChange?: (values: string[]) => void
}

export type ComboboxProps = ComboboxSingleProps | ComboboxMultiProps

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function groupOptions(options: ComboboxOption[]): Array<{ name: string | null; items: ComboboxOption[] }> {
  const groups: Map<string | null, ComboboxOption[]> = new Map()

  for (const opt of options) {
    const key = opt.group ?? null
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key)!.push(opt)
  }

  return Array.from(groups.entries()).map(([name, items]) => ({ name, items }))
}

// Flatten grouped options preserving order, for index-based keyboard navigation
function flattenOptions(groups: Array<{ name: string | null; items: ComboboxOption[] }>): ComboboxOption[] {
  return groups.flatMap(g => g.items)
}

// ---------------------------------------------------------------------------
// Multi-select tag
// ---------------------------------------------------------------------------

function ComboboxTag({
  label,
  onRemove,
  disabled,
}: {
  label: string
  onRemove: () => void
  disabled?: boolean
}) {
  return (
    <span className="combobox__tag">
      <span className="combobox__tag-label">{label}</span>
      <button
        type="button"
        className="combobox__tag-remove"
        aria-label={`Remove ${label}`}
        tabIndex={-1}
        disabled={disabled}
        onMouseDown={e => {
          e.preventDefault() // keep focus on input
          onRemove()
        }}
      >
        <X size={12} aria-hidden="true" />
      </button>
    </span>
  )
}

// ---------------------------------------------------------------------------
// Combobox
// ---------------------------------------------------------------------------

export const Combobox = React.forwardRef<HTMLInputElement, ComboboxProps>(
  function Combobox(props, ref) {
    const {
      options,
      label,
      placeholder = 'Select or type to search…',
      hint,
      validation,
      validationMessage,
      size = 'medium',
      labelPosition = 'stacked',
      disabled,
      required,
      noResultsText = 'No results found',
      id: idProp,
      className,
    } = props

    const isMulti = props.selection === 'multi'

    // IDs
    const generatedId = useId()
    const inputId     = idProp ?? `combobox-${generatedId}`
    const listboxId   = `${inputId}-listbox`
    const hintId      = `${inputId}-hint`
    const messageId   = `${inputId}-message`

    // Refs
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef     = useRef<HTMLInputElement>(null)

    // Merge forwarded ref
    useEffect(() => {
      if (!ref) return
      if (typeof ref === 'function') ref(inputRef.current)
      else (ref as React.MutableRefObject<HTMLInputElement | null>).current = inputRef.current
    }, [ref])

    // Open state
    const [isOpen, setIsOpen] = useState(false)

    // Query — what's typed in the text input
    const [query, setQuery] = useState('')

    // Active keyboard index into the flat filtered options list
    const [activeIndex, setActiveIndex] = useState(-1)

    // --- Selection state (controlled / uncontrolled) ----------------------
    const isControlled = props.value !== undefined

    const [internalSelected, setInternalSelected] = useState<string[]>(() => {
      if (isMulti) return (props as ComboboxMultiProps).value ?? []
      const v = (props as ComboboxSingleProps).value
      return v ? [v] : []
    })

    const selectedValues: string[] = isControlled
      ? isMulti
        ? ((props as ComboboxMultiProps).value ?? [])
        : ((props as ComboboxSingleProps).value ? [(props as ComboboxSingleProps).value!] : [])
      : internalSelected

    // Look up option objects for selected values
    const selectedOptions = useMemo(
      () => selectedValues.map(v => options.find(o => o.value === v)).filter(Boolean) as ComboboxOption[],
      [selectedValues, options],
    )

    // --- Filtered + grouped options ---------------------------------------
    const filteredGroups = useMemo(() => {
      const q = query.toLowerCase().trim()
      const filtered = q
        ? options.filter(o => o.label.toLowerCase().includes(q))
        : options
      return groupOptions(filtered)
    }, [options, query])

    const flatFiltered = useMemo(() => flattenOptions(filteredGroups), [filteredGroups])

    // --- Selection helpers ------------------------------------------------
    const isSelected = useCallback(
      (value: string) => selectedValues.includes(value),
      [selectedValues],
    )

    const commit = useCallback(
      (values: string[]) => {
        if (!isControlled) setInternalSelected(values)
        if (isMulti) {
          ;(props as ComboboxMultiProps).onChange?.(values)
        } else {
          ;(props as ComboboxSingleProps).onChange?.(values[0] ?? null)
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [isControlled, isMulti],
    )

    const selectOption = useCallback(
      (option: ComboboxOption) => {
        if (option.disabled) return

        if (isMulti) {
          const next = isSelected(option.value)
            ? selectedValues.filter(v => v !== option.value)
            : [...selectedValues, option.value]
          commit(next)
          setQuery('')
          // Stay open for multi-select
          inputRef.current?.focus()
        } else {
          commit([option.value])
          setQuery('')
          setIsOpen(false)
          setActiveIndex(-1)
        }
      },
      [isMulti, isSelected, selectedValues, commit],
    )

    const removeTag = useCallback(
      (value: string) => {
        commit(selectedValues.filter(v => v !== value))
      },
      [selectedValues, commit],
    )

    // --- Open/close helpers ----------------------------------------------
    const open = () => {
      if (disabled) return
      setIsOpen(true)
      setActiveIndex(-1)
    }

    const close = () => {
      setIsOpen(false)
      setQuery('')
      setActiveIndex(-1)
    }

    // Click outside closes the dropdown
    useEffect(() => {
      if (!isOpen) return
      const handler = (e: MouseEvent) => {
        if (!containerRef.current?.contains(e.target as Node)) close()
      }
      document.addEventListener('mousedown', handler)
      return () => document.removeEventListener('mousedown', handler)
    }, [isOpen])

    // --- Input display value (single-select only) -------------------------
    // When closed: show selected option label. When open: show query.
    const inputDisplayValue = !isMulti && !isOpen && selectedOptions.length > 0
      ? selectedOptions[0].label
      : query

    // --- Keyboard navigation ---------------------------------------------
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      switch (e.key) {
        case 'ArrowDown': {
          e.preventDefault()
          if (!isOpen) { open(); return }
          setActiveIndex(i => Math.min(i + 1, flatFiltered.length - 1))
          break
        }
        case 'ArrowUp': {
          e.preventDefault()
          setActiveIndex(i => Math.max(i - 1, 0))
          break
        }
        case 'Enter': {
          e.preventDefault()
          if (!isOpen) { open(); return }
          if (activeIndex >= 0 && flatFiltered[activeIndex]) {
            selectOption(flatFiltered[activeIndex])
          }
          break
        }
        case 'Escape': {
          e.preventDefault()
          close()
          break
        }
        case 'Backspace': {
          // Multi-select: remove last tag when input is empty
          if (isMulti && query === '' && selectedValues.length > 0) {
            removeTag(selectedValues[selectedValues.length - 1])
          }
          break
        }
        default:
          break
      }
    }

    // Reset activeIndex when filtered list changes
    useEffect(() => {
      setActiveIndex(-1)
    }, [query])

    // Keep active option scrolled into view
    const listboxRef = useRef<HTMLUListElement>(null)
    useEffect(() => {
      if (activeIndex < 0 || !listboxRef.current) return
      const el = listboxRef.current.querySelector(`[data-index="${activeIndex}"]`)
      el?.scrollIntoView({ block: 'nearest' })
    }, [activeIndex])

    // --- Active descendant ID --------------------------------------------
    const activeDescendantId =
      activeIndex >= 0 && flatFiltered[activeIndex]
        ? `${listboxId}-${flatFiltered[activeIndex].value}`
        : undefined

    // --- aria-describedby ------------------------------------------------
    const describedBy = [
      hint ? hintId : null,
      validationMessage ? messageId : null,
    ].filter(Boolean).join(' ') || undefined

    // --- Render ----------------------------------------------------------
    return (
      <div
        ref={containerRef}
        className={['combobox', className].filter(Boolean).join(' ')}
        data-size={size}
        data-label-position={labelPosition}
        data-validation={validation}
        data-open={isOpen || undefined}
        data-disabled={disabled || undefined}
      >
        {/* Label */}
        {label && (
          <label className="combobox__label" htmlFor={inputId}>
            {label}
            {required && <span className="combobox__required" aria-hidden="true"> *</span>}
          </label>
        )}

        {/* Field wrapper */}
        <div
          className="combobox__field"
          onClick={() => { if (!isOpen) open(); inputRef.current?.focus() }}
        >
          {/* Multi-select tags */}
          {isMulti && selectedOptions.map(opt => (
            <ComboboxTag
              key={opt.value}
              label={opt.label}
              disabled={disabled}
              onRemove={() => removeTag(opt.value)}
            />
          ))}

          {/* Text input */}
          <input
            ref={inputRef}
            id={inputId}
            type="text"
            role="combobox"
            className="combobox__input"
            value={inputDisplayValue}
            placeholder={isMulti && selectedOptions.length > 0 ? '' : placeholder}
            disabled={disabled}
            required={required}
            aria-expanded={isOpen}
            aria-controls={isOpen ? listboxId : undefined}
            aria-activedescendant={activeDescendantId}
            aria-autocomplete="list"
            aria-describedby={describedBy}
            aria-required={required}
            autoComplete="off"
            onChange={e => {
              setQuery(e.target.value)
              if (!isOpen) open()
              // In single-select, typing clears the current value
              if (!isMulti && e.target.value === '' && selectedValues.length > 0) {
                commit([])
              }
            }}
            onFocus={open}
            onKeyDown={handleKeyDown}
          />

          {/* Chevron */}
          <ChevronDown
            className="combobox__chevron"
            size={16}
            aria-hidden="true"
          />
        </div>

        {/* Hint */}
        {hint && (
          <p id={hintId} className="combobox__hint">
            {hint}
          </p>
        )}

        {/* Validation message */}
        {validationMessage && (
          <p
            id={messageId}
            className="combobox__message"
            role={validation === 'negative' ? 'alert' : undefined}
          >
            {validationMessage}
          </p>
        )}

        {/* Dropdown listbox */}
        {isOpen && (
          <ul
            ref={listboxRef}
            id={listboxId}
            role="listbox"
            className="combobox__listbox"
            aria-label={label}
            aria-multiselectable={isMulti || undefined}
          >
            {flatFiltered.length === 0 ? (
              <li className="combobox__no-results" role="presentation">
                {noResultsText}
              </li>
            ) : (
              filteredGroups.map((group, gi) => (
                <React.Fragment key={group.name ?? `__group-${gi}`}>
                  {group.name && (
                    <li role="presentation" className="combobox__group-header">
                      {group.name}
                    </li>
                  )}
                  {gi > 0 && !group.name && (
                    <li role="separator" className="combobox__group-divider" />
                  )}
                  {group.items.map(opt => {
                    const idx   = flatFiltered.indexOf(opt)
                    const sel   = isSelected(opt.value)
                    const active = idx === activeIndex

                    return (
                      <li
                        key={opt.value}
                        id={`${listboxId}-${opt.value}`}
                        role="option"
                        aria-selected={sel}
                        aria-disabled={opt.disabled || undefined}
                        className="combobox__option"
                        data-index={idx}
                        data-active={active || undefined}
                        data-selected={sel || undefined}
                        data-disabled={opt.disabled || undefined}
                        onMouseDown={e => {
                          e.preventDefault() // prevent input blur before selection
                          selectOption(opt)
                        }}
                        onMouseEnter={() => setActiveIndex(idx)}
                      >
                        {/* Multi-select checkbox indicator */}
                        {isMulti && (
                          <span className="combobox__option-check" aria-hidden="true">
                            {sel && <Check size={12} />}
                          </span>
                        )}

                        {/* Option icon */}
                        {opt.icon && (
                          <span className="combobox__option-icon" aria-hidden="true">
                            {opt.icon}
                          </span>
                        )}

                        {/* Label + description */}
                        <span className="combobox__option-content">
                          <span className="combobox__option-label">{opt.label}</span>
                          {opt.description && (
                            <span className="combobox__option-description">
                              {opt.description}
                            </span>
                          )}
                        </span>

                        {/* Single-select checkmark */}
                        {!isMulti && sel && (
                          <Check
                            className="combobox__option-selected-icon"
                            size={16}
                            aria-hidden="true"
                          />
                        )}
                      </li>
                    )
                  })}
                </React.Fragment>
              ))
            )}
          </ul>
        )}
      </div>
    )
  },
)
