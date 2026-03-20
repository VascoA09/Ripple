import { default as React } from 'react';

export interface AccordionItem {
    /** Unique identifier used to track expanded state */
    value: string;
    /** Header text displayed in the trigger */
    header: string;
    /** Content revealed when the item is expanded */
    content: React.ReactNode;
    /** Optional element rendered before the header text (e.g. an icon) */
    beforeElement?: React.ReactNode;
    /** Prevents the item from being toggled */
    disabled?: boolean;
}
export interface AccordionProps {
    /** Items to render */
    items: AccordionItem[];
    /** Height and typography scale */
    size?: 'small' | 'medium' | 'large';
    /** Uncontrolled: items open by default */
    defaultValue?: string[];
    /** Controlled: currently open items */
    value?: string[];
    /** Fires when open items change */
    onValueChange?: (value: string[]) => void;
    className?: string;
}
export declare function Accordion({ items, size, defaultValue, value, onValueChange, className, }: AccordionProps): import("react/jsx-runtime").JSX.Element;
