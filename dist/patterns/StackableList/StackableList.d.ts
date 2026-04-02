import { default as React } from 'react';

export type StackableListAlign = 'start' | 'center' | 'end';
export interface StackableListProps {
    /**
     * CSS grid-template-columns value applied to every header and item row.
     * Example: "2fr 1fr 1fr 120px"
     * Defaults to a single flexible column.
     */
    columns?: string;
    /**
     * When true, a trailing 40px slot is reserved on every row for row actions
     * (contextual menu, quick actions). Pass true whenever any StackableListItem
     * uses the `actions` prop.
     */
    hasActions?: boolean;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export declare function StackableList({ columns, hasActions, children, className, style, }: StackableListProps): import("react/jsx-runtime").JSX.Element;
export interface StackableListHeaderProps {
    children: React.ReactNode;
    className?: string;
}
export declare function StackableListHeader({ children, className }: StackableListHeaderProps): import("react/jsx-runtime").JSX.Element;
export interface StackableListHeaderCellProps {
    /** Column label. Omit for decorative or action columns. */
    children?: React.ReactNode;
    /** Icon before the label. */
    iconBefore?: React.ReactNode;
    /** Icon after the label — typically a sort indicator or info icon. */
    iconAfter?: React.ReactNode;
    /** Secondary text below the label. */
    description?: string;
    /** Text alignment within the cell. Defaults to 'start'. */
    align?: StackableListAlign;
    className?: string;
}
export declare function StackableListHeaderCell({ children, iconBefore, iconAfter, description, align, className, }: StackableListHeaderCellProps): import("react/jsx-runtime").JSX.Element;
export interface StackableListBodyProps {
    children: React.ReactNode;
    className?: string;
}
export declare function StackableListBody({ children, className }: StackableListBodyProps): import("react/jsx-runtime").JSX.Element;
export interface StackableListItemProps {
    /**
     * Shows an unread indicator on the leading edge of the row.
     * Use to distinguish items that have not been seen by the user.
     */
    unread?: boolean;
    /** Makes the row interactive (button behaviour). */
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    /** Visually highlights the row as selected. */
    selected?: boolean;
    /** Disables interaction and dims the row. */
    disabled?: boolean;
    /**
     * Trailing actions — typically a FlyoutMenu for contextual actions.
     * Renders in a fixed-width slot on the right, outside the column grid.
     * Visible on hover/focus; always visible while the menu is open.
     * Only renders when StackableList has `hasActions={true}`.
     */
    actions?: React.ReactNode;
    /**
     * Optional footer area rendered below the column cells.
     * Spans the full item width (minus the actions slot).
     * Use for tags, secondary attributes, or any supplementary content.
     */
    footer?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
export declare function StackableListItem({ unread, onClick, selected, disabled, actions, footer, children, className, }: StackableListItemProps): import("react/jsx-runtime").JSX.Element;
export interface StackableListCellProps {
    /** Text alignment within the cell. Defaults to 'start'. */
    align?: StackableListAlign;
    children?: React.ReactNode;
    className?: string;
}
export declare function StackableListCell({ align, children, className, }: StackableListCellProps): import("react/jsx-runtime").JSX.Element;
