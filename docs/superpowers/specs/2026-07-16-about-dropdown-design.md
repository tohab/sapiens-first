# About Dropdown: Vision, Strategy, Careers

**Date:** 2026-07-16
**Status:** Approved, ready for implementation planning

## Problem

`vision.md` contains new organizational content (Vision, Mission, Theory of Change,
Roadmap, Focus Areas) that isn't on the site yet. The existing About page
(`about.html`) covers different ground (How We Work, What We Do, Core Values,
founder bio) and its mission line contradicts `vision.md`'s mission. We're turning
"About" in the nav into a dropdown with three new subpages and folding this content
in, without disturbing what's already on the About landing page.

## Decisions

These were confirmed with the user before writing this spec:

- **Mission statement:** `vision.md`'s version — *"Our mission is to protect liberal
  democracy from the dangers of artificial intelligence."* — is canonical everywhere
  it appears on the site, replacing the current About page line ("put powerful
  artificial intelligence in the hands of the people").
- **About landing page:** stays as-is at `/about` with its existing content (How We
  Work, What We Do, Core Values, founder bio) unchanged. The dropdown adds three
  *additional* pages; it does not replace or absorb the landing page.
- **First dropdown item name:** "Vision" (bundles Vision, Mission, Focus Areas).
- **Roadmap:** Phase 1 ("Test and Learn") is the current phase and should be
  visually highlighted as such.
- **Careers page:** minimal nav stub for now — no signup capture, just a holding
  page to be fleshed out when volunteer roles open.

## Information architecture

```
/about              about.html              (existing, unchanged content + mission line update)
/about/vision        about/vision.html       (new)
/about/strategy       about/strategy.html     (new)
/about/careers       about/careers.html      (new)
```

`.htaccess`'s existing generic rewrite (`^(.+)$ → $1.html` when the file exists,
[.htaccess:6](.htaccess#L6)) handles nested paths with no config changes — a request
for `/about/vision` resolves to `about/vision.html` automatically.

## Nav changes (`nav.js`, `shared.css`)

`shared.css` already has a complete, unused `.nav-dropdown` / `.nav-dropdown-menu` /
`.nav-dropdown-item` / `.nav-chevron` component ([shared.css:190-236](shared.css#L190-L236)),
including a mobile media query that hides the dropdown menu at 768px. This spec wires
it up rather than building new UI:

- **Desktop:** "About" remains a real link to `/about`. Hovering/focusing it reveals
  the dropdown menu (Vision / Strategy / Careers) via the existing CSS — no new
  styles needed.
- **Mobile:** the dropdown menu stays hidden (existing behavior). Tapping "About"
  goes straight to `/about`. Discoverability for the three subpages on mobile comes
  from a wayfinding row added to the About landing page (see below), not from nav
  itself.
- `nav.js`'s `active()` logic is extended so "About" gets `.active` when the current
  path is `/about` *or* starts with `/about/`, and each dropdown item gets `.active`
  when it matches the current subpage (using the existing `.nav-dropdown-item.active`
  style at [shared.css:228](shared.css#L228)).
- `nav-circle.js` draws its hand-drawn underline under any `.nav-link.active` — no
  changes needed there; it picks up the new active states automatically.

## Page: About landing (`about.html`, existing file)

- Replace the mission `.body-large` line ([about.html:88](about.html#L88)) with the
  canonical `vision.md` mission line.
- Add a wayfinding row before the Founder section: a `.section-label` ("Go deeper" or
  similar) over three inline mono/uppercase arrow-links to Vision, Strategy, and
  Careers, styled like the existing `.learn-more` link pattern rather than another
  `.pillars` grid (which is already used once on this page for What We Do).
- All other sections (How We Work, What We Do, Core Values, founder bio) are
  unchanged.

## Page: Vision (`about/vision.html`, new)

Content source: `vision.md` **Vision**, **Mission**, **Focus Areas** sections.

- `page-hero` title: "Our Vision"
- Vision: `.section-label` + centered `.body-large` line — *"We imagine a world
  where technology serves the common good."*
- Mission: `.section-label` + centered `.body-large` line — the canonical mission
  statement.
- Focus Areas: `.section-label` with a small dim/mono "coming soon" tag next to it
  (for the "Policy recommendations: forthcoming" note — not rendered as full body
  text). Three items (Democratic Renewal, Common Prosperity, Protecting Humanity),
  each with its full paragraph from `vision.md`, rendered with the existing
  `.methods`/`.method`/`.method-title`/`.method-text` component
  ([shared.css:168-188](shared.css#L168-L188)) rather than `.pillars` — these are
  full paragraphs (~70-90 words), not short phrases.
  - Page-scoped override: bump `.method-title` `min-width` from `150px` to `200px`
    on this page only, since "Democratic Renewal" / "Common Prosperity" /
    "Protecting Humanity" are longer than the existing method titles (Agency,
    Rigor, Openness).

## Page: Strategy (`about/strategy.html`, new)

Content source: `vision.md` **Theory of Change** and **Roadmap** sections, plus a
link out to the organizer handbook (the existing `/learn` page).

- `page-hero` title: "Our Strategy"
- Theory of Change intro paragraph → `.body-large`.
- The three "how we do it" items (Building a network of activists / Challenging
  politicians / Local to nation) → `.methods`/`.method` component, same pattern as
  Focus Areas on the Vision page and consistent with the existing How We Work
  section on the About landing page.
- **Flywheel** (Act → Recruit → Train): new component — three accent-bordered
  circular badges in a horizontal row connected by arrows, with the final arrow
  curving back to the first badge to read as a repeating cycle. Mono/uppercase
  labels, consistent with the nav/label typography used elsewhere on the site.
  Stacks vertically on mobile (arrows pointing down, with a small "repeats" note
  replacing the loop-back visual, since a curved return arrow is awkward in a
  vertical stack).
- **Roadmap:** new component — a horizontal 3-step tracker (numbered nodes +
  connecting line). Phase 1 ("Test and Learn") is rendered filled/accent-colored
  with a small "current" tag; Phases 2 ("Multi-State Campaigns") and 3 ("National
  Moment") are dimmed/outlined. On mobile, collapses into a left-bordered vertical
  timeline styled consistently with the `.method` row treatment, so it doesn't read
  as a foreign component.
- **Handbook callout:** a single prominent boxed link at the bottom of the page —
  "Want the full playbook? Read the Organizer Handbook →" linking to `/learn` —
  styled as a larger, boxed variant of the existing `.learn-more` link so it reads
  as a clear next step.

## Page: Careers (`about/careers.html`, new)

- `page-hero` title: "Careers"
- One `.body-large` line: volunteer roles are opening soon; check back.
- No signup capture, no role listings. Minimal stub, easy to expand later.

## Out of scope

- Signup/notification capture on the Careers page.
- Restructuring or removing any existing About landing page content.
- Mobile in-nav dropdown/accordion (handled instead via the About landing page's
  wayfinding row).
- Changes to the footer (`footer.js`) — About remains the single footer entry
  point; subpages are reachable from there.

## Testing / QA

- Serve locally via `serve.py` and confirm `.htaccess`-style nested clean URLs
  resolve correctly for `/about/vision`, `/about/strategy`, `/about/careers`.
- Confirm dropdown opens on hover and on keyboard focus (`:focus-within`), and that
  it stays hidden and non-interactive below the 768px breakpoint.
- Confirm `.nav-link.active` and `.nav-dropdown-item.active` states are correct on
  each of the four About-family pages, and that the hand-drawn underline
  (`nav-circle.js`) renders under "About" on all of them.
- Confirm `.reveal` scroll-in animations are applied consistently with how other
  pages use them.
- Responsive check at the site's existing 900px / 768px / 600px breakpoints for the
  new Flywheel and Roadmap components in particular, since they're the only genuinely
  new UI in this feature.
