import { default as React } from 'react';

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** The numerical count to display. Values above 99 render as "99+". */
    count: number;
    variant?: 'fill' | 'outline';
    size?: 'small' | 'medium' | 'large';
    color?: 'primary' | 'notice' | 'negative' | 'positive' | 'neutral';
}
export declare const Counter: React.ForwardRefExoticComponent<CounterProps & React.RefAttributes<HTMLSpanElement>>;
