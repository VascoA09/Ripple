import type { CSSProperties, ReactNode } from 'react'
import { MoreHorizontal } from 'lucide-react'
import { Avatar } from '../Avatar'
import { Badge } from '../Badge'
import { Counter } from '../Counter'
import {
  FlyoutMenu,
  FlyoutMenuTrigger,
  FlyoutMenuContent,
  FlyoutMenuLabel,
  FlyoutMenuItem,
  FlyoutMenuSeparator,
} from '../FlyoutMenu'
import './Navbar.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type CounterColor = 'primary' | 'notice' | 'negative' | 'positive' | 'neutral'
export type BadgeColor   = 'primary' | 'notice' | 'negative' | 'positive' | 'neutral'

export interface NavItem {
  /** Unique key */
  id: string
  /** Icon element (rendered at 20 × 20 px) */
  icon: ReactNode
  /** Accessible label + tooltip text */
  label: string
  /** Counter value — shown when > 0 */
  count?: number
  /** Counter color variant */
  countColor?: CounterColor
  /** Click handler */
  onClick?: () => void
  /** True when the associated drawer is open */
  selected?: boolean
  /** Prevents interaction */
  disabled?: boolean
}

export interface UserMenuItem {
  id: string
  label: string
  /** Optional leading icon */
  icon?: ReactNode
  /** Renders a separator line before this item */
  separator?: boolean
  onClick?: () => void
}

export interface NavbarProps {
  /** Product logo element (rendered at 32 × 32 px) */
  logo?: ReactNode
  /** Abbreviated product name below the logo (e.g. "ERPx") */
  productName?: string
  /** Makes the logo area an interactive button that navigates to home */
  onLogoClick?: () => void
  /** Environment / tenant badge label */
  tenantLabel?: string
  /** Badge color variant — defaults to 'notice' */
  tenantColor?: BadgeColor
  /** Top-level navigation items (max 5, overflow is silently ignored) */
  globalNavItems?: NavItem[]
  /** Module-specific navigation (5 visible + overflow menu) */
  contextualNavItems?: NavItem[]
  /** Show a 1 px divider between global and contextual nav */
  showContextualDivider?: boolean
  /** User's full name — used for avatar initials and user menu header */
  userName?: string
  /** Image URL for the user avatar */
  userAvatarSrc?: string
  /** Items in the user menu flyout */
  userMenuItems?: UserMenuItem[]
  className?: string
  style?: CSSProperties
}

// ---------------------------------------------------------------------------
// NavButton — shared primitive for global + contextual nav
// ---------------------------------------------------------------------------

interface NavButtonProps {
  item: NavItem
}

function NavButton({ item }: NavButtonProps) {
  const ariaLabel = item.count && item.count > 0
    ? `${item.label} (${item.count > 99 ? '99+' : item.count})`
    : item.label

  return (
    <div className="navbar__nav-btn-wrapper">
      <button
        type="button"
        className="navbar__nav-btn"
        aria-label={ariaLabel}
        aria-pressed={item.selected ?? false}
        disabled={item.disabled}
        aria-disabled={item.disabled}
        onClick={item.onClick}
        data-selected={item.selected ? '' : undefined}
      >
        <span className="navbar__nav-btn-icon" aria-hidden="true">
          {item.icon}
        </span>

        {item.count !== undefined && item.count > 0 && (
          <Counter
            count={item.count}
            size="small"
            variant="fill"
            color={item.countColor ?? 'primary'}
            aria-hidden="true"
            className="navbar__counter"
          />
        )}
      </button>

      {/* CSS-only tooltip — always in DOM for screen reader association */}
      <span className="navbar__tooltip" role="tooltip">
        {ariaLabel}
      </span>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

export function Navbar({
  logo,
  productName,
  onLogoClick,
  tenantLabel,
  tenantColor = 'notice',
  globalNavItems = [],
  contextualNavItems = [],
  showContextualDivider = true,
  userName = 'User',
  userAvatarSrc,
  userMenuItems = [],
  className,
  style,
}: NavbarProps) {
  const visibleGlobal      = globalNavItems.slice(0, 5)
  const visibleContextual  = contextualNavItems.slice(0, 4)
  const overflowContextual = contextualNavItems.slice(4)
  const hasContextual      = contextualNavItems.length > 0
  const hasOverflow        = overflowContextual.length > 0

  // Logo zone — button when clickable, div otherwise
  const logoContent = (
    <>
      <span className="navbar__logo-icon" aria-hidden="true">
        {logo ?? <DefaultLogo />}
      </span>
      {productName && (
        <span className="navbar__product-name" aria-hidden="true">
          {productName}
        </span>
      )}
    </>
  )

  return (
    <nav
      className={['navbar', className].filter(Boolean).join(' ')}
      aria-label="Application navigation"
      style={style}
    >
      {/* ── Logo area ───────────────────────────────────────────────────── */}
      {onLogoClick ? (
        <button
          type="button"
          className="navbar__logo navbar__logo--interactive"
          aria-label="Go to home"
          onClick={onLogoClick}
        >
          {logoContent}
        </button>
      ) : (
        <div className="navbar__logo">
          {logoContent}
        </div>
      )}

      {/* ── Tenant badge ────────────────────────────────────────────────── */}
      {tenantLabel && (
        <div className="navbar__tenant">
          <Badge
            variant="fill"
            size="small"
            color={tenantColor}
            className="navbar__tenant-badge"
            title={tenantLabel}
          >
            {tenantLabel}
          </Badge>
        </div>
      )}

      {/* ── Global navigation ───────────────────────────────────────────── */}
      {visibleGlobal.length > 0 && (
        <ul className="navbar__nav-list" role="list" aria-label="Global navigation">
          {visibleGlobal.map(item => (
            <li key={item.id}>
              <NavButton item={item} />
            </li>
          ))}
        </ul>
      )}

      {/* ── Contextual navigation ───────────────────────────────────────── */}
      {hasContextual && (
        <>
          {showContextualDivider && (
            <div className="navbar__divider" role="separator" aria-hidden="true" />
          )}

          <ul className="navbar__nav-list" role="list" aria-label="Contextual navigation">
            {visibleContextual.map(item => (
              <li key={item.id}>
                <NavButton item={item} />
              </li>
            ))}

            {hasOverflow && (
              <li>
                <FlyoutMenu>
                  <div className="navbar__nav-btn-wrapper">
                    <FlyoutMenuTrigger asChild>
                      <button
                        type="button"
                        className="navbar__nav-btn"
                        aria-label="More navigation items"
                      >
                        <span className="navbar__nav-btn-icon" aria-hidden="true">
                          <MoreHorizontal size={20} />
                        </span>
                      </button>
                    </FlyoutMenuTrigger>
                    <span className="navbar__tooltip" role="tooltip">More</span>
                  </div>

                  <FlyoutMenuContent side="right" align="start" sideOffset={12}>
                    {overflowContextual.map(item => (
                      <FlyoutMenuItem
                        key={item.id}
                        disabled={item.disabled}
                        onSelect={item.onClick}
                      >
                        {item.icon && (
                          <span className="navbar__overflow-icon" aria-hidden="true">
                            {item.icon}
                          </span>
                        )}
                        {item.label}
                        {item.count !== undefined && item.count > 0 && (
                          <Counter
                            count={item.count}
                            size="small"
                            variant="fill"
                            color={item.countColor ?? 'primary'}
                            aria-hidden="true"
                            className="navbar__overflow-counter"
                          />
                        )}
                      </FlyoutMenuItem>
                    ))}
                  </FlyoutMenuContent>
                </FlyoutMenu>
              </li>
            )}
          </ul>
        </>
      )}

      {/* ── Spacer ──────────────────────────────────────────────────────── */}
      <div className="navbar__spacer" aria-hidden="true" />

      {/* ── User menu ───────────────────────────────────────────────────── */}
      <div className="navbar__user">
        <FlyoutMenu>
          <div className="navbar__nav-btn-wrapper">
            <FlyoutMenuTrigger asChild>
              <Avatar
                name={userName}
                src={userAvatarSrc}
                size="m"
                aria-label={`${userName} — open user menu`}
                className="navbar__avatar-trigger"
              />
            </FlyoutMenuTrigger>
            <span className="navbar__tooltip" role="tooltip">{userName}</span>
          </div>

          <FlyoutMenuContent side="right" align="end" sideOffset={12}>
            <FlyoutMenuLabel>{userName}</FlyoutMenuLabel>

            {userMenuItems.map(item => (
              <span key={item.id}>
                {item.separator && <FlyoutMenuSeparator />}
                <FlyoutMenuItem onSelect={item.onClick}>
                  {item.icon && (
                    <span aria-hidden="true">{item.icon}</span>
                  )}
                  {item.label}
                </FlyoutMenuItem>
              </span>
            ))}
          </FlyoutMenuContent>
        </FlyoutMenu>
      </div>
    </nav>
  )
}

// ---------------------------------------------------------------------------
// DefaultLogo — fallback SVG when no logo prop is provided
// ---------------------------------------------------------------------------

function DefaultLogo() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="32" height="32" rx="8" fill="var(--color-primary)" />
      <path
        d="M10 22V10h4l2 8 2-8h4v12h-3v-7l-2 7h-2l-2-7v7H10z"
        fill="white"
      />
    </svg>
  )
}
