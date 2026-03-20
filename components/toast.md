---
name: Toast
status: draft
version: 0.1.0
last_updated: 2026-03-19
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [feedback, overlay]
---

# Toast

A Toast is a concise, temporary message that provides users with feedback or information. It appears on top of existing content and can be dismissed by the user or automatically disappear after a set period.

---

## Usage

Toasts provide users with feedback on their tasks or deliver brief notifications. They are useful for notifying users about completed tasks, errors that need attention, or contextual information without interrupting the flow.

Use toasts when:
* Confirming a successful action (file uploaded, settings saved)
* Notifying users of a background process completion
* Displaying brief, non-critical information
* Providing quick feedback without blocking the user
* Alerting users to errors that don't require immediate action
* Showing system status updates (connection lost, sync complete)

Do not use toasts when:
* The information is critical and requires user acknowledgment (use Dialog instead)
* The message requires user input or decision-making (use Dialog instead)
* The content is complex or lengthy (use Banner or Dialog instead)
* Users need to reference the information later (use persistent Banner instead)
* The message affects the entire application context (use Banner instead)

---

## Variants

Toasts come in four semantic variants that communicate different types of information through color and iconography:

### Neutral Toast

* **Purpose**: Provides general information or updates without semantic meaning
* **Icon**: Custom icon (provided via `icon` prop) or Info icon as fallback
* **Behavior**: Auto-dismisses after 6 seconds by default
* **Use for**: General notifications, informational updates, neutral status changes

**Examples:**
* "New message received"
* "Download complete"
* "Wi-Fi connected"
* "Invoice updated"

### Positive Toast

* **Purpose**: Confirms successful completion of actions
* **Icon**: CheckCircle (automatic, cannot be customized)
* **Behavior**: Auto-dismisses after 6 seconds by default
* **Use for**: Success confirmations, completed actions, positive outcomes

**Examples:**
* "Settings saved successfully"
* "File uploaded"
* "Payment processed"
* "Profile updated"

### Notice Toast

* **Purpose**: Warns users about actions that may result in unexpected outcomes or require attention
* **Icon**: AlertTriangle (automatic, cannot be customized)
* **Behavior**: Does NOT auto-dismiss, requires close button
* **Use for**: Warnings, non-critical alerts, information requiring attention

**Examples:**
* "Storage almost full"
* "Password expires soon"
* "You have unsaved changes"
* "Low battery"

### Negative Toast

* **Purpose**: Communicates errors or failures that may block user actions
* **Icon**: XCircle (automatic, cannot be customized)
* **Behavior**: Does NOT auto-dismiss, requires close button
* **Use for**: Errors, failures, critical issues, blocked actions

**Examples:**
* "Connection failed"
* "File upload failed"
* "Payment declined"
* "Unable to save changes"

---

## Anatomy

A toast consists of the following elements:

### Required Elements

* **Title**: Main message (required, max 50 characters)
  * Concise, action-oriented heading
  * Truncates with ellipsis if exceeds 50 characters
  * Uses semibold font weight for emphasis

### Optional Elements

* **Icon**: Visual indicator of toast type
  * Automatic for Positive, Notice, Negative variants
  * Custom icon for Neutral variant (via `icon` prop)
  * 20×20px size
  * Positioned to the left of content

* **Description**: Supporting details (optional, max 140 characters)
  * Provides additional context or details
  * Truncates with ellipsis if exceeds 140 characters
  * Uses regular font weight

* **Timestamp**: Time of notification (optional)
  * Format: "DD MMM at HH:mm" (e.g., "24 Feb at 14:30")
  * Appears below description in muted color
  * Useful for time-sensitive notifications

* **Action Button**: Optional call-to-action
  * Ghost button variant for minimal visual weight
  * Text label with onClick handler
  * Positioned at bottom of toast
  * Use for quick actions related to the notification

* **Close Button**: Manual dismiss control
  * Icon button with X icon
  * Required for Notice and Negative variants
  * Optional for Neutral and Positive variants
  * Positioned in top-right corner

* **Progress Bar**: Visual timer for auto-dismiss
  * Animates from full to empty over duration period
  * Only shown when `showProgress={true}` and toast auto-dismisses
  * Positioned at bottom edge of toast

---

## Behavior

### Auto-Dismiss

* **Neutral and Positive**: Auto-dismiss after 6 seconds by default
* **Notice and Negative**: Do NOT auto-dismiss (require manual close)
* Custom duration can be set via `duration` prop
* Set `duration={0}` to disable auto-dismiss
* Progress bar can show visual countdown via `showProgress` prop

### Stacking

* Multiple toasts stack vertically in the toast container
* Maximum of 5 toasts shown at once by default (configurable via `maxToasts`)
* Oldest toast is removed when limit is reached
* Toasts animate in and out smoothly
* 8px gap between stacked toasts

### Positioning

Toasts can be positioned in six locations on the screen:

* **top-left**: Top-left corner
* **top-center**: Top center
* **top-right**: Top-right corner (default)
* **bottom-left**: Bottom-left corner
* **bottom-center**: Bottom center
* **bottom-right**: Bottom-right corner

Position is set globally via `ToastProvider` or changed dynamically via `setPosition()`.

### Dismissal

Toasts can be dismissed by:
* **Auto-dismiss**: After duration expires (Neutral, Positive)
* **Close button**: Manual click on X button
* **Programmatic**: Via `removeToast(id)` or `removeAllToasts()`

---

## Content Guidelines

### Title

* **Be concise**: Keep titles under 50 characters
* **Be specific**: "Settings saved" instead of "Success"
* **Use action-oriented language**: "File uploaded" not "Upload complete"
* **Avoid technical jargon**: Use plain language users understand
* **Don't repeat icon meaning**: Title should add information beyond the icon

**Good examples:**
* "Settings saved"
* "Message sent"
* "Connection failed"
* "Storage almost full"

**Poor examples:**
* "Success" (too vague)
* "An error has occurred" (not specific)
* "The system has successfully completed the operation" (too long)

### Description

* **Keep it brief**: Max 140 characters
* **Provide helpful context**: Explain what happened or what to do
* **Be conversational**: Write like you're speaking to the user
* **Include specifics when helpful**: File names, numbers, details

**Good examples:**
* "Your preferences have been updated successfully."
* "Report-2024.pdf has been uploaded to Documents."
* "Unable to connect to the server. Please try again."
* "You've used 90% of your available storage space."

**Poor examples:**
* "OK" (not helpful)
* "Error code 500: Internal server error occurred while processing your request" (too technical)
* "Success" (redundant with title)

### Action Button

* **Use verb-based labels**: "View file", "Undo", "Retry"
* **Keep labels short**: 1-2 words maximum
* **Make action clear**: User should understand what happens on click
* **Don't use generic labels**: Avoid "OK" or "Click here"

---

## Accessibility

* **Announce to screen readers**: Toasts use ARIA live regions
  * Positive/Neutral toasts use `role="status"` and `aria-live="polite"`
  * Notice/Negative toasts use `role="alert"` and `aria-live="assertive"`
* **Keyboard navigation**: Close button and action button are keyboard accessible
* **Focus management**: Toast doesn't steal focus but can be dismissed with keyboard
* **Color and icons**: Don't rely solely on color; icons and text convey meaning
* **Readable text**: Sufficient contrast ratios for all text
* **Auto-dismiss timing**: 6 seconds provides adequate reading time for most users
* **Persistent errors**: Notice and Negative toasts don't auto-dismiss

---

## Best Practices

### Do

* Use toasts for brief, non-critical notifications
* Provide clear, specific titles that describe what happened
* Keep messages concise and scannable
* Use appropriate variant based on semantic meaning
* Include helpful descriptions when needed
* Show close button for Notice and Negative variants
* Position toasts consistently throughout your app
* Test toast timing to ensure users have time to read
* Limit frequency of toasts to avoid overwhelming users
* Use action buttons for relevant quick actions

### Don't

* Use toasts for critical information requiring acknowledgment
* Show multiple toasts simultaneously for unrelated events
* Use toasts for complex messages or decisions
* Rely on color alone to convey meaning
* Auto-dismiss error messages (Notice, Negative)
* Use vague or generic titles like "Success" or "Error"
* Show toasts that cover important UI elements
* Make toasts too frequent or intrusive
* Use action buttons for navigation away from current context
* Stack more than 3-4 toasts at once

---

## Toast vs Other Components

### Toast vs Banner Alert

| Toast | Banner Alert |
|-------|--------------|
| Temporary and auto-dismissing | Persistent or dismissible messaging |
| Brief feedback or notifications | System-wide or contextual alerts |
| Appears on top of content | Appears inline within content flow |
| Non-blocking | Can be blocking (inline with content) |
| Limited to 50 char title, 140 char description | Can contain longer content |

**When to use:**
* **Toast**: "File uploaded successfully" (brief confirmation)
* **Banner**: "System maintenance scheduled for tonight" (persistent alert)

### Toast vs Dialog

| Toast | Dialog |
|-------|-------|
| Non-blocking, appears over content | Blocks interaction with underlying content |
| Auto-dismisses or manually closed | Requires user action to dismiss |
| Brief, simple messages | Complex content, forms, or decisions |
| No user input required | May collect input or require choice |

**When to use:**
* **Toast**: "Settings saved" (confirmation)
* **Dialog**: "Are you sure you want to delete this file?" (requires decision)

---

## Technical Implementation

### Basic Usage

```tsx
import { useToast } from './components/ui/ripple-toast';

function MyComponent() {
  const { addToast } = useToast();

  const handleSuccess = () => {
    addToast({
      variant: 'positive',
      title: 'Settings saved',
      description: 'Your preferences have been updated.',
    });
  };

  return <button onClick={handleSuccess}>Save</button>;
}
```

### With Custom Icon (Neutral only)

```tsx
import { Mail } from 'lucide-react';

addToast({
  variant: 'neutral',
  title: 'New message',
  description: 'John Doe has sent you a message.',
  icon: Mail,
});
```

### With Action Button

```tsx
addToast({
  variant: 'positive',
  title: 'File uploaded',
  description: 'Report-2024.pdf has been uploaded successfully.',
  action: {
    label: 'View file',
    onClick: () => console.log('View file'),
  },
  showCloseButton: true,
});
```

### With Timestamp

```tsx
addToast({
  variant: 'neutral',
  title: 'Invoice updated',
  description: 'Invoice #1234 has been modified.',
  timestamp: '24 Feb at 14:30',
  showCloseButton: true,
});
```

### Custom Duration

```tsx
addToast({
  variant: 'neutral',
  title: 'Quick message',
  description: 'This will disappear in 3 seconds.',
  duration: 3000, // milliseconds
  showProgress: true,
});
```

### Setup ToastProvider

```tsx
import { ToastProvider } from './components/ui/ripple-toast';

function App() {
  return (
    <ToastProvider position="top-right" maxToasts={5}>
      {/* Your app content */}
    </ToastProvider>
  );
}
```

---

## Spacing and Dimensions

* **Toast width**: 400px (fixed)
* **Toast padding**: 16px (var(--spacing-100))
* **Gap between elements**: 8px (var(--spacing-50))
* **Gap between stacked toasts**: 8px (var(--spacing-50))
* **Border radius**: 12px (var(--border-radius-150))
* **Icon size**: 20×20px
* **Close button size**: 32×32px (small)
* **Title font size**: 16px (var(--font-size-100))
* **Description font size**: 14px (var(--font-size-80))
* **Timestamp font size**: 12px (var(--font-size-60))

---

## Maximum Character Limits

* **Title**: 50 characters (truncates with ellipsis)
* **Description**: 140 characters (truncates with ellipsis)
* Keep content well below limits for best readability
* Test truncation behavior with longer content
