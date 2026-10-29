import React from 'react'
import { Footer } from '../../patterns/Footer'
import type { FooterProps } from '../../patterns/Footer'
import { Navbar } from '../../patterns/Navbar'
import type { NavbarProps, NavbarDrawer } from '../../patterns/Navbar'
import '../app-shell.css'
import './MicroNavigation.css'

// =============================================================================
// TYPES
// =============================================================================

/** Overlay drawer definition. `persistent` is not allowed in MicroNavigation. */
export type MicroNavDrawerDef = Omit<NavbarDrawer, 'persistent'>

/** Navbar props for MicroNavigation: overlay drawers only. */
export type MicroNavigationNavProps = Omit<NavbarProps, 'drawers'> & {
  drawers?: MicroNavDrawerDef[]
}

export interface MicroNavigationProps {
  /**
   * Props forwarded to the Navbar pattern (spec: patterns/navbar.md).
   * Every global item should open an overlay drawer (`drawerId`).
   * Persistent drawers belong to StandardNavigation.
   */
  nav: MicroNavigationNavProps
  /**
   * Props forwarded to the Footer pattern. Required: Micro Navigation always
   * has the tab bar. Use StandardNavigation for products without it.
   */
  footer: FooterProps
  /** Page header at the top of the content column, outside the scrollable body. */
  header?: React.ReactNode
  /** Page content rendered in the scrollable body (24px padding). */
  children?: React.ReactNode
  className?: string
}

// Development-only warnings. Bundlers replace process.env.NODE_ENV; the try/catch
// keeps unbundled ESM in a browser (no `process`) from throwing.
let isDev = false
try { isDev = process.env.NODE_ENV !== 'production' } catch { isDev = false }
let warnedGlobal = false

// =============================================================================
// MICRO NAVIGATION (default layout). Spec: layouts/micro-navigation.md (0.2.0)
// =============================================================================

/**
 * L-shaped application shell: Navbar on the left, Footer tab bar along the
 * bottom of the content column. No behaviour of its own; all state belongs to
 * the Navbar and Footer patterns and the consuming application.
 *
 *   ┌─────────┬─────────────────────────────────────────┐
 *   │         │  Header                                 │
 *   │ Navbar  │  Page content (scrollable)              │
 *   │         ├─────────────────────────────────────────┤
 *   │         │  Footer (tab bar, in-flow)              │
 *   └─────────┴─────────────────────────────────────────┘
 */
export function MicroNavigation({
  nav,
  footer,
  header,
  children,
  className,
}: MicroNavigationProps) {
  if (isDev && !warnedGlobal && (nav.globalNavItems ?? []).some(i => !i.drawerId)) {
    warnedGlobal = true
    console.warn('[Ripple MicroNavigation] Every global Navbar item should open a drawer (set `drawerId`). See layouts/micro-navigation.md.')
  }

  const { className: navClassName, ...navRest } = nav

  return (
    <div className={['main-navigation', 'micro-navigation', className].filter(Boolean).join(' ')}>
      <Navbar {...navRest} className={navClassName} />
      <div className="main-navigation__content">
        <div className="main-navigation__scroll">
          <div className="micro-navigation__frame">
            {header && <div className="micro-navigation__header">{header}</div>}
            <main className="micro-navigation__body">{children}</main>
          </div>
        </div>
        <Footer {...footer} />
      </div>
    </div>
  )
}
