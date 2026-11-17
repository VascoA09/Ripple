import { default as React } from 'react';
import { ToggleButtonSize } from '../ToggleButton';

export type ButtonGroupSelection = 'action' | 'single' | 'multiple';
export interface ButtonGroupProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, 'onChange' | 'defaultValue'> {
    /** What the group does. Decides the children and their input type. Default: 'action'. */
    selection?: ButtonGroupSelection;
    /** Accessible name of the group, rendered as <legend>. Required. */
    legend: string;
    /** Shows the legend above the group. Default: false (visually hidden). */
    legendVisible?: boolean;
    /** Controlled selection: string (single) or string[] (multiple). Ignored in 'action'. */
    value?: string | string[];
    /** Uncontrolled initial selection. Ignored in 'action'. */
    defaultValue?: string | string[];
    /** Fires with the new selection: string (single) or string[] (multiple). */
    onChange?: (value: string | string[]) => void;
    /** Shared input name for the children. Generated when omitted. */
    name?: string;
    /** Size for every Toggle Button child. Default: 'medium'. */
    size?: ToggleButtonSize;
    /** Layout direction. Default: 'horizontal'. */
    orientation?: 'horizontal' | 'vertical';
    /** Padded variant: surface background, border, 4px padding. Default: false. */
    padded?: boolean;
    /** Disables every child through <fieldset disabled>. */
    disabled?: boolean;
    children: React.ReactNode;
}
export declare const ButtonGroup: React.ForwardRefExoticComponent<ButtonGroupProps & React.RefAttributes<HTMLFieldSetElement>>;
