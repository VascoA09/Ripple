import React from 'react'
import { SideNav } from '../../components/SideNav'
import type { SideNavProps, SideNavItem } from '../../components/SideNav'
import { Unit4Wordmark } from '../../assets/Unit4Wordmark'
import './ExtensionKitNavigation.css'

// =============================================================================
// TYPES
// =============================================================================

export type { SideNavItem }

export interface ExtensionKitNavigationProps {
  // ── Sidebar (forwarded to SideNav) ───────────────────────────────────────────
  userName: SideNavProps['userName']
  userAvatarSrc?: SideNavProps['userAvatarSrc']
  tenantName?: SideNavProps['tenantName']
  navItems: SideNavProps['items']
  onLogout: SideNavProps['onLogout']
  version?: SideNavProps['version']
  copyright?: SideNavProps['copyright']
  defaultCollapsed?: SideNavProps['defaultCollapsed']
  collapsed?: SideNavProps['collapsed']
  onCollapsedChange?: SideNavProps['onCollapsedChange']

  // ── Top bar ──────────────────────────────────────────────────────────────────
  /**
   * Application name shown beside the Unit4 logo. Defaults to "Extension Kit".
   */
  appName?: string
  /**
   * Optional actions rendered on the right side of the top bar.
   * Typically one or two IconButton elements (e.g. search, filters).
   * Shown only in views that require them — omit when not needed.
   */
  topBarActions?: React.ReactNode

  // ── Content ──────────────────────────────────────────────────────────────────
  /** Page content rendered in the scrollable content area. */
  children?: React.ReactNode
  className?: string
}

// =============================================================================
// EXTENSION KIT NAVIGATION
// =============================================================================

/**
 * ExtensionKitNavigation is the standard application shell for Unit4 Extension
 * Kit products. It composes a collapsible SideNav and a branded top bar into
 * an L-shaped shell.
 *
 * Layout:
 *   ┌──────────┬──────────────────────────────────────┐
 *   │  SideNav │  Top bar (Unit4Logo + appName)        │
 *   │  360/56px│  ─────────────── 2px #7eb843 ─────── │
 *   │          ├──────────────────────────────────────┤
 *   │  (user)  │                                      │
 *   │  (nav)   │  Content area (var(--bg-app))        │
 *   │  (meta)  │  Consumer owns PageHeader + body     │
 *   └──────────┴──────────────────────────────────────┘
 *
 * Classified as an App Template — product-specific, not reusable across
 * products. See `templates/extension-kit-navigation.md`.
 */
export function ExtensionKitNavigation({
  userName,
  userAvatarSrc,
  tenantName,
  navItems,
  onLogout,
  version,
  copyright,
  defaultCollapsed,
  collapsed,
  onCollapsedChange,
  appName = 'Extension Kit',
  topBarActions,
  children,
  className,
}: ExtensionKitNavigationProps) {
  return (
    <div className={['extension-kit-navigation', className].filter(Boolean).join(' ')}>

      {/* ── Sidebar ─────────────────────────────────────────────────────── */}
      <SideNav
        userName={userName}
        userAvatarSrc={userAvatarSrc}
        tenantName={tenantName}
        items={navItems}
        onLogout={onLogout}
        version={version}
        copyright={copyright}
        defaultCollapsed={defaultCollapsed}
        collapsed={collapsed}
        onCollapsedChange={onCollapsedChange}
      />

      {/* ── Main area ───────────────────────────────────────────────────── */}
      <div className="extension-kit-navigation__main">

        {/* Top bar */}
        <header className="extension-kit-navigation__topbar">
          <div className="extension-kit-navigation__topbar-start">
            <Unit4Wordmark />
            <span className="extension-kit-navigation__divider" aria-hidden />
            <span className="extension-kit-navigation__app-name">{appName}</span>
          </div>
          {topBarActions && (
            <div className="extension-kit-navigation__topbar-end">
              {topBarActions}
            </div>
          )}
        </header>

        {/* Scrollable content area */}
        <main className="extension-kit-navigation__content">
          {children}
        </main>

      </div>

    </div>
  )
}
