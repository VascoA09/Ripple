import { default as React } from 'react';

export type DrawerSide = 'left' | 'right';
export type DrawerSize = 'small' | 'medium' | 'large' | 'full';
export interface DrawerContextValue {
    onClose: () => void;
    titleId: string;
}
export declare const DrawerContext: React.Context<DrawerContextValue>;
export interface DrawerProps {
    open: boolean;
    onClose: () => void;
    side?: DrawerSide;
    size?: DrawerSize;
    /** Clicking the overlay closes the drawer. Defaults to true. */
    closeOnOverlayClick?: boolean;
    /**
     * Persistent drawers have no overlay, no focus trap, and no scroll lock.
     * They sit alongside page content and remain visible until dismissed.
     * Use for navigation panels or detail panels in desktop split-pane layouts.
     */
    persistent?: boolean;
    /** Overrides the aria-label derived from the title */
    'aria-label'?: string;
    children: React.ReactNode;
    className?: string;
    /** Extra class(es) applied to the overlay element (modal drawers only) */
    overlayClassName?: string;
}
export declare function Drawer({ open, onClose, side, size, closeOnOverlayClick, persistent, 'aria-label': ariaLabel, children, className, overlayClassName, }: DrawerProps): import("react/jsx-runtime").JSX.Element | null;
export interface DrawerHeaderProps {
    title: string;
    description?: string;
    /** Up to two action buttons rendered before the close button */
    actions?: React.ReactNode;
    className?: string;
}
export declare function DrawerHeader({ title, description, actions, className }: DrawerHeaderProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerToolsProps {
    children: React.ReactNode;
    className?: string;
}
export declare function DrawerTools({ children, className }: DrawerToolsProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerContentProps {
    children: React.ReactNode;
    className?: string;
}
export declare function DrawerContent({ children, className }: DrawerContentProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerSectionProps {
    /** Uppercase section label */
    title?: string;
    /** Numeric count shown in a Counter badge beside the title */
    count?: number;
    /** Link rendered at the trailing end of the section title row */
    link?: {
        label: string;
        onClick: () => void;
    };
    /** Renders a 1px separator above the section */
    divider?: boolean;
    children: React.ReactNode;
    className?: string;
}
export declare function DrawerSection({ title, count, link, divider, children, className }: DrawerSectionProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerMenuItemProps {
    label: string;
    icon?: React.ReactNode;
    /** Short identifier code, right-aligned */
    code?: string;
    /** Marks this item as the current page/view */
    active?: boolean;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    /** Content rendered in the trailing context button (visible on hover) */
    contextMenu?: React.ReactNode;
    className?: string;
}
export declare function DrawerMenuItem({ label, icon, code, active, disabled, href, onClick, contextMenu, className, }: DrawerMenuItemProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerMultiLevelItemProps {
    label: string;
    icon?: React.ReactNode;
    /** Marks this item (not its children) as active */
    active?: boolean;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
    /** Controlled expanded state */
    expanded?: boolean;
    defaultExpanded?: boolean;
    onExpandedChange?: (expanded: boolean) => void;
    children: React.ReactNode;
    className?: string;
}
export declare function DrawerMultiLevelItem({ label, icon, active, disabled, href, onClick, expanded: expandedProp, defaultExpanded, onExpandedChange, children, className, }: DrawerMultiLevelItemProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerListItemProps {
    header: string;
    secondary?: string;
    message?: string;
    timestamp?: string;
    unread?: boolean;
    /** Avatar, icon, or any element before the content */
    before?: React.ReactNode;
    /** Badge, counter, or any element after the content */
    after?: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}
export declare function DrawerListItem({ header, secondary, message, timestamp, unread, before, after, onClick, disabled, className, }: DrawerListItemProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerNotificationItemProps {
    title: string;
    message?: string;
    timestamp?: string;
    unread?: boolean;
    avatar?: React.ReactNode;
    action?: React.ReactNode;
    /** Hides the bottom divider on the last item */
    last?: boolean;
    onClick?: () => void;
    className?: string;
}
export declare function DrawerNotificationItem({ title, message, timestamp, unread, avatar, action, last, onClick, className, }: DrawerNotificationItemProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerFooterProps {
    children: React.ReactNode;
    className?: string;
}
export declare function DrawerFooter({ children, className }: DrawerFooterProps): import("react/jsx-runtime").JSX.Element;
export interface DrawerContextButtonProps {
    onClick: (e: React.MouseEvent) => void;
    'aria-label'?: string;
}
export declare function DrawerContextButton({ onClick, 'aria-label': ariaLabel, }: DrawerContextButtonProps): import("react/jsx-runtime").JSX.Element;
