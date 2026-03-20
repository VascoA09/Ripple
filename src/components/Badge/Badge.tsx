import React from 'react'
import './Badge.css'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'fill' | 'outline'
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'notice' | 'negative' | 'positive' | 'neutral'
  /** Optional icon rendered to the left of the label. Always provide a text label alongside. */
  icon?: React.ReactNode
  children: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  function Badge({ variant = 'fill', size = 'medium', color = 'primary', icon, children, className, title, ...rest }, ref) {
    const labelText = typeof children === 'string' ? children : undefined
    const resolvedTitle = title ?? labelText

    return (
      <span
        ref={ref}
        className={['badge', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        data-color={color}
        title={resolvedTitle}
        {...rest}
      >
        {icon && <span className="badge__icon" aria-hidden="true">{icon}</span>}
        <span className="badge__label">{children}</span>
      </span>
    )
  }
)
