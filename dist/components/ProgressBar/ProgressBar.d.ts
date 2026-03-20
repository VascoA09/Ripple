import { CSSProperties } from 'react';

export type ProgressBarState = 'active' | 'success' | 'error';
export interface ProgressBarProps {
    /**
     * Describes what is being tracked. Required for accessibility.
     * Visually hidden when `hideLabel` is true, but always read by screen readers.
     */
    label: string;
    /**
     * Progress value 0–100. Required for determinate bars.
     * Ignored when `indeterminate` is true.
     */
    value?: number;
    /**
     * Custom value string shown in the header instead of the auto-calculated
     * percentage (e.g. "33.6 MB of 48 MB"). Ignored in success/error states.
     */
    valueLabel?: string;
    /** Additional context text below the track (e.g. "33.6 MB of 48 MB"). */
    hint?: string;
    /** Current state of the operation. Defaults to 'active'. */
    state?: ProgressBarState;
    /**
     * Use when progress cannot be quantified. Renders an animated fill pattern.
     * Overrides `value`.
     */
    indeterminate?: boolean;
    /** Hides the label visually. Always present in the DOM for screen readers. */
    hideLabel?: boolean;
    /** Hides the value / state icon in the header. */
    hideValue?: boolean;
    className?: string;
    style?: CSSProperties;
}
export declare function ProgressBar({ label, value, valueLabel, hint, state, indeterminate, hideLabel, hideValue, className, style, }: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
