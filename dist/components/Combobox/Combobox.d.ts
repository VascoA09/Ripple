import { default as React } from 'react';

export interface ComboboxOption {
    value: string;
    label: string;
    /** Secondary line below the label */
    description?: string;
    /** Icon rendered before the label — caller sizes it (16px recommended) */
    icon?: React.ReactNode;
    /** Prevents selection */
    disabled?: boolean;
    /** Group key — options sharing the same group name are rendered together */
    group?: string;
}
export type ComboboxValidation = 'positive' | 'notice' | 'negative';
interface ComboboxBaseProps {
    options: ComboboxOption[];
    label?: string;
    placeholder?: string;
    hint?: string;
    validation?: ComboboxValidation;
    validationMessage?: string;
    size?: 'small' | 'medium' | 'large';
    /** Label stacked above input (default) or inline to the left */
    labelPosition?: 'stacked' | 'inline';
    disabled?: boolean;
    required?: boolean;
    /** Text shown when no options match the query */
    noResultsText?: string;
    id?: string;
    className?: string;
}
export interface ComboboxSingleProps extends ComboboxBaseProps {
    selection?: 'single';
    value?: string | null;
    onChange?: (value: string | null) => void;
}
export interface ComboboxMultiProps extends ComboboxBaseProps {
    selection: 'multi';
    value?: string[];
    onChange?: (values: string[]) => void;
}
export type ComboboxProps = ComboboxSingleProps | ComboboxMultiProps;
export declare const Combobox: React.ForwardRefExoticComponent<ComboboxProps & React.RefAttributes<HTMLInputElement>>;
export {};
