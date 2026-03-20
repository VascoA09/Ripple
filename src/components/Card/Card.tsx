import React from 'react'
import { Divider } from '../Divider'
import './Card.css'

// =============================================================================
// CARD
// =============================================================================

export type CardVariant = 'elevated' | 'flat'

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual variant. 'flat' is for nesting inside elevated cards. Defaults to 'elevated'. */
  variant?: CardVariant
  /**
   * Makes the entire card clickable. Only valid on elevated variant.
   * Renders as <a> when href is provided, <div role="button"> otherwise.
   */
  interactive?: boolean
  /** Renders the interactive card as an <a> element for link navigation. */
  href?: string
}

export const Card = React.forwardRef<HTMLElement, CardProps>(
  function Card(
    {
      variant     = 'elevated',
      interactive = false,
      href,
      children,
      className,
      onClick,
      onKeyDown,
      ...rest
    },
    ref,
  ) {
    const rootClassName = ['card', className].filter(Boolean).join(' ')

    const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        onClick?.(e as unknown as React.MouseEvent<HTMLElement>)
      }
      onKeyDown?.(e)
    }

    // Interactive + href → <a>
    if (interactive && href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={rootClassName}
          data-variant={variant}
          data-interactive=""
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          onKeyDown={onKeyDown as React.KeyboardEventHandler<HTMLAnchorElement>}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      )
    }

    // Interactive, no href → <div role="button">
    if (interactive) {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          className={rootClassName}
          data-variant={variant}
          data-interactive=""
          role="button"
          tabIndex={0}
          onClick={onClick as React.MouseEventHandler<HTMLDivElement>}
          onKeyDown={handleKeyDown as React.KeyboardEventHandler<HTMLDivElement>}
          {...(rest as React.HTMLAttributes<HTMLDivElement>)}
        >
          {children}
        </div>
      )
    }

    // Non-interactive → <div>
    return (
      <div
        ref={ref as React.Ref<HTMLDivElement>}
        className={rootClassName}
        data-variant={variant}
        onClick={onClick as React.MouseEventHandler<HTMLDivElement>}
        onKeyDown={onKeyDown as React.KeyboardEventHandler<HTMLDivElement>}
        {...(rest as React.HTMLAttributes<HTMLDivElement>)}
      >
        {children}
      </div>
    )
  },
)

// =============================================================================
// CARD HEADER
// =============================================================================

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Override default 16px padding. Accepts any CSS padding value. */
  padding?: string
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  function CardHeader({ padding, children, className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={['card-header', className].filter(Boolean).join(' ')}
        style={padding ? { ...style, padding } : style}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

// =============================================================================
// CARD TITLE
// =============================================================================

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading element to use. Defaults to 'h3'. Adjust to maintain document outline. */
  as?: HeadingLevel
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  function CardTitle({ as: Tag = 'h3', children, className, ...rest }, ref) {
    return (
      <Tag
        ref={ref}
        className={['card-title', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </Tag>
    )
  },
)

// =============================================================================
// CARD DESCRIPTION
// =============================================================================

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  function CardDescription({ children, className, ...rest }, ref) {
    return (
      <p
        ref={ref}
        className={['card-description', className].filter(Boolean).join(' ')}
        {...rest}
      >
        {children}
      </p>
    )
  },
)

// =============================================================================
// CARD CONTENT
// =============================================================================

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Override default 16px padding. Accepts any CSS padding value. */
  padding?: string
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  function CardContent({ padding, children, className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={['card-content', className].filter(Boolean).join(' ')}
        style={padding ? { ...style, padding } : style}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

// =============================================================================
// CARD FOOTER
// =============================================================================

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Override default 16px padding. Accepts any CSS padding value. */
  padding?: string
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  function CardFooter({ padding, children, className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={['card-footer', className].filter(Boolean).join(' ')}
        style={padding ? { ...style, padding } : style}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

// =============================================================================
// CARD SECTION
// =============================================================================

export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Override default 16px padding. Accepts any CSS padding value. */
  padding?: string
}

export const CardSection = React.forwardRef<HTMLDivElement, CardSectionProps>(
  function CardSection({ padding, children, className, style, ...rest }, ref) {
    return (
      <div
        ref={ref}
        className={['card-section', className].filter(Boolean).join(' ')}
        style={padding ? { ...style, padding } : style}
        {...rest}
      >
        {children}
      </div>
    )
  },
)

// =============================================================================
// CARD DIVIDER
// Thin wrapper around Divider — ensures full-width horizontal separation
// with no extra padding, consistent with the card's section boundaries.
// =============================================================================

export const CardDivider = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  function CardDivider({ className, ...rest }, ref) {
    return (
      <Divider
        ref={ref}
        orientation="horizontal"
        variant="full"
        className={className}
        {...rest}
      />
    )
  },
)
