import React from 'react'
import type { IconProps } from './types'

/**
 * Pause icon.
 * Source: Font Awesome Pro 6, Regular style ("pause").
 */
export const Pause = React.forwardRef<SVGSVGElement, IconProps>(
  function Pause({ size = 24, color = 'currentColor', ...rest }, ref) {
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
        <path d="M48 112l0 288 48 0 0-288-48 0zM0 112C0 85.5 21.5 64 48 64l48 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48L0 112zm224 0l0 288 48 0 0-288-48 0zm-48 0c0-26.5 21.5-48 48-48l48 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-48 0c-26.5 0-48-21.5-48-48l0-288z"/>
      </svg>
    )
  },
)
