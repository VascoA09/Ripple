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
    /** Group label rendered as a <legend> */
    legend: string;
    /** Appends a required asterisk to the legend */
    required?: boolean;
    /** Supplementary text below the legend */
    hint?: string;
    /** Validation state — propagated visually to the group container */
    validation?: CheckboxValidation;
    /** Validation feedback message */
    validationMessage?: string;
    children: React.ReactNode;
    className?: string;
}
export declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;
export declare const CheckboxGroup: React.ForwardRefExoticComponent<CheckboxGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
