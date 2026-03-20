import { default as React } from 'react';
import { ButtonProps } from '../Button/Button';

export interface IconButtonProps extends Omit<ButtonProps, 'children' | 'iconStart' | 'iconEnd'> {
    /** The icon to display. Typically a 16–20px SVG element. */
    icon: React.ReactNode;
    /**
     * Required accessible name. Icon buttons have no visible text label,
     * so aria-label is mandatory for screen reader users.
     */
    'aria-label': string;
}
/**
 * IconButton renders a square, icon-only button.
 * It is a thin wrapper over Button that enforces the icon-only pattern
 * and makes aria-label required.
 *
 * All Button props (variant, size, color, loading, disabled) are supported.
 */
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
