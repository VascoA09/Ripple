import { default as React } from 'react';

export interface SplitButtonItem {
    /** Unique identifier */
    id: string;
    /** Menu item label */
    label: string;
    /** Optional icon rendered before the label */
    icon?: React.ReactNode;
    /** Prevents the item from being selected */
    disabled?: boolean;
    /** Called when the item is selected */
    onSelect: () => void;
}
export interface SplitButtonProps {
    /** Primary action label */
    label: string;
    /** Primary action handler */
    onClick: () => void;
    /** Secondary actions shown in the dropdown menu */
    items: SplitButtonItem[];
    /** Visual style. Default: 'fill' */
    variant?: 'fill' | 'outline' | 'ghost';
    /** Semantic color. Default: 'primary' */
    color?: 'primary' | 'neutral' | 'negative';
    /** Height scale. Default: 'medium' */
    size?: 'small' | 'medium' | 'large';
    /** Icon rendered before the primary label. Replaced by spinner during loading. */
    iconStart?: React.ReactNode;
    /** Disables both the primary button and the dropdown trigger. */
    disabled?: boolean;
    /** Shows a spinner on the primary button and prevents its interaction. The trigger remains active. */
    loading?: boolean;
    /** Accessible label for the dropdown trigger. Default: 'More options' */
    triggerLabel?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare function SplitButton({ label, onClick, items, variant, color, size, iconStart, disabled, loading, triggerLabel, className, style, }: SplitButtonProps): import("react/jsx-runtime").JSX.Element;
