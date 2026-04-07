import { default as React } from 'react';

export interface SideNavItem {
    id: string;
    /** Label shown in expanded state; used as aria-label in collapsed state. */
    label: string;
    icon: React.ReactNode;
    selected?: boolean;
    onClick?: () => void;
}
export interface SideNavProps {
    userName: string;
    userAvatarSrc?: string;
    /** Tenant or environment name. */
    tenantName?: string;
    items: SideNavItem[];
    /** Called when the user clicks Log out. */
    onLogout: () => void;
    /** Software version string, e.g. "v1.2.0". Hidden in collapsed state. */
    version?: string;
    /** Copyright notice. Hidden in collapsed state. */
    copyright?: string;
    /** Initial collapsed state for uncontrolled mode. Defaults to false. */
    defaultCollapsed?: boolean;
    /** Controlled collapsed state. Provide alongside `onCollapsedChange`. */
    collapsed?: boolean;
    /** Called when the user toggles the sidebar. */
    onCollapsedChange?: (collapsed: boolean) => void;
    className?: string;
}
/**
 * SideNav is a persistent collapsible sidebar for the Extension Kit Navigation
 * template. It renders a user identity section, navigation items, and footer
 * metadata (logout, version, copyright).
 *
 * Collapse state is uncontrolled by default. Pass `collapsed` +
 * `onCollapsedChange` for controlled mode.
 *
 * Widths:
 *   Expanded  360px — icon + label
 *   Collapsed  56px — icon only; identity and metadata sections hidden
 */
export declare function SideNav({ userName, userAvatarSrc, tenantName, items, onLogout, version, copyright, defaultCollapsed, collapsed: controlledCollapsed, onCollapsedChange, className, }: SideNavProps): import("react/jsx-runtime").JSX.Element;
