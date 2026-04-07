import { Unit4Logo } from './Unit4Logo'

/**
 * Unit4Wordmark — the full UNIT4 brand wordmark.
 *
 * ⚠ SVG paths pending: the accurate wordmark SVG must be sourced from brand
 * asset files (Figma / brand guidelines). Until then this component renders
 * Unit4Logo (the compact U4 symbol) as a placeholder.
 *
 * Do not ship this component in stable status until the wordmark SVG is confirmed.
 *
 * Natural dimensions of the full wordmark: ~111 × 21 (approximate — update
 * once the real SVG is sourced).
 */
export function Unit4Wordmark({ height = 21 }: { height?: number }) {
  // TODO: replace with full wordmark SVG paths sourced from Figma / brand assets.
  // The compact U4 symbol (Unit4Logo) is a placeholder until then.
  return <Unit4Logo height={height} width={Math.round(height * (37 / 21))} />
}
