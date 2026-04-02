import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Lock, MoreHorizontal, Pin, X } from 'lucide-react'
import type { TagColor } from '../../components/Tag'
import {
  FlyoutMenu,
  FlyoutMenuContent,
  FlyoutMenuGroup,
  FlyoutMenuItem,
  FlyoutMenuLabel,
  FlyoutMenuSeparator,
  FlyoutMenuTrigger,
} from '../../components/FlyoutMenu'
import { Button } from '../../components/Button'
import '../../components/Tabs/Tabs.css'
import './Footer.css'

// =============================================================================
// TYPES
// =============================================================================

export type FooterTabType = 'standard' | 'locked' | 'pinned'

// Re-exported so consumers don't need to import TagColor directly.
// FooterGroupColor is identical to TagColor — group colors are decorative
// and follow the same non-semantic color set as the Tag component.
export type FooterGroupColor = TagColor

export interface FooterTab {
  id: string
  label: string
  /** Optional decorative icon rendered before the label. */
  icon?: React.ReactNode
  /** Controls which type indicator and contextual menu actions are shown. Default: 'standard'. */
  type?: FooterTabType
  /** If set, the tab is rendered inside the matching group. */
  groupId?: string
}

export interface FooterGroup {
  id: string
  label: string
  /** Color used for the group border and label badge. Default: 'neutral'. */
  color?: FooterGroupColor
}

export interface FooterProps {
  /** All open tabs, in display order. */
  tabs: FooterTab[]
  /** ID of the currently active tab. */
  activeTabId: string
  /** Groups to render. Tabs with a matching groupId are placed inside their group. */
  groups?: FooterGroup[]

  // ── Tab interactions ──────────────────────────────────────────────────────
  onTabActivate: (tabId: string) => void
  onTabClose?: (tabId: string) => void
  onTabLock?: (tabId: string) => void
  onTabUnlock?: (tabId: string) => void
  onTabPin?: (tabId: string) => void
  onTabUnpin?: (tabId: string) => void
  /** Called when the user selects "Add to group" from a tab's contextual menu. */
  onAddTabToGroup?: (tabId: string) => void

  // ── Group interactions ────────────────────────────────────────────────────
  onGroupEdit?: (groupId: string) => void
  onGroupUngroup?: (groupId: string) => void
  onGroupClose?: (groupId: string) => void

  // ── Footer-level actions ──────────────────────────────────────────────────
  onCloseAllTabs?: () => void
  onCloseOtherTabs?: (tabId: string) => void

  className?: string
}

// =============================================================================
// CONSTANTS
// =============================================================================

const SCROLL_AMOUNT = 200

// Stable empty array — prevents `groups = []` default from creating a new
// reference on every render.
const NO_GROUPS: FooterGroup[] = []


// =============================================================================
// HELPERS
// =============================================================================

type RenderItem =
  | { kind: 'tab';   tab: FooterTab }
  | { kind: 'group'; group: FooterGroup; tabs: FooterTab[] }

function buildRenderItems(tabs: FooterTab[], groups: FooterGroup[]): RenderItem[] {
  const groupMap   = new Map(groups.map(g => [g.id, g]))
  const seenGroups = new Set<string>()
  const items: RenderItem[] = []

  for (const tab of tabs) {
    if (!tab.groupId) {
      items.push({ kind: 'tab', tab })
    } else if (!seenGroups.has(tab.groupId)) {
      seenGroups.add(tab.groupId)
      const group = groupMap.get(tab.groupId)
      if (group) {
        items.push({ kind: 'group', group, tabs: tabs.filter(t => t.groupId === tab.groupId) })
      } else {
        // Orphaned tab — render without group
        items.push({ kind: 'tab', tab })
      }
    }
    // Tabs already included in a rendered group are skipped
  }

  return items
}

// =============================================================================
// FOOTER
// =============================================================================

/**
 * Footer renders a fixed bottom tab bar for enterprise applications.
 * Supports standard, locked, and pinned tab types, collapsible groups,
 * overflow scrolling, and contextual menus on tabs and groups.
 *
 * The component is fully controlled — the consuming application manages
 * all tab state including open tabs, active tab, and group membership.
 *
 * Positioning: Fixed to the bottom of the viewport by default.
 * Override via the `className` prop when embedding in a layout context
 * (e.g. Storybook, documentation, or a scrollable container).
 */
export function Footer({
  tabs,
  activeTabId,
  groups = NO_GROUPS,
  onTabActivate,
  onTabClose,
  onTabLock,
  onTabUnlock,
  onTabPin,
  onTabUnpin,
  onAddTabToGroup,
  onGroupEdit,
  onGroupUngroup,
  onGroupClose,
  onCloseAllTabs,
  onCloseOtherTabs,
  className,
}: FooterProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const [canScrollLeft,  setCanScrollLeft]  = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  // Track only explicitly collapsed groups. All groups open by default.
  const [collapsedGroups, setCollapsedGroups] = useState<Set<string>>(new Set())

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      ro.disconnect()
    }
  }, [updateScrollState])

  function scroll(amount: number) {
    scrollRef.current?.scrollBy({ left: amount, behavior: 'smooth' })
  }

  function toggleGroup(groupId: string) {
    setCollapsedGroups(prev => {
      const next = new Set(prev)
      next.has(groupId) ? next.delete(groupId) : next.add(groupId)
      return next
    })
  }

  const renderItems = buildRenderItems(tabs, groups)

  return (
    <div
      className={['footer', className].filter(Boolean).join(' ')}
      role="navigation"
      aria-label="Open tabs"
    >

      {/* ── Footer contextual menu ───────────────────────────────────────── */}
      <FlyoutMenu>
        <FlyoutMenuTrigger asChild>
          <Button
            variant="ghost"
            size="small"
            color="neutral"
            iconStart={<MoreHorizontal size={16} />}
            aria-label="Footer menu, open tabs and actions"
            className="footer__menu-btn"
          />
        </FlyoutMenuTrigger>
        <FlyoutMenuContent side="top" align="start" sideOffset={8}>
          {tabs.length > 0 && (
            <>
              <FlyoutMenuLabel>Open tabs</FlyoutMenuLabel>
              <FlyoutMenuGroup>
                {tabs.map(tab => (
                  <FlyoutMenuItem
                    key={tab.id}
                    onSelect={() => onTabActivate(tab.id)}
                    data-active-tab={tab.id === activeTabId ? '' : undefined}
                  >
                    {tab.label}
                  </FlyoutMenuItem>
                ))}
              </FlyoutMenuGroup>
              <FlyoutMenuSeparator />
            </>
          )}
          <FlyoutMenuItem
            onSelect={() => onCloseAllTabs?.()}
            disabled={!onCloseAllTabs || tabs.length === 0}
          >
            Close all tabs
          </FlyoutMenuItem>
        </FlyoutMenuContent>
      </FlyoutMenu>

      {/* ── Scroll left ──────────────────────────────────────────────────── */}
      <Button
        variant="ghost"
        size="small"
        color="neutral"
        iconStart={<ChevronLeft size={16} />}
        aria-label="Scroll tabs left"
        disabled={!canScrollLeft}
        onClick={() => scroll(-SCROLL_AMOUNT)}
        className="footer__scroll-btn"
      />

      {/* ── Scrollable content ───────────────────────────────────────────── */}
      <div
        ref={scrollRef}
        className="footer__content"
        role="tablist"
        aria-label="Open tabs"
      >
        {renderItems.map(item =>
          item.kind === 'tab' ? (
            <FooterTabItem
              key={item.tab.id}
              tab={item.tab}
              isActive={item.tab.id === activeTabId}
              groups={groups}
              onActivate={() => onTabActivate(item.tab.id)}
              onClose={onTabClose       ? () => onTabClose(item.tab.id)       : undefined}
              onLock={onTabLock         ? () => onTabLock(item.tab.id)         : undefined}
              onUnlock={onTabUnlock     ? () => onTabUnlock(item.tab.id)       : undefined}
              onPin={onTabPin           ? () => onTabPin(item.tab.id)           : undefined}
              onUnpin={onTabUnpin       ? () => onTabUnpin(item.tab.id)         : undefined}
              onAddToGroup={onAddTabToGroup ? () => onAddTabToGroup(item.tab.id) : undefined}
              onCloseOthers={onCloseOtherTabs ? () => onCloseOtherTabs(item.tab.id) : undefined}
              onCloseAll={onCloseAllTabs}
            />
          ) : (
            <FooterGroupItem
              key={item.group.id}
              group={item.group}
              tabs={item.tabs}
              activeTabId={activeTabId}
              isExpanded={!collapsedGroups.has(item.group.id)}
              onToggle={() => toggleGroup(item.group.id)}
              onTabActivate={onTabActivate}
              onTabClose={onTabClose}
              onTabLock={onTabLock}
              onTabUnlock={onTabUnlock}
              onTabPin={onTabPin}
              onTabUnpin={onTabUnpin}
              onAddTabToGroup={onAddTabToGroup}
              onCloseOtherTabs={onCloseOtherTabs}
              onCloseAllTabs={onCloseAllTabs}
              onGroupEdit={onGroupEdit   ? () => onGroupEdit(item.group.id)   : undefined}
              onGroupUngroup={onGroupUngroup ? () => onGroupUngroup(item.group.id) : undefined}
              onGroupClose={onGroupClose ? () => onGroupClose(item.group.id)  : undefined}
              allGroups={groups}
            />
          )
        )}
      </div>

      {/* ── Scroll right ─────────────────────────────────────────────────── */}
      <Button
        variant="ghost"
        size="small"
        color="neutral"
        iconStart={<ChevronRight size={16} />}
        aria-label="Scroll tabs right"
        disabled={!canScrollRight}
        onClick={() => scroll(SCROLL_AMOUNT)}
        className="footer__scroll-btn"
      />
    </div>
  )
}

// =============================================================================
// FOOTER TAB ITEM
// Internal — not exported.
// Uses Ripple Tabs CSS classes (.tab-item, .tab, .tab__actions) for visual
// consistency. Footer-specific overrides are scoped via .footer-tab modifier.
// =============================================================================

interface FooterTabItemProps {
  tab: FooterTab
  isActive: boolean
  groups: FooterGroup[]
  onActivate: () => void
  onClose?: () => void
  onLock?: () => void
  onUnlock?: () => void
  onPin?: () => void
  onUnpin?: () => void
  onAddToGroup?: () => void
  onCloseOthers?: () => void
  onCloseAll?: () => void
}

function FooterTabItem({
  tab,
  isActive,
  groups,
  onActivate,
  onClose,
  onLock,
  onUnlock,
  onPin,
  onUnpin,
  onAddToGroup,
  onCloseOthers,
  onCloseAll,
}: FooterTabItemProps) {
  const type = tab.type ?? 'standard'

  return (
    <div
      className="tab-item footer-tab"
      data-selected={isActive ? '' : undefined}
      data-size="medium"
      data-type={type}
    >
      {/* Main interactive element — uses .tab for Ripple tab styling */}
      <button
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-label={`${tab.label}, ${type} tab`}
        className="tab"
        onClick={onActivate}
      >
        {tab.icon && (
          <span className="tab__icon" aria-hidden="true">{tab.icon}</span>
        )}
        <span className="tab__label">{tab.label}</span>
        {type === 'locked' && (
          <Lock size={13} className="footer-tab__type-icon" aria-hidden="true" />
        )}
        {type === 'pinned' && (
          <Pin size={13} className="footer-tab__type-icon" aria-hidden="true" />
        )}
      </button>

      {/* Close button — always visible for standard tabs */}
      {type === 'standard' && onClose && (
        <Button
          variant="ghost"
          size="small"
          color="neutral"
          iconStart={<X size={12} />}
          aria-label={`Close ${tab.label}`}
          className="footer-tab__close-btn"
          onClick={onClose}
        />
      )}

      {/* More button — hidden until hover or selected (via CSS display: none) */}
      <FlyoutMenu>
        <FlyoutMenuTrigger asChild>
          <Button
            variant="ghost"
            size="small"
            color="neutral"
            iconStart={<MoreHorizontal size={14} />}
            aria-label={`More actions for ${tab.label}`}
            className="footer-tab__more-btn"
            tabIndex={isActive ? 0 : -1}
          />
        </FlyoutMenuTrigger>
        <FlyoutMenuContent side="top" align="start" sideOffset={8}>
          {type === 'standard' && onLock && (
            <FlyoutMenuItem onSelect={onLock}>Lock tab</FlyoutMenuItem>
          )}
          {type === 'locked' && onUnlock && (
            <FlyoutMenuItem onSelect={onUnlock}>Unlock tab</FlyoutMenuItem>
          )}
          {type !== 'pinned' && onPin && (
            <FlyoutMenuItem onSelect={onPin}>Pin to left of screen</FlyoutMenuItem>
          )}
          {type === 'pinned' && onUnpin && (
            <FlyoutMenuItem onSelect={onUnpin}>Unpin tab</FlyoutMenuItem>
          )}
          {groups.length > 0 && onAddToGroup && (
            <FlyoutMenuItem onSelect={onAddToGroup}>Add to group</FlyoutMenuItem>
          )}
          <FlyoutMenuSeparator />
          {type === 'standard' && onClose && (
            <FlyoutMenuItem onSelect={onClose}>Close this tab</FlyoutMenuItem>
          )}
          {onCloseOthers && (
            <FlyoutMenuItem onSelect={onCloseOthers}>Close all other tabs</FlyoutMenuItem>
          )}
          {type === 'standard' && onCloseAll && (
            <FlyoutMenuItem onSelect={onCloseAll}>Close all tabs</FlyoutMenuItem>
          )}
        </FlyoutMenuContent>
      </FlyoutMenu>
    </div>
  )
}

// =============================================================================
// FOOTER GROUP ITEM
// Internal — not exported.
// =============================================================================

interface FooterGroupItemProps {
  group: FooterGroup
  tabs: FooterTab[]
  activeTabId: string
  isExpanded: boolean
  onToggle: () => void
  onTabActivate: (tabId: string) => void
  onTabClose?: (tabId: string) => void
  onTabLock?: (tabId: string) => void
  onTabUnlock?: (tabId: string) => void
  onTabPin?: (tabId: string) => void
  onTabUnpin?: (tabId: string) => void
  onAddTabToGroup?: (tabId: string) => void
  onCloseOtherTabs?: (tabId: string) => void
  onCloseAllTabs?: () => void
  onGroupEdit?: () => void
  onGroupUngroup?: () => void
  onGroupClose?: () => void
  allGroups: FooterGroup[]
}

function FooterGroupItem({
  group,
  tabs,
  activeTabId,
  isExpanded,
  onToggle,
  onTabActivate,
  onTabClose,
  onTabLock,
  onTabUnlock,
  onTabPin,
  onTabUnpin,
  onAddTabToGroup,
  onCloseOtherTabs,
  onCloseAllTabs,
  onGroupEdit,
  onGroupUngroup,
  onGroupClose,
  allGroups,
}: FooterGroupItemProps) {
  const color = group.color ?? 'gray'

  return (
    <div
      className="footer-group"
      data-color={color}
      data-expanded={isExpanded ? '' : undefined}
      role="group"
      aria-label={`${group.label}, contains ${tabs.length} tab${tabs.length !== 1 ? 's' : ''}`}
    >
      {/* ── Group header ──────────────────────────────────────────────── */}
      <div className="footer-group__header">
        <button
          type="button"
          className="footer-group__label"
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onToggle() }
          }}
          aria-expanded={isExpanded}
          aria-label={`${group.label} group — ${isExpanded ? 'collapse' : 'expand'}`}
        >
          {group.label}
        </button>

        {isExpanded && (onGroupEdit || onGroupUngroup || onGroupClose) && (
          <FlyoutMenu>
            <FlyoutMenuTrigger asChild>
              <Button
                variant="ghost"
                size="small"
                color="neutral"
                iconStart={<MoreHorizontal size={14} />}
                aria-label={`More actions for ${group.label} group`}
                className="footer-group__more-btn"
              />
            </FlyoutMenuTrigger>
            <FlyoutMenuContent side="top" align="start" sideOffset={8}>
              {onGroupEdit && (
                <FlyoutMenuItem onSelect={onGroupEdit}>Edit group</FlyoutMenuItem>
              )}
              {onGroupUngroup && (
                <FlyoutMenuItem onSelect={onGroupUngroup}>Ungroup</FlyoutMenuItem>
              )}
              {(onGroupEdit || onGroupUngroup) && <FlyoutMenuSeparator />}
              {onCloseOtherTabs && tabs[0] && (
                <FlyoutMenuItem onSelect={() => onCloseOtherTabs(tabs[0].id)}>
                  Close all other tabs
                </FlyoutMenuItem>
              )}
              {onGroupClose && (
                <FlyoutMenuItem onSelect={onGroupClose}>Close group</FlyoutMenuItem>
              )}
            </FlyoutMenuContent>
          </FlyoutMenu>
        )}
      </div>

      {/* ── Group tabs — only when expanded ───────────────────────────── */}
      {isExpanded && (
        <div className="footer-group__tabs">
          {tabs.map(tab => (
            <FooterTabItem
              key={tab.id}
              tab={tab}
              isActive={tab.id === activeTabId}
              groups={allGroups}
              onActivate={() => onTabActivate(tab.id)}
              onClose={onTabClose     ? () => onTabClose(tab.id)     : undefined}
              onLock={onTabLock       ? () => onTabLock(tab.id)       : undefined}
              onUnlock={onTabUnlock   ? () => onTabUnlock(tab.id)     : undefined}
              onPin={onTabPin         ? () => onTabPin(tab.id)         : undefined}
              onUnpin={onTabUnpin     ? () => onTabUnpin(tab.id)       : undefined}
              onAddToGroup={onAddTabToGroup ? () => onAddTabToGroup(tab.id) : undefined}
              onCloseOthers={onCloseOtherTabs ? () => onCloseOtherTabs(tab.id) : undefined}
              onCloseAll={onCloseAllTabs}
            />
          ))}
        </div>
      )}
    </div>
  )
}
