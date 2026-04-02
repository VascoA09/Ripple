import React from 'react'
import './Section.css'

// =============================================================================
//   TYPES
// =============================================================================

export type SectionVariant     = 'flat' | 'elevated' | 'no-padding'
export type SectionHeadingLevel = 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual style. Defaults to 'flat'. */
  variant?: SectionVariant
  /**
   * Section heading text. Renders the header block when present.
   * Choose the level that fits the page's document outline.
   */
  heading?: React.ReactNode
  /** Heading element level. Defaults to 'h2'. */
  headingLevel?: SectionHeadingLevel
  /** Optional supporting text below the heading. Clamped to 2 lines. */
  description?: React.ReactNode
  /**
   * Renders a horizontal rule as a sibling AFTER the section element.
   * Use to visually separate sequential sections.
   */
  divider?: boolean
  children?: React.ReactNode
}

// =============================================================================
//   SECTION
// =============================================================================

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  function Section(
    {
      variant      = 'flat',
      heading,
      headingLevel = 'h2',
      description,
      divider      = false,
      children,
      className,
      ...rest
    },
    ref,
  ) {
    const HeadingTag = headingLevel

    const sectionEl = (
      <section
        ref={ref}
        className={['section', className].filter(Boolean).join(' ')}
        data-variant={variant}
        {...rest}
      >
        {(heading || description) && (
          <div className="section__header">
            {heading && (
              <HeadingTag
                className="section__title typography-heading-s"
                data-level={headingLevel}
              >
                {heading}
              </HeadingTag>
            )}
            {description && (
              <p className="section__description typography-caption">{description}</p>
            )}
          </div>
        )}

        {children && (
          <div className="section__body">{children}</div>
        )}
      </section>
    )

    if (!divider) return sectionEl

    return (
      <>
        {sectionEl}
        <hr className="section__divider" />
      </>
    )
  },
)
Section.displayName = 'Section'
