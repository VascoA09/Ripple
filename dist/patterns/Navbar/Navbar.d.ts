import { CSSProperties, ReactNode } from 'react';

export type BadgeColor = 'primary' | 'notice' | 'negative' | 'positive' | 'neutral';
export interface NavItem {
    /** Unique key */
    id: string;
    /** Icon element (rendered at 20 × 20 px) */
    icon: ReactNode;
    /** Tooltip text and aria-label */
    label: string;
    /** Counter value. Shown when > 0, always negative, appended to the aria-label */
    count?: number;
    /** Opens the drawer with this id. Pressed state is managed by the pattern. */
    drawerId?: string;
    /** Marks the current page (edge indicator, aria-current="page"). Page items only; ignored when `drawerId` is set. */
    current?: boolean;
    /**
     * @deprecated 0.3.0. Use `current` for page items. Drawer state is managed by the pattern.
     * Still honoured on page items as `current` for one release.
     */
    selected?: boolean;
    /** Click handler. On drawer items it runs before the drawer toggles. */
    onClick?: () => void;
    /** Prevents interaction */
    disabled?: boolean;
}
export interface UserMenuItem {
    id: string;
    label: string;
    /** Optional leading icon */
    icon?: ReactNode;
    /** Renders a separator line before this item */
    separator?: boolean;
    onClick?: () => void;
}
export type NavbarDrawerSize = 'small' | 'medium' | 'large';
export interface NavbarDrawer {
    /** Matches `NavItem.drawerId` */
    id: string;
    /** Drawer content: DrawerHeader, DrawerContent, DrawerSection… */
    content: ReactNode;
    /** Default 'medium' (320 / 480 / 640 px) */
    size?: NavbarDrawerSize;
    /** In-flow panel that pushes the content area. Standard Navigation only. */
    persistent?: boolean;
}
export interface NavbarProps {
    /** Label under the Unit4 symbol (e.g. "ERPx", "CM"). Max width 100% of the column; truncates beyond. */
    productName?: string;
    /** Visually hidden full product name. Required when `productName` is abbreviated or truncates. */
    productFullName?: string;
    /** Environment / tenant badge label */
    tenantLabel?: string;
    /** Badge color variant. Default 'notice' */
    tenantColor?: BadgeColor;
    /** Top-level navigation (max 5; extra items are dropped with a development warning) */
    globalNavItems?: NavItem[];
    /** Module navigation (5 visible + overflow menu) */
    contextualNavItems?: NavItem[];
    /** Show a 1 px divider between global and contextual nav. Default true */
    showContextualDivider?: boolean;
    /** Drawer definitions. Omit for the plain Navbar. */
    drawers?: NavbarDrawer[];
    /** Controlled: id of the open drawer, or null. Omit for uncontrolled mode. */
    openDrawerId?: string | null;
    /** Called when a drawer opens or closes */
    onDrawerChange?: (id: string | null) => void;
    /** User's full name, used for avatar initials and the user menu header */
    userName?: string;
    /** User's role title (e.g. "Finance Manager") */
    userRole?: string;
    /** User's product area (e.g. "Finance") */
    userProductArea?: string;
    /** Image URL for the user avatar */
    userAvatarSrc?: string;
    /** User menu items. Must include Log out. */
    userMenuItems?: UserMenuItem[];
    className?: string;
    style?: CSSProperties;
}
export declare function Navbar({ productName, productFullName, tenantLabel, tenantColor, globalNavItems, contextualNavItems, showContextualDivider, drawers, openDrawerId: controlledId, onDrawerChange, userName, userRole, userProductArea, userAvatarSrc, userMenuItems, className, style, }: NavbarProps): import("react/jsx-runtime").JSX.Element;
