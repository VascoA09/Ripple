import { default as React } from 'react';
import { NavItem, UserMenuItem, BadgeColor } from '../../components/Navbar';
import { DrawerSize } from '../../components/Drawer';

export interface MainNavDrawerDef {
    /** Must match the `drawerId` on the nav item that opens this drawer. */
    id: string;
    /**
     * Full drawer content. Include DrawerHeader, DrawerContent,
     * DrawerSection, etc. as needed.
     */
    content: React.ReactNode;
    /** Default: 'medium' */
    size?: DrawerSize;
    /**
     * Persistent drawers render as in-flow panels to the right of the Navbar,
     * pushing the content area. No backdrop. No focus trap.
     * Modal drawers (default) are portal-rendered overlays with a backdrop
     * and focus trap.
     */
    persistent?: boolean;
}
export interface MainNavItem extends NavItem {
    /**
     * When set, clicking this item opens/closes the matching drawer.
     * The item's `selected` state is managed automatically.
     * Omit for items that navigate without a drawer.
     */
    drawerId?: string;
}
export interface MainNavigationProps {
    logo?: React.ReactNode;
    productName?: string;
    tenantLabel?: string;
    tenantColor?: BadgeColor;
    /** Global nav items (max 5). Items with a `drawerId` are auto-wired. */
    globalNavItems?: MainNavItem[];
    /** Contextual nav items (5 visible + overflow). Items with a `drawerId` are auto-wired. */
    contextualNavItems?: MainNavItem[];
    showContextualDivider?: boolean;
    userName?: string;
    userRole?: string;
    userProductArea?: string;
    userAvatarSrc?: string;
    userMenuItems?: UserMenuItem[];
    /** Drawer panel definitions. Each must have an `id` matching a nav item's `drawerId`. */
    drawers?: MainNavDrawerDef[];
    /**
     * Controlled: ID of the currently open drawer, or null for none.
     * Omit to use uncontrolled mode.
     */
    openDrawerId?: string | null;
    /** Called when the user opens or closes a drawer. */
    onDrawerChange?: (id: string | null) => void;
    /** Application content rendered in the scrollable main area. */
    children?: React.ReactNode;
    /**
     * Footer rendered at the bottom of the main area (below the scroll region).
     * Pass a <Footer /> component here. Its fixed positioning is cancelled by
     * the shell — it becomes a natural flex child anchored to the bottom.
     */
    footer?: React.ReactNode;
    className?: string;
}
/**
 * MainNavigation composes a Navbar with contextual Drawer panels into a
 * complete enterprise application shell.
 *
 * State: Uncontrolled by default. Pass `openDrawerId` + `onDrawerChange`
 * for controlled mode (e.g., when the URL should reflect the open panel).
 *
 * Layout:
 *   [Navbar 72px] [Persistent panel (optional)] [Content area (flex: 1)]
 *                                                ├── scroll wrapper (flex: 1, overflow-y: auto)
 *                                                │   └── children
 *                                                └── footer (Footer component, optional)
 *
 * Modal drawers are portal-rendered and do not affect layout.
 * Persistent drawers are in-flow panels that push the content area.
 *
 * Drawer wiring: nav items with a `drawerId` automatically receive
 * `selected` state and `onClick` toggle behaviour.
 */
export declare function MainNavigation({ logo, productName, tenantLabel, tenantColor, globalNavItems, contextualNavItems, showContextualDivider, userName, userRole, userProductArea, userAvatarSrc, userMenuItems, drawers, openDrawerId: controlledId, onDrawerChange, children, footer, className, }: MainNavigationProps): import("react/jsx-runtime").JSX.Element;
