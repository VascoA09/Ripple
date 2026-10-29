import { default as React } from 'react';
import { FooterProps } from '../../patterns/Footer';
import { NavbarProps, NavbarDrawer } from '../../patterns/Navbar';

/** Overlay drawer definition. `persistent` is not allowed in MicroNavigation. */
export type MicroNavDrawerDef = Omit<NavbarDrawer, 'persistent'>;
/** Navbar props for MicroNavigation: overlay drawers only. */
export type MicroNavigationNavProps = Omit<NavbarProps, 'drawers'> & {
    drawers?: MicroNavDrawerDef[];
};
export interface MicroNavigationProps {
    /**
     * Props forwarded to the Navbar pattern (spec: patterns/navbar.md).
     * Every global item should open an overlay drawer (`drawerId`).
     * Persistent drawers belong to StandardNavigation.
     */
    nav: MicroNavigationNavProps;
    /**
     * Props forwarded to the Footer pattern. Required: Micro Navigation always
     * has the tab bar. Use StandardNavigation for products without it.
     */
    footer: FooterProps;
    /** Page header at the top of the content column, outside the scrollable body. */
    header?: React.ReactNode;
    /** Page content rendered in the scrollable body (24px padding). */
    children?: React.ReactNode;
    className?: string;
}
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
export declare function MicroNavigation({ nav, footer, header, children, className, }: MicroNavigationProps): import("react/jsx-runtime").JSX.Element;
