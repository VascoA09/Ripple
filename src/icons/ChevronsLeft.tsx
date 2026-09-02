import React from 'react'
import type { IconProps } from './types'

/**
 * ChevronsLeft icon.
 * Source: Font Awesome Pro 6, Regular style ("angles-left").
 */
export const ChevronsLeft = React.forwardRef<SVGSVGElement, IconProps>(
  function ChevronsLeft({ size = 24, color = 'currentColor', ...rest }, ref) {
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
        <path d="M47 239c-9.4 9.4-9.4 24.6 0 33.9L207 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L97.9 256 241 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L47 239zM399 79L239 239c-9.4 9.4-9.4 24.6 0 33.9L399 433c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-143-143L433 113c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0z"/>
      </svg>
    )
  },
)
