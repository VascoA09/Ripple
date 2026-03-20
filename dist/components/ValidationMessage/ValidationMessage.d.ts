
export type ValidationMessageVariant = 'positive' | 'notice' | 'negative';
export interface ValidationMessageProps {
    /** The feedback text. Keep concise and actionable. */
    message: string;
    /**
     * The variant determines the icon, color, and ARIA live behaviour:
     * - `negative` — error, must be corrected. Announced assertively.
     * - `notice`   — warning or recommendation. Announced politely.
     * - `positive` — success confirmation. Announced politely.
     */
    variant: ValidationMessageVariant;
    /**
     * Required. Must match the `aria-describedby` (positive/notice) or
     * `aria-errormessage` (negative) value on the associated input.
     */
    id: string;
    className?: string;
}
/**
 * ValidationMessage renders post-interaction feedback below a form control.
 *
 * Accessibility wiring expected on the input:
 * - negative: `aria-invalid="true"` + `aria-errormessage="<id>"`
 * - positive/notice: `aria-describedby="<id>"`
 */
export declare function ValidationMessage({ message, variant, id, className, }: ValidationMessageProps): import("react/jsx-runtime").JSX.Element;
