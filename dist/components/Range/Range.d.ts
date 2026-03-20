import { default as React } from 'react';

export type RangeSize = 'small' | 'medium';
export interface RangeIndicator {
    value: number;
    label: string;
}
interface RangeBaseProps {
    /** Descriptive label. Always required — use `hideLabel` if visually hidden. */
    label: string;
    /** 'top' (default) or 'left' inline with track. */
    labelPosition?: 'top' | 'left';
    /** Hides the label visually; still present for screen readers. */
    hideLabel?: boolean;
    /** Minimum value. Default 0. */
    min?: number;
    /** Maximum value. Default 100. */
    max?: number;
    /** Step increment. Default 1. */
    step?: number;
    /** Track + handle size. Default 'medium'. */
    size?: RangeSize;
    /**
     * Shows tick marks on the track.
     * `true` — auto-generates marks at `step` intervals (capped at 10).
     * `number[]` — marks at specific values.
     */
    markers?: boolean | number[];
    /** Text labels below the markers, providing non-numeric context. */
    indicators?: RangeIndicator[];
    /** Shows min and max values above the track ends. */
    showMinMax?: boolean;
    /** Helper text below the component. */
    hint?: string;
    /** Validation state. Only 'negative' (error) is supported per spec. */
    validation?: 'negative';
    /** Error message text. */
    validationMessage?: string;
    /** Formats numeric values for tooltip, min/max labels, and aria-valuetext. */
    formatValue?: (value: number) => string;
    disabled?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export interface SingleRangeProps extends RangeBaseProps {
    dual?: false | undefined;
    value: number;
    onChange: (value: number) => void;
}
export interface DualRangeProps extends RangeBaseProps {
    dual: true;
    value: [number, number];
    onChange: (value: [number, number]) => void;
    /** Accessible label for the low handle. Default: "Minimum {label}". */
    lowLabel?: string;
    /** Accessible label for the high handle. Default: "Maximum {label}". */
    highLabel?: string;
}
export type RangeProps = SingleRangeProps | DualRangeProps;
export declare function Range(props: RangeProps): import("react/jsx-runtime").JSX.Element;
export {};
