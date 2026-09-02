import React from 'react'
import type { IconProps } from './types'

/**
 * EllipsisVertical icon.
 * Source: Font Awesome Pro 6, Regular style ("ellipsis-vertical").
 */
export const EllipsisVertical = React.forwardRef<SVGSVGElement, IconProps>(
  function EllipsisVertical({ size = 24, color = 'currentColor', ...rest }, ref) {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 512"
        width={size}
        height={size}
        fill={color}
        {...rest}
      >
        <path d="M64 368a48 48 0 1 0 0 96 48 48 0 1 0 0-96zm0-160a48 48 0 1 0 0 96 48 48 0 1 0 0-96zM112 96A48 48 0 1 0 16 96a48 48 0 1 0 96 0z"/>
      </svg>
    )
  },
)
