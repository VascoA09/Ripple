import React from 'react'
import { ChevronDown } from 'lucide-react'
import {
  FlyoutMenu,
  FlyoutMenuTrigger,
  FlyoutMenuContent,
  FlyoutMenuItem,
} from '../FlyoutMenu/FlyoutMenu'
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
  /** Secondary actions shown in the FlyoutMenu */
  items: SplitButtonItem[]
  /** Visual style. Ghost is not supported — use outline for low-emphasis. Default: 'fill' */
  variant?: 'fill' | 'outline'
  /** Semantic color. Default: 'primary' */
  color?: 'primary' | 'neutral' | 'negative'
  /**
   * Height scale. Default: 'medium'.
   * XSmall (24px) does not meet the 44×44px touch target standard —
   * restrict to dense toolbar contexts and enforce a spacing buffer at the usage site.
   */
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  /** Icon rendered before the primary label. Replaced by spinner during loading. */
  iconStart?: React.ReactNode
  /** Disables both SplitButtonAction and SplitButtonTrigger. */
  disabled?: boolean
  /**
   * Shows a spinner on SplitButtonAction and prevents its interaction.
   * SplitButtonTrigger is also suppressed while loading — opening the menu
   * during an in-flight action is undefined behaviour.
   */
  loading?: boolean
  /**
   * Accessible label for SplitButtonTrigger (icon-only).
   * Should follow the pattern "More [action] options", e.g. "More save options".
   */
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
    <FlyoutMenu>
      <div
        role="group"
        aria-label={label}
        className={['split-button', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-color={color}
        data-size={size}
        data-disabled={disabled || undefined}
        style={style}
      >
        {/* SplitButtonAction */}
        <button
          className="split-button__action"
          onClick={onClick}
          disabled={disabled || loading}
          aria-busy={loading || undefined}
          data-loading={loading ? 'true' : undefined}
        >
          {loading ? <Spinner /> : iconStart}
          {label}
        </button>

        {/* SplitButtonTrigger */}
        <FlyoutMenuTrigger asChild>
          <button
            className="split-button__trigger"
            aria-label={triggerLabel}
            disabled={disabled || loading}
          >
            <ChevronDown className="split-button__chevron" aria-hidden="true" />
          </button>
        </FlyoutMenuTrigger>
      </div>

      <FlyoutMenuContent align="start" sideOffset={4}>
        {items.map(item => (
          <FlyoutMenuItem
            key={item.id}
            disabled={item.disabled}
            onSelect={item.disabled ? undefined : item.onSelect}
          >
            {item.icon && (
              <span className="split-button__menu-icon" aria-hidden="true">
                {item.icon}
              </span>
            )}
            {item.label}
          </FlyoutMenuItem>
        ))}
      </FlyoutMenuContent>
    </FlyoutMenu>
  )
}
