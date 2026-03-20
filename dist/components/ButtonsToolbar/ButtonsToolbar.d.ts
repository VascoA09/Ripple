import { default as React } from 'react';

export interface ToolbarAction {
    /** Unique identifier */
    id: string;
    /** Button label (also used as aria-label in icon-only mode) */
    label: string;
    /** Optional icon rendered before the label */
    icon?: React.ReactNode;
    /** Visual emphasis level */
    type?: 'primary' | 'secondary' | 'tertiary';
    /** Button height scale — defaults to medium */
    size?: 'small' | 'medium' | 'large';
    /** Click handler */
    onClick?: () => void;
    /** Prevents interaction */
    disabled?: boolean;
    /** Shows spinner and disables button */
    loading?: boolean;
    /** Tooltip text for icon-only mode */
    tooltip?: string;
}
export interface ButtonsToolbarProps {
    /** Ordered array of toolbar actions */
    actions: ToolbarAction[];
    /**
     * Display variant controlling how many buttons are visible.
     * - full:    up to 5 visible, overflow for 6+
     * - compact: up to 3 visible, overflow for the rest
     * - minimal: primary action only, all others in overflow
     * Defaults to 'full'. Use CSS media queries to swap variants responsively.
     */
    variant?: 'full' | 'compact' | 'minimal';
    /**
     * Renders icon-only buttons. All actions must have an `icon` defined.
     * Overflow menu always shows labels regardless of this setting.
     */
    iconOnly?: boolean;
    /**
     * Controls button order and overflow position.
     * - left (default): primary rightmost, overflow trigger leftmost
     * - right: primary leftmost, overflow trigger rightmost
     */
    alignment?: 'left' | 'right';
    className?: string;
    style?: React.CSSProperties;
}
export declare function ButtonsToolbar({ actions, variant, iconOnly, alignment, className, style, }: ButtonsToolbarProps): import("react/jsx-runtime").JSX.Element;
