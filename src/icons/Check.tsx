import React from 'react'
import type { IconProps } from './types'

/**
 * Check icon.
 * Source: Font Awesome Pro 6, Regular style ("check").
 */
export const Check = React.forwardRef<SVGSVGElement, IconProps>(
  function Check({ size = 24, color = 'currentColor', ...rest }, ref) {
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
        <path d="M441 103c9.4 9.4 9.4 24.6 0 33.9L177 401c-9.4 9.4-24.6 9.4-33.9 0L7 265c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l119 119L407 103c9.4-9.4 24.6-9.4 33.9 0z"/>
      </svg>
    )
  },
)
