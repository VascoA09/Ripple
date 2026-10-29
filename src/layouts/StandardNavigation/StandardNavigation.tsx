import React from 'react'
import { Navbar } from '../../patterns/Navbar'
import type { NavbarProps } from '../../patterns/Navbar'
import '../app-shell.css'
import './StandardNavigation.css'

// =============================================================================
// TYPES
// =============================================================================

export interface StandardNavigationProps {
  /**
   * Props forwarded to the Navbar pattern (spec: patterns/navbar.md).
   * Overlay and persistent drawers are both supported.
   * Use MicroNavigation when a Footer tab bar is needed.
   */
  nav: NavbarProps
  /** Page content rendered in the scrollable main area. */
  children?: React.ReactNode
  className?: string
}

// =============================================================================
// STANDARD NAVIGATION. Spec: layouts/standard-navigation.md (0.2.0)
// =============================================================================

/**
 * Navbar plus a content area, no Footer. For products that work one page at a
 * time, and the only layout for persistent navigation drawers.
 *
 *   [Navbar 72px] [Persistent drawer (optional)] [Content area (flex: 1)]
 *
 * The content area uses var(--background-app). PageHeader, Grid and content
 * structure are the consumer's responsibility. No behaviour of its own.
 */
export function StandardNavigation({
  nav,
  children,
  className,
}: StandardNavigationProps) {
  return (
    <div className={['main-navigation', 'standard-navigation', className].filter(Boolean).join(' ')}>
      <Navbar {...nav} />
      <div className="main-navigation__content">
        <div className="main-navigation__scroll">
          <main className="standard-navigation__main">{children}</main>
        </div>
      </div>
    </div>
  )
}
