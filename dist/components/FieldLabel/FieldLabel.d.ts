
export type FieldLabelPosition = 'stacked' | 'inline';
export interface FieldLabelProps {
    /** The visible label text. */
    label: string;
    /** Additional context below the label row. */
    description?: string;
    /** Renders a red asterisk (*). Apply aria-required="true" on the input. */
    required?: boolean;
    /** Renders "(optional)" text. Mutually exclusive with required. */
    optional?: boolean;
    /** Help text shown in a tooltip when the help icon is hovered or focused. */
    helpText?: string;
    /**
     * `stacked` (default) — label sits above the control.
     * `inline` — label has a fixed min-width, designed to sit beside the control
     * in a parent flex container.
     */
    position?: FieldLabelPosition;
    /** Associates the label with a form control via its id. */
    htmlFor?: string;
    id?: string;
    className?: string;
}
export declare function FieldLabel({ label, description, required, optional, helpText, position, htmlFor, id, className, }: FieldLabelProps): import("react/jsx-runtime").JSX.Element;
