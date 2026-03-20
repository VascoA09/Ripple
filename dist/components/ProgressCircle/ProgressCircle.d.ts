import { CSSProperties } from 'react';

export type ProgressCircleVariant = 'primary' | 'positive' | 'notice' | 'negative';
export interface ProgressCircleProps {
    /** Progress value 0–100. */
    value: number;
    /**
     * Label rendered in the centre of the circle.
     * Defaults to `${value}%`. Use custom labels for integers ("3"),
     * fractions ("72/100"), or overflow ("99+").
     */
    label?: string;
    /** Circle diameter in pixels. Default 120. Range: 80–200. */
    size?: number;
    /**
     * Font size for the centre label in pixels.
     * Auto-calculated as `max(12, floor(size × 0.25))` when omitted.
     * Minimum 12px is always enforced.
     */
    labelFontSize?: number;
    /** Color variant. Default 'primary'. */
    variant?: ProgressCircleVariant;
    /**
     * Accessible label for screen readers.
     * Defaults to `${label ?? value + '%'}`.
     */
    ariaLabel?: string;
    className?: string;
    style?: CSSProperties;
}
export declare function ProgressCircle({ value, label, size, labelFontSize, variant, ariaLabel, className, style, }: ProgressCircleProps): import("react/jsx-runtime").JSX.Element;
