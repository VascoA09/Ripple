import { default as React } from 'react';

export type TextAreaValidation = 'positive' | 'notice' | 'negative';
export type TextAreaResize = 'vertical' | 'none' | 'auto';
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'className' | 'style' | 'id'> {
    /** Visible label. Always required — every text area must have an associated label. */
    label: string;
    /** Helper text below the field. Replaced by validationMessage when validation is triggered. */
    hint?: string;
    /** Validation state. */
    validation?: TextAreaValidation;
    /** Validation feedback message. Rendered with the appropriate icon. */
    validationMessage?: string;
    /**
     * Resize behaviour.
     * - 'vertical' (default): manual vertical resize handle visible
     * - 'none': fixed height, no resize handle
     * - 'auto': grows with content up to optional maxHeight, then scrolls
     */
    resize?: TextAreaResize;
    /**
     * Minimum height in pixels for the 'auto' resize mode.
     * Ignored for other resize modes.
     */
    minHeight?: number;
    /**
     * Maximum height in pixels for the 'auto' resize mode.
     * Once reached, content scrolls within the field.
     * Ignored for other resize modes.
     */
    maxHeight?: number;
    /** Shows a "current / max" character counter below the field. Requires maxLength. */
    showCounter?: boolean;
    /** Applies to the root container. */
    className?: string;
    /** Applies to the root container. */
    style?: React.CSSProperties;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
