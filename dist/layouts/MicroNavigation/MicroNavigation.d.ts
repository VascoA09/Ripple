import { default as React } from 'react';
import { FooterProps } from '../../patterns/Footer';
import { MainNavigationProps } from '../../patterns/MainNavigation';

export interface MicroNavigationProps {
    /**
     * Props forwarded to the MainNavigation pattern.
     * Provides the Navbar, drawer management, and left-side layout.
     * Do not pass `children` here — use the top-level `children` instead.
     */
    nav: Omit<MainNavigationProps, 'children'>;
    /**
     * Props forwarded to the Footer pattern.
     * Provides the tab bar fixed at the bottom of the viewport.
     */
    footer: FooterProps;
    /** Page content rendered in the scrollable main area. */
    children?: React.ReactNode;
    className?: string;
}
/**
 * MicroNavigation is a full-page layout template that composes
 * MainNavigation and Footer into an L-shaped enterprise application shell.
 *
 * Layout:
 *   ┌─────────┬─────────────────────────────────────────┐
 *   │         │  Page content (scrollable)              │
 *   │  Main   │                                         │
 *   │  Nav    │                                         │
 *   │         │                                         │
 *   ├─────────┴─────────────────────────────────────────┤
 *   │  Footer (tab bar, fixed)                          │
 *   └───────────────────────────────────────────────────┘
 *
 * All state (open tabs, active tab, groups, open drawers) is managed by
 * the consuming application and passed through `nav` and `footer` props.
 *
 * Classified as a layout template, not a pattern, because it has no
 * behavioural logic of its own — it only arranges existing patterns.
 */
export declare function MicroNavigation({ nav, footer, children, className, }: MicroNavigationProps): import("react/jsx-runtime").JSX.Element;
