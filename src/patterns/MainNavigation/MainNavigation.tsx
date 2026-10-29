import React from 'react'
import { Navbar } from '../Navbar'
import type { NavbarProps, NavItem, NavbarDrawer } from '../Navbar'
import '../../layouts/app-shell.css'

// =============================================================================
// DEPRECATED (0.2.1). Spec: patterns/main-navigation.md
//
// Replaced by the Navbar pattern (patterns/navbar.md, 0.3.0) placed by a layout:
//   - <MainNavigation>{page}</MainNavigation>      → <StandardNavigation nav={…}>{page}</StandardNavigation>
//   - belowScroll={<Footer …/>}                    → <MicroNavigation nav={…} footer={…}>
// Kept for one release as an alias. Removed in Navbar 0.4.0.
// =============================================================================

/** @deprecated Use `NavbarDrawer` from the Navbar pattern. */
export type MainNavDrawerDef = NavbarDrawer

/** @deprecated Use `NavItem` from the Navbar pattern. */
export type MainNavItem = NavItem

/** @deprecated Use the Navbar pattern inside MicroNavigation or StandardNavigation. */
export interface MainNavigationProps extends Omit<NavbarProps, 'style'> {
  /** @deprecated Ignored. The Navbar always shows the Unit4 symbol. */
  logo?: React.ReactNode
  /** Application content rendered in the scrollable main area. */
  children?: React.ReactNode
  /** Content anchored below the scroll region, e.g. a Footer tab bar. */
  belowScroll?: React.ReactNode
}

// Development-only warnings. Bundlers replace process.env.NODE_ENV; the try/catch
// keeps unbundled ESM in a browser (no `process`) from throwing.
let isDev = false
try { isDev = process.env.NODE_ENV !== 'production' } catch { isDev = false }
let warned = false

/**
 * @deprecated Use `MicroNavigation` or `StandardNavigation`, which compose the
 * Navbar pattern. This alias renders the same markup as before.
 */
export function MainNavigation({
  logo,
  children,
  belowScroll,
  className,
  ...navProps
}: MainNavigationProps) {
  if (isDev && !warned) {
    warned = true
    console.warn(
      '[Ripple] MainNavigation is deprecated and will be removed in Navbar 0.4.0. ' +
      'Use MicroNavigation or StandardNavigation (patterns/navbar.md, Migration).',
    )
  }
  void logo // ignored: the Navbar always shows the Unit4 symbol

  return (
    <div className={['main-navigation', className].filter(Boolean).join(' ')}>
      <Navbar {...navProps} />
      <div className="main-navigation__content">
        <div className="main-navigation__scroll">{children}</div>
        {belowScroll}
      </div>
    </div>
  )
}
