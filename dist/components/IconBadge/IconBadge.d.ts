import { default as React } from 'react';
import { CounterProps } from '../Counter';

export interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** The numerical count to display. Values above 99 render as "99+". */
    count: number;
    color?: CounterProps['color'];
    variant?: CounterProps['variant'];
    children: React.ReactNode;
}
export declare const IconBadge: React.ForwardRefExoticComponent<IconBadgeProps & React.RefAttributes<HTMLSpanElement>>;
