/**
 * Unit4Logo — the U4 brand symbol as an inline SVG.
 *
 * Renders at its natural aspect ratio (37 × 21). Pass width or height to scale.
 * Always aria-hidden — the parent element is responsible for an accessible label.
 */
export function Unit4Logo({
  width = 37,
  height = 21,
}: {
  width?: number
  height?: number
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 37 21"
      fill="none"
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4304 1.52588e-05V12.2584C14.4304 15.3109 12.5328 17.1338 9.35251 17.1338C6.15218 17.1338 4.24202 15.3109 4.24202 12.2584V1.52588e-05H0V11.793C0 17.2399 3.75757 20.9 9.35 20.9C14.9424 20.9 18.7 17.2399 18.7 11.793V1.52588e-05H14.4304Z"
        fill="#72808B"
      />
      <path
        d="M36.3 1.52588e-05H31.9978L22.332 13.9925C22.0496 14.4084 21.9437 14.9143 22.0284 15.4129C22.1155 15.914 22.3838 16.3493 22.7862 16.6388C23.0969 16.8625 23.4593 16.9817 23.8406 16.9817L31.2188 16.9793V20.9H34.8997L34.9114 13.7104H27.0107L36.3 1.52588e-05Z"
        fill="#7EB843"
      />
    </svg>
  )
}
