---
name: Footer
status: draft
version: 0.1.0
last_updated: 2026-03-20
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [layout, navigation]
---

# Footer — Ripple Design System

## Overview

The **Footer** is a persistent tab bar pattern that appears at the bottom of enterprise applications, allowing users to navigate between multiple open pages and organize them into meaningful groups. It serves as a container for all open tabs and tab groups, providing quick access to all active work contexts within the application.

The Footer pattern is essential for complex enterprise workflows where users need to maintain multiple pages open simultaneously and switch between them efficiently without losing their work context.

---

## When to use

Use the Footer pattern when:

* Building multi-page enterprise applications where users work across multiple contexts simultaneously
* Users need to maintain multiple work contexts (e.g., different clients, projects, reports)
* Workflows require frequent switching between different pages or modules
* Complex data entry or review processes span multiple pages
* Users benefit from grouping related pages together for quick access
* The application supports multi-tasking across different functional areas

Do not use the Footer pattern when:

* Building simple single-page applications
* Creating mobile-first applications (limited screen space makes footer tabs impractical)
* Users rarely need to switch between pages
* The application has a shallow navigation hierarchy
* Browser tabs suffice for the use case
* Screen real estate is limited and better used for content

---

## Anatomy

The Footer is composed of several key elements that work together to provide tab management functionality:

```
┌──────────────────────────────────────────────────────────────┐
│ [≡] [<] [Tab 1] [Group][Tab 2][Tab 3] [Locked] [Pinned] [>] │
└──────────────────────────────────────────────────────────────┘
     │   │    │       │      │      │       │        │      │
     │   │    │       │      │      │       │        │      └─ Scroll right
     │   │    │       │      │      │       │        └──────── Pinned tab
     │   │    │       │      │      │       └───────────────── Locked tab
     │   │    │       │      │      └───────────────────────── Standard tab
     │   │    │       │      └──────────────────────────────── Tab in group
     │   │    │       └─────────────────────────────────────── Footer group
     │   │    └─────────────────────────────────────────────── Standard tab
     │   └──────────────────────────────────────────────────── Scroll left
     └──────────────────────────────────────────────────────── Contextual menu
```

### 1. Contextual Menu Button

* **Icon**: Three horizontal dots (MoreHorizontal)
* **Size**: 32 × 32 px button
* **Function**: Opens a flyout menu containing:
  * List of all open tabs for quick navigation
  * Bulk actions: "Arrange tabs", "Close all tabs"
* **Position**: Far left of the footer
* **Interaction**: Click to open menu, click item to navigate or perform action

### 2. Scroll Buttons

**Scroll Left Button:**
* **Icon**: ChevronLeft
* **Size**: 32 × 32 px button
* **State**: Disabled when scrolled to the leftmost position
* **Function**: Scrolls content container left to reveal hidden tabs

**Scroll Right Button:**
* **Icon**: ChevronRight
* **Size**: 32 × 32 px button
* **State**: Disabled when scrolled to the rightmost position
* **Function**: Scrolls content container right to reveal hidden tabs

### 3. Content Container

* **Behavior**: Horizontally scrollable area containing tabs and groups
* **Overflow**: Hidden with smooth scrolling
* **Scrollbar**: Hidden (navigation via scroll buttons)
* **Gap**: var(--spacing-50) (8 px) between items

### 4. Footer Container

* **Height**: 56 px
* **Background**: var(--bg-surface)
* **Border**: 1 px solid var(--border-neutral) on top edge
* **Padding**: 0 var(--spacing-100) (0 16 px)
* **Position**: Fixed to bottom of viewport

---

## Footer Tabs

Footer tabs represent individual open pages. Each tab allows users to navigate between different pages and provides access to tab-specific actions.

### Tab Anatomy

* **Icon** (optional): 14 × 14 px icon for visual identification
* **Tab name**: Text label identifying the page
* **Type indicator**: Visual indicator based on tab type (lock/pin icon)
* **Close button**: X icon button (standard tabs only)
* **Contextual menu**: Three dots button for additional actions

### Tab Types

#### Standard Tab

The default tab type with full functionality.

**Characteristics:**
* Shows close button (X icon)
* Can be closed, locked, or pinned
* Most common tab type

**Contextual menu actions:**
* Lock tab
* Pin tab to left of screen
* Add tab to group
* Close this tab
* Close all other tabs
* Close all tabs

**Use when:**
* Page can be safely closed without special consideration
* User should have full control over tab lifecycle
* Tab represents temporary work context

#### Locked Tab

Prevents accidental closure of important pages.

**Characteristics:**
* Shows lock icon instead of close button
* Cannot be closed without unlocking first
* Must be unlocked via contextual menu

**Contextual menu actions:**
* Unlock tab
* Pin tab to left of screen
* Add tab to group
* Close all other tabs

**Use when:**
* Page contains critical information that shouldn't be accidentally closed
* User is actively working on important tasks
* Page serves as a reference during the session

#### Pinned Tab

Displays the page in a split-screen view on the left side of the screen.

**Characteristics:**
* Shows pin icon
* Page is displayed alongside the active tab
* Enables side-by-side comparison or reference
* Cannot be closed while pinned (must unpin first)

**Contextual menu actions:**
* Unpin tab
* Add tab to group
* Close all other tabs

**Use when:**
* User needs to reference one page while working in another
* Side-by-side comparison is beneficial
* Constant visibility of specific content is required

### Tab States

All tab types support the following interaction states:

| State | Visual Treatment | Trigger |
|-------|-----------------|---------|
| **Default** | Transparent background | No interaction |
| **Hover** | var(--bg-neutral-softest) | Pointer over tab |
| **Active** | var(--bg-neutral-soft) | Tab represents current page |
| **Focus** | Focus ring (keyboard navigation) | Tab key focus |

### Tab Sizing

* **Height**: 40 px
* **Padding**: 0 var(--spacing-100) (0 16 px)
* **Min width**: 120 px
* **Max width**: 200 px
* **Gap between elements**: var(--spacing-50) (8 px)
* **Font size**: var(--font-size-90) (14 px)

---

## Footer Groups

Footer groups organize related tabs together with a custom name and color, helping users manage multiple open pages more effectively.

### Group Anatomy

* **Tag**: Colored label with group name (Ripple Tag component)
* **Contextual menu**: Actions for group management (when expanded)
* **Group content**: Container for tabs within the group (when expanded)
* **Group border**: 2 px border in group color surrounding the entire group

### Group Features

#### Expand and Collapse

Groups can be toggled between expanded and collapsed states:

**Expanded state:**
* Shows all tabs within the group
* Displays contextual menu button
* Allows interaction with individual tabs
* Takes more horizontal space

**Collapsed state:**
* Shows only the group tag
* Hides tabs and contextual menu
* Saves horizontal space
* Click to expand

**Interaction:** Click the group tag to toggle expansion

#### Group Colors

Groups can be assigned any of the 11 Tag color tokens to aid visual differentiation. Colors are purely decorative — they carry no semantic meaning (do not use color to imply success, warning, error, or status). The label always communicates the group's purpose; color is supplementary.

| Color | Border token |
|-------|-------------|
| `gray` (default) | `--color-cool-gray-60` |
| `blue` | `--color-blue-60` |
| `green` | `--color-green-60` |
| `emerald` | `--color-emerald-60` |
| `aqua` | `--color-aqua-60` |
| `purple` | `--color-purple-60` |
| `violet` | `--color-violet-60` |
| `pink` | `--color-pink-60` |
| `red` | `--color-red-60` |
| `orange` | `--color-orange-60` |
| `ochre` | `--color-ochre-60` |

**Default:** `gray`

**Color application:**
* Tag background and text (inherits from the Tag component)
* Group border (2 px solid, using the `-60` primitive stop of the chosen hue)

**Guidance:**
* Pick colors that distinguish groups from each other, not to convey meaning.
* Avoid using a color exclusively for "errors" or "urgency" — the group label carries that meaning.
* Limit active groups to 5–7 at a time to prevent the footer from becoming visually noisy.

#### Contextual Menu Actions

When a group is expanded, the contextual menu provides:

* **Edit group**: Modify group name, color, or tab membership
* **Ungroup**: Remove tabs from group (tabs remain open individually)
* **Close group**: Close all tabs within the group and remove the group
* **Close all other tabs**: Close all tabs except those in this group

### Group Sizing

* **Padding**: var(--spacing-50) (8 px) around group content
* **Border**: 2 px solid (group color)
* **Border radius**: var(--border-radius-100) (6 px)
* **Gap between tag and menu**: var(--spacing-50) (8 px)
* **Gap between tabs**: var(--spacing-50) (8 px)

---

## Scroll Behavior

The Footer implements smart scrolling to handle overflow when tabs exceed the container width.

### Scroll Detection

* Automatically detects when content exceeds container width
* Enables appropriate scroll buttons based on scroll position
* Disables scroll buttons when reaching either end

### Scroll Buttons

**Left button enabled when:**
* Content is scrolled past the leftmost position
* Hidden tabs exist on the left side

**Right button enabled when:**
* Content extends beyond the right edge
* Hidden tabs exist on the right side

**Both disabled when:**
* All content fits within the container
* No scrolling is needed

### Scroll Amount

* Default scroll distance: 200 px per click
* Smooth scrolling behavior
* Updates button states after scroll completes

### Keyboard Support

* Arrow keys within content container scroll horizontally
* Tab key navigates between footer elements
* No keyboard shortcut conflicts with tab navigation

---

## Interaction Patterns

### Opening Tabs

Tabs are typically opened through:
* Navigation actions within the application
* Links that open in the footer tab system
* Programmatic API calls from application code

**Best practice:** Implement a maximum tab limit (e.g., 15-20 tabs) to prevent performance issues and maintain usability.

### Closing Tabs

**Standard tabs:**
* Click the X button on the tab
* Select "Close this tab" from contextual menu
* Use "Close all other tabs" to close everything except current
* Use "Close all tabs" from footer contextual menu

**Locked tabs:**
* Must first unlock via contextual menu
* Then close as standard tab

**Pinned tabs:**
* Must first unpin via contextual menu
* Then close as standard or locked tab (depending on original type)

**Grouped tabs:**
* Close individually as standard tabs
* Close entire group via group contextual menu
* Ungroup first to manage individually

### Switching Between Tabs

**Direct interaction:**
* Click on any visible tab to switch to that page
* Active tab shows different background color

**Via contextual menu:**
* Open footer contextual menu
* Select tab from "All open tabs" list
* Useful when many tabs are open and not all are visible

**Scroll to find:**
* Use scroll buttons to reveal hidden tabs
* Click on revealed tab to switch

### Creating Groups

Typical group creation flow:

1. User has multiple related tabs open
2. Select "Add tab to group" from tab's contextual menu
3. Choose existing group or create new group
4. Provide group name and select color
5. Tab moves into the group container
6. Repeat for additional tabs to add to the group

**Alternative flow:**
* Select multiple tabs (application-specific implementation)
* Bulk action to create group from selection

### Managing Groups

**Edit group:**
* Change group name
* Change group color
* Add or remove tabs from group membership
* Reorder tabs within group

**Ungroup:**
* Removes all tabs from the group
* Tabs remain open as individual standard tabs
* Group is deleted

**Close group:**
* Closes all tabs within the group
* Group is deleted
* Irreversible action (confirm before executing)

### Tab State Transitions

**Standard → Locked:**
* Select "Lock tab" from contextual menu
* Close button replaced with lock icon
* Tab cannot be closed without unlocking

**Locked → Standard:**
* Select "Unlock tab" from contextual menu
* Lock icon replaced with close button
* Tab can be closed normally

**Standard/Locked → Pinned:**
* Select "Pin tab to left of screen" from contextual menu
* Tab shows pin icon
* Page displays in split-screen view
* Cannot be closed while pinned

**Pinned → Standard/Locked:**
* Select "Unpin tab" from contextual menu
* Returns to previous type (standard or locked)
* Split-screen view closes
* Tab returns to normal footer behavior

---

## Use Cases

### Financial Management Systems

**Scenario:** Accountant working on month-end close

**Footer usage:**
* Multiple ledgers open simultaneously (grouped by department)
* Reconciliation reports (locked to prevent accidental closure)
* Reference documents (pinned for constant visibility)
* Quick switching between accounts using footer tabs

**Groups:**
* "Revenue" group — all revenue-related ledgers
* "Expenses" group — expense accounts
* "Reconciliation" group — completed reconciliations

### HR & Payroll Platforms

**Scenario:** HR manager processing employee records

**Footer usage:**
* Employee profiles open for review
* Payroll calculation sheets
* Benefits enrollment forms
* Compliance checklists (locked)

**Groups:**
* "New Hires" group - onboarding documents
* "Payroll Review" group - current pay period
* "Performance Reviews" group - scheduled reviews

### Project Management Tools

**Scenario:** Project manager overseeing multiple projects

**Footer usage:**
* Project dashboards for 3-4 active projects
* Resource allocation sheet (pinned)
* Budget tracker (locked)
* Timeline views

**Groups:**
* "Q1 Projects" group
* "High Priority" group
* "Planning" group

### Customer Support Systems

**Scenario:** Support agent managing multiple tickets

**Footer usage:**
* 5-8 open support tickets
* Customer information (pinned for reference)
* Knowledge base articles
* Escalation form (when needed)

**Groups:**
* "Urgent" group
* "In Progress" group
* "Follow-up" group

---

## Visual Design

### Colors

| Element | Token | Value |
|---------|-------|-------|
| Footer background | var(--bg-surface) | Surface color |
| Footer border | var(--border-neutral) | Neutral border |
| Tab background (default) | transparent | Transparent |
| Tab background (hover) | var(--bg-neutral-softest) | Softest neutral |
| Tab background (active) | var(--bg-neutral-soft) | Soft neutral |
| Tab text | var(--text) | Default text |
| Icon color | var(--text-soft) | Soft text |
| Button border | var(--border-neutral) | Neutral border |

### Typography

| Element | Font size | Font weight |
|---------|-----------|-------------|
| Tab name | var(--font-size-90) | Normal |
| Group tag | var(--font-size-80) | Normal |
| Font family | var(--font-family) | System font |

### Spacing

| Element | Token | Value |
|---------|-------|-------|
| Footer height | Fixed | 56 px |
| Footer padding | var(--spacing-100) | 16 px |
| Tab height | Fixed | 40 px |
| Tab padding horizontal | var(--spacing-100) | 16 px |
| Tab min width | Fixed | 120 px |
| Tab max width | Fixed | 200 px |
| Gap between elements | var(--spacing-50) | 8 px |
| Button size | Fixed | 32 × 32 px |
| Group padding | var(--spacing-50) | 8 px |
| Group border width | Fixed | 2 px |

### Border Radius

| Element | Token | Value |
|---------|-------|-------|
| Tab | var(--border-radius-100) | 6 px |
| Button | var(--border-radius-100) | 6 px |
| Group | var(--border-radius-100) | 6 px |
| Close/menu button (internal) | var(--border-radius-50) | 4 px |

---

## Accessibility

### Keyboard Navigation

**Tab key:**
* Navigate between footer elements (menu button, scroll buttons, tabs)
* Logical tab order from left to right
* Focus visible on all interactive elements

**Enter / Space:**
* Activate focused element
* Open contextual menus
* Switch to selected tab
* Scroll content (on scroll buttons)

**Arrow keys:**
* Navigate through menu items when contextual menu is open
* Optional: Arrow left/right to navigate between tabs

**Escape:**
* Close open contextual menus
* Return focus to trigger button

### Screen Reader Support

**Tab announcements:**
* "Tab name, [type], [active/inactive]"
* Example: "Payroll Navigator, standard tab, active"
* Example: "Reports, locked tab, inactive"

**Button labels:**
* Footer menu button: "Footer menu, open tabs and actions"
* Scroll left: "Scroll tabs left" (+ disabled state)
* Scroll right: "Scroll tabs right" (+ disabled state)
* Tab close button: "Close [tab name]"
* Tab menu button: "More actions for [tab name]"

**Group announcements:**
* "Group name, [expanded/collapsed], contains N tabs"
* Example: "Finance group, expanded, contains 2 tabs"
* Color is decorative and not announced — the label carries all meaning.

**Menu structure:**
* Proper ARIA attributes (aria-haspopup, aria-expanded)
* role="menu" on flyout menus
* role="menuitem" on menu items
* Disabled items properly announced

### Focus Management

**Focus indicators:**
* 2 px focus ring with 2 px offset
* Color: var(--border-focus)
* Visible on all interactive elements

**Focus behavior:**
* When tab is closed, focus moves to next tab or previous if last
* When menu closes, focus returns to trigger button
* Focus trap within open menus (Tab cycles through menu items)

**Focus preservation:**
* Active tab maintains visual distinction when focused
* Focus visible even on active elements

### Color and Contrast

**Text contrast:**
* Tab names meet WCAG AA (4.5:1 minimum)
* Active tabs maintain sufficient contrast
* Disabled buttons use reduced opacity but remain readable

**Color independence:**
* Tab type indicated by icons, not just color
* Locked: lock icon + label in contextual menu
* Pinned: pin icon + label in contextual menu
* Groups: border + tag label, not just color
* Never rely on color alone to convey information

**Group colors:**
* Colors are decorative only — no semantic meaning is attached
* Labels always present; color is supplementary to the label, never its replacement
* Accessible to colorblind users: the group name conveys identity, not the color
* All 11 available group colors meet WCAG contrast requirements on the Tag component

### ARIA Attributes

**Footer container:**
```html
<div role="navigation" aria-label="Open tabs">
```

**Tabs:**
```html
<div 
  role="tab"
  aria-selected="true|false"
  aria-label="Tab name [type]"
>
```

**Scroll buttons:**
```html
<button
  aria-label="Scroll left"
  aria-disabled="true|false"
  disabled={!canScrollLeft}
>
```

**Groups:**
```html
<div 
  role="group"
  aria-label="Group name, contains N tabs"
  aria-expanded="true|false"
>
```

---

## Best Practices

### Do

* **Use clear, concise tab names** that identify the page content at a glance
* **Group related tabs together** for better organization and faster navigation
* **Use icons consistently** to aid quick visual recognition of tab types
* **Lock tabs that should remain open** during the session (e.g., reference documents)
* **Implement a maximum tab limit** to prevent clutter and performance issues (15-20 recommended)
* **Use distinct group colors** to differentiate groups visually (limit to 5–7 active groups)
* **Show active tab clearly** with visual feedback
* **Persist tab state across sessions** when appropriate for the workflow
* **Provide clear confirmation** before closing all tabs or groups
* **Maintain logical tab order** (most recent on right, or grouped by category)
* **Enable keyboard shortcuts** for common actions (close tab, switch tabs)

### Don't

* **Don't allow unlimited tabs** to open (causes performance issues and poor UX)
* **Don't use similar names** for different tabs (confuses users)
* **Don't use too many group colors** (creates visual noise)
* **Don't make critical actions** available only through contextual menus
* **Don't hide the footer** or make it difficult to access
* **Don't use group colors** that fail contrast requirements
* **Don't forget to persist state** when users expect it (e.g., locked tabs)
* **Don't create groups automatically** without user control
* **Don't allow closing locked tabs** without unlocking (defeats the purpose)
* **Don't display pinned tabs** in the footer simultaneously (creates confusion)

---

## Implementation Considerations

### Performance

* **Tab limit:** Implement maximum number of open tabs (15-20 recommended)
* **Virtual scrolling:** Consider for applications with many tabs
* **Lazy loading:** Don't load all tab content simultaneously
* **Memory management:** Unload inactive tab content when appropriate
* **Event delegation:** Use for tab click handlers to reduce overhead

### State Management

**Persist across sessions:**
* Open tabs list with order
* Active tab ID
* Tab types (locked, pinned)
* Group membership and settings
* Scroll position (optional)

**Store in:**
* Browser localStorage for simple cases
* Application database for cross-device sync
* Session storage for temporary state

### Responsive Behavior

**Large screens (> 1400 px):**
* Full footer with all features
* More tabs visible simultaneously
* Scroll buttons rarely needed

**Medium screens (1024-1400 px):**
* Standard footer behavior
* Scroll buttons more frequently needed
* Consider smaller max tab count

**Small screens (< 1024 px):**
* Consider alternative patterns
* May need simplified tab management
* Possibly full-screen tab switcher instead of footer

### API Design

**Recommended API:**

```typescript
interface FooterAPI {
  // Tab management
  openTab(pageId: string, options?: TabOptions): void;
  closeTab(tabId: string): void;
  closeAllTabs(): void;
  closeOtherTabs(tabId: string): void;
  
  // Tab state
  lockTab(tabId: string): void;
  unlockTab(tabId: string): void;
  pinTab(tabId: string): void;
  unpinTab(tabId: string): void;
  setActiveTab(tabId: string): void;
  
  // Group management
  createGroup(name: string, color: GroupColor, tabIds: string[]): string;
  editGroup(groupId: string, options: GroupOptions): void;
  ungroupTabs(groupId: string): void;
  closeGroup(groupId: string): void;
  addTabToGroup(tabId: string, groupId: string): void;
  removeTabFromGroup(tabId: string): void;
  
  // Events
  onTabOpened(callback: (tab: FooterTab) => void): void;
  onTabClosed(callback: (tabId: string) => void): void;
  onTabActivated(callback: (tabId: string) => void): void;
  onGroupCreated(callback: (group: FooterGroup) => void): void;
}
```

---

## Related Components

* **[Tag](/guidelines/components/tag.md)** — Used for group labels
* **[FlyoutMenu](/guidelines/components/flyout-menu.md)** — Used for contextual menus
* **[Tabs](/guidelines/components/tabs.md)** — Alternative navigation pattern for fewer items
* **[Main Navigation](/guidelines/patterns/main-navigation.md)** — Works alongside footer for complete navigation system
* **[Page Header](/guidelines/components/page-header.md)** — Page-level context above footer tabs

---

## Migration Notes

When implementing the Footer pattern:

* Plan state persistence strategy before implementation
* Define maximum tab limits based on typical workflows
* Create clear documentation for users on tab management features
* Implement keyboard shortcuts for power users
* Consider providing a tutorial or onboarding for footer features
* Test with realistic numbers of open tabs (not just 2-3)
* Ensure performance is acceptable with maximum tabs open
* Plan for responsive behavior on smaller screens
* Implement proper focus management and keyboard accessibility
* Test with screen readers and keyboard-only navigation
