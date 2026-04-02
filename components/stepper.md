---
name: Stepper
status: draft
version: 0.2.0
last_updated: 2026-03-31
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, form]
---

# Stepper

## Overview

The Stepper component guides users through a series of logical steps in a process. It provides visual feedback on progress and accommodates diverse step types, states, and variants. By default, it presents as an ordered list with numbered indicators.

---

## When to Use

- Guiding users through multi-step processes where sequence matters
- Breaking down complex workflows into manageable chunks
- Providing clear progress indicators for lengthy forms or tasks
- Users need to understand where they are in a process

## When Not to Use

- The process has only one or two steps (too simple for a stepper)
- Users need to jump freely between sections (use Tabs instead)
- The workflow is non-linear or exploratory
- Steps don't have a logical sequence

---

## Anatomy

```
[indicator] ─┐
             │  [title]
             │  [description?]
[connector]  │  [extras?]
             │  [sub-steps?]
[indicator] ─┘
             ...
```

- **Indicator**: Circular marker showing step number, dot, icon, or status icon
- **Connector**: Vertical line linking adjacent indicators
- **Title**: Required. Step label — keep to one line where possible
- **Description** (optional): Supporting text below the title
- **Extras** (optional): Supplementary metadata (dates, counts, assignees)
- **Sub-steps** (optional): Nested `<Stepper>` — one level maximum

---

## Variants

| Variant     | Indicator content        | Indicator size | Use when                                                   |
|-------------|--------------------------|----------------|------------------------------------------------------------|
| `ordered`   | Step numbers (1, 2, 3…) | 32px           | Sequential processes where position adds context (default) |
| `unordered` | Filled dot               | 24px           | Sub-steps or simpler processes where numbering adds noise  |
| `icons`     | Custom icon per step     | 32px           | Icons meaningfully identify each step's purpose            |

---

## Step Types

Step type communicates the status of a step independently of whether it is active.

| Type      | Indicator bg            | Indicator border       | Icon       | Title color     |
|-----------|-------------------------|------------------------|------------|------------------|
| `default` | `--bg-surface`          | `--border-default`     | —          | `--text`         |
| `checked` | `--bg-primary-softest`  | `--border-primary`     | Check      | `--text`         |
| `notice`  | `--bg-notice-softest`   | `--border-notice`      | AlertCircle| `--text-notice`  |
| `error`   | `--bg-negative-softest` | `--border-negative`    | XCircle    | `--text-negative`|

Connector after a `checked` step is colored `--border-primary`. All other connectors use `--border-default`.

---

## Step States

| State       | Description                                      | Visual treatment                                           |
|-------------|--------------------------------------------------|------------------------------------------------------------|
| Default     | Resting, non-interactive                         | Type colors as above, no hover                            |
| Active      | The step the user is currently working on        | Indicator filled (type-specific color), 2px border, `--text-loud-inverse` text, title bold, halo ring |
| Hover       | Pointer over an interactive step                 | Title color → `--text-accent`                             |
| Disabled    | Prerequisites not met, cannot be accessed        | `opacity: 0.5`, `cursor: not-allowed`                     |

### Active indicator fills

Active steps show a filled indicator and a halo ring — a 4px circular outline behind the indicator rendered via `box-shadow`.

| Type                | Active bg       | Active border       | Halo (`box-shadow`)                         |
|---------------------|-----------------|---------------------|---------------------------------------------|
| `default`/`checked` | `--bg-primary`  | `--border-primary`  | `--bg-primary` at 20% opacity               |
| `notice`            | `--bg-notice`   | `--border-notice`   | `--bg-notice` at 20% opacity                |
| `error`             | `--bg-negative` | `--border-negative` | `--bg-negative` at 20% opacity              |

The halo is implemented as `box-shadow: 0 0 0 4px color-mix(in srgb, <token> 20%, transparent)`. It has no layout impact and transitions with the other active state properties.

---

## Implementation

```tsx
import { Stepper, StepperStep } from '@ripple/ui'

<Stepper variant="ordered" interactive>
  <StepperStep title="Account"  type="checked" description="Personal details" />
  <StepperStep title="Address"  active         description="Delivery address"  onClick={goToAddress} />
  <StepperStep title="Payment"  disabled       description="Complete address first" onClick={goToPayment} />
</Stepper>
```

### Props — Stepper

| Prop          | Type              | Default     | Description                                    |
|---------------|-------------------|-------------|------------------------------------------------|
| `variant`     | `StepperVariant`  | `'ordered'` | Visual style of indicators                     |
| `interactive` | `boolean`         | `false`     | Enables hover affordance and onClick on steps  |

### Props — StepperStep

| Prop          | Type            | Default     | Description                                          |
|---------------|-----------------|-------------|------------------------------------------------------|
| `title`       | `string`        | —           | Required step label                                  |
| `description` | `string`        | —           | Supporting text                                      |
| `type`        | `StepType`      | `'default'` | Status: `default` \| `checked` \| `notice` \| `error` |
| `active`      | `boolean`       | `false`     | Marks this as the current step                       |
| `disabled`    | `boolean`       | `false`     | Prevents interaction                                 |
| `icon`        | `ReactNode`     | —           | Indicator icon (`icons` variant only)               |
| `extras`      | `ReactNode`     | —           | Metadata rendered below description                  |
| `onClick`     | `() => void`    | —           | Click handler (`interactive` mode only)             |

### Sub-steps

Pass a nested `<Stepper>` as `children` on a `StepperStep`. Limit nesting to one level.

```tsx
<StepperStep title="Design" active>
  <Stepper variant="unordered">
    <StepperStep title="Wireframes"    type="checked" />
    <StepperStep title="Prototypes"    active />
    <StepperStep title="Design review" />
  </Stepper>
</StepperStep>
```

---

## Accessibility

- `<ol>` root with `list-style: none` — list semantics preserved for screen readers
- `aria-current="step"` on the active `<li>`
- When interactive, the trigger renders as a `<button>` (keyboard accessible, focusable)
- Disabled steps: `pointer-events: none` on the trigger, `cursor: not-allowed` on the step
- Indicator track is `aria-hidden="true"` — list position communicates order
- Step number is injected by the parent `Stepper` via `cloneElement`; it does not need to be set manually

---

## Best Practices

- Limit total steps to 3–7; break longer processes down
- Keep titles concise and action-oriented (one line preferred)
- Use `checked` type to show completed steps — always provide progress feedback
- Use `unordered` for sub-steps inside an `ordered` stepper
- Only one step should be `active` at a time
- Use `disabled` only when prerequisites are genuinely unmet — not to hide future steps
- Use `notice` for warnings that don't block progress; `error` for issues that do
- Make steps `interactive` only when users can actually navigate between them
- Avoid relying solely on color to convey meaning
