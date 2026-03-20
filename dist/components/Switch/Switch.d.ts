import { default as React } from 'react';

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /**
     * Visible label describing what the Switch controls.
     * Omit only when the purpose is completely obvious from surrounding context.
     */
    label?: string;
    /** Position of the label relative to the track. Defaults to 'after'. */
    labelPosition?: 'before' | 'after';
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
