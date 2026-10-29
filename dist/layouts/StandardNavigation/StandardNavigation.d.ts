import { default as React } from 'react';
import { NavbarProps } from '../../patterns/Navbar';

export interface StandardNavigationProps {
    /**
     * Props forwarded to the Navbar pattern (spec: patterns/navbar.md).
     * Overlay and persistent drawers are both supported.
     * Use MicroNavigation when a Footer tab bar is needed.
     */
    nav: NavbarProps;
    /** Page content rendered in the scrollable main area. */
    children?: React.ReactNode;
    className?: string;
}
/**
 * Navbar plus a content area, no Footer. For products that work one page at a
 * time, and the only layout for persistent navigation drawers.
 *
 *   [Navbar 72px] [Persistent drawer (optional)] [Content area (flex: 1)]
 *
 * The content area uses var(--background-app). PageHeader, Grid and content
 * structure are the consumer's responsibility. No behaviour of its own.
 */
export declare function StandardNavigation({ nav, children, className, }: StandardNavigationProps): import("react/jsx-runtime").JSX.Element;
