# Guardrail Project — Style Guide

*Reflects current website implementation as of April 2026.*

---

## Contents

1. [Fonts](#fonts)
2. [Color Palette](#color-palette)
3. [Typography Scale](#typography-scale)
4. [Spacing System](#spacing-system)
5. [Layout](#layout)
6. [Components](#components)
7. [Buttons](#buttons)
8. [Voice & Tone](#voice--tone)

---

## Fonts

Two typefaces only. No others.

| Role | Font | Source |
|------|------|--------|
| Headlines, labels, nav, site name | **Oswald** | Google Fonts |
| Body text, subheads, paragraphs | **Montserrat** | Google Fonts |

**Google Fonts import:**
```
Oswald: 400, 500, 600, 700
Montserrat: 300, 400, 500, 600, 700, 800
```

**Rule of thumb:**
- Oswald is for anything that anchors structure — headings, labels, nav, pillar names.
- Montserrat is for anything the reader reads — paragraphs, subheads, body copy.
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
| Dark | `#1a1714` | CTA/dark sections, footer |
| Border | `#dddddd` | Dividers, card borders, header border |

**Color principles:**
- Blue and orange are the movement palette. Orange (`#C0441A`) is warm amber — not pastel, not corporate.
- Use orange for emphasis and action only. It should feel urgent when it appears.
- Dark sections (`#1a1714`) are reserved for major CTAs and the footer — they signal importance.

---

## Typography Scale

### Site Name (header logo text)

```
Font:           Oswald
Weight:         700
Size:           1.55rem
Letter-spacing: 0.08em
Transform:      uppercase
```

### Navigation Links

```
Font:           Oswald
Weight:         700
Size:           1.2705rem
Letter-spacing: 0.1em
Transform:      uppercase
```

### Mobile Nav Drawer Links

```
Font:           Oswald
Weight:         700
Size:           1.4rem
Letter-spacing: 0.1em
Transform:      uppercase
```

---

### Hero Headline (H1 — homepage)

```
Font:           Oswald
Weight:         700
Size:           clamp(2.75rem, 6.5vw, 4.675rem)
Line-height:    1.21
Letter-spacing: 0.01em
Transform:      uppercase
```

### Hero Subhead (paragraph under hero H1)

```
Font:           Montserrat
Weight:         500
Size:           1.265rem
Line-height:    1.8
Color:          #4a4a4a (text-secondary)
Max-width:      580px
```

---

### Page Hero Headline (H1 — inner pages: About, Join, Support)

```
Font:           Oswald
Weight:         700
Size:           clamp(2.25rem, 5vw, 3.75rem)
Line-height:    1.21
Letter-spacing: 0.01em
Transform:      uppercase
```

### Page Hero Subhead (paragraph under inner page H1)

```
Font:           Montserrat
Weight:         500
Size:           1.265rem
Line-height:    1.8
Color:          #1a1410
Max-width:      640px
```

---

### Section Heading (H2)

```
Font:           Oswald
Weight:         600
Size:           clamp(1.75rem, 3.5vw, 2.75rem)
Line-height:    1.1
Letter-spacing: 0.03em
Transform:      uppercase
```

*Section headings are preceded by a 2.5rem × 3px orange rule (via `::before`).*

### Section Body Text (paragraph)

```
Font:           Montserrat
Weight:         400
Size:           1.138rem
Line-height:    1.8
Color:          #1a1410
Max-width:      680px (--text-width)
```

---

### Card Heading (H3 — when used)

```
Font:           Oswald
Weight:         600
Size:           1.35rem
Line-height:    1.2
Letter-spacing: 0.03em
Transform:      uppercase
```

### Card Body Text

```
Font:           Montserrat
Weight:         500
Size:           1.138rem
Line-height:    1.75
Color:          #444444
```

---

### Pillar Labels — homepage cards (FREEDOM / DEMOCRACY / JUSTICE)

```
Font:           Oswald
Weight:         700
Size:           1.56rem
Letter-spacing: 0.08em
Transform:      uppercase
Color:          #C0441A (accent)
```

### Pillar Group Headers — About page section dividers

```
Font:           Oswald
Weight:         700
Size:           clamp(1.75rem, 2.5vw, 2.5rem)
Letter-spacing: 0.05em
Transform:      uppercase
```

### Principle Heading (H3 — rights on About page)

```
Font:           Oswald
Weight:         600
Size:           1.35rem
Letter-spacing: 0.03em
Transform:      uppercase
```

### Principle Body Text

```
Font:           Montserrat
Weight:         500
Size:           1.138rem
Line-height:    1.8
Color:          #1a1410
```

---

### Problem Statement (large centered text — homepage)

```
Font:           Montserrat
Weight:         500
Size:           clamp(1.35rem, 2.5vw, 1.85rem)
Line-height:    1.65
Text-align:     center
Max-width:      820px
```

### CTA Section Heading (dark band H2)

```
Font:           Oswald
Weight:         700
Size:           clamp(2rem, 3.5vw, 3rem)
Line-height:    1.15
Letter-spacing: 0.03em
Transform:      uppercase
Color:          #f5f4f0 (bg, on dark)
```

### CTA Section Body Text

```
Font:           Montserrat
Weight:         400
Size:           1.138rem
Line-height:    1.8
Color:          #aaaaaa (on dark background)
```

---

### Base Body

```
Font:           Montserrat
Weight:         400
Size:           clamp(1.05rem, 1.5vw, 1.15rem)
Line-height:    1.75
```

### Form Labels

```
Font:           Montserrat
Weight:         600
Size:           0.8rem
Letter-spacing: 0.09em
Transform:      uppercase
Color:          #666666
```

### Small / Legal / Footer Text

```
Font:           Montserrat
Weight:         400–500
Size:           0.72rem–0.85rem
```

---

## Spacing System

Based on a `rem` scale. All spacing uses CSS variables.

| Variable | Value | px equivalent |
|----------|-------|---------------|
| `--space-xs` | 0.5rem | 8px |
| `--space-sm` | 1rem | 16px |
| `--space-md` | 2rem | 32px |
| `--space-lg` | 4rem | 64px |
| `--space-xl` | 6rem | 96px |
| `--space-2xl` | 10rem | 160px |

**Typical section padding:** `var(--space-xl)` top/bottom (96px), `var(--space-lg)` left/right (64px).
**Responsive:** padding collapses to `var(--space-sm)` left/right on mobile (<640px).

---

## Layout

| Variable | Value |
|----------|-------|
| `--content-width` | 1100px — max-width for all section content |
| `--text-width` | 680px — max-width for single-column prose |

**Grid systems:**
- `.section-cols` — two-column (1fr / 2fr), heading left, content right. Collapses to single column at 768px.
- `.card-grid` — three-column equal grid, `gap: 2rem`. Collapses to single column at 768px.
- `.card-grid-2` — two-column equal grid. Collapses to single column at 768px.

**Header:** Sticky, 72px tall, `z-index: 100`. Bordered bottom. Nav hides at 960px, replaced by hamburger drawer.

**Accent rule on sections:** Every `.section-heading` gets a `2.5rem × 3px` orange bar above it via `::before`.

**Hero border:** All hero sections (home + inner pages) have a `3px solid var(--accent)` top border.

---

## Components

### Pillar Cards (homepage — Freedom / Democracy / Justice)

- Three-column grid (`.card-grid.pillar-grid`)
- Each card: `border-top: 3px solid var(--accent)`
- Pillar label in Oswald 700, 1.56rem, accent orange
- Body in Montserrat 500, 1.138rem

### Principle List (About page — rights under each pillar)

- Full-width rows with `border-top: 1px solid #ddd`
- Two-column grid inside each row: `220px` label column, `1fr` text column
- Collapses to single column at 768px
- Grouped under pillar headers (FREEDOM / DEMOCRACY / JUSTICE) with `border-bottom: 2px solid #0f0f0f`

### Campaign Spotlight

- Location label: Oswald 700, 1.3rem, accent orange, uppercase
- Body: standard section paragraph
- Followed by a primary CTA button

### CTA Band

- Background: `#1a1714` (near-black)
- Center-aligned
- Max-width: 700px for the inner content
- Always ends with at least one primary button

---

## Buttons

### Primary Button (`.btn-primary`)

```
Background:     #C0441A (accent)
Color:          #ffffff
Border:         2px solid #C0441A
Font:           Montserrat 600, 0.875rem, uppercase, letter-spacing 0.07em
Padding:        14px 32px
Hover:          background #A33615, translateY(-2px), box-shadow
```

### Outline Button (`.btn-outline`) — on light backgrounds

```
Background:     transparent
Color:          #0f0f0f
Border:         2px solid #999999
Hover:          border + text color → #C0441A
```

### Outline Light Button (`.btn-outline-light`) — on dark backgrounds

```
Background:     transparent
Color:          #f5f4f0
Border:         2px solid #666666
Hover:          border-color → #f5f4f0
```
