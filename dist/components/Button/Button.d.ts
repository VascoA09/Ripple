import { default as React } from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Visual style: fill (default), outline, or ghost */
    variant?: 'fill' | 'outline' | 'ghost';
    /** Height scale */
    size?: 'xsmall' | 'small' | 'medium' | 'large';
    /** Semantic color: primary (default), neutral, or negative */
    color?: 'primary' | 'neutral' | 'negative';
    /** Icon rendered before the label. Replaced by spinner during loading. */
    iconStart?: React.ReactNode;
    /** Icon rendered after the label. Hidden during loading. */
    iconEnd?: React.ReactNode;
    /** Shows a spinner and disables the button to indicate an in-progress action. */
    loading?: boolean;
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
