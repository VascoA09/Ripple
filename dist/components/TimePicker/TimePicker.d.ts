
export type TimePickerSize = 'small' | 'medium' | 'large';
export type TimePickerValidation = 'positive' | 'notice' | 'negative';
export interface TimePickerProps {
    /** Visible label — always required. Use hideLabel for contexts like data grids. */
    label: string;
    /** Visually hides the label while keeping it accessible. */
    hideLabel?: boolean;
    /**
     * Controlled time value in 24-hour "HH:MM" or "HH:MM:SS" format.
     * Omit for uncontrolled usage.
     */
    value?: string;
    onChange?: (value: string) => void;
    /** Helper text below the field. Replaced by validationMessage when triggered. */
    hint?: string;
    validation?: TimePickerValidation;
    validationMessage?: string;
    size?: TimePickerSize;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    /**
     * Shows a clear button when a value is set.
     * Also adds a Clear action to the panel footer.
     */
    clearable?: boolean;
    /** Adds a seconds column to the panel and seconds segment to the input. */
    showSeconds?: boolean;
    /** 12 or 24 hour display. Default: 24. */
    hourCycle?: 12 | 24;
    className?: string;
}
/**
 * TimePicker lets users enter or select a time value via a segmented input and
 * an optional scroll-column panel.
 *
 * Value format: "HH:MM" or "HH:MM:SS" in 24-hour notation.
 * The hourCycle prop controls display (12/24h); the value is always 24-hour.
 *
 * Keyboard — segments:
 *   ↑ / ↓          increment / decrement
 *   ← / →          move focus between segments
 *   0–9            type a digit (auto-advances on 2 digits)
 *   a / p          (AM/PM segment) set AM or PM
 *   Enter / Space  open / close the panel
 *   Escape         close the panel
 */
export declare function TimePicker({ label, hideLabel, value: valueProp, onChange, hint, validation, validationMessage, size, disabled, readOnly, required, clearable, showSeconds, hourCycle, className, }: TimePickerProps): import("react/jsx-runtime").JSX.Element;
