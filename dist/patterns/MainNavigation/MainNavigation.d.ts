import { default as React } from 'react';
import { NavbarProps, NavItem, NavbarDrawer } from '../Navbar';

/** @deprecated Use `NavbarDrawer` from the Navbar pattern. */
export type MainNavDrawerDef = NavbarDrawer;
/** @deprecated Use `NavItem` from the Navbar pattern. */
export type MainNavItem = NavItem;
/** @deprecated Use the Navbar pattern inside MicroNavigation or StandardNavigation. */
export interface MainNavigationProps extends Omit<NavbarProps, 'style'> {
    /** @deprecated Ignored. The Navbar always shows the Unit4 symbol. */
    logo?: React.ReactNode;
    /** Application content rendered in the scrollable main area. */
    children?: React.ReactNode;
    /** Content anchored below the scroll region, e.g. a Footer tab bar. */
    belowScroll?: React.ReactNode;
}
/**
 * @deprecated Use `MicroNavigation` or `StandardNavigation`, which compose the
 * Navbar pattern. This alias renders the same markup as before.
 */
export declare function MainNavigation({ logo, children, belowScroll, className, ...navProps }: MainNavigationProps): import("react/jsx-runtime").JSX.Element;
