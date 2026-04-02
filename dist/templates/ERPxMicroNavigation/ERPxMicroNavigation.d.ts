import { default as React } from 'react';
import { MicroNavigationProps } from '../../layouts/MicroNavigation';

export interface ERPxMicroNavigationProps {
    /**
     * Nav props forwarded to MicroNavigation, minus `globalNavItems`.
     * The four ERPx global actions (Search, Global Hub, Notifications, Client)
     * are pre-defined by this template. Wire them up via the dedicated props below.
     */
    nav: Omit<MicroNavigationProps['nav'], 'globalNavItems'> & {
        /** Drawer ID for the Search panel. Use alongside a matching entry in `nav.drawers`. */
        searchDrawerId?: string;
        /** Called when Search is activated (use instead of drawerId for custom behaviour). */
        onSearch?: () => void;
        /** Drawer ID for the Global Hub panel. */
        hubDrawerId?: string;
        /** Called when Global Hub is activated. */
        onHub?: () => void;
        /** Drawer ID for the Notifications panel. */
        notificationsDrawerId?: string;
        /** Called when Notifications is activated. */
        onNotifications?: () => void;
        /** Unread notification count. Shown as a badge when > 0. */
        notificationCount?: number;
        /** Drawer ID for the Client switcher panel. */
        clientDrawerId?: string;
        /** Called when the Client button is activated. */
        onClientSwitch?: () => void;
        /** Name of the currently active client — appended to the accessible label. */
        clientName?: string;
    };
    /** Props forwarded to the Footer pattern. */
    footer: MicroNavigationProps['footer'];
    /** Page content rendered in the scrollable main area. */
    children?: React.ReactNode;
    className?: string;
}
/**
 * App Template: ERPx Micro Navigation
 *
 * Pre-configures the MicroNavigation layout with the four ERPx global Navbar
 * actions — Search, Global Hub, Notifications, Client — in the correct order
 * with the correct icons and accessible labels.
 *
 * Use this as the starting point for any ERPx screen that uses the
 * multi-tab workspace shell. Add contextual nav items, drawer definitions,
 * and page content on top.
 *
 * Spec: templates/erp-micro-navigation.md
 */
export declare function ERPxMicroNavigation({ nav, footer, children, className, }: ERPxMicroNavigationProps): import("react/jsx-runtime").JSX.Element;
