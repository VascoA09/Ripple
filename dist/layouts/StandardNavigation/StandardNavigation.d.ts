import { default as React } from 'react';
import { MainNavigationProps } from '../../patterns/MainNavigation';

export interface StandardNavigationProps {
    /**
     * Props forwarded to the MainNavigation pattern.
     * Both overlay (modal) and persistent drawers are supported.
     * `belowScroll` is intentionally excluded — use MicroNavigation if a
     * bottom slot is needed.
     */
    nav: Omit<MainNavigationProps, 'children' | 'belowScroll'>;
    /** Page content rendered in the scrollable main area. */
    children?: React.ReactNode;
    className?: string;
}
/**
 * StandardNavigation is the default full-page layout for Ripple applications.
 * It composes MainNavigation into an application shell with a content area
 * styled with the app canvas background.
 *
 * Layout:
 *   [Navbar 72px] [Persistent panel (optional)] [Content area (flex: 1)]
 *
 * The content area uses `var(--bg-app)`. The Navbar retains its own background.
 * PageHeader, Grid, and content structure are the consumer's responsibility.
 *
 * Use MicroNavigation instead when a Footer tab bar is required.
 *
 * Classified as a layout, not a pattern — it has no behavioural logic of its
 * own. It only arranges MainNavigation with the correct content area styling.
 */
export declare function StandardNavigation({ nav, children, className, }: StandardNavigationProps): import("react/jsx-runtime").JSX.Element;
