import React from 'react'
import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style: fill (default), outline, or ghost */
  variant?: 'fill' | 'outline' | 'ghost'
  /** Height scale */
  size?: 'xsmall' | 'small' | 'medium' | 'large'
  /** Semantic color: primary (default), neutral, or negative */
  color?: 'primary' | 'neutral' | 'negative'
  /** Icon rendered before the label. Replaced by spinner during loading. */
  iconStart?: React.ReactNode
  /** Icon rendered after the label. Hidden during loading. */
  iconEnd?: React.ReactNode
  /** Shows a spinner and disables the button to indicate an in-progress action. */
  loading?: boolean
}

function Spinner() {
  return <span className="button__spinner" aria-hidden="true" />
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = 'fill',
      size = 'medium',
      color = 'primary',
      iconStart,
      iconEnd,
      loading = false,
      disabled = false,
      children,
      className,
      ...rest
    },
    ref,
  ) {
    const isIconOnly  = children == null
    const hasIconStart = loading || !!iconStart
    const hasIconEnd   = !loading && !!iconEnd

    return (
      <button
        ref={ref}
        className={['button', className].filter(Boolean).join(' ')}
        data-variant={variant}
        data-size={size}
        data-color={color}
        data-loading={loading ? 'true' : undefined}
        data-icon-only={isIconOnly ? '' : undefined}
        data-icon-start={hasIconStart ? '' : undefined}
        data-icon-end={hasIconEnd ? '' : undefined}
        disabled={disabled || loading}
        aria-busy={loading ? true : undefined}
        {...rest}
      >
        {/* Icon start slot — spinner takes priority during loading */}
        {(loading || iconStart) && (loading ? <Spinner /> : iconStart)}

        {children}

        {/* Icon end slot — hidden during loading to keep the button uncluttered */}
        {!loading && iconEnd}
      </button>
    )
  },
)
