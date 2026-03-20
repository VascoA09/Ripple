import React from 'react'
import './List.css'

// =============================================================================
//   TYPES
// =============================================================================

export type ListSize = 'small' | 'medium'

// =============================================================================
//   CONTEXT
// =============================================================================

interface ListContextValue {
  size: ListSize
}

const ListContext = React.createContext<ListContextValue>({ size: 'medium' })

function useListContext() {
  return React.useContext(ListContext)
}

// =============================================================================
//   LIST
// =============================================================================

export interface ListProps {
  /**
   * Size applied to all items unless overridden per ListItem.
   * - 'small'  — 40px min-height, compact padding.
   * - 'medium' — 48px min-height, standard padding. Default.
   */
  size?: ListSize
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function List({ size = 'medium', children, className, style }: ListProps) {
  return (
    <ListContext.Provider value={{ size }}>
      <ul
        role="list"
        className={['list', className].filter(Boolean).join(' ')}
        style={style}
      >
        {children}
      </ul>
    </ListContext.Provider>
  )
}
List.displayName = 'List'

// =============================================================================
//   LIST ITEM
// =============================================================================

export interface ListItemProps {
  /** Main text content. */
  header: string
  /** Supporting text below the header. */
  description?: string
  /**
   * Leading content slot.
   * Common use: Avatar (user lists), Lucide icon (setting lists), custom.
   */
  contentBefore?: React.ReactNode
  /**
   * Trailing content slot.
   * Common use: action buttons, badges, tags, metadata icons.
   */
  contentAfter?: React.ReactNode
  /**
   * Size variant. Overrides the List-level size for this item.
   * - 'small'  — 40px min-height, 4px 12px padding.
   * - 'medium' — 48px min-height, 8px 16px padding. Default.
   */
  size?: ListSize
  /** Enable hover / active / focus states without a click handler. */
  interactive?: boolean
  /** Click handler. Auto-enables interactive states. */
  onClick?: () => void
  /** Renders the item's inner area as a link. Auto-enables interactive states. */
  href?: string
  /**
   * Show a bulk-selection checkbox on the leading edge.
   * Selection state is independent of item click interaction.
   */
  bulkSelect?: boolean
  /** Controlled checked state for the bulk-select checkbox. */
  bulkSelectChecked?: boolean
  /** Called when the bulk-select checkbox is toggled. */
  onBulkSelectChange?: (checked: boolean) => void
  /** Show an 8px primary dot on the left edge. */
  unreadIndicator?: boolean
  disabled?: boolean
  className?: string
}

export function ListItem({
  header,
  description,
  contentBefore,
  contentAfter,
  size: sizeProp,
  interactive,
  onClick,
  href,
  bulkSelect,
  bulkSelectChecked = false,
  onBulkSelectChange,
  unreadIndicator,
  disabled,
  className,
}: ListItemProps) {
  const { size: contextSize } = useListContext()
  const resolvedSize  = sizeProp ?? contextSize
  const isInteractive = interactive || !!onClick || !!href

  const slots = (
    <>
      {contentBefore && (
        <span className="list-item__before">{contentBefore}</span>
      )}
      <span className="list-item__content">
        <span className="list-item__header">{header}</span>
        {description && (
          <span className="list-item__description">{description}</span>
        )}
      </span>
      {contentAfter && (
        <span className="list-item__after">{contentAfter}</span>
      )}
    </>
  )

  const inner = href ? (
    <a href={href} className="list-item__inner">
      {slots}
    </a>
  ) : onClick ? (
    <button
      type="button"
      className="list-item__inner"
      onClick={onClick}
      disabled={disabled}
    >
      {slots}
    </button>
  ) : (
    <div className="list-item__inner">
      {slots}
    </div>
  )

  return (
    <li
      className={['list-item', className].filter(Boolean).join(' ')}
      data-size={resolvedSize}
      data-interactive={isInteractive ? '' : undefined}
      data-unread={unreadIndicator ? '' : undefined}
      data-disabled={disabled ? '' : undefined}
    >
      {bulkSelect && (
        <span
          className="list-item__bulk-select"
          onClick={e => e.stopPropagation()}
        >
          <input
            type="checkbox"
            className="list-item__checkbox"
            checked={bulkSelectChecked}
            disabled={disabled}
            aria-label="Select item"
            onChange={e => onBulkSelectChange?.(e.target.checked)}
          />
        </span>
      )}
      {inner}
    </li>
  )
}
ListItem.displayName = 'ListItem'
