import { default as React } from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'fill' | 'outline';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'notice' | 'negative' | 'positive' | 'neutral';
    /** Optional icon rendered to the left of the label. Always provide a text label alongside. */
    icon?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
