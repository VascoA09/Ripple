import { default as React } from 'react';
import { TagColor } from '../../components/Tag';

export type FooterTabType = 'standard' | 'locked' | 'pinned';
export type FooterGroupColor = TagColor;
export interface FooterTab {
    id: string;
    label: string;
    /** Optional decorative icon rendered before the label. */
    icon?: React.ReactNode;
    /** Controls which type indicator and contextual menu actions are shown. Default: 'standard'. */
    type?: FooterTabType;
    /** If set, the tab is rendered inside the matching group. */
    groupId?: string;
}
export interface FooterGroup {
    id: string;
    label: string;
    /** Color used for the group border and label badge. Default: 'neutral'. */
    color?: FooterGroupColor;
}
export interface FooterProps {
    /** All open tabs, in display order. */
    tabs: FooterTab[];
    /** ID of the currently active tab. */
    activeTabId: string;
    /** Groups to render. Tabs with a matching groupId are placed inside their group. */
    groups?: FooterGroup[];
    onTabActivate: (tabId: string) => void;
    onTabClose?: (tabId: string) => void;
    onTabLock?: (tabId: string) => void;
    onTabUnlock?: (tabId: string) => void;
    onTabPin?: (tabId: string) => void;
    onTabUnpin?: (tabId: string) => void;
    /** Called when the user selects "Add to group" from a tab's contextual menu. */
    onAddTabToGroup?: (tabId: string) => void;
    onGroupEdit?: (groupId: string) => void;
    onGroupUngroup?: (groupId: string) => void;
    onGroupClose?: (groupId: string) => void;
    onCloseAllTabs?: () => void;
    onCloseOtherTabs?: (tabId: string) => void;
    className?: string;
}
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
export declare function Footer({ tabs, activeTabId, groups, onTabActivate, onTabClose, onTabLock, onTabUnlock, onTabPin, onTabUnpin, onAddTabToGroup, onGroupEdit, onGroupUngroup, onGroupClose, onCloseAllTabs, onCloseOtherTabs, className, }: FooterProps): import("react/jsx-runtime").JSX.Element;
