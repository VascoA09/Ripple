import React, { useState } from 'react'
import { X, Check } from 'lucide-react'
import './Chip.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type ChipSize = 'small' | 'medium'

export interface ChipProps {
  /** Chip label — required */
  label: string
  /**
   * selectable: toggles between selected/unselected (stays visible).
   * removable:  displays a close button and disappears when removed.
   */
  variant: 'selectable' | 'removable'
  /** Icon rendered before the label. Caller is responsible for sizing
   *  (12px for small, 16px for medium). */
  icon?: React.ReactNode
  /** Counter badge rendered after the label */
  count?: number
  /** Height scale — defaults to medium */
  size?: ChipSize
  /** Prevents all interaction */
  disabled?: boolean

  // Selectable-specific
  /** Controlled selected state */
  selected?: boolean
  /** Uncontrolled initial selected state */
  defaultSelected?: boolean
  /** Fires when selected state changes */
  onChange?: (selected: boolean) => void

  // Removable-specific
  /** Fires when the close button is clicked */
  onRemove?: () => void

  className?: string
}

export interface ChipGroupProps {
  /** Accessible label for the group */
  'aria-label'?: string
  /** Gap between chips: 'default' = 8px, 'loose' = 12px */
  gap?: 'default' | 'loose'
  children: React.ReactNode
  className?: string
}

// ---------------------------------------------------------------------------
// Icon sizes per chip size
// ---------------------------------------------------------------------------

const ICON_SIZE: Record<ChipSize, number> = { small: 12, medium: 16 }

// ---------------------------------------------------------------------------
// Chip
// ---------------------------------------------------------------------------

export const Chip = React.forwardRef<HTMLButtonElement | HTMLSpanElement, ChipProps>(
  function Chip(
    {
      label,
      variant,
      icon,
      count,
      size = 'medium',
      disabled,
      selected: selectedProp,
      defaultSelected = false,
      onChange,
      onRemove,
      className,
    },
    ref,
  ) {
    // Uncontrolled state for selectable chips
    const [internalSelected, setInternalSelected] = useState(defaultSelected)
    const isControlled = selectedProp !== undefined
    const selected     = isControlled ? selectedProp : internalSelected

    const iconSize = ICON_SIZE[size]

    // -------------------------------------------------------------------------
    // Selectable variant
    // -------------------------------------------------------------------------

    if (variant === 'selectable') {
      const handleClick = () => {
        if (disabled) return
        const next = !selected
        if (!isControlled) setInternalSelected(next)
        onChange?.(next)
      }

      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          className={['chip', className].filter(Boolean).join(' ')}
          data-variant="selectable"
          data-size={size}
          aria-pressed={selected}
          disabled={disabled}
          onClick={handleClick}
        >
          {selected && (
            <Check
              className="chip__check"
              size={iconSize}
              aria-hidden="true"
            />
          )}

          {icon && (
            <span className="chip__icon" aria-hidden="true">
              {icon}
            </span>
          )}

          <span className="chip__label">{label}</span>

          {count !== undefined && (
            <span className="chip__count" aria-label={`${count} items`}>
              {count}
            </span>
          )}
        </button>
      )
    }

    // -------------------------------------------------------------------------
    // Removable variant
    // -------------------------------------------------------------------------

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={['chip', className].filter(Boolean).join(' ')}
        data-variant="removable"
        data-size={size}
        data-disabled={disabled || undefined}
      >
        {icon && (
          <span className="chip__icon" aria-hidden="true">
            {icon}
          </span>
        )}

        <span className="chip__label">{label}</span>

        {count !== undefined && (
          <span className="chip__count" aria-label={`${count} items`}>
            {count}
          </span>
        )}

        <button
          type="button"
          className="chip__remove"
          aria-label={`Remove ${label}`}
          disabled={disabled}
          onClick={onRemove}
          tabIndex={disabled ? -1 : undefined}
        >
          <X size={iconSize} aria-hidden="true" />
        </button>
      </span>
    )
  },
)

// ---------------------------------------------------------------------------
// ChipGroup
// ---------------------------------------------------------------------------

export function ChipGroup({
  'aria-label': ariaLabel,
  gap = 'default',
  children,
  className,
}: ChipGroupProps) {
  return (
    <div
      role="group"
      aria-label={ariaLabel}
      className={['chip-group', className].filter(Boolean).join(' ')}
      data-gap={gap}
    >
      {children}
    </div>
  )
}
