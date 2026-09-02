import React from 'react'
import type { IconProps } from './types'

/**
 * Maximize2 icon.
 * Source: Font Awesome Pro 6, Regular style ("expand").
 */
export const Maximize2 = React.forwardRef<SVGSVGElement, IconProps>(
  function Maximize2({ size = 24, color = 'currentColor', ...rest }, ref) {
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
        <path d="M136 32c13.3 0 24 10.7 24 24s-10.7 24-24 24L48 80l0 88c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 56C0 42.7 10.7 32 24 32l112 0zM0 344c0-13.3 10.7-24 24-24s24 10.7 24 24l0 88 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 480c-13.3 0-24-10.7-24-24L0 344zM424 32c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-88-88 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l112 0zM400 344c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24l-112 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l88 0 0-88z"/>
      </svg>
    )
  },
)
