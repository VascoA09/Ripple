import type { ReactNode } from 'react'
import './Hint.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface HintProps {
  /**
   * The hint text. Alternatively pass content as `children` for richer markup
   * (e.g. a link or formatted example).
   */
  text?:      string
  /**
   * Must match the `aria-describedby` value on the associated input.
   * Without an `id`, screen readers cannot associate the hint with the field.
   */
  id?:        string
  children?:  ReactNode
  className?: string
}

// ---------------------------------------------------------------------------
// Hint
// ---------------------------------------------------------------------------

export function Hint({ text, id, children, className }: HintProps) {
  return (
    <p
      id={id}
      className={['hint', className].filter(Boolean).join(' ')}
    >
      {children ?? text}
    </p>
  )
}
