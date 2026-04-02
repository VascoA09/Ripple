import { default as React } from 'react';

export type ChipSize = 'small' | 'medium';
export interface ChipProps {
    /** Chip label — required */
    label: string;
    /**
     * selectable: toggles between selected/unselected (stays visible).
     * removable:  displays a close button and disappears when removed.
     */
    variant: 'selectable' | 'removable';
    /** Icon rendered before the label. Caller is responsible for sizing
     *  (12px for small, 16px for medium). */
    icon?: React.ReactNode;
    /** Counter badge rendered after the label */
    count?: number;
    /** Height scale — defaults to medium */
    size?: ChipSize;
    /** Prevents all interaction */
    disabled?: boolean;
    /** Controlled selected state */
    selected?: boolean;
    /** Uncontrolled initial selected state */
    defaultSelected?: boolean;
    /** Fires when selected state changes */
    onChange?: (selected: boolean) => void;
    /** Fires when the close button is clicked */
    onRemove?: () => void;
    className?: string;
}
export interface ChipGroupProps {
    /** Accessible label for the group */
    'aria-label'?: string;
    /** Gap between chips: 'default' = 8px, 'loose' = 12px */
    gap?: 'default' | 'loose';
    children: React.ReactNode;
    className?: string;
}
export declare const Chip: React.ForwardRefExoticComponent<ChipProps & React.RefAttributes<HTMLSpanElement | HTMLButtonElement>>;
export declare function ChipGroup({ 'aria-label': ariaLabel, gap, children, className, }: ChipGroupProps): import("react/jsx-runtime").JSX.Element;
