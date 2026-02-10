# Hyper Landing Pages — Implementation Plan

## Context

Hyper needs 5 visually distinct landing pages, each looking like a different designer made it. The codebase is a fresh Vite + React 19 + TypeScript scaffold. We'll build a single SPA with React Router, code-split per page, with an index hub linking to all 5. Interactive elements (diagnostic quiz, TCO modeler) are **static visual mockups only** — no working logic. Content comes from `copy.md`. Animation via GSAP + Framer Motion.

---

## Architecture Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Routing | React Router v7 with lazy imports | Code-splits each page; fonts/CSS only load for the active page |
| CSS | Plain CSS with `[data-page="x"]` scoping | Each page is a different design world; Tailwind/Modules add no value |
| Fonts | Google Fonts `@import` + Fontsource npm packages | Spec says Google Fonts/Fontsource; simplest approach |
| Animation | GSAP (scroll/pin/scrub) + Framer Motion (entrance/hover) | GSAP for timeline control, FM for declarative React integration |
| Icons | Lucide React (small icons) + custom inline SVG (illustrations) | Lightweight, tree-shakeable, animatable |
| Content | `src/data/content.ts` extracted from `copy.md` | Single source of truth, typed |

---

## Font Pairings (each page unique)

| Page | Headlines | Body | Mono/Data | Source |
|------|-----------|------|-----------|--------|
| 1 — Straight Shooter | Clash Display 700 | Outfit 400/500 | — | Fontsource |
| 2 — Storyteller | Instrument Serif 400 | Cabinet Grotesk 400/500 | — | Google / Fontsource |
| 3 — Consultant | Satoshi 600/700 | General Sans 400/500 | JetBrains Mono 400 | Fontsource / Google |
| 4 — Authority | DM Sans 600/700 | Source Sans 3 400/500 | IBM Plex Mono 400 | Google |
| 5 — Business Case | Bricolage Grotesque 500/700 | IBM Plex Sans 400/500 | IBM Plex Mono 400 | Google |

> Pages 4 & 5 share IBM Plex Mono (data role only) but differ in headline + body fonts.

---

## Project Structure

```
src/
├── main.tsx                          # BrowserRouter wrapper
├── App.tsx                           # Lazy route definitions
├── index.css                         # Global reset only (no design tokens)
├── shared/
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   ├── useReducedMotion.ts
│   │   └── useScrollProgress.ts
│   ├── components/
│   │   ├── SvgFilters.tsx            # Reusable SVG noise/grain defs
│   │   ├── ScrollReveal.tsx          # Framer Motion viewport fade-in
│   │   └── SkipToContent.tsx         # Accessibility skip link
│   └── utils/
│       └── gsapScrollSetup.ts        # GSAP + ScrollTrigger registration
├── data/
│   └── content.ts                    # All copy.md content as typed objects
├── hub/
│   ├── HubPage.tsx                   # Index page linking to all 5
│   └── hub.css
└── pages/
    ├── straight-shooter/
    │   ├── StraightShooterPage.tsx
    │   ├── straight-shooter.css
    │   └── components/               # SS-prefixed components
    ├── storyteller/
    │   ├── StorytellerPage.tsx
    │   ├── storyteller.css
    │   └── components/               # ST-prefixed components
    ├── consultant/
    │   ├── ConsultantPage.tsx
    │   ├── consultant.css
    │   └── components/               # CO-prefixed components
    ├── authority/
    │   ├── AuthorityPage.tsx
    │   ├── authority.css
    │   └── components/               # AU-prefixed components
    └── business-case/
        ├── BusinessCasePage.tsx
        ├── business-case.css
        └── components/               # BC-prefixed components
```

Each page directory is fully self-contained. Component names prefixed (SS, ST, CO, AU, BC) to avoid ambiguity.

---

## Dependencies to Install

```bash
pnpm install react-router-dom gsap @gsap/react framer-motion lucide-react
```

Fontsource packages for fonts not on Google Fonts:
```bash
pnpm install @fontsource/clash-display @fontsource/cabinet-grotesk @fontsource/satoshi @fontsource/general-sans
```

> If Fontsource packages don't exist for some Fontshare fonts, we'll self-host WOFF2 files in `public/fonts/`.

---

## CSS Strategy

Each page wraps content in `<div data-page="straight-shooter">`. All styles scoped under that attribute:

```css
[data-page="straight-shooter"] {
  --ss-bg: #0a0a0a;
  --ss-text: #f5f2eb;
  --ss-accent: #00f0d4;
  /* ... */
}
```

Typography scales with `clamp()` — no breakpoint-based font sizing. Example:
```css
font-size: clamp(2.5rem, 8vw + 1rem, 7rem);
```

---

## Animation Rules

- **GSAP** owns: scroll-triggered reveals, pinned sections, scrub-based progress animations, SVG stroke-dashoffset line drawing, counter animations
- **Framer Motion** owns: entrance animations (fade-up on viewport enter), hover states, page transitions, staggered children
- **Never** apply both to the same DOM element
- All animations check `useReducedMotion()` and disable gracefully

---

## Build Order

### Phase 0: Foundation
1. Install all dependencies
2. Replace `index.css` with global reset (includes `prefers-reduced-motion`)
3. Replace `main.tsx` with BrowserRouter wrapper
4. Replace `App.tsx` with lazy route definitions
5. Delete `App.css`
6. Create all shared hooks, components, and utils
7. Create `src/data/content.ts` from `copy.md`
8. Update `index.html` meta tags

### Phase 1: Hub Page
9. Build `HubPage` — dark gallery page with 5 cards linking to each design
10. Verify routing and lazy loading works

### Phase 2: Page 1 — Straight Shooter (Industrial Brutalist)
- **Color**: #0a0a0a / #f5f2eb / #00f0d4
- **Unforgettable**: Hero headline at 8-12vw pressing against viewport edges
- Sections: Nav → Hero (grain + scanlines) → Problem Bands (01/02/03) → Solution (asymmetric 2-col) → Stat Bar (GSAP counters) → Pricing → Testimonials → Final CTA
- Textures: SVG grain overlay, CSS scanlines, horizontal teal rules

### Phase 3: Page 4 — Authority (Swiss Precision)
- **Color**: #f8f7f5 / #1a1a1a / #1a3a5c / #8899aa
- **Unforgettable**: Progressive architecture diagram revealing layer-by-layer on scroll (GSAP pinned)
- Sections: Nav → Hero (line diagram) → Stats Wall (2x2 grid) → Architecture Diagram (pinned scroll) → Accordion Specs → Comparison Matrix → Security → Final CTA
- Textures: Precise 1px borders, alternating backgrounds, zero noise

### Phase 4: Page 5 — Business Case Builder (Executive Data Viz)
- **Color**: #fafafa / #1c1c1e / #1a7a4c / #8b2252 / #4a5568
- **Unforgettable**: Static TCO Modeler mockup (looks real, not interactive)
- Sections: Nav → Hero (mini bar chart) → TCO Modeler (static) → Cost Comparison → Pricing Table → ROI Metrics → Final CTA
- Textures: Ultra-clean surfaces, subtle shadows, faint grid backgrounds

### Phase 5: Page 3 — Consultant (Strategic Modern)
- **Color**: #0c1a2e / #f9f7f4 / #0077b6 / #e09f3e
- **Unforgettable**: Static Data Maturity Diagnostic (radar chart + quiz cards + results panel)
- Sections: Nav → Split Hero (radar chart SVG) → Diagnostic Cards (static) → Results Panel (static) → Role Testimonials (3-col) → Pricing → Final CTA
- Textures: Dot-grid, concentric circles, refined shadows

### Phase 6: Page 2 — Storyteller (Editorial Luxury)
- **Color**: #1a1a1a / #faf6f1 / #c9a84c / #c4654a
- **Unforgettable**: Full-page scroll animation — tangled data streams untangle into clean lines (GSAP scrub morph)
- Sections: Nav → Hero (paper grain + watermarks) → Data Stream Animation (pinned scrub) → Chapter: Problem (editorial column) → Building Receipt (scroll-reveal) → Timeline (gold vertical) → Testimonials → Final CTA
- Textures: Paper grain, gold rules, oversized watermark numbers
- *Built last* — most complex animation benefits from patterns established in earlier pages

### Phase 7: Polish
- Cross-page QA (no CSS leakage, no font flash)
- Performance audit (Lighthouse, code splitting verification)
- WCAG 2.1 AA audit (contrast, focus indicators, heading hierarchy, aria labels)
- Browser testing

---

## Accessibility (all pages)

- `<SkipToContent />` on every page → `<main id="main-content">`
- One `<h1>` per page, proper heading hierarchy
- All text ≥ 16px body, ≥ 14px minimum
- 4.5:1 contrast ratio on all text
- Visible focus rings: `outline: 2px solid [accent]; outline-offset: 2px`
- `prefers-reduced-motion: reduce` kills all CSS + JS animations
- Touch targets ≥ 44x44px
- Decorative SVGs: `aria-hidden="true"`; informational SVGs: `role="img"` + `aria-label`

---

## Key Files to Modify/Create

| File | Action |
|------|--------|
| `src/main.tsx` | Replace — add BrowserRouter |
| `src/App.tsx` | Replace — lazy route definitions |
| `src/App.css` | Delete |
| `src/index.css` | Replace — global reset |
| `index.html` | Update meta tags |
| `src/data/content.ts` | Create — extract from copy.md |
| `src/shared/**` | Create — hooks, components, utils |
| `src/hub/**` | Create — hub page |
| `src/pages/**` | Create — all 5 page directories |

---

## Verification

1. `pnpm dev` — all 6 routes load (hub + 5 pages)
2. Network tab: visiting one page does NOT load other pages' chunks/fonts
3. Each page uses its own unique font pairing (visually verify)
4. Each page has a distinct color palette, layout, and texture approach
5. Scroll animations trigger correctly (GSAP ScrollTrigger)
6. `prefers-reduced-motion` disables all animations
7. Keyboard-navigate through each page — all interactive elements reachable
8. Lighthouse accessibility score ≥ 90 on each page
