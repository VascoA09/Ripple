import { default as React } from 'react';

export type RadioValidation = 'positive' | 'notice' | 'negative';
export interface RadioGroupProps {
    /** Currently selected value. Controlled — required. */
    value: string;
    /** Called with the new value when a radio is selected. */
    onValueChange: (value: string) => void;
    /** Group label rendered as `<legend>`. */
    label?: string;
    /** Supplementary context below the legend. */
    description?: string;
    /** Helper text below the radio items. */
    hint?: string;
    /** Validation state applied to the group. */
    validation?: RadioValidation;
    /** Validation feedback message. */
    validationMessage?: string;
    /** Shows a required asterisk on the legend. */
    required?: boolean;
    /** Disables all radios in the group. */
    disabled?: boolean;
    /** `name` attribute shared by all radios. Auto-generated when omitted. */
    name?: string;
    /** Layout direction of the radio items. */
    layout?: 'stacked' | 'inline';
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'onChange'> {
    /** Value this radio represents. */
    value: string;
    /** Visible label for the option. */
    label?: string;
}
export declare const Radio: React.ForwardRefExoticComponent<RadioProps & React.RefAttributes<HTMLInputElement>>;
export declare const RadioGroup: React.ForwardRefExoticComponent<RadioGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
