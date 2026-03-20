
export interface SpinnerProps {
    /** Diameter of the spinner circle */
    size?: 's' | 'm' | 'l' | 'xl';
    /** Color context — match to the background the spinner sits on */
    variant?: 'primary' | 'neutral' | 'inverse';
    /** Optional visible label rendered alongside the spinner */
    label?: string;
    /** Layout of the label relative to the spinner */
    labelPosition?: 'stacked' | 'inline';
    /** Accessible name when no visible label is provided */
    'aria-label'?: string;
    className?: string;
}
export declare function Spinner({ size, variant, label, labelPosition, 'aria-label': ariaLabel, className, }: SpinnerProps): import("react/jsx-runtime").JSX.Element;
