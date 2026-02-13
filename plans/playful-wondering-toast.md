# Landing Page Feedback Implementation Plan

## Context
Team feedback identified 5 areas for improvement on the Authority landing page: the hero needs a dot grid background and more dynamic animations, the solution section needs a visual overhaul with real icons, sections need stronger visual differentiation, and the comparison table needs trimming. This plan addresses all items.

---

## 1. Install `react-icons`

```bash
pnpm add react-icons
```

---

## 2. Comparison Table — Trim to 6 Rows

**File:** `src/data/content.ts` (lines 213-222)

Remove 3 rows where Hyper isn't uniquely differentiated (200+ connectors, enterprise security, custom dashboards — all shared with Databricks). Keep:

| Row | Hyper | DB | DIY |
|-----|-------|----|-----|
| Fully managed service | ✓ | ✗ | ✗ |
| No data team required | ✓ | ✗ | ✗ |
| Typical setup under 6 weeks | ✓ | ✗ | ✗ |
| Fixed monthly pricing | ✓ | ✗ | ✗ |
| Dedicated support team | ✓ | ✗ | ✗ |
| Typical monthly cost | $$ | $$$$ | $$$$ |

Creates a "wall of green" for Hyper's column — maximum visual impact.

---

## 3. Visually Distinct Sections

**File:** `src/pages/authority/authority.css`

### New token (line ~18)
```css
--au-bg-cool: #f2f4f7;
```

### Alternating background pattern

| Section | Background | Divider |
|---------|-----------|---------|
| Hero | `--au-bg` + dot grid | — |
| Problem | `--au-bg-alt` (white) | 3px navy accent bar (centered, 200px wide) |
| DataFlow | `--au-bg-cool` | Clean break |
| StatsWall | `--au-bg-alt` (keep) | Keep existing borders |
| Testimonials | `--au-bg` | — |
| Process | `--au-bg-alt` (white) | 3px navy accent bar |
| Comparison | `--au-bg-cool` | Clean break |
| Security | `--au-bg` | Keep 1px border |
| FinalCta | `--au-navy` (keep) | — |

Rhythm: **beige → white → cool gray → white → beige → white → cool gray → beige → navy**

### CSS changes
- `.au-problem`: `background: var(--au-bg-alt)`, add `::before` accent bar
- `.au-dataflow`: `background: var(--au-bg-cool)`, remove `border-top`
- `.au-process`: `background: var(--au-bg-alt)`, add `::before` accent bar
- `.au-process__step-number`: `background: var(--au-navy-faint)` (visible on white)
- `.au-comparison`: `background: var(--au-bg-cool)`, update `thead` bg to match
- `.au-testimonials`: remove `border-top` (StatsWall border handles it)

---

## 4. Hero Dot Grid Background

**File:** `src/pages/authority/authority.css` (after line 277)

CSS-only dot grid via `::before` pseudo-element on `.au-hero`:

```css
.au-hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, var(--au-navy) 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.06;
  mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%);
  -webkit-mask-image: radial-gradient(ellipse 70% 60% at 50% 50%, black 30%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}
```

Ensure `.au-hero__content` and `.au-hero__visual` have `position: relative; z-index: 1` to sit above dots. Static pattern — no reduced-motion concerns.

---

## 5. Hero Animation Rework

**File:** `src/pages/authority/components/AUHero.tsx` (lines 12-193)

### A. Compress timings (~1.46s → ~0.9s) with more overlap

| Element | Current delay/dur | New delay/dur | Easing |
|---------|------------------|---------------|--------|
| Grid lines | 0.1 / 0.8 (all at once) | i*0.04 / 0.4 (staggered) | `[0.16, 1, 0.3, 1]` expo-out |
| Source nodes | 0.3+i*0.08 / 0.4, x:-8 | 0.15+i*0.05 / 0.35, x:-20 | `[0.25, 0.1, 0.25, 1]` |
| Source paths | 0.5+i*0.1 / 0.6 | 0.25+i*0.06 / 0.4 | `[0.7, 0, 0.3, 1]` sharp |
| Hub | 0.9 / 0.4, scale:0.9 | 0.45 / 0.35, scale:0.8 | default |
| Hub labels | 1.05/1.1 | 0.55/0.6 | default |
| Output paths | 1.2+i*0.1 / 0.5 | 0.55+i*0.06 / 0.35 | `[0.7, 0, 0.3, 1]` |
| Output nodes | 1.3+i*0.08 / 0.4, x:8 | 0.6+i*0.05 / 0.35, x:20 | `[0.25, 0.1, 0.25, 1]` |

### B. Add traveling data dots (continuous after initial load)
- 5 dots on source paths + 3 on output paths
- `motion.circle` with keyframe-interpolated cx/cy along path start→end
- Start after ~1.5s, repeat infinitely with staggered delays
- Fade in/out during travel (opacity: [0, 0.9, 0])

### C. Add hub glow pulse (continuous)
- Second `motion.rect` behind hub, slightly larger
- Stroke: `--au-navy-light`, width 1, blur 2px
- Pulses opacity [0, 0.4, 0] every 2.5s infinitely

### D. Faster CSS pulse
- `au-flow-pulse` keyframe: 2.5s → 1.8s, opacity range 0.2→1 (was 0.3→0.8)

### E. Reduced motion
- Check `useReducedMotion()` hook (already exists in codebase)
- When true: render SVG at final state, skip traveling dots and glow

---

## 6. Solution Section Visual Overhaul

**File:** `src/pages/authority/components/AUDataFlow.tsx` (full component)
**File:** `src/pages/authority/authority.css` (lines 660-857)

### Icon mapping (react-icons)

| Node | Import | Icon |
|------|--------|------|
| Salesforce | `react-icons/si` | `SiSalesforce` (#00A1E0) |
| HubSpot | `react-icons/si` | `SiHubspot` (#FF7A59) |
| SAP | `react-icons/si` | `SiSap` (#0FAAFF) |
| QuickBooks | `react-icons/si` | `SiQuickbooks` (#2CA01C) |
| Google Sheets | `react-icons/si` | `SiGooglesheets` (#34A853) |
| Dashboards | `react-icons/tb` | `TbChartBar` (navy) |
| AI & ML | `react-icons/tb` | `TbBrain` (navy) |
| Reports | `react-icons/tb` | `TbFileAnalytics` (navy) |

### Component changes
- Replace `DATA_SOURCES` / `OUTPUTS` arrays: add `icon` component ref + `color`
- Replace `<span className="au-dataflow__node-logo">` with `<source.icon size={20} />`
- Wrap each node in `motion.div` with staggered whileInView animations (left col slides from -20x, right col from +20x)
- Wrap platform center in `motion.div` with scale-in
- Animate `ArrowIndicator` with subtle x oscillation (`x: [0, 4, 0]`, 1.5s loop)

### CSS changes
- Replace `.au-dataflow__node-logo` with `.au-dataflow__node-icon` (28×28 flex container)
- Node hover: `borderColor: var(--au-navy)`, subtle `y: -2` lift

---

## Critical Files

| File | Changes |
|------|---------|
| `src/pages/authority/authority.css` | Dot grid, section backgrounds, accent dividers, icon styles, pulse timing |
| `src/pages/authority/components/AUHero.tsx` | Animation timings, traveling dots, hub glow, staggered grid, reduced motion |
| `src/pages/authority/components/AUDataFlow.tsx` | react-icons integration, framer-motion node animations, arrow animation |
| `src/data/content.ts` | Remove 3 comparison rows |
| `src/shared/hooks/useReducedMotion.ts` | Reference only (already exists) |

## Implementation Order

1. `pnpm add react-icons`
2. Comparison table row reduction (content.ts)
3. Section differentiation CSS (authority.css)
4. Hero dot grid background (authority.css)
5. Hero animation rework (AUHero.tsx + authority.css)
6. Solution section overhaul (AUDataFlow.tsx + authority.css)

## Verification

1. Run `pnpm dev` and visually inspect each section
2. Check alternating section backgrounds create clear visual rhythm
3. Verify hero dot grid fades at edges and sits behind content
4. Confirm hero animations feel snappy (~0.9s total) with continuous ambient motion after
5. Verify solution section icons render correctly with brand colors
6. Check comparison table shows 6 rows, all green for Hyper column
7. Test mobile responsiveness at 768px and 480px breakpoints
8. Test with `prefers-reduced-motion: reduce` in devtools
9. Run `pnpm build` to verify no build errors
