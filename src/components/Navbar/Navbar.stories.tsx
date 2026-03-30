import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import {
  Home,
  Bell,
  MessageSquare,
  Settings,
  Users,
  BarChart2,
  Briefcase,
  FileText,
  Calendar,
  HelpCircle,
  Info,
  LogOut,
  User,
  Inbox,
  Layout,
  Grid,
} from 'lucide-react'
import { Navbar } from './Navbar'
import type { NavbarProps, NavItem, UserMenuItem } from './Navbar'
import { Unit4Logo } from '../../assets/Unit4Logo'

// ---------------------------------------------------------------------------

const meta: Meta<NavbarProps> = {
  title: 'Components/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div style={{ display: 'flex', height: '100vh', background: 'var(--bg-canvas, #f5f5f5)' }}>
        <Story />
        <div style={{ flex: 1, padding: '32px', fontFamily: 'var(--font-family-base)' }}>
          <p style={{ color: 'var(--text-soft)', fontSize: '14px' }}>Page content area</p>
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<NavbarProps>

// ---------------------------------------------------------------------------
// Shared fixtures
// ---------------------------------------------------------------------------

const defaultUserMenuItems: UserMenuItem[] = [
  { id: 'about',   label: 'About',        icon: <Info size={16} /> },
  { id: 'help',    label: 'Help',         icon: <HelpCircle size={16} /> },
  { id: 'profile', label: 'Your profile', icon: <User size={16} /> },
  { id: 'logout',  label: 'Log out',      icon: <LogOut size={16} />, separator: true },
]

// ---------------------------------------------------------------------------
// Default
// ---------------------------------------------------------------------------

export const Default: Story = {
  args: {
    logo:            <Unit4Logo />,
    productName:     'ERPx',
    userName:        'Alex Johnson',
    userRole:        'Finance Manager',
    userProductArea: 'Finance',
    userMenuItems:   defaultUserMenuItems,
    globalNavItems: [
      { id: 'home',     label: 'Home',     icon: <Home size={20} /> },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ],
  },
}

// ---------------------------------------------------------------------------
// With tenant badge
// ---------------------------------------------------------------------------

export const WithTenantBadge: Story = {
  name: 'With Tenant Badge',
  args: {
    logo:            <Unit4Logo />,
    productName:     'ERPx',
    tenantLabel:     'Staging',
    tenantColor:     'notice',
    userName:        'Alex Johnson',
    userRole:        'Finance Manager',
    userProductArea: 'Finance',
    userMenuItems:   defaultUserMenuItems,
    globalNavItems: [
      { id: 'home',     label: 'Home',     icon: <Home size={20} /> },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ],
  },
}

// ---------------------------------------------------------------------------
// With counters
// ---------------------------------------------------------------------------

export const WithCounters: Story = {
  name: 'With Counters',
  args: {
    logo:            <Unit4Logo />,
    productName:     'ERPx',
    tenantLabel:     'Redrock',
    tenantColor:     'notice',
    userName:        'Alex Johnson',
    userRole:        'Finance Manager',
    userProductArea: 'Finance',
    userMenuItems:   defaultUserMenuItems,
    globalNavItems: [
      { id: 'home',          label: 'Home',          icon: <Home size={20} /> },
      { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />,          count: 4 },
      { id: 'messages',      label: 'Messages',      icon: <MessageSquare size={20} />, count: 12 },
      { id: 'inbox',         label: 'Inbox',         icon: <Inbox size={20} />,         count: 103 },
      { id: 'settings',      label: 'Settings',      icon: <Settings size={20} /> },
    ],
  },
}

// ---------------------------------------------------------------------------
// Selected state
// ---------------------------------------------------------------------------

export const SelectedState: Story = {
  name: 'Selected State',
  render: () => {
    const [active, setActive] = useState<string | null>('home')

    const items: NavItem[] = [
      { id: 'home',          label: 'Home',          icon: <Home size={20} /> },
      { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, count: 4, countColor: 'negative' },
      { id: 'messages',      label: 'Messages',      icon: <MessageSquare size={20} />, count: 12, countColor: 'primary' },
      { id: 'settings',      label: 'Settings',      icon: <Settings size={20} /> },
    ]

    return (
      <Navbar
        logo={<Unit4Logo />}
        productName="ERPx"
        userName="Alex Johnson"
        userRole="Finance Manager"
        userProductArea="Finance"
        userMenuItems={defaultUserMenuItems}
        globalNavItems={items.map(item => ({
          ...item,
          selected: item.id === active,
          onClick:  () => setActive(prev => prev === item.id ? null : item.id),
        }))}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// With contextual navigation
// ---------------------------------------------------------------------------

export const WithContextualNav: Story = {
  name: 'With Contextual Nav',
  render: () => {
    const [activeGlobal,      setActiveGlobal]      = useState<string | null>('people')
    const [activeContextual,  setActiveContextual]  = useState<string | null>('users')

    const globalItems: NavItem[] = [
      { id: 'home',   label: 'Home',   icon: <Home size={20} /> },
      { id: 'people', label: 'People', icon: <Users size={20} /> },
      { id: 'reports',label: 'Reports',icon: <BarChart2 size={20} /> },
    ]

    const contextualItems: NavItem[] = [
      { id: 'users',    label: 'Users',    icon: <Users size={20} /> },
      { id: 'projects', label: 'Projects', icon: <Briefcase size={20} /> },
      { id: 'calendar', label: 'Calendar', icon: <Calendar size={20} /> },
      { id: 'files',    label: 'Files',    icon: <FileText size={20} /> },
    ]

    return (
      <Navbar
        logo={<Unit4Logo />}
        productName="ERPx"
        tenantLabel="Redrock"
        userName="Alex Johnson"
        userRole="Finance Manager"
        userProductArea="Finance"
        userMenuItems={defaultUserMenuItems}
        showContextualDivider
        globalNavItems={globalItems.map(item => ({
          ...item,
          selected: item.id === activeGlobal,
          onClick:  () => setActiveGlobal(item.id),
        }))}
        contextualNavItems={contextualItems.map(item => ({
          ...item,
          selected: item.id === activeContextual,
          onClick:  () => setActiveContextual(item.id),
        }))}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Overflow contextual menu (> 4 contextual items)
// ---------------------------------------------------------------------------

export const WithOverflowMenu: Story = {
  name: 'Overflow Contextual Menu',
  render: () => {
    const [active, setActive] = useState<string | null>('users')

    const contextualItems: NavItem[] = [
      { id: 'users',    label: 'Users',        icon: <Users size={20} /> },
      { id: 'projects', label: 'Projects',     icon: <Briefcase size={20} /> },
      { id: 'calendar', label: 'Calendar',     icon: <Calendar size={20} /> },
      { id: 'files',    label: 'Files',        icon: <FileText size={20} /> },
      { id: 'reports',  label: 'Reports',      icon: <BarChart2 size={20} />, count: 2, countColor: 'notice' },
      { id: 'layouts',  label: 'Layouts',      icon: <Layout size={20} /> },
      { id: 'widgets',  label: 'Widgets',      icon: <Grid size={20} /> },
    ]

    return (
      <Navbar
        logo={<Unit4Logo />}
        productName="ERPx"
        tenantLabel="Redrock"
        userName="Alex Johnson"
        userRole="Finance Manager"
        userProductArea="Finance"
        userMenuItems={defaultUserMenuItems}
        showContextualDivider
        globalNavItems={[
          { id: 'home',     label: 'Home',     icon: <Home size={20} /> },
          { id: 'messages', label: 'Messages', icon: <MessageSquare size={20} />, count: 5, countColor: 'primary' },
          { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
        ]}
        contextualNavItems={contextualItems.map(item => ({
          ...item,
          selected: item.id === active,
          onClick:  () => setActive(item.id),
        }))}
      />
    )
  },
}

// ---------------------------------------------------------------------------
// Disabled items
// ---------------------------------------------------------------------------

export const WithDisabledItems: Story = {
  name: 'With Disabled Items',
  args: {
    logo:            <Unit4Logo />,
    productName:     'ERPx',
    userName:        'Alex Johnson',
    userRole:        'Finance Manager',
    userProductArea: 'Finance',
    userMenuItems:   defaultUserMenuItems,
    globalNavItems: [
      { id: 'home',          label: 'Home',          icon: <Home size={20} /> },
      { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />, disabled: true },
      { id: 'messages',      label: 'Messages',      icon: <MessageSquare size={20} />, disabled: true, count: 3 },
      { id: 'settings',      label: 'Settings',      icon: <Settings size={20} /> },
    ],
  },
}

// ---------------------------------------------------------------------------
// Long tenant label (truncation + tooltip)
// ---------------------------------------------------------------------------

export const TenantTruncation: Story = {
  name: 'Tenant Label Truncation',
  args: {
    logo:            <Unit4Logo />,
    productName:     'ERPx',
    tenantLabel:     'Staging-EU-West',
    tenantColor:     'negative',
    userName:        'Alex Johnson',
    userRole:        'Finance Manager',
    userProductArea: 'Finance',
    userMenuItems:   defaultUserMenuItems,
    globalNavItems: [
      { id: 'home',     label: 'Home',     icon: <Home size={20} /> },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ],
  },
}

// ---------------------------------------------------------------------------
// Interactive logo
// ---------------------------------------------------------------------------

export const WithLogoClick: Story = {
  name: 'Interactive Logo',
  args: {
    logo:            <Unit4Logo />,
    productName:     'ERPx',
    userName:        'Alex Johnson',
    userRole:        'Finance Manager',
    userProductArea: 'Finance',
    userMenuItems:   defaultUserMenuItems,
    onLogoClick:     () => alert('Navigate to home'),
    globalNavItems: [
      { id: 'home',     label: 'Home',     icon: <Home size={20} /> },
      { id: 'settings', label: 'Settings', icon: <Settings size={20} /> },
    ],
  },
}

// ---------------------------------------------------------------------------
// Full example — everything enabled
// ---------------------------------------------------------------------------

export const FullExample: Story = {
  name: 'Full Example',
  render: () => {
    const [activeGlobal,     setActiveGlobal]     = useState<string | null>('home')
    const [activeContextual, setActiveContextual] = useState<string | null>('users')

    return (
      <Navbar
        logo={<Unit4Logo />}
        productName="ERPx"
        tenantLabel="Redrock"
        tenantColor="notice"
        onLogoClick={() => setActiveGlobal('home')}
        userRole="Finance Manager"
        userProductArea="Finance"
        userName="Alex Johnson"
        userMenuItems={defaultUserMenuItems}
        showContextualDivider
        globalNavItems={[
          { id: 'home',          label: 'Home',          icon: <Home size={20} />,          selected: activeGlobal === 'home',          onClick: () => setActiveGlobal('home') },
          { id: 'notifications', label: 'Notifications', icon: <Bell size={20} />,          selected: activeGlobal === 'notifications', onClick: () => setActiveGlobal('notifications'), count: 4, countColor: 'negative' },
          { id: 'messages',      label: 'Messages',      icon: <MessageSquare size={20} />, selected: activeGlobal === 'messages',      onClick: () => setActiveGlobal('messages'),      count: 12, countColor: 'primary' },
          { id: 'settings',      label: 'Settings',      icon: <Settings size={20} />,      selected: activeGlobal === 'settings',      onClick: () => setActiveGlobal('settings') },
        ]}
        contextualNavItems={[
          { id: 'users',    label: 'Users',    icon: <Users size={20} />,    selected: activeContextual === 'users',    onClick: () => setActiveContextual('users') },
          { id: 'projects', label: 'Projects', icon: <Briefcase size={20} />,selected: activeContextual === 'projects', onClick: () => setActiveContextual('projects') },
          { id: 'reports',  label: 'Reports',  icon: <BarChart2 size={20} />, selected: activeContextual === 'reports',  onClick: () => setActiveContextual('reports') },
          { id: 'calendar', label: 'Calendar', icon: <Calendar size={20} />, selected: activeContextual === 'calendar', onClick: () => setActiveContextual('calendar') },
          { id: 'files',    label: 'Files',    icon: <FileText size={20} />, selected: activeContextual === 'files',    onClick: () => setActiveContextual('files') },
          { id: 'layouts',  label: 'Layouts',  icon: <Layout size={20} />,   selected: activeContextual === 'layouts',  onClick: () => setActiveContextual('layouts') },
        ]}
      />
    )
  },
}
