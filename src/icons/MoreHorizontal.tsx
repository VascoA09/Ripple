import React from 'react'
import type { IconProps } from './types'

/**
 * MoreHorizontal icon.
 * Source: Font Awesome Pro 6, Regular style ("ellipsis").
 */
export const MoreHorizontal = React.forwardRef<SVGSVGElement, IconProps>(
  function MoreHorizontal({ size = 24, color = 'currentColor', ...rest }, ref) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width={size}
        height={size}
        fill={color}
        {...rest}
      >
        <path d="M432 256a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm-160 0a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zM64 304a48 48 0 1 1 0-96 48 48 0 1 1 0 96z"/>
      </svg>
    )
  },
)
