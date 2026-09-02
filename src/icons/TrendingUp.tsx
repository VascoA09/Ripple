import React from 'react'
import type { IconProps } from './types'

/**
 * TrendingUp icon.
 * Source: Font Awesome Pro 6, Regular style ("arrow-trend-up").
 */
export const TrendingUp = React.forwardRef<SVGSVGElement, IconProps>(
  function TrendingUp({ size = 24, color = 'currentColor', ...rest }, ref) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        width={size}
        height={size}
        fill={color}
        {...rest}
      >
        <path d="M352 120c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24l0 176c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-118.1L337 369c-9.4 9.4-24.6 9.4-33.9 0l-111-111L41 409c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L175 207c9.4-9.4 24.6-9.4 33.9 0l111 111L494.1 144 376 144c-13.3 0-24-10.7-24-24z"/>
      </svg>
    )
  },
)
