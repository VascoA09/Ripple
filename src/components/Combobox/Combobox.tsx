import React, {
  useId,
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from 'react'
import { ChevronDown, Check } from 'lucide-react'
import './Combobox.css'
import { Button } from '../Button'
import { Chip } from '../Chip'
import { Hint } from '../Hint'
import { ValidationMessage } from '../ValidationMessage'

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
  /**
   * Where selected chips are rendered.
   * - `below` (default): chips appear in a row below the input field.
   * - `inline`: chips appear inside the input field, before the text cursor.
   */
  chipPlacement?: 'below' | 'inline'
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

    const isMulti       = props.selection === 'multi'
    const chipPlacement = isMulti ? ((props as ComboboxMultiProps).chipPlacement ?? 'below') : 'inline'

    // IDs
    const generatedId = useId()
    const inputId     = idProp ?? `combobox-${generatedId}`
    const listboxId   = `${inputId}-listbox`
    const hintId      = `${inputId}-hint`
    const messageId   = `${inputId}-message`

    // Refs
    const containerRef     = useRef<HTMLDivElement>(null)
    const inputRef         = useRef<HTMLInputElement>(null)
    const chipsInlineRef   = useRef<HTMLDivElement>(null)
    const cachedWidths     = useRef<number[]>([])
    const chipsBelowRef    = useRef<HTMLDivElement>(null)
    const cachedWidthsBelow = useRef<number[]>([])

    // Chips overflow — how many chips are hidden (collapsed into +N)
    const [hiddenCount, setHiddenCount]           = useState(0)
    const [hiddenCountBelow, setHiddenCountBelow] = useState(0)

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

    // --- Select all / clear helpers (multi only) --------------------------
    const allSelectableValues = useMemo(
      () => options.filter(o => !o.disabled).map(o => o.value),
      [options],
    )

    const allSelected = useMemo(
      () => allSelectableValues.length > 0 && allSelectableValues.every(v => selectedValues.includes(v)),
      [allSelectableValues, selectedValues],
    )

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

    // --- Inline chips overflow calculation --------------------------------
    // Stable recalculate — uses cached widths so ResizeObserver doesn't
    // cause re-measurement (which would trigger another layout cycle).
    const calculateOverflow = useCallback(() => {
      const container = chipsInlineRef.current
      if (!container) return
      const widths = cachedWidths.current
      if (widths.length === 0) { setHiddenCount(0); return }

      const containerWidth = container.clientWidth
      const gap = 8 // --spacing-50

      // All chips fit? No overflow needed.
      const totalWidth = widths.reduce((sum, w, i) => sum + w + (i > 0 ? gap : 0), 0)
      if (totalWidth <= containerWidth) { setHiddenCount(0); return }

      // Need overflow indicator. Estimate its width conservatively.
      // Iterate from the END so we measure the actual widths of the chips
      // we'll be showing (newest selections stay visible; oldest collapse into +N).
      const overflowIndicatorWidth = 72 // "+99 ×" at small chip size
      let available = containerWidth - overflowIndicatorWidth - gap
      let visibleFromEnd = 0
      for (let i = widths.length - 1; i >= 0; i--) {
        const needed = widths[i] + (visibleFromEnd > 0 ? gap : 0)
        if (available >= needed) { available -= needed; visibleFromEnd++ }
        else break
      }
      setHiddenCount(widths.length - visibleFromEnd)
    }, [])

    // Measure chip widths after selection changes. Ghost chips are absolutely
    // positioned so they're always measurable regardless of hiddenCount.
    useLayoutEffect(() => {
      if (chipPlacement !== 'inline' || !chipsInlineRef.current) {
        setHiddenCount(0)
        return
      }
      const ghostEls = Array.from(
        chipsInlineRef.current.querySelectorAll<HTMLElement>('[data-chip-ghost]'),
      )
      cachedWidths.current = ghostEls.map(el => el.getBoundingClientRect().width)
      calculateOverflow()
    }, [selectedOptions, chipPlacement, calculateOverflow])

    // Recalculate inline chips on container resize
    useEffect(() => {
      if (chipPlacement !== 'inline' || !chipsInlineRef.current) return
      const ro = new ResizeObserver(calculateOverflow)
      ro.observe(chipsInlineRef.current)
      return () => ro.disconnect()
    }, [chipPlacement, calculateOverflow])

    // --- Below chips overflow calculation ---------------------------------
    const calculateOverflowBelow = useCallback(() => {
      const container = chipsBelowRef.current
      if (!container) return
      const widths = cachedWidthsBelow.current
      if (widths.length === 0) { setHiddenCountBelow(0); return }

      const containerWidth = container.clientWidth
      const gap = 8

      const totalWidth = widths.reduce((sum, w, i) => sum + w + (i > 0 ? gap : 0), 0)
      if (totalWidth <= containerWidth) { setHiddenCountBelow(0); return }

      const overflowIndicatorWidth = 72
      let available = containerWidth - overflowIndicatorWidth - gap
      let visibleFromEnd = 0
      for (let i = widths.length - 1; i >= 0; i--) {
        const needed = widths[i] + (visibleFromEnd > 0 ? gap : 0)
        if (available >= needed) { available -= needed; visibleFromEnd++ }
        else break
      }
      setHiddenCountBelow(widths.length - visibleFromEnd)
    }, [])

    useLayoutEffect(() => {
      if (chipPlacement !== 'below' || !chipsBelowRef.current) {
        setHiddenCountBelow(0)
        return
      }
      const ghostEls = Array.from(
        chipsBelowRef.current.querySelectorAll<HTMLElement>('[data-chip-ghost]'),
      )
      cachedWidthsBelow.current = ghostEls.map(el => el.getBoundingClientRect().width)
      calculateOverflowBelow()
    }, [selectedOptions, chipPlacement, calculateOverflowBelow])

    useEffect(() => {
      if (chipPlacement !== 'below' || !chipsBelowRef.current) return
      const ro = new ResizeObserver(calculateOverflowBelow)
      ro.observe(chipsBelowRef.current)
      return () => ro.disconnect()
    }, [chipPlacement, calculateOverflowBelow])

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

    // --- ARIA wiring -----------------------------------------------------
    // negative: aria-invalid + aria-errormessage (not in describedby)
    // positive / notice: aria-describedby includes the message id
    const isNegative  = validation === 'negative'
    const describedBy = [
      hint ? hintId : null,
      validationMessage && !isNegative ? messageId : null,
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

        {/* Field row — flex row wrapping field-wrap + inline chips */}
        <div className={isMulti && chipPlacement === 'inline' ? 'combobox__field-row' : undefined}>

        {/* Field wrap — position:relative anchor for the panel */}
        <div className="combobox__field-wrap">
        <div
          className="combobox__field"
          onClick={() => { if (!isOpen) open(); inputRef.current?.focus() }}
        >
          {/* Leading element — icon, avatar, or flag from the selected option (single-select only) */}
          {!isMulti && selectedOptions.length > 0 && selectedOptions[0].icon && (
            <span className="combobox__field-leading" aria-hidden="true">
              {selectedOptions[0].icon}
            </span>
          )}

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
            aria-invalid={isNegative && !!validationMessage ? true : undefined}
            aria-errormessage={isNegative && validationMessage ? messageId : undefined}
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

        {/* Dropdown panel — anchored to field-wrap, appears 4px below field */}
        {isOpen && (
          <div className="combobox__panel">
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
                        {/* Single-select checkmark — leading, left-aligned */}
                        {!isMulti && (
                          <Check
                            className="combobox__option-selected-icon"
                            size={16}
                            aria-hidden="true"
                            style={{ visibility: sel ? 'visible' : 'hidden' }}
                          />
                        )}

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
                      </li>
                    )
                  })}
                </React.Fragment>
              ))
            )}
          </ul>

          {/* Footer — Select all / Clear (multi-select only) */}
          {isMulti && (
            <div className="combobox__footer">
              <Button
                variant="outline"
                color="neutral"
                size="small"
                disabled={selectedValues.length === 0}
                onMouseDown={e => {
                  e.preventDefault()
                  commit([])
                }}
              >
                Clear
              </Button>
              <Button
                variant="fill"
                color="primary"
                size="small"
                disabled={allSelected}
                onMouseDown={e => {
                  e.preventDefault()
                  commit(allSelectableValues)
                }}
              >
                Select all
              </Button>
            </div>
          )}
          </div>
        )}

        </div>{/* /combobox__field-wrap */}

        {/* Inline chips — to the right of the field, inside the flex row */}
        {isMulti && chipPlacement === 'inline' && selectedOptions.length > 0 && (
          <div ref={chipsInlineRef} className="combobox__chips combobox__chips--inline">

            {/* Ghost chips — absolutely positioned off-screen for width measurement.
                Always rendered so cachedWidths stays current regardless of hiddenCount. */}
            {selectedOptions.map(opt => (
              <span key={`ghost-${opt.value}`} data-chip-ghost aria-hidden="true" className="combobox__chip-ghost">
                <Chip variant="removable" label={opt.label} size="small" />
              </span>
            ))}

            {/* Overflow indicator — leftmost, visible when chips are hidden */}
            {hiddenCount > 0 && (
              <Chip
                variant="removable"
                label={`+${hiddenCount}`}
                size="small"
                onRemove={disabled ? undefined : () => {
                  const hiddenValues = selectedOptions.slice(0, hiddenCount).map(o => o.value)
                  commit(selectedValues.filter(v => !hiddenValues.includes(v)))
                }}
              />
            )}

            {/* Visible chips — those not collapsed into the overflow indicator */}
            {selectedOptions.slice(hiddenCount).map(opt => (
              <Chip
                key={opt.value}
                variant="removable"
                label={opt.label}
                size="small"
                onRemove={disabled ? undefined : () => removeTag(opt.value)}
              />
            ))}
          </div>
        )}

        </div>{/* /combobox__field-row */}

        {/* Hint */}
        {hint && <Hint id={hintId} text={hint} />}

        {/* Validation message */}
        {validationMessage && validation && (
          <ValidationMessage id={messageId} message={validationMessage} variant={validation} />
        )}

        {/* Below chips — after hint/message, single row with overflow collapse */}
        {isMulti && chipPlacement === 'below' && selectedOptions.length > 0 && (
          <div ref={chipsBelowRef} className="combobox__chips">

            {/* Ghost chips — off-screen, always rendered for measurement */}
            {selectedOptions.map(opt => (
              <span key={`ghost-below-${opt.value}`} data-chip-ghost aria-hidden="true" className="combobox__chip-ghost">
                <Chip variant="removable" label={opt.label} size="small" />
              </span>
            ))}

            {/* Overflow indicator */}
            {hiddenCountBelow > 0 && (
              <Chip
                variant="removable"
                label={`+${hiddenCountBelow}`}
                size="small"
                onRemove={disabled ? undefined : () => {
                  const hiddenValues = selectedOptions.slice(0, hiddenCountBelow).map(o => o.value)
                  commit(selectedValues.filter(v => !hiddenValues.includes(v)))
                }}
              />
            )}

            {/* Visible chips */}
            {selectedOptions.slice(hiddenCountBelow).map(opt => (
              <Chip
                key={opt.value}
                variant="removable"
                label={opt.label}
                size="small"
                onRemove={disabled ? undefined : () => removeTag(opt.value)}
              />
            ))}
          </div>
        )}
      </div>
    )
  },
)
