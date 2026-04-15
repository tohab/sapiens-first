# LLM README — The Guardrail Project

A reference document for AI assistants working on this codebase. Together with `copy.md`, this file contains everything needed to understand and recreate the website.

---

## Project Overview

Static HTML/CSS website for The Guardrail Project, a nonprofit civic organization advocating for AI accountability legislation. The site should feel authoritative, urgent, and editorial — like it belongs alongside The Atlantic or a serious policy institute.

No JavaScript frameworks, no build tools, no backend. Pure HTML + CSS + minimal vanilla JS.

---

## File Directory

```
/
├── index.html          — Homepage
├── about.html          — About page (Who We Are, Political Program, Origins)
├── join.html           — Join/signup page (Action Network form embed)
├── donate.html         — Donation page (Action Network fundraising embed)
├── styles.css          — Single global stylesheet for all pages
├── copy.md             — All website copy (source of truth for content)
├── llm-readme.md       — This file (source of truth for structure/style)
│
├── guardrail_project_logo_clean_transparent.png  — Site logo (used in header)
│
├── favicons/           — All favicon sizes + webmanifest
│   ├── apple-touch-icon.png
│   ├── favicon-32x32.png
│   ├── favicon-16x16.png
│   ├── favicon.ico
│   └── site.webmanifest
│
└── [scratch files]     — typography-options.html, pattern-options.html,
                          font-options.html, style-options.html
                          (exploration files, not part of the live site)
```

---

## Fonts

Two typefaces only. No others.

| Role | Font | Source |
|------|------|--------|
| Headlines, labels, nav, site name | **Oswald** | Google Fonts |
| Body text, subheads, paragraphs | **Montserrat** | Google Fonts |

**Google Fonts import (in every HTML `<head>`):**
```html
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

**Rule of thumb:**
- Oswald is for anything that anchors structure — headings, labels, nav, pillar names, site name.
- Montserrat is for anything the reader reads — paragraphs, subheads, body copy, buttons.
- Never use Oswald for body paragraphs. Never use Montserrat for section headings.

---

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Accent (orange) | `#C0441A` | Primary CTAs, pillar labels, accent rules, borders |
| Accent hover | `#A33615` | Button hover state |
| Text primary | `#0f0f0f` | All headings and primary body text |
| Text secondary | `#4a4a4a` | Hero subheads, secondary text |
| Background | `#f5f4f0` | Page background, hero sections |
| White | `#ffffff` | Section backgrounds (section-white) |
| Tint | `#f9f8f6` | Alternate section backgrounds (section-tint) |
| Dark | `#1a1714` | CTA/dark sections |
| Border | `#dddddd` | Dividers, card borders, header border |

Use `--accent: #C0441A` CSS variable. Never hardcode the accent color. Use orange sparingly — it signals urgency and action.

---

## CSS Variables (`:root`)

```css
--accent: #C0441A
--accent-hover: #A33615
--text-primary: #0f0f0f
--text-secondary: #4a4a4a
--bg: #f5f4f0
--transition: 0.25s ease

--space-xs:  0.5rem   /*  8px */
--space-sm:  1rem     /* 16px */
--space-md:  2rem     /* 32px */
--space-lg:  4rem     /* 64px */
--space-xl:  6rem     /* 96px */
--space-2xl: 10rem    /* 160px */

--content-width: 1100px   /* max-width for main content containers */
--text-width: 680px        /* max-width for body text / reading line */
```

Always use these variables. Never hardcode spacing or the accent color.

---

## Typography Scale

### Site Name (header)
```
Font: Oswald 700, 1.55rem, uppercase, letter-spacing 0.08em
```

### Navigation Links
```
Font: Oswald 700, 1.2705rem, uppercase, letter-spacing 0.1em
```

### Hero Headline (H1 — homepage)
```
Font: Oswald 700
Size: clamp(2.75rem, 6.5vw, 4.675rem)
Line-height: 1.21, letter-spacing: 0.01em, uppercase
```

### Hero Subhead (paragraph under hero H1)
```
Font: Montserrat 500, 1.265rem, line-height 1.8
Color: #4a4a4a (--text-secondary), max-width: 580px
```

### Page Hero Headline (H1 — inner pages)
```
Font: Oswald 700
Size: clamp(2.25rem, 5vw, 3.75rem)
Line-height: 1.21, letter-spacing: 0.01em, uppercase
```

### Section Heading (H2)
```
Font: Oswald 600
Size: clamp(1.75rem, 3.5vw, 2.75rem)
Line-height: 1.1, letter-spacing: 0.03em, uppercase
```
*Preceded by a 2.5rem × 3px orange rule via `.section-heading::before`.*

### Section Body Text
```
Font: Montserrat 400, 1.138rem, line-height 1.8
Color: #1a1410, max-width: var(--text-width) = 680px
```

### Problem Statement (large centered text — homepage)
```
Font: Montserrat 500
Size: clamp(1.35rem, 2.5vw, 1.85rem)
Line-height: 1.65, text-align: center, max-width: 820px
```
Class: `.problem-statement`

### Card Heading (H3)
```
Font: Oswald 600, 1.35rem, uppercase, letter-spacing 0.03em
```

### Card Body Text
```
Font: Montserrat 500, 1.138rem, line-height 1.75, color #444444
```

### Pillar Labels (FREEDOM / DEMOCRACY / JUSTICE — homepage cards)
```
Font: Oswald 700, 1.56rem, uppercase, letter-spacing 0.08em, color: --accent
```
Class: `.pillar-label`

### Pillar Group Headers (About page section dividers)
```
Font: Oswald 700, clamp(1.75rem, 2.5vw, 2.5rem), uppercase, letter-spacing 0.05em
```
Class: `.pillar-group-label`

### Principle Heading (H3 — rights on About page)
```
Font: Oswald 600, 1.35rem, uppercase, letter-spacing 0.03em
```

### Principle Body Text
```
Font: Montserrat 500, 1.138rem, line-height 1.8, color #1a1410
```

### CTA Section Heading (dark band H2)
```
Font: Oswald 700, clamp(2rem, 3.5vw, 3rem), uppercase, letter-spacing 0.03em
Color: var(--bg) on dark background
```

### CTA Section Body
```
Font: Montserrat 400, 1.138rem, line-height 1.8, color #aaaaaa (on dark)
```

### Form Labels
```
Font: Montserrat 600, 0.8rem, uppercase, letter-spacing 0.09em, color #666666
```

### Footer / Legal
```
Font: Montserrat 400–500, 0.72rem–0.85rem
```

---

## Layout Classes

| Class | Purpose |
|---|---|
| `.hero` | Full homepage hero — min-height 60vh, flex centered, diagonal stripe texture |
| `.hero-inner` | Content container inside hero (max-width: --content-width) |
| `.page-hero` | Shorter hero for inner pages — min-height 40vh, flex centered |
| `.page-hero-inner` | Content container inside page-hero |
| `.support-hero` | Override on donate.html — larger h1 (up to 4.5rem), slightly different sizing |
| `.section` | Standard content section — border-top, --space-xl padding |
| `.section-white` | White (#ffffff) background variant |
| `.section-tint` | Off-white (#f9f8f6) background variant |
| `.section-inner` | Centered content container (max-width: --content-width) |
| `.section-cols` | Two-column grid: 1fr 2fr. Collapses to 1 col at 768px |
| `.section-heading` | Applied to section-opening `<h2>` — adds orange ::before rule |
| `.cta-section` | Dark CTA band (background: --text-primary, centered) |
| `.section-dark` | Near-black background (#1a1714) — applied alongside .cta-section |
| `.form-section` | Section wrapper for forms |
| `.form-inner` | Centered form container (max-width: 640px) |
| `.below-form` | Off-white section beneath join form |

**Typical section padding:** `var(--space-xl)` top/bottom, `var(--space-lg)` left/right.
**Responsive:** padding collapses left/right at 1100px → 40px, at 640px → `var(--space-sm)`.

---

## Grid Systems

- `.card-grid` — three-column equal grid, `gap: 2rem`. Collapses to 1 col at 768px.
- `.card-grid-2` — two-column equal grid. Collapses to 1 col at 768px.
- `.section-cols` — 1fr / 2fr two-column (heading left, content right). Collapses at 768px.

---

## Components

### Hero (homepage)
- `border-top: 3px solid var(--accent)`
- Diagonal stripe texture via `::before` repeating-linear-gradient
- Noise texture overlay via `::after` SVG data URI
- Stagger animations: `.hero-headline` (immediate), `.hero-callout` (0.2s delay), `.hero-cta` (0.4s delay)

### Pillar Cards (homepage — Freedom / Democracy / Justice)
- Three-column `.card-grid.pillar-grid`
- Each card: `.pillar-card` — `border-top: 3px solid var(--accent)`
- Pillar label in `.pillar-label` (Oswald 700, accent orange)

### Principle List (About page)
- Full-width rows with `border-top: 1px solid #ddd`
- Two-column grid inside each row: `220px` label, `1fr` text
- Grouped under pillar headers with `border-bottom: 2px solid #0f0f0f`
- Collapses to single column at 768px

### Campaign Spotlight
- Location label: `.campaign-location` (Oswald 700, 1.3rem, accent, uppercase)
- Body: standard section paragraph
- Followed by a primary CTA button

### CTA Band
- Both `.cta-section` and `.section-dark` classes on the `<section>`
- Background: `#1a1714`, centered, max-width 700px inner content
- Always ends with at least one `.btn-primary`

---

## Buttons

### Primary (`.btn-primary`)
```
Background: #C0441A, color: #ffffff, border: 2px solid #C0441A
Font: Montserrat 600, 0.875rem, uppercase, letter-spacing 0.07em
Padding: 14px 32px
Hover: background #A33615, translateY(-2px), box-shadow
```

### Outline (`.btn-outline`) — on light backgrounds
```
Background: transparent, color: #0f0f0f, border: 2px solid #999999
Hover: border + text → #C0441A
```

### Outline Light (`.btn-outline-light`) — on dark backgrounds
```
Background: transparent, color: #f5f4f0, border: 2px solid #666666
Hover: border-color → #f5f4f0
```

---

## Animations

### Hero Entrance (CSS keyframes)
`@keyframes fade-up` — opacity 0→1, translateY(18px→0)
- `.hero-headline` — immediate (0s delay)
- `.hero-callout` — 0.2s delay
- `.hero-cta` — 0.4s delay

### Scroll Reveal
`.reveal` + `.reveal.visible` — opacity/transform transition triggered by IntersectionObserver (threshold: 0.12). JS is inlined in each page's `<script>` tag.

---

## Header & Nav

- Sticky, 72px tall, `z-index: 100`, `border-bottom: 1px solid #ddd`
- Nav hides at 960px breakpoint, replaced by hamburger (`.nav-toggle`) + slide-down drawer (`.nav-drawer`)
- Active nav link gets `.active` class → `color: var(--accent)`

---

## Action Network Embeds

Two embedded forms via Action Network (external service). CSS overrides are in `styles.css` to match site design.

**Join form** (join.html):
```html
<script src='https://actionnetwork.org/widgets/v6/form/join-the-guardrail-project?format=js&source=widget'></script>
<div id='can-form-area-join-the-guardrail-project' style='width: 100%'></div>
```

**Fundraising form** (donate.html):
```html
<script src='https://actionnetwork.org/widgets/v6/fundraising/support-the-guardrail-project?format=js&source=widget'></script>
<div id='can-fundraising-area-support-the-guardrail-project' style='width: 100%'></div>
```

Both pages also load `https://actionnetwork.org/css/style-embed-v3.css`.
**Do not change the Action Network embed IDs** — they are external service identifiers.

---

## Per-Page Notes

### index.html
- Hero h1 has class `hero-headline`
- Hero `<hr>` sits between h1 and the subhead paragraph
- Button group has both `btn-group` and `hero-cta` classes
- CTA section has both `cta-section` and `section-dark` classes

### about.html
- Page hero has one h1 + one paragraph
- "Who We Are" section uses `.section-cols` layout
- "Our Political Program" section has id `agenda` (for anchor links from homepage)
- Principles are grouped under `.pillar-group` with `.pillar-group-header` + `.pillar-group-label`
- Each principle row is `.principle` with a two-column grid: h3 left, p right
- Origins section uses `.section-cols` — short two-paragraph entry
- CTA has both `cta-section` and `section-dark`

### join.html
- Page hero has h1 + one paragraph
- Form section uses both `.section`, `.section-white`, `.form-section`, `.reveal`
- `.below-form` section below the form uses `.reveal`

### donate.html
- Page hero has both `page-hero` and `support-hero` classes
- Pitch copy sits in `.section.section-white` with paragraphs directly in `.section-inner`
- Donation form section uses `.section`, `.section-tint`, `.form-section`, `.reveal`

---

## Design Principles

1. **Space is not waste.** Generous whitespace signals confidence. Use `--space-*` variables; never compress sections.
2. **Sections breathe independently.** Each section is its own room. Visual pauses between ideas are intentional.
3. **Max reading line width.** Body text: `max-width: var(--text-width)` (680px). Never wider.
4. **Hierarchy through scale and space, not decoration.** Avoid extra dividers or borders not already in the design system.
5. **Mobile is not an afterthought.** Two-column → one-column at 768px. All font sizes use `clamp()`. Test at 375px / 768px / 1280px.
6. **The accent color is authoritative.** `--accent: #C0441A` — a dark, serious orange. Not a startup orange. Use sparingly.
7. **CSS-only changes where possible.** Never modify copy or content when only CSS/class changes are needed.

---

## What NOT to Change Without Asking

- Copy / body text (source of truth: `copy.md`)
- Page structure (adding or removing sections)
- The font stack (Oswald + Montserrat is intentional)
- The diagonal stripe texture in hero sections
- The Action Network embed IDs
- EIN / legal language in the footer

---

## Development Context

- No build step — open HTML files directly in browser or serve with any static server
- No external JS dependencies
- Fonts loaded from Google Fonts (requires internet connection)
- All pages share a single `styles.css`
- Inline `<script>` tags on each page handle: nav toggle + scroll-reveal observer
