import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { ChevronDown } from 'lucide-react'
import './SplitButton.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface SplitButtonItem {
  /** Unique identifier */
  id: string
  /** Menu item label */
  label: string
  /** Optional icon rendered before the label */
  icon?: React.ReactNode
  /** Prevents the item from being selected */
  disabled?: boolean
  /** Called when the item is selected */
  onSelect: () => void
}

export interface SplitButtonProps {
  /** Primary action label */
  label: string
  /** Primary action handler */
  onClick: () => void
  /** Secondary actions shown in the dropdown menu */
  items: SplitButtonItem[]
  /** Visual style. Default: 'fill' */
  variant?: 'fill' | 'outline' | 'ghost'
  /** Semantic color. Default: 'primary' */
  color?: 'primary' | 'neutral' | 'negative'
  /** Height scale. Default: 'medium' */
  size?: 'small' | 'medium' | 'large'
  /** Icon rendered before the primary label. Replaced by spinner during loading. */
  iconStart?: React.ReactNode
  /** Disables both the primary button and the dropdown trigger. */
  disabled?: boolean
  /** Shows a spinner on the primary button and prevents its interaction. The trigger remains active. */
  loading?: boolean
  /** Accessible label for the dropdown trigger. Default: 'More options' */
  triggerLabel?: string
  className?: string
  style?: React.CSSProperties
}

// ---------------------------------------------------------------------------
// Spinner
// ---------------------------------------------------------------------------

function Spinner() {
  return <span className="split-button__spinner" aria-hidden="true" />
}

// ---------------------------------------------------------------------------
// SplitButton
// ---------------------------------------------------------------------------

export function SplitButton({
  label,
  onClick,
  items,
  variant  = 'fill',
  color    = 'primary',
  size     = 'medium',
  iconStart,
  disabled = false,
  loading  = false,
  triggerLabel = 'More options',
  className,
  style,
}: SplitButtonProps) {
  return (
    <DropdownMenu.Root>
      <div
        className={['split-button', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-color={color}
        data-size={size}
        data-disabled={disabled || undefined}
        style={style}
      >
        {/* Primary action */}
        <button
          className="split-button__primary"
          onClick={onClick}
          disabled={disabled || loading}
          aria-busy={loading || undefined}
          data-loading={loading ? 'true' : undefined}
        >
          {loading ? <Spinner /> : iconStart}
          {label}
        </button>

        {/* Divider */}
        <span className="split-button__divider" aria-hidden="true" />

        {/* Dropdown trigger */}
        <DropdownMenu.Trigger asChild>
          <button
            className="split-button__trigger"
            aria-label={triggerLabel}
            disabled={disabled}
          >
            <ChevronDown className="split-button__chevron" aria-hidden="true" />
          </button>
        </DropdownMenu.Trigger>
      </div>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="split-button__menu"
          sideOffset={4}
          align="end"
        >
          {items.map(item => (
            <DropdownMenu.Item
              key={item.id}
              className="split-button__menu-item"
              disabled={item.disabled}
              onSelect={item.disabled ? undefined : item.onSelect}
              data-disabled={item.disabled ? '' : undefined}
            >
              {item.icon && (
                <span className="split-button__menu-icon" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
