import { default as React } from 'react';

export type TextInputValidation = 'positive' | 'notice' | 'negative';
export type TextInputSize = 'small' | 'medium' | 'large';
export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'style' | 'id' | 'size' | 'prefix'> {
    /** Visible label. Always required — provide hideLabel for search bars and similar contexts. */
    label: string;
    /** Visually hides the label while keeping it accessible. */
    hideLabel?: boolean;
    /** Helper text below the field. Replaced by validationMessage when triggered. */
    hint?: string;
    /** Validation state. */
    validation?: TextInputValidation;
    /** Validation feedback message, rendered with the appropriate icon. */
    validationMessage?: string;
    /** Height scale. Default: 'medium'. */
    size?: TextInputSize;
    /**
     * Attached prefix block — displayed before the input with its own background.
     * Typical use: currency symbols ($), protocol labels (https://), or icons.
     */
    prefix?: React.ReactNode;
    /**
     * Attached suffix block — displayed after the input with its own background.
     * Typical use: units (kg, %), domain suffixes (.com).
     */
    suffix?: React.ReactNode;
    /** Icon rendered inside the field at the leading edge. */
    iconStart?: React.ReactNode;
    /** Icon rendered inside the field at the trailing edge. Not used for type='password' or type='search'. */
    iconEnd?: React.ReactNode;
    /** Shows a "current / max" character counter below the field. Requires maxLength. */
    showCounter?: boolean;
    /**
     * Called when the clear button is clicked on a search input.
     * In controlled usage, update your value state inside this handler.
     */
    onClear?: () => void;
    /** Applies to the root container. */
    className?: string;
    /** Applies to the root container. */
    style?: React.CSSProperties;
}
export declare const TextInput: React.ForwardRefExoticComponent<TextInputProps & React.RefAttributes<HTMLInputElement>>;
