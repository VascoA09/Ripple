# Ripple — Component Candidates

Components built in consumer apps that are likely reusable enough to graduate into Ripple.

**How to use this file:**
- Log candidates as they emerge during app development
- Note where they were first built and what decision is needed before adding them to Ripple
- When a component is promoted, move it to the Done section
- Review this list before starting a new Ripple sprint

---

## Pending

### MetricCard
**First built in:** AI-POC-1 (`src/components/MetricCard.tsx`)
**What it does:** Displays a single KPI: title, large value, optional subtitle, optional red accent border.
**Variants needed:** simple (title + value), split (two values side-by-side, e.g. "3 with / 3 without").
**Decision needed:** Does Ripple `Card` grow a `variant="metric"` prop, or is this a standalone component? Standalone is cleaner — it has a fundamentally different visual hierarchy to `Card`.

---

### Breadcrumb
**First built in:** AI-POC-1 (`src/components/Breadcrumb.tsx`)
**What it does:** Navigation trail. Items are either `<Link>` (via react-router-dom) or plain `<span>`. Last item is bold and non-linked. Separator is `/`.
**Decision needed:** Should Ripple's `Breadcrumb` be router-agnostic (accept `href` strings) or accept a render prop / `as` component pattern? Recommend `href`-based to avoid react-router-dom as a peer dependency.

---

### Pagination
**First built in:** AI-POC-1 (`src/components/Pagination.tsx`)
**What it does:** "Page X of Y" label with Previous/Next buttons (Ripple `Button` inside). Hides itself when `totalPages <= 1`.
**Decision needed:** Should it also support page-number buttons (1 2 3 … 10 pattern)? Probably yes for a proper Ripple implementation. Current app-level version is minimal — sufficient for MVP.

---

### FilterPills
**First built in:** AI-POC-1 (`src/components/FilterBar.tsx`)
**What it does:** Multi-select pill buttons for filtering a list. Active pill gets `bg-primary-softest` + `border-primary`. "All" pill deselects others.
**Decision needed:** Should live in Ripple as a standalone `FilterPills` component, separate from `DateRangeSelector`. The two are often used together but are independent.

---

### DateRangeSelector
**First built in:** AI-POC-1 (`src/components/FilterBar.tsx`)
**What it does:** Segmented button group for preset date ranges (24h / 7d / 30d). Only one active at a time.
**Decision needed:** This is essentially a `SegmentedControl` — a common pattern. Consider whether Ripple needs a generic `SegmentedControl` (single-select only) that this, date range, and other toggle-group UIs can use.

---

### DataTable
**First built in:** AI-POC-1 (`src/components/ApplicationsTable.tsx`)
**What it does:** Sortable `<table>` with column headers (ascending/descending), expandable rows (one at a time), inline detail panel via `colSpan`. Sort state is local.
**Decision needed:** This is the highest-value candidate and the biggest gap in Ripple. A production `DataTable` needs: sortable columns, row selection (single/bulk), expandable rows, loading state, empty state, sticky header, and responsive behaviour. Significant scope — likely a dedicated component sprint.
**Note:** The current app-level implementation covers sortable columns + row expansion only. Do not promote until the full spec is defined.

---

### ErrorTypeBadge
**First built in:** AI-POC-1 (`src/components/ErrorTypeBadge.tsx`)
**What it does:** Badge with custom background/text color pairs for error types (Runtime, Publishing, Flow, API). Colors are not in Ripple's current Badge palette.
**Decision needed:** Two options:
1. Add a `color="custom"` escape hatch to Ripple `Badge` that accepts `{ bg, text }` tokens.
2. Keep `ErrorTypeBadge` app-specific (it uses hardcoded hex values tied to this product's error type spec).
**Recommendation:** Option 2 for now. The color set is too product-specific. Revisit if other products need the same pattern.

---

## Done

*Nothing promoted yet.*

---

## Deferred / Won't add

*Nothing deferred yet.*
