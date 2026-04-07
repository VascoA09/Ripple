import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, LogOut } from 'lucide-react'
import { Avatar } from '../Avatar'
import { Button } from '../Button'
import { Tooltip } from '../Tooltip'
import './SideNav.css'

// =============================================================================
// TYPES
// =============================================================================

export interface SideNavItem {
  id: string
  /** Label shown in expanded state; used as aria-label in collapsed state. */
  label: string
  icon: React.ReactNode
  selected?: boolean
  onClick?: () => void
}

export interface SideNavProps {
  // ── Identity ────────────────────────────────────────────────────────────────
  userName: string
  userAvatarSrc?: string
  /** Tenant or environment name. */
  tenantName?: string

  // ── Navigation ──────────────────────────────────────────────────────────────
  items: SideNavItem[]

  // ── Footer metadata ─────────────────────────────────────────────────────────
  /** Called when the user clicks Log out. */
  onLogout: () => void
  /** Software version string, e.g. "v1.2.0". Hidden in collapsed state. */
  version?: string
  /** Copyright notice. Hidden in collapsed state. */
  copyright?: string

  // ── Collapse state ───────────────────────────────────────────────────────────
  /** Initial collapsed state for uncontrolled mode. Defaults to false. */
  defaultCollapsed?: boolean
  /** Controlled collapsed state. Provide alongside `onCollapsedChange`. */
  collapsed?: boolean
  /** Called when the user toggles the sidebar. */
  onCollapsedChange?: (collapsed: boolean) => void

  className?: string
}

// =============================================================================
// SIDE NAV
// =============================================================================

/**
 * SideNav is a persistent collapsible sidebar for the Extension Kit Navigation
 * template. It renders a user identity section, navigation items, and footer
 * metadata (logout, version, copyright).
 *
 * Collapse state is uncontrolled by default. Pass `collapsed` +
 * `onCollapsedChange` for controlled mode.
 *
 * Widths:
 *   Expanded  360px — icon + label
 *   Collapsed  56px — icon only; identity and metadata sections hidden
 */
export function SideNav({
  userName,
  userAvatarSrc,
  tenantName,
  items,
  onLogout,
  version,
  copyright,
  defaultCollapsed = false,
  collapsed: controlledCollapsed,
  onCollapsedChange,
  className,
}: SideNavProps) {
  const isControlled = controlledCollapsed !== undefined
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed)
  const isCollapsed = isControlled ? controlledCollapsed! : internalCollapsed

  function handleToggle() {
    const next = !isCollapsed
    if (!isControlled) setInternalCollapsed(next)
    onCollapsedChange?.(next)
  }

  return (
    <nav
      className={['side-nav', className].filter(Boolean).join(' ')}
      data-collapsed={isCollapsed || undefined}
      aria-label="Extension Kit navigation"
    >

      {/* ── Toggle ────────────────────────────────────────────────────────── */}
      <div className="side-nav__toggle">
        <button
          className="side-nav__toggle-btn"
          onClick={handleToggle}
          aria-expanded={!isCollapsed}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed
            ? <ChevronRight size={16} aria-hidden />
            : <ChevronLeft  size={16} aria-hidden />
          }
        </button>
      </div>

      {/* ── Identity — hidden in collapsed state ──────────────────────────── */}
      <div className="side-nav__identity" aria-hidden={isCollapsed || undefined}>
        <Avatar name={userName} src={userAvatarSrc} size="l" />
        <div className="side-nav__identity-text">
          <span className="side-nav__user-name">{userName}</span>
          {tenantName && (
            <span className="side-nav__tenant-name">{tenantName}</span>
          )}
        </div>
      </div>

      {/* ── Navigation items ──────────────────────────────────────────────── */}
      <div className="side-nav__items" role="list">
        {items.map(item => (
          <Tooltip
            key={item.id}
            content={item.label}
            placement="right"
            disabled={!isCollapsed}
          >
            <button
              role="listitem"
              className="side-nav__item"
              aria-current={item.selected ? 'page' : undefined}
              aria-label={isCollapsed ? item.label : undefined}
              onClick={item.onClick}
            >
              <span className="side-nav__item-icon" aria-hidden>{item.icon}</span>
              <span className="side-nav__item-label">{item.label}</span>
            </button>
          </Tooltip>
        ))}
      </div>

      {/* ── Footer — hidden in collapsed state ───────────────────────────── */}
      <div className="side-nav__footer">
        <Button
          variant="fill"
          color="primary"
          size="small"
          iconStart={<LogOut size={16} aria-hidden />}
          onClick={onLogout}
          className="side-nav__logout"
        >
          Log out
        </Button>

        {(version || copyright) && (
          <div className="side-nav__meta" aria-hidden>
            {version   && <span className="side-nav__version">{version}</span>}
            {copyright && <span className="side-nav__copyright">{copyright}</span>}
          </div>
        )}
      </div>

    </nav>
  )
}
