import React from 'react'
import './Divider.css'

export type DividerOrientation = 'horizontal' | 'vertical'
export type DividerVariant     = 'full' | 'inset' | 'inset-text'

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {
  /** Orientation of the divider line. Defaults to 'horizontal'. */
  orientation?: DividerOrientation
  /** Visual variant controlling margins and optional label. Defaults to 'full'. */
  variant?: DividerVariant
  /**
   * Label text for the 'inset-text' variant.
   * Renders centred between two line segments and is used as aria-label on the separator.
   */
  children?: React.ReactNode
}

export const Divider = React.forwardRef<HTMLElement, DividerProps>(
  function Divider(
    {
      orientation = 'horizontal',
      variant     = 'full',
      children,
      className,
      ...rest
    },
    ref,
  ) {
    // Use <hr> for horizontal dividers without a label — semantic HTML.
    // Everything else uses <div role="separator">.
    const isHr = orientation === 'horizontal' && !children

    const ariaProps = isHr
      ? {}
      : {
          role:             'separator' as const,
          'aria-orientation': orientation === 'vertical' ? ('vertical' as const) : undefined,
          'aria-label':     typeof children === 'string' ? children : undefined,
        }

    const rootClassName = ['divider', className].filter(Boolean).join(' ')

    if (isHr) {
      return (
        <hr
          ref={ref as React.Ref<HTMLHRElement>}
          className={rootClassName}
          data-orientation={orientation}
          data-variant={variant}
          {...rest}
        />
      )
    }

    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={rootClassName}
        data-orientation={orientation}
        data-variant={variant}
        {...ariaProps}
        {...rest}
      >
        {children && (
          <span className="divider__label" aria-hidden="true">
            {children}
          </span>
        )}
      </div>
    )
  },
)
