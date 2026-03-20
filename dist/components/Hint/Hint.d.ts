import { ReactNode } from 'react';

export interface HintProps {
    /**
     * The hint text. Alternatively pass content as `children` for richer markup
     * (e.g. a link or formatted example).
     */
    text?: string;
    /**
     * Must match the `aria-describedby` value on the associated input.
     * Without an `id`, screen readers cannot associate the hint with the field.
     */
    id?: string;
    children?: ReactNode;
    className?: string;
}
export declare function Hint({ text, id, children, className }: HintProps): import("react/jsx-runtime").JSX.Element;
