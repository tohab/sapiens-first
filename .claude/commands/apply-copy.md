# Apply Copy to HTML

The two sources of truth are `copy.md` (all website text) and `llm-readme.md` (site structure, CSS, and design system). When either file is updated, apply the changes to the HTML. The HTML files are derived outputs — never edit them as a primary source.

## Workflow

1. Read `copy.md` in full
2. Read `llm-readme.md` if structural or layout context is needed
3. Read the relevant HTML file(s)
4. Apply all copy changes to the HTML
5. Confirm every changed section — flag any mismatch between copy.md and the HTML structure

## File Mapping

| copy.md section | HTML file |
|----------------|-----------|
| Home | `index.html` |
| About | `about.html` |
| Join | `join.html` |
| Donate | `donate.html` |
| Global | All pages (nav, footer) |

---

## Section Mapping: index.html

| copy.md section | HTML target |
|----------------|-------------|
| Hero → Headline | `<h1 class="hero-headline">` |
| Hero → Subheadline | `<p>` immediately after `<hr>` inside `.hero-inner` |
| Hero → CTAs | `<a>` tags inside `.btn-group.hero-cta` |
| The Problem | `<p class="problem-statement">` |
| What We Fight For → section heading | `<h2 class="section-heading">` in the pillar section |
| What We Fight For → Freedom/Democracy/Justice | `.pillar-label` (label) and `<p>` (description) in each `.pillar-card` |
| What We Fight For → Link | `<a class="text-link">` inside `.pillar-link` |
| How We Do It → section heading | `<h2 class="section-heading">` in `.section-cols` |
| How We Do It → body | `<p>` inside `.section-text` |
| How We Do It → CTA | `<a>` inside `.btn-group` in `.section-text` |
| Current Campaign → section heading | `<h2 class="section-heading">` in the campaign section |
| Current Campaign → Location label | `<div class="campaign-location">` |
| Current Campaign → body | `<p>` inside `.campaign-spotlight` |
| Current Campaign → CTA | `<a>` inside `.campaign-spotlight .btn-group` |
| Join CTA → Headline | `<h2>` inside `.cta-section` |
| Join CTA → body | `<p>` inside `.cta-section` |
| Join CTA → CTAs | `<a>` tags inside `.cta-section .btn-group` |
| Global → Footer | `.footer-org`, `.footer-copy`, `.footer-legal` |
| Global → Nav | `<nav>` and `.nav-drawer` link text |

---

## Section Mapping: about.html

| copy.md section | HTML target |
|----------------|-------------|
| Page Hero → Headline | `<h1>` inside `.page-hero-inner` |
| Page Hero → body | `<p>` inside `.page-hero-inner` |
| Who We Are → section heading | `<h2 class="section-heading">` |
| Who We Are → paragraphs | `<p>` tags inside `.section-text` (Who We Are section) |
| Our Political Program → section heading | `<h2 class="section-heading">` in `#agenda` section |
| Our Political Program → intro | `<p class="agenda-intro">` |
| Our Political Program → pillar group labels | `<span class="pillar-group-label">` (Freedom / Democracy / Justice) |
| Our Political Program → each right | `.principle h3` (title) and `.principle p` (body) |
| Our Origins → section heading | `<h2 class="section-heading">` in Origins section |
| Our Origins → paragraphs | `<p>` tags inside Origins `.section-text` |
| CTA → Headline | `<h2>` inside `.cta-section` |
| CTA → body | `<p>` inside `.cta-section` |
| CTA → CTA | `<a>` inside `.cta-section .btn-group` |

---

## Section Mapping: join.html

| copy.md section | HTML target |
|----------------|-------------|
| Page Hero → Headline | `<h1>` inside `.page-hero-inner` |
| Page Hero → body | `<p>` inside `.page-hero-inner` |
| Below Form → paragraphs | `<p>` tags inside `.below-form-inner` |

*(The form itself is an Action Network embed — no copy to manage there.)*

---

## Section Mapping: donate.html

| copy.md section | HTML target |
|----------------|-------------|
| Page Hero → Headline | `<h1>` inside `.page-hero-inner` |
| Page Hero → body | `<p>` inside `.page-hero-inner` |
| Pitch → paragraphs | `<p>` tags inside the `.section.section-white .section-inner` |

*(The donation form itself is an Action Network embed — no copy to manage there.)*

---

## Rules

1. **Only update text content** — never modify CSS classes, IDs, HTML structure, inline styles, or JavaScript.
2. **Bold text** in copy.md (`**...**`) maps to `<strong>...</strong>` in HTML where bold appears mid-sentence. Standalone bold labels (like principle titles) are plain text in their HTML element.
3. **If copy.md has content with no matching HTML location** — flag it and ask whether to add a new section.
4. **If the HTML has a section with no matching copy.md entry** — flag it; do not delete content silently.
5. **Never touch Action Network embed IDs** — `can-form-area-join-the-guardrail-project` and `can-fundraising-area-support-the-guardrail-project` are external service identifiers.
6. **Nav and footer are global** — apply any changes to all four HTML files.
7. After applying all changes, list every section updated and flag anything skipped.
