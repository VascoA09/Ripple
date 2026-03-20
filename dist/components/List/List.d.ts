import { default as React } from 'react';

export type ListSize = 'small' | 'medium';
export interface ListProps {
    /**
     * Size applied to all items unless overridden per ListItem.
     * - 'small'  — 40px min-height, compact padding.
     * - 'medium' — 48px min-height, standard padding. Default.
     */
    size?: ListSize;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare function List({ size, children, className, style }: ListProps): import("react/jsx-runtime").JSX.Element;
export declare namespace List {
    var displayName: string;
}
export interface ListItemProps {
    /** Main text content. */
    header: string;
    /** Supporting text below the header. */
    description?: string;
    /**
     * Leading content slot.
     * Common use: Avatar (user lists), Lucide icon (setting lists), custom.
     */
    contentBefore?: React.ReactNode;
    /**
     * Trailing content slot.
     * Common use: action buttons, badges, tags, metadata icons.
     */
    contentAfter?: React.ReactNode;
    /**
     * Size variant. Overrides the List-level size for this item.
     * - 'small'  — 40px min-height, 4px 12px padding.
     * - 'medium' — 48px min-height, 8px 16px padding. Default.
     */
    size?: ListSize;
    /** Enable hover / active / focus states without a click handler. */
    interactive?: boolean;
    /** Click handler. Auto-enables interactive states. */
    onClick?: () => void;
    /** Renders the item's inner area as a link. Auto-enables interactive states. */
    href?: string;
    /**
     * Show a bulk-selection checkbox on the leading edge.
     * Selection state is independent of item click interaction.
     */
    bulkSelect?: boolean;
    /** Controlled checked state for the bulk-select checkbox. */
    bulkSelectChecked?: boolean;
    /** Called when the bulk-select checkbox is toggled. */
    onBulkSelectChange?: (checked: boolean) => void;
    /** Show an 8px primary dot on the left edge. */
    unreadIndicator?: boolean;
    disabled?: boolean;
    className?: string;
}
export declare function ListItem({ header, description, contentBefore, contentAfter, size: sizeProp, interactive, onClick, href, bulkSelect, bulkSelectChecked, onBulkSelectChange, unreadIndicator, disabled, className, }: ListItemProps): import("react/jsx-runtime").JSX.Element;
export declare namespace ListItem {
    var displayName: string;
}
