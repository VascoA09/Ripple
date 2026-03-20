import { default as React } from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';
export type DividerVariant = 'full' | 'inset' | 'inset-text';
export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
    /** Orientation of the divider line. Defaults to 'horizontal'. */
    orientation?: DividerOrientation;
    /** Visual variant controlling margins and optional label. Defaults to 'full'. */
    variant?: DividerVariant;
    /**
     * Label text for the 'inset-text' variant.
     * Renders centred between two line segments and is used as aria-label on the separator.
     */
    children?: React.ReactNode;
}
export declare const Divider: React.ForwardRefExoticComponent<DividerProps & React.RefAttributes<HTMLElement>>;
