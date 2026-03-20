import React from 'react'
import { Counter } from '../Counter'
import type { CounterProps } from '../Counter'
import './IconBadge.css'

export interface IconBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The numerical count to display. Values above 99 render as "99+". */
  count: number
  color?: CounterProps['color']
  variant?: CounterProps['variant']
  children: React.ReactNode
}

export const IconBadge = React.forwardRef<HTMLSpanElement, IconBadgeProps>(
  function IconBadge(
    { count, color = 'negative', variant = 'fill', children, className, ...rest },
    ref,
  ) {
    return (
      <span
        ref={ref}
        className={['icon-badge', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
        <span className="icon-badge__counter">
          <Counter count={count} size="small" color={color} variant={variant} />
        </span>
      </span>
    )
  },
)
