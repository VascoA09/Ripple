import { default as React } from 'react';

export type DatePickerSize = 'small' | 'medium' | 'large';
export type DatePickerValidation = 'positive' | 'notice' | 'negative';
export interface DatePickerProps {
    /** Visible label — always required. Use hideLabel for search / grid contexts. */
    label: string;
    /** Visually hides the label while keeping it accessible. */
    hideLabel?: boolean;
    /**
     * Controlled date value in ISO "YYYY-MM-DD" format.
     * Omit for uncontrolled usage.
     */
    value?: string;
    onChange?: (value: string) => void;
    /** Helper text below the field. Replaced by validationMessage when triggered. */
    hint?: string;
    validation?: DatePickerValidation;
    validationMessage?: string;
    size?: DatePickerSize;
    disabled?: boolean;
    readOnly?: boolean;
    required?: boolean;
    /**
     * Replaces the calendar button with a clear button once a date is selected.
     * Also adds Clear to the calendar footer.
     */
    clearable?: boolean;
    /** Optional icon before the date segments. Useful for contextual indicators (e.g. travel). */
    iconStart?: React.ReactNode;
    /** Shows ISO week numbers in the day view. */
    showWeekNumbers?: boolean;
    /** Shows Clear and Today quick actions in the calendar footer. */
    showFooter?: boolean;
    /** Disables all dates before today. */
    disablePast?: boolean;
    /** Disables all dates after today. */
    disableFuture?: boolean;
    /** Minimum selectable date in "YYYY-MM-DD" format. */
    minDate?: string;
    /** Maximum selectable date in "YYYY-MM-DD" format. */
    maxDate?: string;
    className?: string;
}
/**
 * DatePicker lets users enter or select a date via a segmented DD/MM/YYYY input
 * and an interactive calendar panel with day, month, and year views.
 *
 * Value format: ISO "YYYY-MM-DD". All segment interaction and calendar selection
 * emits values in this format.
 *
 * Keyboard — segments:
 *   ↑ / ↓       increment / decrement
 *   ← / →       move focus between segments
 *   0–9         type a digit (auto-advances on 2 digits or cantExtend)
 *   Enter       open / close the calendar panel
 *   Escape      close the panel
 *
 * Keyboard — calendar day grid:
 *   ← → ↑ ↓    move focus between days
 *   Page Up     jump to last day of the current month
 *   Page Down   jump to first day of the current month
 *   Home        first day of the current week within the month
 *   End         last day of the current week within the month
 *   Enter       select focused day
 *   Escape      close panel
 */
export declare function DatePicker({ label, hideLabel, value: valueProp, onChange, hint, validation, validationMessage, size, disabled, readOnly, required, clearable, iconStart, showWeekNumbers, showFooter, disablePast, disableFuture, minDate, maxDate, className, }: DatePickerProps): import("react/jsx-runtime").JSX.Element;
