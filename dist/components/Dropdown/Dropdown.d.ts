import { default as React } from 'react';

export type DropdownSize = 'small' | 'medium' | 'large';
export type DropdownValidation = 'negative' | 'notice' | 'positive';
export interface DropdownOption {
    label: string;
    value: string;
    disabled?: boolean;
    description?: string;
    icon?: React.ReactNode;
    group?: string;
}
export interface DropdownProps {
    label?: string;
    placeholder?: string;
    /** Controlled selected value */
    value?: string;
    defaultValue?: string;
    options: DropdownOption[];
    onChange?: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    size?: DropdownSize;
    validation?: DropdownValidation;
    validationMessage?: string;
    helperText?: string;
    id?: string;
    className?: string;
    'aria-label'?: string;
}
export declare function Dropdown({ label, placeholder, value: valueProp, defaultValue, options, onChange, disabled, required, size, validation, validationMessage, helperText, id: idProp, className, 'aria-label': ariaLabel, }: DropdownProps): import("react/jsx-runtime").JSX.Element;
