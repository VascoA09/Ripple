import { default as React } from 'react';

export interface ToggleButtonGroupContextValue {
    /** 'single' renders radios sharing `name`; 'multiple' renders checkboxes. */
    selection: 'single' | 'multiple';
    /** Shared input name. Required for single selection. */
    name?: string;
    /** One size for every toggle in the group. */
    size?: ToggleButtonSize;
    /**
     * Current group selection. When provided, a child is checked when its
     * `value` matches (single) or is included (multiple). `null` means the
     * group is controlled with nothing selected; `undefined` leaves children
     * uncontrolled.
     */
    value?: string | string[] | null;
    /** Child reports a change; the group computes the new value. */
    onToggle?: (childValue: string, checked: boolean) => void;
}
export declare const ToggleButtonGroupContext: React.Context<ToggleButtonGroupContextValue | null>;
export type ToggleButtonSize = 'xsmall' | 'small' | 'medium' | 'large';
export interface ToggleButtonProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'checked' | 'defaultChecked' | 'children'> {
    /** Visible label. Required unless icon-only. Must not change between states. */
    children?: React.ReactNode;
    /** Leading icon, or the only content when `children` is omitted. */
    icon?: React.ReactNode;
    /** Accessible name. Required when icon-only; applied to the input. */
    'aria-label'?: string;
    /** Tooltip text. Required when icon-only. Defaults to `aria-label`. */
    tooltip?: string;
    /** Controlled selected state. Maps to the input's `checked`. */
    selected?: boolean;
    /** Uncontrolled initial state. */
    defaultSelected?: boolean;
    /** Button size. All toggles in a group share one size. Default: 'medium'. */
    size?: ToggleButtonSize;
    /**
     * @deprecated Use Button Group `selection="single"`. Removed at the next major.
     * Puts the toggle in a single-selection set (renders a radio with this name).
     */
    groupName?: string;
}
/**
 * Toggle Button: a Button (ghost, neutral) with persistent state.
 *
 * Markup: a <label> styled as Button wrapping a native <input>. The input owns
 * the state; no aria-pressed or aria-checked is added.
 * - Standalone or multiple selection: type="checkbox".
 * - Single selection (Button Group, or deprecated groupName): type="radio".
 */
export declare const ToggleButton: React.ForwardRefExoticComponent<ToggleButtonProps & React.RefAttributes<HTMLInputElement>>;
