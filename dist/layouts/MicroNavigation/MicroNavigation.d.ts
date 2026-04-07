import { default as React } from 'react';
import { FooterProps } from '../../patterns/Footer';
import { MainNavigationProps, MainNavDrawerDef } from '../../patterns/MainNavigation';

/** Overlay drawer definition — `persistent` is not allowed in MicroNavigation. */
export type MicroNavDrawerDef = Omit<MainNavDrawerDef, 'persistent'>;
export interface MicroNavigationProps {
    /**
     * Props forwarded to the MainNavigation pattern.
     * Provides the Navbar, drawer management, and left-side layout.
     * Do not pass `children` or `belowScroll` here — use the top-level props instead.
     *
     * Only overlay (modal) drawers are supported. Persistent panels belong to
     * the Persistent Navigation layout, not MicroNavigation.
     */
    nav: Omit<MainNavigationProps, 'children' | 'belowScroll' | 'drawers'> & {
        drawers?: MicroNavDrawerDef[];
    };
    /**
     * Props forwarded to the Footer pattern. Placed in MainNavigation's
     * `belowScroll` slot — anchored to the bottom of the content column,
     * never covering the Navbar.
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
 *   │         ├─────────────────────────────────────────┤
 *   │         │  Footer (tab bar, in-flow)               │
 *   └─────────┴─────────────────────────────────────────┘
 *
 * The Footer is placed in MainNavigation's `belowScroll` slot so it renders
 * inside the content column — anchored to the bottom of the content area,
 * not the viewport. It never covers the Navbar.
 *
 * All state (open tabs, active tab, groups, open drawers) is managed by
 * the consuming application and passed through `nav` and `footer` props.
 *
 * Classified as a layout template, not a pattern, because it has no
 * behavioural logic of its own — it only arranges existing patterns.
 */
export declare function MicroNavigation({ nav, footer, children, className, }: MicroNavigationProps): import("react/jsx-runtime").JSX.Element;
