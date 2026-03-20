import { default as React } from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    /** Visual underline behaviour. `loud` always shows underline; `soft` shows on hover/focus only. */
    variant?: 'loud' | 'soft';
    /** Text size. Match to surrounding body text scale. */
    size?: '100' | '80';
}
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>>;
