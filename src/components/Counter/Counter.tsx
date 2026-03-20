import React from 'react'
import './Counter.css'

export interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** The numerical count to display. Values above 99 render as "99+". */
  count: number
  variant?: 'fill' | 'outline'
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'notice' | 'negative' | 'positive' | 'neutral'
}

export const Counter = React.forwardRef<HTMLSpanElement, CounterProps>(
  function Counter({ count, variant = 'fill', size = 'medium', color = 'primary', className, ...rest }, ref) {
    const display = count > 99 ? '99+' : String(count)

    return (
      <span
        ref={ref}
        className={['counter', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        data-color={color}
        {...rest}
      >
        {display}
      </span>
    )
  }
)
