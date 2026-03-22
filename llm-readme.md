# LLM README — The Guardrail Project

A reference document for AI assistants working on this codebase. Updated as the project evolves.

---

## Project Overview

Static HTML/CSS website for The Guardrail Project, a nonprofit civic organization advocating for AI accountability legislation. The site is funder-facing and should feel like it belongs alongside The Atlantic or a serious policy institute — authoritative, urgent, editorial.

No JavaScript frameworks, no build tools, no backend. Pure HTML + CSS + minimal vanilla JS.

---

## File Directory

```
/
├── index.html          — Homepage (hero, What We Do, What's Already Happening, Why Now, CTA)
├── about.html          — About page (Our Platform, A Familiar Fight, CTA)
├── join.html           — Join/signup page (form, below-form text)
├── support.html        — Donation page (hero, pitch copy, donation form)
├── styles.css          — Single global stylesheet for all pages
├── llm-readme.md       — This file
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
└── [scratch files]     — typography-options.html, pattern-options.html, font-options.html
                          (exploration files, not part of the live site)
```

---

## CSS Architecture

Single stylesheet: `styles.css`. No preprocessor, no utility framework.

### CSS Variables (`:root`)

```css
/* Colors */
--accent: #C0441A           /* primary orange — CTAs, rules, borders */
--accent-hover: #A33615     /* darker orange for hover states */
--text-primary: #0f0f0f     /* near-black for headings and primary text */
--text-secondary: #4a4a4a   /* muted gray for body and callout text */
--bg: #f5f4f0               /* warm off-white background */
--transition: 0.25s ease    /* standard transition timing */

/* Spacing scale */
--space-xs:  0.5rem   /*  8px */
--space-sm:  1rem     /* 16px */
--space-md:  2rem     /* 32px */
--space-lg:  4rem     /* 64px */
--space-xl:  6rem;    /* 96px */
--space-2xl: 10rem    /* 160px */

/* Layout */
--content-width: 1100px   /* max-width for main content containers */
--text-width: 680px        /* max-width for body text / reading line */
```

Always use these variables. Never add hardcoded pixel values for spacing or the accent color.

### Key Layout Classes

| Class | Purpose |
|---|---|
| `.hero` | Full-height homepage hero (min-height: 75vh, flex centered) |
| `.hero-inner` | Content container inside hero (max-width: --content-width) |
| `.page-hero` | Shorter hero for inner pages (min-height: 40vh, flex centered) |
| `.page-hero-inner` | Content container inside page-hero |
| `.support-hero` | Override class for support.html — larger h1, slightly different sizing |
| `.section` | Standard content section with border-top and --space-xl padding |
| `.section-white` | White background variant |
| `.section-tint` | Off-white (#f9f8f6) background variant |
| `.section-inner` | Centered content container (max-width: --content-width) |
| `.section-cols` | Two-column grid: 1fr 2fr (collapses to 1 col at 768px) |
| `.section-heading` | Applied to `<h2>` section openers — adds orange ::before rule |
| `.cta-section` | Dark CTA band (background: --text-primary, centered text) |
| `.section-dark` | Very dark section (background: #1a1714) — applied to .cta-section |
| `.form-section` | Section wrapper for forms |
| `.form-inner` | Centered form container (max-width: 640px) |

### Typography

Three font families loaded from Google Fonts:
- **Playfair Display** (400, 500) — all headings (h1, h2, h3)
- **Montserrat** (300–700) — nav, labels, buttons, site name
- **Source Serif 4** (variable) — body copy, paragraphs

Heading sizes use `clamp()` for fluid scaling. Do not override with fixed `px` values.

### Hero Animation System

The homepage hero uses CSS animations for a staggered entrance:
- `.hero-headline` — h1, fades up immediately
- `.hero-callout` — first paragraph, 0.2s delay
- `.hero-cta` — button row, 0.4s delay

These use `@keyframes fade-up` defined in the stylesheet.

### Scroll Reveal

`.reveal` + `.reveal.visible` — opacity/transform animation triggered by IntersectionObserver.

JS is inlined in each page's `<script>` tag (not a shared file). Applied to all below-fold sections.

### Section Heading Pattern

Section h2s that open new content use `class="section-heading"`. This adds an orange horizontal rule via `::before` pseudo-element. Do not use the old `<span class="section-accent">` approach — those spans were removed in Phase 1.

---

## Per-Page Notes

### index.html
- Hero: `<h1>` has `hero-headline` class + `<span class="accent-word">law</span>` around the key word
- First hero paragraph has `hero-callout` class (left orange border + stagger animation)
- Second hero paragraph is plain `.hero p`
- Button group has both `btn-group` and `hero-cta` classes
- CTA section has both `cta-section` and `section-dark` classes

### about.html
- "Our Platform" h2 uses `.section-heading` (no section-cols — standalone)
- "A Familiar Fight" h2 is inside `.section-cols`, also uses `.section-heading`
- CTA has both `cta-section` and `section-dark`

### join.html
- No section h2 (form page — no section-heading needed)
- `.below-form` section uses `.reveal`

### support.html
- Page hero has both `page-hero` and `support-hero` classes
- Pitch copy section: no section-cols (was removed in a fix — paragraphs sit directly in `.section-inner`)
- Donation form section uses `form-section` class

---

## Design Principles

1. **Space is not waste.** Generous whitespace signals confidence. Use `--space-*` variables; never compress sections to feel "full."

2. **Sections breathe independently.** Each section is its own room. Visual pauses between ideas are intentional.

3. **Max reading line width.** Body text: `max-width: var(--text-width)` (680px). Never wider.

4. **Hierarchy through scale and space, not decoration.** Avoid adding extra dividers or borders unless they already exist in the design system.

5. **Mobile is not an afterthought.** Two-column → one-column at 768px. All font sizes use `clamp()`. Test at 375px / 768px / 1280px.

6. **The accent color is authoritative.** `--accent: #C0441A` — a dark, serious orange. Not a startup orange. Use it sparingly: orange rules, button fills, border accents, the `.accent-word` span.

7. **CSS-only changes where possible.** Add classes to HTML only when necessary for layout or styling hooks. Never modify copy or content.

---

## What NOT to Change Without Asking

- Copy / body text
- Page structure (adding or removing sections)
- The font stack (Playfair / Montserrat / Source Serif 4 is intentional)
- The diagonal stripe texture in hero sections
- EIN / legal language in the footer

---

## Development Context

- No build step — open HTML files directly in browser or serve with any static server
- No external JS dependencies
- Fonts are loaded from Google Fonts (requires internet connection)
- All pages share a single `styles.css`
- Inline `<script>` tags handle nav toggle and scroll-reveal on each page independently
