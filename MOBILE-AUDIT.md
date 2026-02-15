# Mobile Compatibility Audit

**Date:** 2026-02-15
**Site:** Hyper Landing Page (Authority)
**Auditor:** Claude Code
**Methodology:** Code analysis of all CSS media queries, component structure review, and visual screenshots at 375px (iPhone) and 768px (tablet) viewports.

---

## Executive Summary

The site is built **desktop-first** with responsive overrides added via `max-width` media queries. While media queries exist for 768px, 480px, and 900px breakpoints, the overall approach has **significant gaps** that will cause a poor experience for mobile users. Several sections lack any mobile-specific treatment, the Data Flow blueprint component has hardcoded pixel widths, and touch targets / spacing are not optimized for mobile-first interaction.

**Severity Scale:** CRITICAL (broken/unusable) | HIGH (significantly degrades UX) | MEDIUM (suboptimal but functional) | LOW (polish/nice-to-have)

---

## Section-by-Section Findings

### 1. Navigation (AUNav)

**File:** `authority.css:92-202` | `AUNav.tsx`

| Issue | Severity | Detail |
|-------|----------|--------|
| Desktop-first architecture | HIGH | Nav toggle is `display: none` by default (line 168), only shown via `@media (max-width: 768px)`. This is correct but follows the wrong paradigm for mobile-first. Should be visible by default, hidden at larger breakpoints. |
| No touch-friendly spacing in dropdown | MEDIUM | Mobile dropdown links (line 186-196) have only `1rem` gap between items. For a nav menu with touch targets, WCAG recommends 44px minimum height per link. The links themselves (`au-nav__link`) have only `0.5rem` vertical padding (line 133). |
| No scroll lock when menu open | MEDIUM | When the hamburger menu is open, the page body is still scrollable behind it. Should lock scroll when the dropdown is active. |
| CTA button in dropdown has no visual distinction | LOW | The "BOOK A CALL" CTA renders inline with nav links in mobile dropdown with no differentiation or prominence. |

### 2. Hero Section (AUHero)

**File:** `authority.css:268-470` | `AUHero.tsx`

| Issue | Severity | Detail |
|-------|----------|--------|
| `min-height: 100vh` on mobile is excessive | HIGH | The hero has `min-height: 100vh` (line 273) with no mobile override. On mobile, this creates a huge empty space because the content (headline + CTA) doesn't fill the viewport. The isometric graphic appears far below the fold. |
| Two-column grid doesn't reflow until 900px | HIGH | `grid-template-columns: 1fr 1fr` (line 297) only changes to `1fr` at 900px (line 452). On devices between 375-900px, the grid is split 50/50, making text cramped and the diagram tiny. |
| IsometricBlocks graphic is invisible/barely visible on narrow widths | CRITICAL | At mobile sizes (375px), the isometric blocks graphic renders on the right side of a 50/50 grid and is almost invisible in screenshots. The SVG appears too small to convey meaning at this width. |
| CTA buttons lack mobile stacking | MEDIUM | The `.au-hero__ctas` container uses `flex-wrap: wrap` (line 350) but doesn't force stacking. On narrow screens, two side-by-side buttons may be cramped. Should stack vertically at small widths. |
| No mobile-specific padding reduction | LOW | The hero inner uses `padding: clamp(3rem, 6vw, 6rem) 0` (line 300). At 375px, this evaluates to ~3rem top/bottom which is fine, but when stacked at 900px the padding-top still creates dead space below the fixed nav. |

### 3. Problem Section (AUProblem)

**File:** `authority.css:614-743` | `AUProblem.tsx`

| Issue | Severity | Detail |
|-------|----------|--------|
| 3-column grid has no intermediate breakpoint | HIGH | `.au-problem__grid` uses `repeat(3, 1fr)` (line 650). It only collapses to `1fr` at 768px (line 735). Between 768-1024px the cards are extremely narrow (~220px each), making the text nearly unreadable. There's no `2-column` intermediate step. |
| Cards have zero gap | MEDIUM | `gap: 0` (line 651) with negative margin trick (`margin-right: -1px`, line 657) works on desktop but on mobile the single-column cards have no visual breathing room between them. They stack as one continuous block with collapsed borders. |
| Section header `max-width: 600px` could overflow on very small screens | LOW | Not an issue at 375px, but the fixed max-width could cause awkward centering behavior. |

### 4. Data Flow / Blueprint (AUDataFlowVariants)

**File:** `AUDataFlowVariants.tsx` (inline CSS) | `authority.css:745-954`

| Issue | Severity | Detail |
|-------|----------|--------|
| Blueprint has hardcoded pixel grid: `grid-template-columns: 220px 1fr 200px` | CRITICAL | The `.bp-grid` (inline CSS line 156) uses fixed pixel columns. At 375px, this totals 420px minimum width *before* the center column, causing horizontal overflow. The mobile override at 768px (line 432) changes to `1fr` but the parent `.bp-wrap` has `padding: 72px 56px 80px` (line 44) which is enormous on mobile. |
| SVG connection paths use absolute pixel coordinates | CRITICAL | `LEFT_PATHS` and `RIGHT_PATHS` (lines 447-459) use hardcoded coordinates like `M 220 76 C 244 76...` and `M 736 210...`. These paths are calculated for a ~1004px wide SVG viewBox. On mobile, the paths are hidden (line 437), but this means the visual story of data flowing through the platform is completely lost. |
| Mobile override hides all visual connectors | HIGH | At 768px: `.bp-svg, .bp-ann, .bp-dim, .bp-reg { display: none; }` (line 437). This removes the animations, annotations, dimension lines, and registration marks. The blueprint becomes just a plain list of items — losing its primary purpose as a visual explainer. |
| Blueprint padding is excessive on mobile | HIGH | Mobile override sets `padding: 40px 24px 64px` (line 431) but the parent `.bp-wrap` already has `max-width: 1100px`. On a 375px screen with 24px padding, the content area is only 327px wide — very tight for the platform name text at `font-size: 22px`. |
| Product description grid doesn't stack | MEDIUM | `.au-dataflow__products` is `grid-template-columns: 1fr 1fr` (line 896). The 768px media query changes this to `1fr` (line 952), but on screens 375-768px the two product cards at 50/50 split will have ~150px content width each. |
| Title block (`bp-titleblock`) is hidden on mobile | LOW | The engineering-style title block disappears entirely on mobile (line 440). This is the right call but an alternative mobile treatment would add polish. |

### 5. Stats Wall (AUStatsWall)

**File:** `authority.css:956-1029`

| Issue | Severity | Detail |
|-------|----------|--------|
| 4-column grid is too dense between 481-768px | HIGH | Goes from `repeat(4, 1fr)` to `1fr 1fr` at 768px (line 1001). At 768px, 2 columns is fine. But between 481-768px, the `clamp(2rem, 4vw, 3rem)` padding makes the stat values wrap awkwardly. "20+ hours" in mono font at `clamp(2rem, 4vw, 3rem)` size is tight at ~350px cell width. |
| No font-size reduction on mobile | MEDIUM | `.au-stats__value` uses `font-size: clamp(2rem, 4vw, 3rem)` (line 984). At 375px this evaluates to 2rem (32px). In the single-column 480px layout, left-aligned 32px mono text is large but acceptable. However there's no consideration for how "20+ hours" renders as two lines. |
| Border treatments create visual artifacts on mobile | LOW | The border-right/border-bottom swapping between breakpoints (lines 1005-1012, 1021-1023) works but creates a slightly inconsistent visual when transitioning between breakpoints. |

### 6. Testimonials (AUTestimonials)

**File:** `authority.css:1034-1133`

| Issue | Severity | Detail |
|-------|----------|--------|
| 3-column grid collapses directly to 1-column | HIGH | `repeat(3, 1fr)` (line 1054) jumps to `1fr` at 768px (line 1125). No intermediate 2-column step. On iPad (768px exactly) the testimonials suddenly go from 3 cramped columns to full-width single cards, which is a jarring shift. |
| No horizontal scroll or carousel option | MEDIUM | On mobile, three full testimonials stacked vertically creates a very long scroll. A horizontal swipe carousel would be more mobile-friendly. |
| Quote marks at 3rem may be oversized on mobile | LOW | The decorative quote marks (line 1076) at `3rem` (48px) are proportionally large on a 375px screen. |
| Text size not reduced for mobile | LOW | `.au-testimonial__text` at `0.9375rem` (15px) with `line-height: 1.75` (line 1086-1088) creates long blocks of text on mobile. Consider tighter line-height or slightly smaller font. |

### 7. Process / Timeline (AUProcess)

**File:** `authority.css:1135-1272`

| Issue | Severity | Detail |
|-------|----------|--------|
| 4-column grid is unreadable below 1000px | HIGH | `repeat(4, 1fr)` (line 1179) with `gap: 1rem`. At 900px, each card is ~200px wide. The card headlines at `1.0625rem` (17px) and descriptions at `0.8125rem` (13px) become very cramped. |
| Intermediate breakpoint at 768px goes to 2 columns | MEDIUM | `1fr 1fr` at 768px (line 1258) is reasonable, but the transition from 4 to 2 columns skips any 3-column option that would work well on tablets. |
| Watermark numerals have no mobile override | LOW | `.au-process__step-number` at `font-size: 4.5rem` (line 1210) with `opacity: 0.05`. While decorative, on a 1-column layout this numeral may overlap with card text more noticeably. |
| Card hover effect on mobile | LOW | `transform: translateY(-3px)` on hover (line 1197) doesn't apply on touch devices but the `transition` property still runs, which can cause minor jank on scroll. |

### 8. Comparison Matrix (AUComparisonMatrix)

**File:** `authority.css:1274-1453` | `AUComparisonMatrix.tsx`

| Issue | Severity | Detail |
|-------|----------|--------|
| 3-column comparison collapses to 1-column only | HIGH | `repeat(3, 1fr)` (line 1306) to `1fr` at 768px (line 1445). The entire point of a comparison is to see options side-by-side. On mobile, users have to scroll and remember values between cards. There is no mobile-specific comparison visualization (e.g., tabs, accordion, or swipe). |
| `white-space: nowrap` on metric labels/values | MEDIUM | `.au-comparison__metric-label` (line 1404) and `.au-comparison__metric-value` (line 1414) both have `white-space: nowrap`. On very narrow screens, this can cause horizontal overflow within the cards if values are long (e.g., "$30k-$60k+"). |
| No highlighted card differentiation on mobile | LOW | The highlighted card (Hyper) has `border-top: 3px solid var(--au-navy)` (line 1321) which is subtle. On mobile's single-column layout, there's no way to visually distinguish which card is the recommended option without seeing them side-by-side. |

### 9. Security Section (AUSecurity)

**File:** `authority.css:1455-1557` | `AUSecurity.tsx`

| Issue | Severity | Detail |
|-------|----------|--------|
| 3-column to 2-column to 1-column is correct | OK | Goes `repeat(3, 1fr)` -> `repeat(2, 1fr)` at 768px -> `1fr` at 480px. This is the best responsive pattern on the page. |
| Watermark numerals at 7rem | LOW | `.au-security__card-number` at `font-size: 7rem` (line 1514). On mobile 1-column cards, this oversized numeral can overlap with card text depending on card height. |
| No mobile-specific icon size adjustment | LOW | Icons at `20x20` (component hardcoded in `AUSecurity.tsx` line 8) are fine but could benefit from being slightly larger (24px) on mobile where they're the primary visual anchor for each card. |

### 10. Final CTA (AUFinalCta)

**File:** `authority.css:1559-1650` | `AUFinalCta.tsx`

| Issue | Severity | Detail |
|-------|----------|--------|
| No mobile-specific media query at all | HIGH | The Final CTA section has **zero** responsive overrides in the CSS. While it uses `flex-wrap` (line 1620, 1630) and `clamp()` for font sizing, there are gaps. |
| CTA buttons don't stack on mobile | MEDIUM | `.au-final-cta__buttons` uses `flex-wrap: wrap` (line 1620) which should cause stacking, but with `justify-content: center` the buttons may appear side-by-side at widths where they technically fit but look cramped (~375px with two ~200px buttons). |
| Trust badges spacing at 2rem gap | LOW | `.au-final-cta__badges` has `gap: 2rem` (line 1629). On mobile this may cause wrapping that looks uneven. |

---

## Global / Cross-Cutting Issues

### Architecture: Desktop-First Instead of Mobile-First

| Issue | Severity | Detail |
|-------|----------|--------|
| All media queries use `max-width` | CRITICAL | Every responsive rule uses `@media (max-width: ...)` which means the CSS is desktop-first. For a mobile-first audience, the CSS should define mobile styles as the default and use `@media (min-width: ...)` to enhance for larger screens. This isn't just philosophical — it means mobile devices parse and override more CSS rules, and any section without an explicit media query renders the desktop layout. |

### Typography

| Issue | Severity | Detail |
|-------|----------|--------|
| Font size scaling relies on `clamp()` but no explicit mobile overrides | MEDIUM | Titles use patterns like `clamp(1.75rem, 3vw + 0.25rem, 2.5rem)`. At 375px, `3vw + 0.25rem` = ~15.25px which means the minimum `1.75rem` (28px) kicks in. This is fine but the *body* text at fixed 15-16px sizes becomes dense reading on mobile. |
| Three font families loaded regardless of usage | LOW | Plus Jakarta Sans, Inter, and IBM Plex Mono are all loaded on every page. On mobile connections this adds to initial load time. Consider subsetting or reducing weights. |

### Touch Interaction

| Issue | Severity | Detail |
|-------|----------|--------|
| Hover effects have no touch equivalents | MEDIUM | Multiple elements use `:hover` for visual feedback (cards at lines 662, 1068, 1196, 1504). On mobile touch devices, hover states either don't fire or create sticky hover behavior. Should have `:active` or touch-friendly alternatives. |
| Min touch target sizes inconsistent | MEDIUM | The nav toggle correctly uses `min-width: 44px; min-height: 44px` (lines 174-175), but nav links have only `0.5rem` padding (line 133), and card elements have no explicit touch target sizing. |

### Animations

| Issue | Severity | Detail |
|-------|----------|--------|
| ScrollReveal animations fire on mobile | MEDIUM | `ScrollReveal` uses Framer Motion's `whileInView` with a 32px Y-offset and 0.6s duration. On slower mobile processors, multiple simultaneous scroll-triggered animations can cause jank. The `prefers-reduced-motion` check is good but default mobile users still get all animations. |
| GSAP + Framer Motion + CSS keyframes all loaded | MEDIUM | Three animation libraries (GSAP, Framer Motion, CSS keyframes for the blueprint) are loaded. This is heavy for mobile performance. Blueprint CSS animations (marching ants, flowing particles) run continuously. |
| No `will-change` optimization | LOW | Animated elements don't use `will-change` to hint the browser about upcoming transforms, which could improve mobile rendering performance. |

### Performance

| Issue | Severity | Detail |
|-------|----------|--------|
| Google Fonts loaded as blocking CSS | MEDIUM | The Google Fonts `<link>` in `index.html` (line 16-19) is render-blocking. Three font families with multiple weights can take 200-500ms on mobile connections. Should use `font-display: swap` (already included via `display=swap`) but consider preloading the critical font or using `font-display: optional`. |
| No lazy loading of below-fold sections | LOW | All sections render immediately. On mobile, sections like Security and Final CTA are far below the fold and could be lazy-loaded. |

### Spacing & Layout

| Issue | Severity | Detail |
|-------|----------|--------|
| `--au-section-pad` creates too much whitespace on mobile | HIGH | `clamp(4rem, 8vw, 7rem)` evaluates to ~4rem (64px) at 375px. With 10+ sections, this adds 1280px+ of pure whitespace to the page. For mobile, `clamp(2.5rem, 6vw, 7rem)` would be more appropriate. |
| Container gutter at 1.25rem minimum may be too tight | LOW | `--au-gutter: clamp(1.25rem, 4vw, 3rem)` gives 20px side padding on the smallest screens. This is acceptable but industry standard for mobile is typically 16-24px, so 20px is on the low end for readability. |

---

## Priority Remediation Roadmap

### P0 — Must Fix (Broken or Unusable on Mobile)

1. **Rewrite CSS as mobile-first** — Change all `@media (max-width)` to `@media (min-width)` with mobile styles as the default.
2. **Fix Data Flow blueprint** — Replace hardcoded pixel grid with a mobile-optimized alternative (simplified stacked diagram or illustration for mobile).
3. **Fix hero section** — Remove `min-height: 100vh` on mobile, stack content single-column below ~600px, properly size/reposition the isometric graphic.

### P1 — Should Fix (Significantly Hurts UX)

4. **Add intermediate breakpoints** — Problem cards, testimonials, comparison, and process grids all need a 2-column intermediate between their 3/4-column desktop and 1-column mobile layouts.
5. **Reduce section padding** — Override `--au-section-pad` at mobile sizes to reduce vertical whitespace.
6. **Mobile comparison redesign** — Add tabs, accordion, or horizontal scroll so users can compare options without scrolling back and forth.
7. **Touch targets** — Ensure all interactive elements meet 44x44px minimum.
8. **Final CTA responsive styles** — Add explicit mobile overrides for the CTA section.
9. **Nav scroll lock** — Prevent body scroll when mobile menu is open.

### P2 — Should Address (Suboptimal Experience)

10. **Testimonials carousel** — Consider horizontal swipe on mobile instead of stacking all three.
11. **Reduce animation payload** — Consider dropping GSAP on mobile or loading it lazily.
12. **Touch-friendly hover states** — Add `:active` states alongside `:hover`.
13. **Font loading optimization** — Subset fonts and preload the critical display font.

### P3 — Polish

14. **CTA button stacking** — Force vertical stacking on hero and final CTA at small widths.
15. **Quote mark sizing** — Reduce decorative quote marks on mobile.
16. **Card hover transitions** — Disable `transform` hover effects on touch devices.

---

## Reference: Current Breakpoints

| Breakpoint | Sections Affected |
|------------|-------------------|
| `900px` | Hero only (grid collapse) |
| `768px` | Nav, Problem, Data Flow, Stats, Testimonials, Process, Comparison, Security |
| `480px` | Stats, Process, Security |

**Missing breakpoints:** No styles at `375px`, `428px` (iPhone Pro Max), `640px`, or `1024px` (iPad landscape).

---

## Screenshots

All screenshots are saved in `audit-screenshots/` at the project root for visual reference.
