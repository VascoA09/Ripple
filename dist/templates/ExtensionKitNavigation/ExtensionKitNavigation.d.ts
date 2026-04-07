import { default as React } from 'react';
import { SideNavProps, SideNavItem } from '../../components/SideNav';

export type { SideNavItem };
export interface ExtensionKitNavigationProps {
    userName: SideNavProps['userName'];
    userAvatarSrc?: SideNavProps['userAvatarSrc'];
    tenantName?: SideNavProps['tenantName'];
    navItems: SideNavProps['items'];
    onLogout: SideNavProps['onLogout'];
    version?: SideNavProps['version'];
    copyright?: SideNavProps['copyright'];
    defaultCollapsed?: SideNavProps['defaultCollapsed'];
    collapsed?: SideNavProps['collapsed'];
    onCollapsedChange?: SideNavProps['onCollapsedChange'];
    /**
     * Application name shown beside the Unit4 logo. Defaults to "Extension Kit".
     */
    appName?: string;
    /**
     * Optional actions rendered on the right side of the top bar.
     * Typically one or two IconButton elements (e.g. search, filters).
     * Shown only in views that require them — omit when not needed.
     */
    topBarActions?: React.ReactNode;
    /** Page content rendered in the scrollable content area. */
    children?: React.ReactNode;
    className?: string;
}
/**
 * ExtensionKitNavigation is the standard application shell for Unit4 Extension
 * Kit products. It composes a collapsible SideNav and a branded top bar into
 * an L-shaped shell.
 *
 * Layout:
 *   ┌──────────┬──────────────────────────────────────┐
 *   │  SideNav │  Top bar (Unit4Logo + appName)        │
 *   │  360/56px│  ─────────────── 2px #7eb843 ─────── │
 *   │          ├──────────────────────────────────────┤
 *   │  (user)  │                                      │
 *   │  (nav)   │  Content area (var(--bg-app))        │
 *   │  (meta)  │  Consumer owns PageHeader + body     │
 *   └──────────┴──────────────────────────────────────┘
 *
 * Classified as an App Template — product-specific, not reusable across
 * products. See `templates/extension-kit-navigation.md`.
 */
export declare function ExtensionKitNavigation({ userName, userAvatarSrc, tenantName, navItems, onLogout, version, copyright, defaultCollapsed, collapsed, onCollapsedChange, appName, topBarActions, children, className, }: ExtensionKitNavigationProps): import("react/jsx-runtime").JSX.Element;
