import React from 'react'
import type { IconProps } from './types'

/**
 * ChevronLeft icon.
 * Source: Font Awesome Pro 6, Regular style ("chevron-left").
 */
export const ChevronLeft = React.forwardRef<SVGSVGElement, IconProps>(
  function ChevronLeft({ size = 24, color = 'currentColor', ...rest }, ref) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        width={size}
        height={size}
        fill={color}
        {...rest}
      >
        <path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z"/>
      </svg>
    )
  },
)
