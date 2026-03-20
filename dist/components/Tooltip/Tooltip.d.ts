import { default as React } from 'react';

export type TooltipPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end';
export interface TooltipProps {
    /** The text content of the tooltip. Keep to a single short phrase or sentence. */
    content: string;
    /**
     * The trigger element. Must be a single focusable React element that can
     * receive a ref and event handlers (e.g. a <button> or <IconButton>).
     */
    children: React.ReactNode;
    /** Preferred placement relative to the trigger. Auto-adjusts on viewport overflow. Default: 'top'. */
    placement?: TooltipPlacement;
    /** Show the directional arrow. Default: true. */
    showArrow?: boolean;
    /** Hover delay in milliseconds. No delay is applied on keyboard focus. Default: 300. */
    delay?: number;
    /** Prevent the tooltip from showing. Default: false. */
    disabled?: boolean;
    /** Maximum width of the tooltip container. Default: '200px'. */
    maxWidth?: string;
}
/**
 * Tooltip renders a short, non-interactive label near a trigger element
 * on hover or keyboard focus.
 *
 * - Accessibility: uses role="tooltip" and aria-describedby (via Radix).
 * - Keyboard: shows on focus, dismisses on Escape or blur.
 * - Touch: hover-based tooltips are not available on touch. Do not place
 *   critical information exclusively in a tooltip.
 */
export declare function Tooltip({ content, children, placement, showArrow, delay, disabled, maxWidth, }: TooltipProps): import("react/jsx-runtime").JSX.Element;
