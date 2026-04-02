import React from 'react'
import { Footer } from '../../patterns/Footer'
import type { FooterProps } from '../../patterns/Footer'
import { MainNavigation } from '../../patterns/MainNavigation'
import type { MainNavigationProps, MainNavDrawerDef } from '../../patterns/MainNavigation'
import './MicroNavigation.css'

// =============================================================================
// TYPES
// =============================================================================

/** Overlay drawer definition — `persistent` is not allowed in MicroNavigation. */
export type MicroNavDrawerDef = Omit<MainNavDrawerDef, 'persistent'>

export interface MicroNavigationProps {
  /**
   * Props forwarded to the MainNavigation pattern.
   * Provides the Navbar, drawer management, and left-side layout.
   * Do not pass `children` or `footer` here — use the top-level props instead.
   *
   * Only overlay (modal) drawers are supported. Persistent panels belong to
   * the Persistent Navigation layout, not MicroNavigation.
   */
  nav: Omit<MainNavigationProps, 'children' | 'footer' | 'drawers'> & {
    drawers?: MicroNavDrawerDef[]
  }
  /**
   * Props forwarded to the Footer pattern.
   * The Footer is rendered inside the content area (below the scroll region),
   * anchored to the bottom — it does not cover the Navbar.
   */
  footer: FooterProps
  /** Page content rendered in the scrollable main area. */
  children?: React.ReactNode
  className?: string
}

// =============================================================================
// MICRO NAVIGATION
// =============================================================================

/**
 * MicroNavigation is a full-page layout template that composes
 * MainNavigation and Footer into an L-shaped enterprise application shell.
 *
 * Layout:
 *   ┌─────────┬─────────────────────────────────────────┐
 *   │         │  Page content (scrollable)              │
 *   │  Main   │                                         │
 *   │  Nav    │                                         │
 *   │         ├─────────────────────────────────────────┤
 *   │         │  Footer (tab bar, in-flow)               │
 *   └─────────┴─────────────────────────────────────────┘
 *
 * The Footer is passed through MainNavigation's `footer` prop so it renders
 * inside the content column — anchored to the bottom of the content area,
 * not the viewport. It never covers the Navbar.
 *
 * All state (open tabs, active tab, groups, open drawers) is managed by
 * the consuming application and passed through `nav` and `footer` props.
 *
 * Classified as a layout template, not a pattern, because it has no
 * behavioural logic of its own — it only arranges existing patterns.
 */
export function MicroNavigation({
  nav,
  footer,
  children,
  className,
}: MicroNavigationProps) {
  return (
    <MainNavigation
      {...nav}
      className={['micro-navigation', nav.className, className].filter(Boolean).join(' ')}
      footer={<Footer {...footer} />}
    >
      <main className="micro-navigation__main">
        {children}
      </main>
    </MainNavigation>
  )
}
