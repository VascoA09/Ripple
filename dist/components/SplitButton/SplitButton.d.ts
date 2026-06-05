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
    /** Secondary actions shown in the FlyoutMenu */
    items: SplitButtonItem[];
    /** Visual style. Ghost is not supported — use outline for low-emphasis. Default: 'fill' */
    variant?: 'fill' | 'outline';
    /** Semantic color. Default: 'primary' */
    color?: 'primary' | 'neutral' | 'negative';
    /**
     * Height scale. Default: 'medium'.
     * XSmall (24px) does not meet the 44×44px touch target standard —
     * restrict to dense toolbar contexts and enforce a spacing buffer at the usage site.
     */
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    /** Icon rendered before the primary label. Replaced by spinner during loading. */
    iconStart?: React.ReactNode;
    /** Disables both SplitButtonAction and SplitButtonTrigger. */
    disabled?: boolean;
    /**
     * Shows a spinner on SplitButtonAction and prevents its interaction.
     * SplitButtonTrigger is also suppressed while loading — opening the menu
     * during an in-flight action is undefined behaviour.
     */
    loading?: boolean;
    /**
     * Accessible label for SplitButtonTrigger (icon-only).
     * Should follow the pattern "More [action] options", e.g. "More save options".
     */
    triggerLabel?: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare function SplitButton({ label, onClick, items, variant, color, size, iconStart, disabled, loading, triggerLabel, className, style, }: SplitButtonProps): import("react/jsx-runtime").JSX.Element;
