import React from 'react'
import type { IconProps } from './types'

/**
 * Layout icon.
 * Source: Font Awesome Pro 6, Regular style ("table-columns").
 */
export const Layout = React.forwardRef<SVGSVGElement, IconProps>(
  function Layout({ size = 24, color = 'currentColor', ...rest }, ref) {
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
        <path d="M48 416l0-256 184 0 0 272L64 432c-8.8 0-16-7.2-16-16zm232 16l0-272 184 0 0 256c0 8.8-7.2 16-16 16l-168 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z"/>
      </svg>
    )
  },
)
