import React from 'react'
import './Tag.css'

export type TagColor =
  | 'gray'
  | 'blue'
  | 'green'
  | 'emerald'
  | 'aqua'
  | 'purple'
  | 'violet'
  | 'pink'
  | 'red'
  | 'orange'
  | 'ochre'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Label text */
  children: React.ReactNode
  /** Size variant. Defaults to 'medium'. */
  size?: 'small' | 'medium' | 'large'
  /** Decorative color for categorisation — not semantic. Defaults to 'gray'. */
  color?: TagColor
  /** Optional icon rendered before the label. */
  icon?: React.ReactNode
}

export const Tag = React.forwardRef<HTMLSpanElement, TagProps>(
  function Tag({ children, size = 'medium', color = 'gray', icon, className, ...rest }, ref) {
    return (
      <span
        ref={ref}
        className={['tag', className].filter(Boolean).join(' ')}
        data-size={size}
        data-color={color}
        {...rest}
      >
        {icon && <span className="tag__icon" aria-hidden="true">{icon}</span>}
        {children}
      </span>
    )
  },
)
