import { default as React } from 'react';

export type CheckboxValidation = 'positive' | 'notice' | 'negative';
export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
    /** Visible label — omit only when purpose is clear from surrounding context */
    label?: string;
    /**
     * Tri-state: shows a dash indicator. Used for parent checkboxes when some
     * but not all children are selected. Overrides `checked` visually.
     */
    indeterminate?: boolean;
    /** Validation state applied to the checkbox border and background */
    validation?: CheckboxValidation;
}
export interface CheckboxGroupProps {
    /** Group label, rendered via FieldLabel inside a <legend>. */
    legend: string;
    /** Sub-label below the legend. Forwarded to FieldLabel's description. */
    description?: string;
    /** Appends a required asterisk to the legend. */
    required?: boolean;
    /** Appends "(optional)" to the legend. Mutually exclusive with required. */
    optional?: boolean;
    /** Help tooltip on the legend. Forwarded to FieldLabel's helpText. */
    helpText?: string;
    /** Supplementary text below the legend, rendered via Hint. */
    hint?: string;
    /** Validation state — propagated visually to the group container. */
    validation?: CheckboxValidation;
    /** Validation feedback message with contextual icon. */
    validationMessage?: string;
    children: React.ReactNode;
    className?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
