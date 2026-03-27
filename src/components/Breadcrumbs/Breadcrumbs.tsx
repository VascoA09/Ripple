import React from 'react'
import { MoreHorizontal, ChevronRight } from 'lucide-react'
import {
  FlyoutMenu,
  FlyoutMenuTrigger,
  FlyoutMenuContent,
  FlyoutMenuItem,
} from '../FlyoutMenu'
import './Breadcrumbs.css'

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BreadcrumbMenuItem {
  /** Display label */
  label: string
  /** URL to navigate to */
  href: string
}

export interface BreadcrumbItem {
  /** Page name to display */
  label: string
  /** URL to navigate to (omit for current page) */
  href?: string
  /** Whether this is the current page */
  current?: boolean
  /** Optional sibling pages dropdown */
  menu?: BreadcrumbMenuItem[]
}

export interface BreadcrumbsProps {
  /** Ordered list of breadcrumb items, last item is the current page */
  items: BreadcrumbItem[]
  /** Separator style between items */
  separator?: 'chevron' | 'slash'
  /** Maximum number of items to show before collapsing intermediates */
  maxItems?: number
  /** Custom navigation handler for SPA routing */
  onNavigate?: (href: string) => void
  className?: string
}

// ---------------------------------------------------------------------------
// Separator
// ---------------------------------------------------------------------------

function Separator({ type }: { type: 'chevron' | 'slash' }) {
  return (
    <li className="breadcrumbs__separator" aria-hidden="true">
      {type === 'chevron' ? (
        <ChevronRight size={16} />
      ) : (
        <span>/</span>
      )}
    </li>
  )
}

// ---------------------------------------------------------------------------
// Overflow button — opens FlyoutMenu of collapsed items
// ---------------------------------------------------------------------------

function OverflowButton({
  items,
  onNavigate,
}: {
  items: BreadcrumbItem[]
  onNavigate?: (href: string) => void
}) {
  return (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <button
          className="breadcrumbs__overflow"
          aria-label="Show more breadcrumbs"
        >
          <MoreHorizontal size={16} />
        </button>
      </FlyoutMenuTrigger>
      <FlyoutMenuContent sideOffset={4} align="start">
        {items.map((item, i) => (
          <FlyoutMenuItem
            key={i}
            onSelect={() => {
              if (!item.href) return
              if (onNavigate) onNavigate(item.href)
              else window.location.href = item.href
            }}
          >
            {item.label}
          </FlyoutMenuItem>
        ))}
      </FlyoutMenuContent>
    </FlyoutMenu>
  )
}

// ---------------------------------------------------------------------------
// Per-item sibling menu trigger — FlyoutMenu of sibling pages
// ---------------------------------------------------------------------------

function MenuTrigger({
  item,
  onNavigate,
}: {
  item: BreadcrumbItem
  onNavigate?: (href: string) => void
}) {
  return (
    <FlyoutMenu>
      <FlyoutMenuTrigger asChild>
        <button
          className="breadcrumbs__menu-trigger"
          aria-haspopup="menu"
          title={item.label}
        >
          <span className="breadcrumbs__label">{item.label}</span>
          <ChevronRight size={12} className="breadcrumbs__menu-chevron" />
        </button>
      </FlyoutMenuTrigger>
      <FlyoutMenuContent sideOffset={4} align="start">
        {item.menu!.map((menuItem, i) => (
          <FlyoutMenuItem
            key={i}
            onSelect={() => {
              if (onNavigate) onNavigate(menuItem.href)
              else window.location.href = menuItem.href
            }}
          >
            {menuItem.label}
          </FlyoutMenuItem>
        ))}
      </FlyoutMenuContent>
    </FlyoutMenu>
  )
}

// ---------------------------------------------------------------------------
// Individual breadcrumb item
// ---------------------------------------------------------------------------

function BreadcrumbItemNode({
  item,
  onNavigate,
}: {
  item: BreadcrumbItem
  onNavigate?: (href: string) => void
}) {
  // Current page — non-interactive
  if (item.current) {
    return (
      <span
        className="breadcrumbs__current"
        aria-current="page"
        title={item.label}
      >
        <span className="breadcrumbs__label">{item.label}</span>
      </span>
    )
  }

  // Item with sibling menu — renders as FlyoutMenu trigger
  if (item.menu && item.menu.length > 0) {
    return <MenuTrigger item={item} onNavigate={onNavigate} />
  }

  // Standard link
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onNavigate && item.href) {
      e.preventDefault()
      onNavigate(item.href)
    }
  }

  return (
    <a
      className="breadcrumbs__link"
      href={item.href}
      title={item.label}
      onClick={handleClick}
    >
      <span className="breadcrumbs__label">{item.label}</span>
    </a>
  )
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function Breadcrumbs({
  items,
  separator = 'chevron',
  maxItems,
  onNavigate,
  className,
}: BreadcrumbsProps) {
  // Compute which items to show
  const shouldCollapse = maxItems !== undefined && items.length > maxItems
  const collapsedItems: BreadcrumbItem[] = []
  let visibleItems: BreadcrumbItem[]

  if (shouldCollapse) {
    // Keep first item + last (maxItems - 2) items; overflow button fills the gap
    const lastCount = Math.max(maxItems - 2, 1)
    const firstItem = items[0]
    const lastItems = items.slice(items.length - lastCount)
    const hidden = items.slice(1, items.length - lastCount)
    collapsedItems.push(...hidden)
    visibleItems = [firstItem, ...lastItems]
  } else {
    visibleItems = items
  }

  // Build list nodes: items interleaved with separators + overflow in position 1
  const nodes: React.ReactNode[] = []

  visibleItems.forEach((item, index) => {
    const isFirst = index === 0

    // Add separator before every item except the first
    if (!isFirst) {
      nodes.push(
        <Separator key={`sep-${index}`} type={separator} />
      )
    }

    // If this is position 1 (after first item) and we have collapsed items,
    // insert overflow before the second visible item
    if (index === 1 && shouldCollapse && collapsedItems.length > 0) {
      nodes.push(
        <li key="overflow" className="breadcrumbs__item">
          <OverflowButton items={collapsedItems} onNavigate={onNavigate} />
        </li>
      )
      nodes.push(
        <Separator key="sep-overflow" type={separator} />
      )
    }

    nodes.push(
      <li key={index} className="breadcrumbs__item">
        <BreadcrumbItemNode item={item} onNavigate={onNavigate} />
      </li>
    )
  })

  return (
    <nav
      aria-label="Breadcrumb"
      className={['breadcrumbs', className].filter(Boolean).join(' ')}
    >
      <ol className="breadcrumbs__list">
        {nodes}
      </ol>
    </nav>
  )
}
