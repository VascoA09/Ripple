import { default as React } from 'react';

export type TagColor = 'gray' | 'blue' | 'green' | 'emerald' | 'aqua' | 'purple' | 'violet' | 'pink' | 'red' | 'orange' | 'ochre';
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Label text */
    children: React.ReactNode;
    /** Size variant. Defaults to 'medium'. */
    size?: 'small' | 'medium' | 'large';
    /** Decorative color for categorisation — not semantic. Defaults to 'gray'. */
    color?: TagColor;
    /** Optional icon rendered before the label. */
    icon?: React.ReactNode;
}
export declare const Tag: React.ForwardRefExoticComponent<TagProps & React.RefAttributes<HTMLSpanElement>>;
