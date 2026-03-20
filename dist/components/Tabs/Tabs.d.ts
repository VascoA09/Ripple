import { default as React } from 'react';

export type TabsVariant = 'loud' | 'soft';
export type TabsSize = 'medium' | 'mobile';
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Currently active tab value (controlled). */
    value: string;
    /** Called when the user selects a different tab. */
    onValueChange: (value: string) => void;
    /**
     * Size applied to all tabs in this group.
     * - 'medium'  — 40px height. Default.
     * - 'mobile'  — 48px height. For touch-first interfaces.
     */
    size?: TabsSize;
    children: React.ReactNode;
}
export declare function Tabs({ value, onValueChange, size, children, className, ...rest }: TabsProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Tabs {
    var displayName: string;
}
export interface TabListProps {
    /**
     * Visual style.
     * - 'loud' — inset bottom divider. Default. Use for page-level tabs.
     * - 'soft' — no divider, only the selected tab indicator. Use inside containers.
     */
    variant?: TabsVariant;
    /**
     * Horizontal padding. Sets both the visual padding and the divider inset so
     * the border aligns with the padded content edge.
     * Pass a CSS value, e.g. `'var(--spacing-150)'`.
     */
    padding?: string;
    children: React.ReactNode;
    className?: string;
    /** Additional inline styles. */
    style?: React.CSSProperties;
}
export declare function TabList({ variant, padding, children, className, style }: TabListProps): import("react/jsx-runtime").JSX.Element;
export declare namespace TabList {
    var displayName: string;
}
export interface TabProps {
    /** Unique identifier matched against Tabs.value. */
    value: string;
    /**
     * Decorative icon rendered before the label.
     * Use a Lucide icon — the component constrains it to 16px.
     * Use consistently across all tabs in a list, or not at all.
     */
    icon?: React.ReactNode;
    /**
     * Counter rendered after the label.
     * Pass: <Counter count={n} variant="outline" color="neutral" />
     */
    counter?: React.ReactNode;
    /**
     * Show a close (X) button. Visible on hover and when selected.
     * The close button is keyboard focusable only when the tab is selected.
     */
    closable?: boolean;
    /** Called when the close button is clicked. */
    onClose?: () => void;
    /**
     * Show a contextual menu button (⋮). Visible on hover and when selected.
     * The menu button is keyboard focusable only when the tab is selected.
     */
    onMenuClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare function Tab({ value, icon, counter, closable, onClose, onMenuClick, disabled, children, className, }: TabProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Tab {
    var displayName: string;
}
export interface TabPanelProps {
    /** Renders only when this value matches the active tab. */
    value: string;
    children: React.ReactNode;
    className?: string;
    /** Inline styles. Use to override the default 16px padding, e.g. when inside a Panel. */
    style?: React.CSSProperties;
}
export declare function TabPanel({ value, children, className, style }: TabPanelProps): import("react/jsx-runtime").JSX.Element | null;
export declare namespace TabPanel {
    var displayName: string;
}
