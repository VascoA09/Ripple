import React from 'react'
import type { IconProps } from './types'

/**
 * ChevronDown icon.
 * Source: Font Awesome Pro 6, Regular style ("chevron-down").
 */
export const ChevronDown = React.forwardRef<SVGSVGElement, IconProps>(
  function ChevronDown({ size = 24, color = 'currentColor', ...rest }, ref) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill={color}
        {...rest}
      >
        <path d="M239 401c9.4 9.4 24.6 9.4 33.9 0L465 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-175 175L81 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L239 401z"/>
      </svg>
    )
  },
)
