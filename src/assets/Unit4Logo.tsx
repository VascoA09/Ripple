/**
 * Unit4Logo — the Unit4 "4" brand mark as an inline SVG.
 *
 * Renders at 32 × 32 px by default. Pass width/height to override.
 * Always aria-hidden — the parent element is responsible for an accessible label.
 */
export function Unit4Logo({
  width = 32,
  height = 32,
}: {
  width?: number
  height?: number
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left arm — vertical stroke that stops at the crossbar */}
      <rect x="4"  y="3"  width="6" height="17" fill="#F58220" />
      {/* Crossbar — horizontal stroke across the full width */}
      <rect x="4"  y="18" width="24" height="6" fill="#F58220" />
      {/* Right arm — vertical stroke that runs the full height */}
      <rect x="22" y="3"  width="6" height="26" fill="#F58220" />
    </svg>
  )
}
