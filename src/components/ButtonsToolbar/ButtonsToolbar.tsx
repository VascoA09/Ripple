import React from 'react'
import { MoreVertical } from 'lucide-react'
import { Button } from '../Button'
import { IconButton } from '../IconButton'
import {
  FlyoutMenu,
  FlyoutMenuTrigger,
  FlyoutMenuContent,
  FlyoutMenuItem,
} from '../FlyoutMenu'
import './ButtonsToolbar.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ToolbarAction {
  /** Unique identifier */
  id: string
  /** Button label (also used as aria-label in icon-only mode) */
  label: string
  /** Optional icon rendered before the label */
  icon?: React.ReactNode
  /** Visual emphasis level */
  type?: 'primary' | 'secondary' | 'tertiary'
  /** Button height scale — defaults to medium */
  size?: 'small' | 'medium' | 'large'
  /** Click handler */
  onClick?: () => void
  /** Prevents interaction */
  disabled?: boolean
  /** Shows spinner and disables button */
  loading?: boolean
  /** Tooltip text for icon-only mode */
  tooltip?: string
}

export interface ButtonsToolbarProps {
  /** Ordered array of toolbar actions */
  actions: ToolbarAction[]
  /**
   * Display variant controlling how many buttons are visible.
   * - full:    up to 5 visible, overflow for 6+
   * - compact: up to 3 visible, overflow for the rest
   * - minimal: primary action only, all others in overflow
   * Defaults to 'full'. Use CSS media queries to swap variants responsively.
   */
  variant?: 'full' | 'compact' | 'minimal'
  /**
   * Renders icon-only buttons. All actions must have an `icon` defined.
   * Overflow menu always shows labels regardless of this setting.
   */
  iconOnly?: boolean
  /**
   * Controls button order and overflow position.
   * - left (default): fill rightmost — [overflow] [ghost…] [outline] [fill]
   * - right: fill leftmost — [fill] [outline] [ghost…] [overflow]
   *
   * In a combined toolbar layout, use alignment="right" on the left toolbar
   * so both toolbars read highest-to-lowest emphasis from their outer edges inward.
   */
  alignment?: 'left' | 'right'
  className?: string
  style?: React.CSSProperties
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const MAX_VISIBLE: Record<NonNullable<ButtonsToolbarProps['variant']>, number> = {
  full:    4, // 4 non-primary + 1 primary = 5 total
  compact: 2, // 2 non-primary + 1 primary = 3 total
  minimal: 0, // primary only
}

function actionVariant(type: ToolbarAction['type']) {
  if (type === 'primary')   return 'fill'
  if (type === 'secondary') return 'outline'
  return 'ghost'
}

function actionColor(type: ToolbarAction['type']): 'primary' | 'neutral' {
  return type === 'primary' ? 'primary' : 'neutral'
}

// ---------------------------------------------------------------------------
// Single action button
// ---------------------------------------------------------------------------

function ActionButton({
  action,
  iconOnly,
}: {
  action: ToolbarAction
  iconOnly: boolean
}) {
  const size   = action.size ?? 'medium'
  const variant = actionVariant(action.type)
  const color   = actionColor(action.type)

  if (iconOnly && action.icon) {
    return (
      <IconButton
        icon={action.icon}
        aria-label={action.label}
        variant={variant}
        color={color}
        size={size}
        disabled={action.disabled}
        loading={action.loading}
        onClick={action.onClick}
        title={action.tooltip ?? action.label}
      />
    )
  }

  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      iconStart={action.icon}
      disabled={action.disabled}
      loading={action.loading}
      onClick={action.onClick}
    >
      {action.label}
    </Button>
  )
}

// ---------------------------------------------------------------------------
// Overflow trigger + dropdown
// ---------------------------------------------------------------------------

function OverflowMenu({
  actions,
  alignment,
}: {
  actions: ToolbarAction[]
  alignment: 'left' | 'right'
}) {
  return (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <IconButton
          icon={<MoreVertical size={16} />}
          aria-label="More actions"
          variant="ghost"
          color="neutral"
          size="medium"
        />
      </FlyoutMenuTrigger>

      <FlyoutMenuContent
        sideOffset={4}
        align={alignment === 'left' ? 'start' : 'end'}
      >
        {actions.map(action => (
          <FlyoutMenuItem
            key={action.id}
            disabled={action.disabled}
            onSelect={action.disabled ? undefined : action.onClick}
          >
            {action.icon && (
              <span className="flyout-menu-item-icon" aria-hidden="true">{action.icon}</span>
            )}
            {action.label}
          </FlyoutMenuItem>
        ))}
      </FlyoutMenuContent>
    </FlyoutMenu>
  )
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function ButtonsToolbar({
  actions,
  variant = 'full',
  iconOnly = false,
  alignment = 'left',
  className,
  style,
}: ButtonsToolbarProps) {
  // Separate primary (last one marked primary, or last action as fallback)
  const primaryIndex = (() => {
    const idx = [...actions].reverse().findIndex(a => a.type === 'primary')
    return idx === -1 ? actions.length - 1 : actions.length - 1 - idx
  })()

  const primaryAction   = actions[primaryIndex]
  const nonPrimary      = actions.filter((_, i) => i !== primaryIndex)

  // Compute visible vs overflow non-primary actions
  const maxVisible = MAX_VISIBLE[variant]
  let visibleNonPrimary: ToolbarAction[]
  let overflowActions:   ToolbarAction[]

  if (maxVisible === 0 || nonPrimary.length === 0) {
    visibleNonPrimary = []
    overflowActions   = nonPrimary
  } else if (nonPrimary.length <= maxVisible) {
    visibleNonPrimary = nonPrimary
    overflowActions   = []
  } else {
    // Keep the last N non-primary (closest to primary); push the rest to overflow
    visibleNonPrimary = nonPrimary.slice(-maxVisible)
    overflowActions   = nonPrimary.slice(0, -maxVisible)
  }

  const hasOverflow = overflowActions.length > 0

  // Build content
  const overflowTrigger = hasOverflow ? (
    <OverflowMenu
      key="__overflow"
      actions={overflowActions}
      alignment={alignment}
    />
  ) : null

  // For right alignment, reverse non-primary order so emphasis reads
  // fill → outline → ghost (left to right) instead of ghost → outline → fill
  const orderedNonPrimary = alignment === 'right'
    ? [...visibleNonPrimary].reverse()
    : visibleNonPrimary

  const visibleButtons = orderedNonPrimary.map(action => (
    <ActionButton key={action.id} action={action} iconOnly={iconOnly} />
  ))

  const primaryButton = (
    <ActionButton key={primaryAction.id} action={primaryAction} iconOnly={iconOnly} />
  )

  // Render order based on alignment
  // left:  [overflow] [ghost...] [outline] [fill]
  // right: [fill] [outline] [ghost...] [overflow]
  const content = alignment === 'left'
    ? [overflowTrigger, ...visibleButtons, primaryButton]
    : [primaryButton, ...visibleButtons, overflowTrigger]

  return (
    <div
      role="toolbar"
      aria-label="Page actions"
      className={['buttons-toolbar', className].filter(Boolean).join(' ')}
      data-variant={variant}
      data-alignment={alignment}
      style={style}
    >
      {content}
    </div>
  )
}
