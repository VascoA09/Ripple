import React from 'react'
import type { IconProps } from './types'

/**
 * LayoutDashboard icon.
 * Source: Font Awesome Pro 6, Regular style ("table-cells-large").
 */
export const LayoutDashboard = React.forwardRef<SVGSVGElement, IconProps>(
  function LayoutDashboard({ size = 24, color = 'currentColor', ...rest }, ref) {
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
        <path d="M280 80l0 152 184 0 0-136c0-8.8-7.2-16-16-16L280 80zm-48 0L64 80c-8.8 0-16 7.2-16 16l0 136 184 0 0-152zM48 280l0 136c0 8.8 7.2 16 16 16l168 0 0-152L48 280zM280 432l168 0c8.8 0 16-7.2 16-16l0-136-184 0 0 152zM0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96z"/>
      </svg>
    )
  },
)
