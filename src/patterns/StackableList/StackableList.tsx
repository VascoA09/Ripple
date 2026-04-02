import React, { createContext, useContext } from 'react'
import './StackableList.css'

// =============================================================================
// CONTEXT — shares state between root and children
// =============================================================================

interface StackableListContextValue {
  hasActions: boolean
}

const StackableListContext = createContext<StackableListContextValue>({ hasActions: false })
const useStackableListContext = () => useContext(StackableListContext)

// =============================================================================
// TYPES
// =============================================================================

export type StackableListAlign = 'start' | 'center' | 'end'

// =============================================================================
// STACKABLE LIST — root
// =============================================================================

export interface StackableListProps {
  /**
   * CSS grid-template-columns value applied to every header and item row.
   * Example: "2fr 1fr 1fr 120px"
   * Defaults to a single flexible column.
   */
  columns?: string
  /**
   * When true, a trailing 40px slot is reserved on every row for row actions
   * (contextual menu, quick actions). Pass true whenever any StackableListItem
   * uses the `actions` prop.
   */
  hasActions?: boolean
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function StackableList({
  columns = '1fr',
  hasActions = false,
  children,
  className,
  style,
}: StackableListProps) {
  return (
    <StackableListContext.Provider value={{ hasActions }}>
      <div
        className={['stackable-list', className].filter(Boolean).join(' ')}
        style={{ '--_cols': columns, ...style } as React.CSSProperties}
        role="table"
      >
        {children}
      </div>
    </StackableListContext.Provider>
  )
}

// =============================================================================
// STACKABLE LIST HEADER
// =============================================================================

export interface StackableListHeaderProps {
  children: React.ReactNode
  className?: string
}

export function StackableListHeader({ children, className }: StackableListHeaderProps) {
  const { hasActions } = useStackableListContext()

  return (
    <div
      className={['stackable-list__header', className].filter(Boolean).join(' ')}
      role="row"
    >
      {children}
      {/* Trailing spacer matches the actions slot on items */}
      {hasActions && <div className="stackable-list__header-actions-spacer" aria-hidden="true" />}
    </div>
  )
}

// =============================================================================
// STACKABLE LIST HEADER CELL
// =============================================================================

export interface StackableListHeaderCellProps {
  /** Column label. Omit for decorative or action columns. */
  children?: React.ReactNode
  /** Icon before the label. */
  iconBefore?: React.ReactNode
  /** Icon after the label — typically a sort indicator or info icon. */
  iconAfter?: React.ReactNode
  /** Secondary text below the label. */
  description?: string
  /** Text alignment within the cell. Defaults to 'start'. */
  align?: StackableListAlign
  className?: string
}

export function StackableListHeaderCell({
  children,
  iconBefore,
  iconAfter,
  description,
  align = 'start',
  className,
}: StackableListHeaderCellProps) {
  return (
    <div
      className={['stackable-list__header-cell', className].filter(Boolean).join(' ')}
      data-align={align}
      role="columnheader"
      aria-label={typeof children === 'string' ? children : undefined}
    >
      {iconBefore && (
        <span className="stackable-list__header-cell-icon" aria-hidden="true">
          {iconBefore}
        </span>
      )}
      {children && (
        <span className="stackable-list__header-cell-label">{children}</span>
      )}
      {iconAfter && (
        <span className="stackable-list__header-cell-icon" aria-hidden="true">
          {iconAfter}
        </span>
      )}
      {description && (
        <span className="stackable-list__header-cell-description">{description}</span>
      )}
    </div>
  )
}

// =============================================================================
// STACKABLE LIST BODY
// =============================================================================

export interface StackableListBodyProps {
  children: React.ReactNode
  className?: string
}

export function StackableListBody({ children, className }: StackableListBodyProps) {
  return (
    <div
      className={['stackable-list__body', className].filter(Boolean).join(' ')}
      role="rowgroup"
    >
      {children}
    </div>
  )
}

// =============================================================================
// STACKABLE LIST ITEM
// =============================================================================

export interface StackableListItemProps {
  /**
   * Shows an unread indicator on the leading edge of the row.
   * Use to distinguish items that have not been seen by the user.
   */
  unread?: boolean
  /** Makes the row interactive (button behaviour). */
  onClick?: React.MouseEventHandler<HTMLDivElement>
  /** Visually highlights the row as selected. */
  selected?: boolean
  /** Disables interaction and dims the row. */
  disabled?: boolean
  /**
   * Trailing actions — typically a FlyoutMenu for contextual actions.
   * Renders in a fixed-width slot on the right, outside the column grid.
   * Visible on hover/focus; always visible while the menu is open.
   * Only renders when StackableList has `hasActions={true}`.
   */
  actions?: React.ReactNode
  /**
   * Optional footer area rendered below the column cells.
   * Spans the full item width (minus the actions slot).
   * Use for tags, secondary attributes, or any supplementary content.
   */
  footer?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function StackableListItem({
  unread,
  onClick,
  selected,
  disabled,
  actions,
  footer,
  children,
  className,
}: StackableListItemProps) {
  const { hasActions } = useStackableListContext()
  const isInteractive = Boolean(onClick) && !disabled

  return (
    <div
      className={['stackable-list__item', className].filter(Boolean).join(' ')}
      role="row"
      data-unread={unread || undefined}
      data-selected={selected || undefined}
      data-disabled={disabled || undefined}
      data-interactive={isInteractive || undefined}
      data-has-footer={footer ? true : undefined}
      onClick={isInteractive ? onClick : undefined}
      tabIndex={isInteractive ? 0 : undefined}
      onKeyDown={isInteractive ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onClick?.(e as unknown as React.MouseEvent<HTMLDivElement>)
        }
      } : undefined}
      aria-selected={selected}
      aria-disabled={disabled}
    >
      {/* Unread accent */}
      {unread && (
        <span className="stackable-list__unread-dot" aria-label="Unread" />
      )}

      {/* Main row: column cells + actions */}
      <div className="stackable-list__item-main">
        <div className="stackable-list__item-columns">
          {children}
        </div>

        {/* Actions slot — shown on hover/focus */}
        {hasActions && (
          <div className="stackable-list__item-actions">
            {actions}
          </div>
        )}
      </div>

      {/* Item footer — optional, spans full width below main row */}
      {footer && (
        <div className="stackable-list__item-footer">
          {footer}
        </div>
      )}
    </div>
  )
}

// =============================================================================
// STACKABLE LIST CELL
// =============================================================================

export interface StackableListCellProps {
  /** Text alignment within the cell. Defaults to 'start'. */
  align?: StackableListAlign
  children?: React.ReactNode
  className?: string
}

export function StackableListCell({
  align = 'start',
  children,
  className,
}: StackableListCellProps) {
  return (
    <div
      className={['stackable-list__cell', className].filter(Boolean).join(' ')}
      data-align={align}
      role="cell"
    >
      {children}
    </div>
  )
}

