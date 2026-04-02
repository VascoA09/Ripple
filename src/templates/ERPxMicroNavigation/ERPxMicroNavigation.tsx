import React from 'react'
import { Bell, Building2, Grid3X3, Search } from 'lucide-react'
import { MicroNavigation } from '../../layouts/MicroNavigation'
import type { MicroNavigationProps } from '../../layouts/MicroNavigation'
import type { MainNavItem } from '../../patterns/MainNavigation'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ERPxMicroNavigationProps {
  /**
   * Nav props forwarded to MicroNavigation, minus `globalNavItems`.
   * The four ERPx global actions (Search, Global Hub, Notifications, Client)
   * are pre-defined by this template. Wire them up via the dedicated props below.
   */
  nav: Omit<MicroNavigationProps['nav'], 'globalNavItems'> & {
    // ── Search ──────────────────────────────────────────────────────────────
    /** Drawer ID for the Search panel. Use alongside a matching entry in `nav.drawers`. */
    searchDrawerId?: string
    /** Called when Search is activated (use instead of drawerId for custom behaviour). */
    onSearch?: () => void

    // ── Global Hub ──────────────────────────────────────────────────────────
    /** Drawer ID for the Global Hub panel. */
    hubDrawerId?: string
    /** Called when Global Hub is activated. */
    onHub?: () => void

    // ── Notifications ───────────────────────────────────────────────────────
    /** Drawer ID for the Notifications panel. */
    notificationsDrawerId?: string
    /** Called when Notifications is activated. */
    onNotifications?: () => void
    /** Unread notification count. Shown as a badge when > 0. */
    notificationCount?: number

    // ── Client ──────────────────────────────────────────────────────────────
    /** Drawer ID for the Client switcher panel. */
    clientDrawerId?: string
    /** Called when the Client button is activated. */
    onClientSwitch?: () => void
    /** Name of the currently active client — appended to the accessible label. */
    clientName?: string
  }
  /** Props forwarded to the Footer pattern. */
  footer: MicroNavigationProps['footer']
  /** Page content rendered in the scrollable main area. */
  children?: React.ReactNode
  className?: string
}

// ---------------------------------------------------------------------------
// ERPxMicroNavigation
// ---------------------------------------------------------------------------

/**
 * App Template: ERPx Micro Navigation
 *
 * Pre-configures the MicroNavigation layout with the four ERPx global Navbar
 * actions — Search, Global Hub, Notifications, Client — in the correct order
 * with the correct icons and accessible labels.
 *
 * Use this as the starting point for any ERPx screen that uses the
 * multi-tab workspace shell. Add contextual nav items, drawer definitions,
 * and page content on top.
 *
 * Spec: templates/erp-micro-navigation.md
 */
export function ERPxMicroNavigation({
  nav,
  footer,
  children,
  className,
}: ERPxMicroNavigationProps) {
  const {
    searchDrawerId,
    onSearch,
    hubDrawerId,
    onHub,
    notificationsDrawerId,
    onNotifications,
    notificationCount,
    clientDrawerId,
    onClientSwitch,
    clientName,
    ...navRest
  } = nav

  const globalNavItems: MainNavItem[] = [
    {
      id:       'search',
      icon:     <Search size={20} />,
      label:    'Search',
      drawerId: searchDrawerId,
      onClick:  onSearch,
    },
    {
      id:       'hub',
      icon:     <Grid3X3 size={20} />,
      label:    'Global Hub',
      drawerId: hubDrawerId,
      onClick:  onHub,
    },
    {
      id:       'notifications',
      icon:     <Bell size={20} />,
      label:    'Notifications',
      count:    notificationCount,
      drawerId: notificationsDrawerId,
      onClick:  onNotifications,
    },
    {
      id:       'client',
      icon:     <Building2 size={20} />,
      label:    clientName ? `Switch client — ${clientName}` : 'Switch client',
      drawerId: clientDrawerId,
      onClick:  onClientSwitch,
    },
  ]

  return (
    <MicroNavigation
      nav={{ ...navRest, globalNavItems }}
      footer={footer}
      className={className}
    >
      {children}
    </MicroNavigation>
  )
}
