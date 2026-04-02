---
name: Mobile Stepper
status: draft
version: 0.1.0
last_updated: 2026-03-31
owner: Vasco Antunes
figma: TBD
storybook: TBD
tags: [navigation, form, mobile]
---

# Mobile Stepper

## Overview

The Mobile Stepper pattern provides compact, mobile-appropriate alternatives to the vertical [Stepper](../components/stepper.md) for multi-step processes. Where the vertical Stepper is designed to show all steps simultaneously, Mobile Stepper shows only what is necessary at any moment — reducing visual noise on narrow viewports without losing orientation.

The pattern has two variants: **Progress Bar** for minimal-footprint flows, and **Active Only** for flows where step identity and context matter.

**Responsive behaviour is consumer-controlled.** Mobile Stepper does not detect viewport width and switch automatically. The application decides when to render Mobile Stepper vs the vertical Stepper, using a breakpoint, container query, or any other signal appropriate to its layout.

---

## When to Use

Use Mobile Stepper when:

- The vertical Stepper would be rendered at a viewport or container width below ~600px
- The process is linear and users cannot jump between steps freely
- Vertical space is constrained and showing all steps simultaneously would push content off-screen
- The flow is embedded inside a modal, sheet, or narrow column at any viewport size

Do not use Mobile Stepper when:

- Users need to navigate between steps freely — use the vertical Stepper with `interactive` enabled
- The viewport is wide enough to accommodate the vertical Stepper comfortably
- There is only one step (no progress context needed)
- The flow is non-linear or exploratory

---

## Variants

| Variant | When to use |
|---------|-------------|
| `progress-bar` | Completion percentage is the most important signal. Steps are uniform and the count may be high (5+). Minimal vertical footprint required. |
| `active-only` | Step identity matters — users benefit from knowing the name of the current step and what comes before and after. Fewer steps (2–6). |

Choose one variant per flow and use it consistently throughout. Do not mix variants within the same process.

---

## Anatomy

### Progress Bar

```
┌─────────────────────────────────────────────────┐
│ Step 2 of 4                                     │  ← step counter
├─────────────────────────────────────────────────┤
│ ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░ │  ← progress bar
├─────────────────────────────────────────────────┤
│ Shipping Information                            │  ← current step title
│ Enter your delivery address                     │  ← current step description
└─────────────────────────────────────────────────┘
```

**Elements:**

- **Step counter** — "Step N of Total" label above the bar. Communicates absolute position.
- **Progress bar** — Full-width track; filled portion represents completed + current steps. Uses `--color-primary` fill on `--bg-neutral-soft` track.
- **Title** — Current step name. Semibold.
- **Description** (optional) — Supporting text for the current step.

---

### Active Only

```
┌─────────────────────────────────────────────────┐
│ ●  Shipping Information                         │  ← indicator + title
│    Step 2 of 4 · Enter delivery address         │  ← meta line
├─────────────────────────────────────────────────┤
│ ✓ Cart  ·  Shipping  ·  Payment  ·  Done        │  ← step labels row
└─────────────────────────────────────────────────┘
```

**Elements:**

- **Indicator** — Filled circle showing the step number (ordered) or a dot (unordered). Uses the same active fill logic as the vertical Stepper: primary for default/checked, notice for notice, negative for error.
- **Title** — Current step name. Semibold.
- **Meta line** — "Step N of Total · [description]" condensed on a single line below the title. Uses `--text-soft`.
- **Step labels row** — All step names in sequence, separated by dots. Completed steps show a check prefix (`✓`) and use `--text-soft`. The current step is highlighted. Future steps use `--text-soft`. Non-interactive — for orientation only.

---

## Props

Both variants share a common data shape. The consumer controls which variant renders.

### MobileStepper

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'progress-bar' \| 'active-only'` | `'progress-bar'` | Visual layout to render |
| `current` | `number` | required | 1-based index of the current step |
| `total` | `number` | required | Total number of steps in the flow |
| `title` | `string` | required | Name of the current step |
| `description` | `string` | — | Supporting text for the current step |
| `steps` | `string[]` | — | Ordered list of all step names. Required for `active-only`; used to render the step labels row. |
| `type` | `'default' \| 'checked' \| 'notice' \| 'error'` | `'default'` | Status of the current step. Affects indicator color in `active-only`. |
| `className` | `string` | — | Applied to the root element |

`steps` must have the same length as `total`. The entry at index `current - 1` is the active label.

---

## Responsive Composition

Mobile Stepper does not switch automatically. The consumer renders either the vertical Stepper or the Mobile Stepper based on its own breakpoint logic.

```tsx
const isMobile = useBreakpoint('sm')  // consumer-defined hook

return isMobile ? (
  <MobileStepper
    variant="active-only"
    current={2}
    total={4}
    title="Shipping Information"
    description="Enter your delivery address"
    steps={['Cart', 'Shipping', 'Payment', 'Done']}
  />
) : (
  <Stepper>
    <StepperStep title="Cart"                  type="checked" />
    <StepperStep title="Shipping Information"  active description="Enter your delivery address" />
    <StepperStep title="Payment"               disabled />
    <StepperStep title="Done"                  disabled />
  </Stepper>
)
```

The step data is owned by the page or form — not by either stepper component. Both components receive what they need from the same source of truth.

---

## Progress Bar: Progress Calculation

Progress is calculated as `current / total`. Step 2 of 4 = 50% fill. The current step counts as in-progress, not complete — do not use `(current - 1) / total` unless the design calls for showing only completed steps.

Decide on the calculation approach and apply it consistently across the flow.

---

## Step Labels Row (Active Only)

The step labels row provides orientation without enabling navigation. It is non-interactive.

**Rendering rules:**
- Steps before `current` — rendered with `✓` prefix, `--text-soft` color
- Step at `current` — rendered at default text weight, full opacity, no prefix
- Steps after `current` — rendered with `--text-soft` color, no prefix

Do not add `onClick` handlers or link semantics to the step labels. If step navigation is required, use the interactive vertical Stepper or implement navigation at the application level (e.g. a back button, explicit step links in the page).

---

## Accessibility

- The root element should be a `<nav>` with `aria-label="Progress"` — it is a landmark that communicates position in a multi-step flow.
- The step counter or meta line should be announced on step change. Use `aria-live="polite"` on the region containing the title and meta line.
- Progress bar: use `role="progressbar"` with `aria-valuenow={current}`, `aria-valuemin={1}`, `aria-valuemax={total}`, and `aria-label="Step N of Total"`.
- Step labels row: render as a `<ol>` with `aria-hidden="true"` — the live region already communicates position; the label row is supplementary visual context only.
- The active step indicator in `active-only` mirrors the vertical Stepper: `aria-current="step"` on the relevant element.
- Do not rely on color alone to communicate step status — the `✓` prefix and text weight differences supplement color cues.

---

## Content Guidelines

### Step counter
- Format: "Step N of Total" — sentence case, no punctuation.
- Do not abbreviate ("Stp 2/4" is not acceptable).

### Title
- Match the title used in the vertical Stepper for the same step.
- 1–4 words. Action-oriented or noun phrase.

### Description
- In the `active-only` meta line, title and description are condensed: "Step N of Total · Description". The description must make sense in this abbreviated context.
- The component does not truncate. Keeping the description short enough for the available width is the consumer's responsibility.

### Step labels
- Mirror the titles used in the vertical Stepper exactly.
- Short — 1–2 words per label. Labels that are too long will wrap or truncate awkwardly at narrow widths.

---

## Related

- [Stepper](../components/stepper.md) — Vertical stepper for desktop viewports. Same logical data model.
- [Progress Bar](../components/progress-bar.md) — Standalone progress bar component used internally by the Progress Bar variant.
