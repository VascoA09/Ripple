import { CSSProperties, ReactNode } from 'react';
import { BreadcrumbItem } from '../Breadcrumbs';
import { ToolbarAction } from '../ButtonsToolbar';

export type { BreadcrumbItem, ToolbarAction };
export interface PageHeaderProps {
    /** Page title rendered as `<h1>`. Required. */
    title: string;
    /** Supporting text below the title */
    description?: string;
    /** Date label above the title (e.g. "Monday, March 02") */
    date?: string;
    /** Shows the breadcrumb trail */
    showBreadcrumb?: boolean;
    /** Breadcrumb navigation items */
    breadcrumbItems?: BreadcrumbItem[];
    /** Callback for SPA breadcrumb navigation */
    onBreadcrumbNavigate?: (href: string) => void;
    /** Badge/chip nodes rendered inline with the title heading */
    tags?: ReactNode[];
    /**
     * Adaptive actions toolbar. Enables automatic variant switching via
     * ResizeObserver. Ordering: tertiary → secondary → primary (left to right).
     */
    mainActions?: ToolbarAction[];
    /**
     * Discuss + AVA toolbar. Always visible on desktop, separated from main
     * actions by a 1 px divider. Not rendered on mobile — use mobileMenuActions
     * to surface these items in the mobile overflow menu instead.
     */
    secondaryToolbar?: ReactNode;
    /**
     * Actions folded into the mobile ⋯ overflow menu at the top of the list
     * (e.g. Discuss, AVA). Desktop ignores this prop — use secondaryToolbar there.
     */
    mobileMenuActions?: ToolbarAction[];
    /** Right-aligned last-update text above the main row */
    lastUpdateInfo?: string;
    /** Fixes the header at the top of the viewport on scroll */
    sticky?: boolean;
    /** Reduces title from heading.l (28px) to heading.m (24px) */
    compact?: boolean;
    /**
     * 50/50 split layout. Title truncates with ellipsis; full title shown via
     * native `title` attribute (Tooltip component pending).
     */
    truncateTitle?: boolean;
    className?: string;
    style?: CSSProperties;
}
export declare function PageHeader({ title, description, date, showBreadcrumb, breadcrumbItems, onBreadcrumbNavigate, tags, mainActions, secondaryToolbar, mobileMenuActions, lastUpdateInfo, sticky, compact, truncateTitle, className, style, }: PageHeaderProps): import("react/jsx-runtime").JSX.Element;
