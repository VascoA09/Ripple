---
name: List
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [display, layout]
---

# List

The List component displays a collection of items in a structured, scannable format. Each list item can contain text, icons, avatars, actions, and interactive elements, making it versatile for displaying users, settings, files, notifications, and more.

---

## Usage

Lists should be used to organize and display related items in a scannable, easy-to-navigate format. They provide visual consistency and help users quickly find and interact with content.

Use Lists when:
* Displaying collections of similar items (users, files, settings, notifications)
* Creating navigation menus or option lists
* Showing search results or filtered data
* Building inbox or message lists
* Organizing settings or configuration options
* Displaying items that users can select or interact with

Do not use Lists when:
* Displaying tabular data (use Data Table instead)
* Showing a single item (use Card or Panel)
* Creating navigation that requires hierarchy (use Navigation Menu)
* Displaying unrelated items without common structure

---

## Anatomy

The List consists of individual List Items, each containing:

* **Content Before** (optional) — Leading visual element
  * Avatar (for user presets)
  * Icon (for setting presets or custom items)
  * Checkbox (for bulk selection)
  * Custom content
* **Main Content Area** — Primary information
  * Header — Main text or title
  * Description (optional) — Supporting text
* **Content After** (optional) — Trailing elements
  * Action buttons
  * Badges or tags
  * Icons
  * Custom content
* **Unread Indicator** (optional) — Visual marker for unread items
* **Background** — Container with interactive states

---

## Presets

Lists support preset configurations for common patterns:

* **Custom (Default)**
  * **Purpose**: Fully customizable list item
  * **Usage**: Use `contentBefore` and `contentAfter` for any content
  * **Flexibility**: Complete control over item structure

* **User Preset**
  * **Purpose**: Display user information with avatar
  * **Structure**: Avatar (before) + Name (header) + Email/Role (description)
  * **Common use**: User lists, member directories, contact lists
  * **Avatar**: Automatically styled for user preset

* **Setting Preset**
  * **Purpose**: Display settings or options with icons
  * **Structure**: Icon (before) + Setting name (header) + Description (description)
  * **Common use**: Settings panels, preferences, configuration menus
  * **Icon**: Automatically styled for setting preset

---

## Sizes

List Items come in two sizes:

* **Small List Item**
  * **Min height**: var(--size-250) (40px)
  * **Padding**: var(--spacing-25) var(--spacing-75) (4px 12px)
  * **Gap between elements**: var(--spacing-50) (8px)
  * **Gap between header and description**: var(--spacing-25) (4px)
  * **Font size (header)**: var(--font-size-100) (16px)
  * **Font size (description)**: var(--font-size-80) (14px)
  * **Usage**: Compact layouts, sidebars, dense lists

* **Medium List Item (Default)**
  * **Min height**: var(--size-300) (48px)
  * **Padding**: var(--spacing-50) var(--spacing-100) (8px 16px)
  * **Gap between elements**: var(--spacing-75) (12px)
  * **Gap between header and description**: var(--spacing-25) (4px)
  * **Font size (header)**: var(--font-size-100) (16px)
  * **Font size (description)**: var(--font-size-80) (14px)
  * **Usage**: Standard layouts, recommended for most use cases

---

## Interactive States

List Items can be interactive or static:

### Non-Interactive (Default)

* **Default**
  * Background: var(--bg-surface)
  * Cursor: default
  * No hover or active states

### Interactive

Set `interactive={true}`, provide `onClick`, or use `href` to make items interactive.

* **Default**
  * Background: var(--bg-surface)
  * Cursor: pointer
  * Ready for interaction

* **Hover**
  * Background: var(--bg-neutral-softest)
  * Smooth transition
  * Indicates interactivity

* **Focus**
  * Background: var(--bg-surface)
  * Outline: 2px solid var(--border-focus)
  * Outline offset: 2px
  * Keyboard navigation indicator

* **Active (Pressed)**
  * Background: var(--bg-primary)
  * Text color: var(--text-loud-inverse)
  * Description color: var(--text-loud-inverse)
  * Icon color: var(--text-loud-inverse)
  * Visual feedback during click/touch

---

## Bulk Selection

List Items support bulk selection with checkboxes:

* **Enable**: Set `bulkSelect={true}` on list item
* **Position**: Checkbox appears at the start (leftmost position)
* **State**: Controlled via `bulkSelectChecked` prop
* **Callback**: `onBulkSelectChange` triggered when checkbox toggled
* **Usage**: Multi-select lists, batch operations, selection management

**Visual behavior:**
* Checkbox appears before `contentBefore`
* List item remains clickable for navigation (checkbox handles selection)
* Selection state independent of item interaction

---

## Unread Indicator

List Items can show an unread indicator:

* **Enable**: Set `unreadIndicator={true}` on list item
* **Position**: Left edge of list item
* **Visual**: 4px wide blue bar (var(--color-primary))
* **Height**: Full height of list item
* **Border radius**: Left side rounded (4px)
* **Usage**: Unread messages, new notifications, unseen items

---

## Properties

### List Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `items` | ListItem[] | required | Array of list items to display |
| `size` | 'small' \| 'medium' | 'medium' | Size variant for all items |
| `className` | string | — | Optional CSS class |
| `style` | CSSProperties | — | Optional inline styles |

### ListItem Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `header` | string | required | Main text content |
| `description` | string | — | Supporting text below header |
| `contentBefore` | ReactNode | — | Leading content (icon, avatar, etc.) |
| `contentAfter` | ReactNode | — | Trailing content (actions, badges, etc.) |
| `preset` | 'user' \| 'setting' \| 'custom' | 'custom' | Preset configuration |
| `size` | 'small' \| 'medium' | 'medium' | Size variant (overrides List size) |
| `interactive` | boolean | false | Enable interactive states |
| `onClick` | function | — | Click handler (makes item interactive) |
| `href` | string | — | Link URL (makes item interactive) |
| `bulkSelect` | boolean | false | Show bulk selection checkbox |
| `bulkSelectChecked` | boolean | false | Checkbox checked state |
| `onBulkSelectChange` | function | — | Callback when checkbox toggled |
| `unreadIndicator` | boolean | false | Show unread indicator |
| `className` | string | — | Optional CSS class |

---

## Spacing

Use Ripple spacing tokens for all spacing:

**Small:**
* Padding: var(--spacing-25) var(--spacing-75) (4px 12px)
* Gap between main elements: var(--spacing-50) (8px)
* Gap between header and description: var(--spacing-25) (4px)
* Min height: var(--size-250) (40px)

**Medium:**
* Padding: var(--spacing-50) var(--spacing-100) (8px 16px)
* Gap between main elements: var(--spacing-75) (12px)
* Gap between header and description: var(--spacing-25) (4px)
* Min height: var(--size-300) (48px)

**General:**
* Border radius: var(--border-radius-150) (6px)
* Unread indicator width: 4px
* Unread indicator border radius: 4px (left side only)
* Gap between list items: 0 (items are separated by small gaps in container)

---

## Accessibility

* **Semantic HTML**:
  * Use `<a>` tag when `href` is provided
  * Use `<div>` tag for non-link items
  * Proper heading hierarchy for headers

* **Keyboard Support**:
  * Tab to navigate between interactive items
  * Enter/Space to activate interactive items
  * Interactive items are keyboard accessible
  * Bulk selection checkboxes keyboard accessible

* **Focus Management**:
  * Clear visible focus indicators (2px outline, 2px offset)
  * Focus remains visible during navigation
  * Focus does not trap users

* **Touch Targets**:
  * Small: 40px minimum height (marginal for touch)
  * Medium: 48px minimum height (meets accessibility standards)
  * Adequate spacing between interactive elements

* **Screen Readers**:
  * Headers announced as primary content
  * Descriptions provide additional context
  * Interactive state announced (link, button)
  * Bulk selection checkboxes properly labeled
  * Unread state can be announced via aria-label

* **Color Contrast**:
  * Header text meets 4.5:1 contrast ratio
  * Description text meets 4.5:1 contrast ratio (softer color)
  * Interactive elements meet 3:1 contrast ratio
  * Focus indicators clearly visible
  * Active state maintains sufficient contrast (white on blue)

* **ARIA Attributes**:
  * `role="list"` on list container
  * `role="listitem"` on list items
  * `aria-label` for complex items
  * `aria-describedby` for descriptions

---

## Colors

**Non-Interactive:**
* Background: var(--bg-surface)
* Header: var(--text-loud)
* Description: var(--text-soft)
* Icons: var(--text)

**Interactive Default:**
* Background: var(--bg-surface)
* Header: var(--text-loud)
* Description: var(--text-soft)
* Icons: var(--text)

**Interactive Hover:**
* Background: var(--bg-neutral-softest)
* Header: var(--text-loud)
* Description: var(--text-soft)
* Icons: var(--text)

**Interactive Focus:**
* Background: var(--bg-surface)
* Outline: 2px solid var(--border-focus)
* Header: var(--text-loud)
* Description: var(--text-soft)

**Interactive Active:**
* Background: var(--bg-primary)
* Header: var(--text-loud-inverse)
* Description: var(--text-loud-inverse)
* Icons: var(--text-loud-inverse)

**Unread Indicator:**
* Color: var(--color-primary)
* Width: 4px

---

## Content Guidelines

### Header Text

* Use clear, descriptive text
* Keep concise (1-10 words)
* Use sentence case
* Make it scannable
* Put most important information first

**Examples:**
* User preset: "John Smith", "Sarah Johnson"
* Setting preset: "Notifications", "Privacy settings"
* Custom: "Project report.pdf", "Meeting notes"

### Description Text

* Provide supporting context
* Keep brief (1-2 lines)
* Use softer color (var(--text-soft))
* Don't duplicate header information

**Examples:**
* User preset: "john@example.com", "Admin"
* Setting preset: "Manage email and push notifications"
* Custom: "Modified 2 hours ago", "1.2 MB"

### Content Before

* Use icons consistently across similar items
* User preset: Show user avatar
* Setting preset: Use relevant icons
* Keep visual weight balanced

### Content After

* Use for secondary actions or metadata
* Common: Badges, counts, action buttons, icons
* Don't overcrowd with too many elements
* Align visually with header

---

## Best Practices

### Do

* Use consistent structure across list items
* Provide clear, scannable headers
* Use appropriate preset for common patterns
* Enable interactive states when items are clickable
* Use medium size for touch interfaces
* Show unread indicators for new content
* Group related items together
* Use bulk selection for batch operations
* Provide adequate spacing between interactive items
* Use description text to provide context

### Don't

* Don't mix different structures within the same list
* Don't use vague headers ("Item 1", "Entry")
* Don't make items interactive if they don't navigate or trigger actions
* Don't use small size on touch devices
* Don't hide important information in overflow menus
* Don't overcrowd items with too many trailing elements
* Don't forget to handle loading and empty states
* Don't use lists for tabular data with many columns
* Don't rely solely on color to convey information
* Don't make entire item clickable if only specific actions should trigger

---

## Common Patterns

### User List
```typescript
<List
  size="medium"
  items={[
    {
      preset: 'user',
      header: 'John Smith',
      description: 'john@example.com',
      contentBefore: <Avatar src="/john.jpg" name="John Smith" />,
      contentAfter: <Button size="small">Message</Button>,
      interactive: true,
      onClick: () => viewProfile('john'),
    },
    {
      preset: 'user',
      header: 'Sarah Johnson',
      description: 'Admin',
      contentBefore: <Avatar src="/sarah.jpg" name="Sarah Johnson" />,
      interactive: true,
      onClick: () => viewProfile('sarah'),
    },
  ]}
/>
```

### Settings List
```typescript
<List
  items={[
    {
      preset: 'setting',
      header: 'Notifications',
      description: 'Manage email and push notifications',
      contentBefore: <Bell size={20} />,
      contentAfter: <ChevronRight size={20} />,
      interactive: true,
      href: '/settings/notifications',
    },
    {
      preset: 'setting',
      header: 'Privacy',
      description: 'Control your privacy settings',
      contentBefore: <Lock size={20} />,
      contentAfter: <ChevronRight size={20} />,
      interactive: true,
      href: '/settings/privacy',
    },
  ]}
/>
```

### With Bulk Selection
```typescript
const [selected, setSelected] = useState<Set<string>>(new Set());

<List
  items={users.map(user => ({
    header: user.name,
    description: user.email,
    contentBefore: <Avatar name={user.name} />,
    bulkSelect: true,
    bulkSelectChecked: selected.has(user.id),
    onBulkSelectChange: (checked) => {
      const newSelected = new Set(selected);
      if (checked) {
        newSelected.add(user.id);
      } else {
        newSelected.delete(user.id);
      }
      setSelected(newSelected);
    },
    interactive: true,
    onClick: () => viewUser(user.id),
  }))}
/>
```

### With Unread Indicators
```typescript
<List
  items={messages.map(msg => ({
    header: msg.subject,
    description: msg.preview,
    contentBefore: <Mail size={20} />,
    contentAfter: <span>{msg.time}</span>,
    unreadIndicator: !msg.read,
    interactive: true,
    onClick: () => openMessage(msg.id),
  }))}
/>
```

### Custom Content
```typescript
<List
  items={[
    {
      header: 'Project report.pdf',
      description: 'Modified 2 hours ago · 1.2 MB',
      contentBefore: <FileText size={20} />,
      contentAfter: (
        <>
          <IconButton icon={<Download />} size="small" />
          <IconButton icon={<MoreVertical />} size="small" />
        </>
      ),
      interactive: true,
      onClick: () => openFile('report.pdf'),
    },
  ]}
/>
```

### Small Size for Compact Layouts
```typescript
<List
  size="small"
  items={[
    {
      header: 'Dashboard',
      contentBefore: <Home size={16} />,
      interactive: true,
      href: '/dashboard',
    },
    {
      header: 'Projects',
      contentBefore: <Folder size={16} />,
      interactive: true,
      href: '/projects',
    },
  ]}
/>
```

---

## Related Components

* **Card**: Use for richer, more complex content
* **Data Table**: Use for tabular data with many columns
* **Avatar**: Used in user preset list items
* **Checkbox**: Used for bulk selection
* **Button**: Used for actions in list items
* **Icon Button**: Used for compact actions
* **Badge**: Used to show counts or status
* **Tag**: Used for categorization

---

## Common Use Cases

* **User directories**: Team members, contacts, followers
* **Settings menus**: Configuration options, preferences
* **File browsers**: Document lists, folder contents
* **Inbox/Messages**: Email, notifications, chat messages
* **Search results**: Filtered or searched items
* **Navigation menus**: App sections, page links
* **Transaction history**: Orders, payments, activity logs
* **Task lists**: To-dos, assignments, issues

---

## Typography

All text uses Ripple typography tokens:

* **Header text**: var(--font-size-100) (16px), var(--font-weight-semibold)
* **Description text**: var(--font-size-80) (14px), var(--font-weight-regular)
* **Font family**: var(--font-family) (Open Sans)
* **Line height**: var(--line-height-body) (150%)
* **Header color**: var(--text-loud)
* **Description color**: var(--text-soft)
* **Active state text**: var(--text-loud-inverse)

---

## Technical Notes

* Built with flexible content slots (before/after)
* Supports both `<a>` and `<div>` rendering based on `href`
* Presets provide quick configuration for common patterns
* Interactive state automatically enabled with `onClick` or `href`
* Smooth transitions for hover and active states
* Bulk selection state managed externally (controlled component)
* Unread indicator positioned absolutely for precise placement
* Focus management follows standard DOM order
* Compatible with keyboard navigation
* Supports custom styling via className and style props
