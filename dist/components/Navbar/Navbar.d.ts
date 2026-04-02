import { CSSProperties, ReactNode } from 'react';

export type BadgeColor = 'primary' | 'notice' | 'negative' | 'positive' | 'neutral';
export interface NavItem {
    /** Unique key */
    id: string;
    /** Icon element (rendered at 20 × 20 px) */
    icon: ReactNode;
    /** Accessible label + tooltip text */
    label: string;
    /** Counter value — shown when > 0, always renders in negative (red) color */
    count?: number;
    /** Click handler */
    onClick?: () => void;
    /** True when the associated drawer is open */
    selected?: boolean;
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
export interface NavbarProps {
    /** Product logo element (rendered at 32 × 32 px) */
    logo?: ReactNode;
    /** Abbreviated product name below the logo (e.g. "ERPx") */
    productName?: string;
    /** Environment / tenant badge label */
    tenantLabel?: string;
    /** Badge color variant — defaults to 'notice' */
    tenantColor?: BadgeColor;
    /** Top-level navigation items (max 5, overflow is silently ignored) */
    globalNavItems?: NavItem[];
    /** Module-specific navigation (5 visible + overflow menu) */
    contextualNavItems?: NavItem[];
    /** Show a 1 px divider between global and contextual nav */
    showContextualDivider?: boolean;
    /** User's full name — used for avatar initials and user menu header */
    userName?: string;
    /** User's role title (e.g. "Finance Manager") */
    userRole?: string;
    /** User's product area (e.g. "Finance") */
    userProductArea?: string;
    /** Image URL for the user avatar */
    userAvatarSrc?: string;
    /** Items in the user menu flyout */
    userMenuItems?: UserMenuItem[];
    className?: string;
    style?: CSSProperties;
}
export declare function Navbar({ logo, productName, tenantLabel, tenantColor, globalNavItems, contextualNavItems, showContextualDivider, userName, userRole, userProductArea, userAvatarSrc, userMenuItems, className, style, }: NavbarProps): import("react/jsx-runtime").JSX.Element;
