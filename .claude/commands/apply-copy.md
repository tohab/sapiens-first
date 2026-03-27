# Apply Copy to HTML

The source of truth for website text is `copy.md`. When copy.md is updated, apply the changes to the HTML files using these mappings:

## File Mapping

| copy.md section | HTML file |
|----------------|-----------|
| Page 1: Home | `index.html` |
| Page 2: About | `about.html` |
| Page 3: Join | `join.html` |
| Page 4: Support | `support.html` |

## Section Mapping for index.html

- **Hero** → `<section class="hero">` — update `h1.hero-headline`, the `p.hero-callout`, and the "The Guardrail Project is the civic movement..." paragraph
- **The Danger Ahead** → `<section class="section section-tint">` with `.card-grid-2` — update the intro `<p>` and each `.card` `<h3>` + `<p>`
- **What We Do** → `<section class="section section-white">` — update the intro `<p>`, the `.feature-list` `<li>` items, and any closing bold line
- **CTA** → `<section class="cta-section section-dark">` — update `<h2>` and `<p>`

## Section Mapping for about.html

- **Header** → `<section class="page-hero">` — update `<h1>` and all `<p>` tags
- **Our Platform** → `<section class="section section-white">` with `.principles-list` — update each `.principle` `<h3>` and `<p>`
- **CTA** → `<section class="cta-section section-dark">` — update `<h2>` and `<p>`

## Section Mapping for join.html

- **Header** → `<section class="page-hero">` — update `<h1>` and `<p>`
- **Form labels** → inputs and checkboxes in `<section class="form-section">`
- **Below-form text** → `<section class="below-form">` paragraphs

## Section Mapping for support.html

- **Header** → `<section class="page-hero support-hero">` — update `<h1>` and `<p>`
- **Short Pitch** → first `<section class="section section-white">` — update `<p>` tags
- **Transparency Note** → `.form-note` in the donation form section
- **Contact email** → `<a href="mailto:...">` in `.form-note`

## Rules

1. Only update text content — never modify CSS classes, IDs, HTML structure, or JavaScript.
2. If a section exists in copy.md but not in the HTML (or vice versa), flag it rather than silently adding or removing it.
3. Bold text in copy.md (`**...**`) maps to `<strong>...</strong>` in HTML.
4. After applying all changes, confirm each section was updated.
