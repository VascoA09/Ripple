import React from 'react'
import { X, EllipsisVertical } from 'lucide-react'
import { Button } from '../Button'
import './Tabs.css'

// =============================================================================
//   TYPES
// =============================================================================

export type TabsVariant = 'loud' | 'soft'
export type TabsSize    = 'medium' | 'mobile'

// =============================================================================
//   CONTEXT
// =============================================================================

interface TabsContextValue {
  activeTab: string
  onChange:  (value: string) => void
  size:      TabsSize
  baseId:    string
}

const TabsContext = React.createContext<TabsContextValue>({
  activeTab: '',
  onChange:  () => {},
  size:      'medium',
  baseId:    '',
})

function useTabsContext() {
  return React.useContext(TabsContext)
}

// =============================================================================
//   TABS ROOT
// =============================================================================

let _idCounter = 0

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Currently active tab value (controlled). */
  value: string
  /** Called when the user selects a different tab. */
  onValueChange: (value: string) => void
  /**
   * Size applied to all tabs in this group.
   * - 'medium'  — 40px height. Default.
   * - 'mobile'  — 48px height. For touch-first interfaces.
   */
  size?: TabsSize
  children: React.ReactNode
}

export function Tabs({
  value,
  onValueChange,
  size = 'medium',
  children,
  className,
  ...rest
}: TabsProps) {
  const [baseId] = React.useState(() => `tabs-${++_idCounter}`)

  return (
    <TabsContext.Provider value={{ activeTab: value, onChange: onValueChange, size, baseId }}>
      <div className={['tabs', className].filter(Boolean).join(' ')} {...rest}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}
Tabs.displayName = 'Tabs'

// =============================================================================
//   TAB LIST
// =============================================================================

export interface TabListProps {
  /**
   * Visual style.
   * - 'loud' — inset bottom divider. Default. Use for page-level tabs.
   * - 'soft' — no divider, only the selected tab indicator. Use inside containers.
   */
  variant?: TabsVariant
  /**
   * Horizontal padding. Sets both the visual padding and the divider inset so
   * the border aligns with the padded content edge.
   * Pass a CSS value, e.g. `'var(--spacing-150)'`.
   */
  padding?: string
  children: React.ReactNode
  className?: string
  /** Additional inline styles. */
  style?: React.CSSProperties
}

export function TabList({ variant = 'loud', padding, children, className, style }: TabListProps) {
  const computedStyle: React.CSSProperties = padding
    ? { ...style, paddingLeft: padding, paddingRight: padding, ['--_tab-inset' as string]: padding }
    : style ?? {}

  return (
    <div
      role="tablist"
      data-variant={variant}
      className={['tab-list', className].filter(Boolean).join(' ')}
      style={computedStyle}
    >
      {children}
    </div>
  )
}
TabList.displayName = 'TabList'

// =============================================================================
//   TAB
// =============================================================================

export interface TabProps {
  /** Unique identifier matched against Tabs.value. */
  value: string
  /**
   * Decorative icon rendered before the label.
   * Use a Lucide icon — the component constrains it to 16px.
   * Use consistently across all tabs in a list, or not at all.
   */
  icon?: React.ReactNode
  /**
   * Counter rendered after the label.
   * Pass: <Counter count={n} variant="outline" color="neutral" />
   */
  counter?: React.ReactNode
  /**
   * Show a close (X) button. Visible on hover and when selected.
   * The close button is keyboard focusable only when the tab is selected.
   */
  closable?: boolean
  /** Called when the close button is clicked. */
  onClose?: () => void
  /**
   * Show a contextual menu button (⋮). Visible on hover and when selected.
   * The menu button is keyboard focusable only when the tab is selected.
   */
  onMenuClick?: () => void
  disabled?: boolean
  children: React.ReactNode
  className?: string
}

export function Tab({
  value,
  icon,
  counter,
  closable,
  onClose,
  onMenuClick,
  disabled,
  children,
  className,
}: TabProps) {
  const { activeTab, onChange, size, baseId } = useTabsContext()
  const isSelected = activeTab === value
  const hasActions = closable || !!onMenuClick

  return (
    <div
      className={['tab-item', className].filter(Boolean).join(' ')}
      data-selected={isSelected ? '' : undefined}
      data-size={size}
      data-disabled={disabled ? '' : undefined}
    >
      {/* The actual tab interactive element */}
      <button
        type="button"
        role="tab"
        id={`${baseId}-tab-${value}`}
        aria-selected={isSelected}
        aria-controls={`${baseId}-panel-${value}`}
        disabled={disabled}
        className="tab"
        onClick={() => onChange(value)}
      >
        {icon && (
          <span className="tab__icon" aria-hidden="true">{icon}</span>
        )}
        <span className="tab__label">{children}</span>
        {counter && (
          <span className="tab__counter">{counter}</span>
        )}
      </button>

      {/* Close / menu buttons — siblings of the tab, not nested inside it */}
      {hasActions && (
        <span className="tab__actions">
          {onMenuClick && (
            <Button
              variant="ghost"
              size="small"
              color="neutral"
              iconStart={<EllipsisVertical size={14} />}
              aria-label="Tab options"
              tabIndex={isSelected ? 0 : -1}
              onClick={onMenuClick}
            />
          )}
          {closable && (
            <Button
              variant="ghost"
              size="small"
              color="neutral"
              iconStart={<X size={14} />}
              aria-label="Close tab"
              tabIndex={isSelected ? 0 : -1}
              onClick={onClose}
            />
          )}
        </span>
      )}
    </div>
  )
}
Tab.displayName = 'Tab'

// =============================================================================
//   TAB PANEL
// =============================================================================

export interface TabPanelProps {
  /** Renders only when this value matches the active tab. */
  value: string
  children: React.ReactNode
  className?: string
  /** Inline styles. Use to override the default 16px padding, e.g. when inside a Panel. */
  style?: React.CSSProperties
}

export function TabPanel({ value, children, className, style }: TabPanelProps) {
  const { activeTab, baseId } = useTabsContext()

  if (activeTab !== value) return null

  return (
    <div
      role="tabpanel"
      id={`${baseId}-panel-${value}`}
      aria-labelledby={`${baseId}-tab-${value}`}
      tabIndex={0}
      className={['tab-panel', className].filter(Boolean).join(' ')}
      style={style}
    >
      {children}
    </div>
  )
}
TabPanel.displayName = 'TabPanel'
