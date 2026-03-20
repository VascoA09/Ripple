import React from 'react'
import * as RadixTooltip from '@radix-ui/react-tooltip'
import './Tooltip.css'

// =============================================================================
// TYPES
// =============================================================================

export type TooltipPlacement =
  | 'top'    | 'top-start'    | 'top-end'
  | 'bottom' | 'bottom-start' | 'bottom-end'
  | 'left'   | 'left-start'   | 'left-end'
  | 'right'  | 'right-start'  | 'right-end'

export interface TooltipProps {
  /** The text content of the tooltip. Keep to a single short phrase or sentence. */
  content: string
  /**
   * The trigger element. Must be a single focusable React element that can
   * receive a ref and event handlers (e.g. a <button> or <IconButton>).
   */
  children: React.ReactNode
  /** Preferred placement relative to the trigger. Auto-adjusts on viewport overflow. Default: 'top'. */
  placement?: TooltipPlacement
  /** Show the directional arrow. Default: true. */
  showArrow?: boolean
  /** Hover delay in milliseconds. No delay is applied on keyboard focus. Default: 300. */
  delay?: number
  /** Prevent the tooltip from showing. Default: false. */
  disabled?: boolean
  /** Maximum width of the tooltip container. Default: '200px'. */
  maxWidth?: string
}

// =============================================================================
// HELPERS
// =============================================================================

function parsePlacement(placement: TooltipPlacement): {
  side: 'top' | 'bottom' | 'left' | 'right'
  align: 'start' | 'center' | 'end'
} {
  const parts = placement.split('-') as [
    'top' | 'bottom' | 'left' | 'right',
    'start' | 'end' | undefined,
  ]
  return {
    side:  parts[0],
    align: parts[1] ?? 'center',
  }
}

// =============================================================================
// TOOLTIP
// =============================================================================

/**
 * Tooltip renders a short, non-interactive label near a trigger element
 * on hover or keyboard focus.
 *
 * - Accessibility: uses role="tooltip" and aria-describedby (via Radix).
 * - Keyboard: shows on focus, dismisses on Escape or blur.
 * - Touch: hover-based tooltips are not available on touch. Do not place
 *   critical information exclusively in a tooltip.
 */
export function Tooltip({
  content,
  children,
  placement = 'top',
  showArrow = true,
  delay = 300,
  disabled = false,
  maxWidth = '200px',
}: TooltipProps) {
  if (disabled) return <>{children}</>

  const { side, align } = parsePlacement(placement)

  return (
    <RadixTooltip.Provider delayDuration={delay}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          {children}
        </RadixTooltip.Trigger>

        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className="tooltip-content"
            side={side}
            align={align}
            sideOffset={8}
            style={{ maxWidth }}
          >
            {content}
            {showArrow && (
              <RadixTooltip.Arrow className="tooltip-arrow" width={12} height={6} />
            )}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  )
}
