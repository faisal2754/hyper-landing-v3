# Plan: Update Website Copy from Business Definition

## Context

The `hyper-business-definition.docx` provides updated messaging about what Hyper does, the problem it solves, its value proposition, and its target audience. It also includes specific feedback from Saul requesting five key shifts in messaging:

1. **Lead with analytics as the outcome** — Clients want dashboards, visibility, and decision-support. Data warehousing is a means, not the end.
2. **Emphasize speed** — Ability to turn around tailored demos and go live quickly is underplayed.
3. **Address DIY platforms** — Databricks, Snowflake, and similar self-service tools are real alternatives clients consider. Address their shortcomings.
4. **Frame discovery as a selling point** — The diagnostic/discovery phase should feel valuable on its own.
5. **Articulate the long-term relationship model** — Ongoing managed service that scales with the client, far beyond project-based work.

The current copy already covers some of these but needs tightening and reframing per Saul's notes.

## File to Modify

**`src/data/content.ts`** — Single centralized content file consumed by all page components. This is the only file that needs changes.

## Approach

Use the **copywriting skill** (`/copywriting`) to rewrite the copy in `src/data/content.ts`, guided by the business definition and Saul's feedback. The TypeScript interfaces and data structure must be preserved exactly — only string values change.

### Section-by-Section Changes

#### Hero
- Shift eyebrow and headline to lead with **analytics outcomes** (dashboards, decisions, visibility) not data infrastructure
- Emphasize **speed** in the subheadline ("live in weeks")
- Keep both CTAs but make discovery call feel more valuable

#### Problem Section
- Keep 3 pain-point structure
- Ensure pain point #2 directly calls out **DIY platforms** (Databricks, Snowflake) and their shortcomings for mid-market
- Pain point #3 about hiring stays but sharpen the "single engineer can't do it" angle
- Strengthen transition copy to position Hyper as the clear alternative

#### Solution Section
- Reframe headline/subheadline to emphasize **analytics delivery** not infrastructure plumbing
- Product descriptions should lead with outcomes (what the client gets) not features

#### Process Section
- Reframe headline to emphasize speed and certainty
- **Discovery phase**: position as valuable standalone deliverable (per Saul)
- **Build phase**: emphasize speed ("weeks, not months")
- **Operate phase**: articulate the **long-term partnership** model (per Saul) — not a project handoff

#### Comparison Matrix
- Headline/subheadline to sharpen the "why not DIY" angle
- Ensure rows reflect the real comparison clients face
- Column headers already correct (Hyper vs Self-Service vs In-House)

#### Stats
- Review stat labels for analytics-outcome framing

#### Testimonials
- Light touch — keep existing quotes but ensure result summaries emphasize analytics outcomes

#### Security
- No changes needed (factual, not positioning)

#### Final CTA
- Lead with analytics outcome ("see what your analytics could look like")
- Strengthen the discovery-as-value angle in subheadline
- Trust badges stay

#### Footer / Metadata
- Update tagline and meta description to match new analytics-first framing

## Verification

1. Visually inspect every section in the already-running dev server
2. Confirm all TypeScript types still compile — no interface changes, just string values
3. Check that no copy is truncated or overflows existing layout
4. Verify CTAs, navigation links, and section IDs still work
