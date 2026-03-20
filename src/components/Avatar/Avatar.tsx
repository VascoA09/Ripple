import React from 'react'
import './Avatar.css'

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export type AvatarSize = 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl'
export type StatusType = 'active' | 'away' | 'busy' | 'offline'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function getInitials(name: string, size: AvatarSize): string {
  const words = name.trim().split(/\s+/).filter(Boolean)
  if (words.length === 0) return ''

  // Size 's' only shows one character
  if (size === 's' || words.length === 1) {
    return words[0][0].toUpperCase()
  }

  return (words[0][0] + words[words.length - 1][0]).toUpperCase()
}

// ---------------------------------------------------------------------------
// Avatar
// ---------------------------------------------------------------------------

export interface AvatarProps {
  /** Full name — used to derive initials and as the default accessible label. */
  name: string
  /** Image URL. Falls back to initials if omitted or the image fails to load. */
  src?: string
  /** Avatar diameter. Defaults to 'l' (40px). */
  size?: AvatarSize
  /** Renders the avatar as an <a>. Takes precedence over onClick. */
  href?: string
  /** Renders the avatar as a <button>. */
  onClick?: React.MouseEventHandler<HTMLElement>
  className?: string
  style?: React.CSSProperties
  /** Overrides the default accessible label (name). */
  'aria-label'?: string
  tabIndex?: number
  id?: string
}

export const Avatar = React.forwardRef<HTMLElement, AvatarProps>(
  function Avatar(
    { name, src, size = 'l', href, onClick, className, style, 'aria-label': ariaLabel, tabIndex, id },
    ref,
  ) {
    const [imgError, setImgError] = React.useState(false)
    const showImage = Boolean(src) && !imgError
    const initials  = getInitials(name, size)
    const isInteractive = Boolean(href) || Boolean(onClick)

    const sharedProps = {
      className:        ['avatar', className].filter(Boolean).join(' '),
      'data-size':      size,
      'data-variant':   showImage ? 'image' : 'initials',
      'aria-label':     ariaLabel ?? name,
      style,
      id,
      ...(isInteractive ? { 'data-interactive': '' } : {}),
    }

    const content = showImage ? (
      <img
        src={src}
        alt=""
        className="avatar__img"
        onError={() => setImgError(true)}
      />
    ) : (
      <span className="avatar__initials" aria-hidden="true">
        {initials}
      </span>
    )

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          tabIndex={tabIndex}
          {...sharedProps}
        >
          {content}
        </a>
      )
    }

    if (onClick) {
      return (
        <button
          ref={ref as React.Ref<HTMLButtonElement>}
          type="button"
          onClick={onClick}
          tabIndex={tabIndex}
          {...sharedProps}
        >
          {content}
        </button>
      )
    }

    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        tabIndex={tabIndex}
        {...sharedProps}
      >
        {content}
      </span>
    )
  },
)

// ---------------------------------------------------------------------------
// AvatarGroup
// ---------------------------------------------------------------------------

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  /** Max avatars shown before a "+N" overflow counter appears. */
  max?: number
  /** true = overlapping (default); false = evenly spaced. */
  overlap?: boolean
  /** Size of the overflow counter. Match to the Avatar size used in the group. */
  size?: AvatarSize
}

export const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  function AvatarGroup({ children, max, overlap = true, size = 'l', className, ...rest }, ref) {
    const childArray = React.Children.toArray(children)
    const visible    = max !== undefined ? childArray.slice(0, max) : childArray
    const extra      = max !== undefined ? Math.max(0, childArray.length - max) : 0

    return (
      <div
        ref={ref}
        className={['avatar-group', className].filter(Boolean).join(' ')}
        data-overlap={overlap ? 'true' : 'false'}
        {...rest}
      >
        {visible}
        {extra > 0 && (
          <span
            className="avatar-group__counter"
            data-size={size}
            aria-label={`${extra} more`}
          >
            +{extra}
          </span>
        )}
      </div>
    )
  },
)

// ---------------------------------------------------------------------------
// AvatarWithStatus
// ---------------------------------------------------------------------------

const statusLabels: Record<StatusType, string> = {
  active:  'Active',
  away:    'Away',
  busy:    'Busy',
  offline: 'Offline',
}

export interface AvatarWithStatusProps {
  /** A single Avatar element. */
  children: React.ReactNode
  /** User presence state. */
  status: StatusType
  /** Must match the wrapped Avatar's size to scale the dot correctly. */
  size?: AvatarSize
  className?: string
  style?: React.CSSProperties
}

export const AvatarWithStatus = React.forwardRef<HTMLDivElement, AvatarWithStatusProps>(
  function AvatarWithStatus({ children, status, size = 'l', className, style }, ref) {
    return (
      <div
        ref={ref}
        className={['avatar-with-status', className].filter(Boolean).join(' ')}
        data-avatar-size={size}
        style={style}
      >
        {children}
        <span
          className="avatar-with-status__dot"
          data-status={status}
          role="img"
          aria-label={statusLabels[status]}
        />
      </div>
    )
  },
)
