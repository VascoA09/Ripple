import React from 'react'
import { ExternalLink } from 'lucide-react'
import './Link.css'

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Visual underline behaviour. `loud` always shows underline; `soft` shows on hover/focus only. */
  variant?: 'loud' | 'soft'
  /** Text size. Match to surrounding body text scale. */
  size?: '100' | '80'
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  function Link({ variant = 'loud', size = '100', target, rel, children, className, ...rest }, ref) {
    const isExternal = target === '_blank'
    const resolvedRel = isExternal ? 'noopener noreferrer' : rel

    return (
      <a
        ref={ref}
        className={['link', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        target={target}
        rel={resolvedRel}
        {...rest}
      >
        {children}
        {isExternal && <ExternalLink aria-hidden="true" />}
      </a>
    )
  }
)
