# US Map Background — Theory of Change Section
## Scroll-Triggered City Dot Animation

**Vision:** The Theory of Change section has a full-bleed US map (from `us.svg`) in the background. As the user scrolls through the three pillars (City Council → State Laws → Federal Policy), dots representing cities light up in waves — local first, then spreading statewide, then national — visualizing the theory of change geographically.

---

## Step-by-Step Plan

Each step is a self-contained, deployed improvement. Steps build on each other but each one is shippable on its own.

---

### Step 1 — Static US map in the background
**Goal:** Get the map rendering correctly behind the Theory of Change section, styled to fit the page's aesthetic.

- Embed `us.svg` as an `<img>` (or inline SVG) absolutely positioned behind the `.section` content
- Style it: desaturated, low-opacity, dark-tinted to match the page palette
- Ensure the text content sits on top and remains readable
- No animation yet — just prove the map looks right

**Done when:** The section renders with the map visible in the background and content is legible.

---

### Step 2 — Overlay city dot layer
**Goal:** Add a separate SVG layer on top of the map with ~30 unlabeled dots at hardcoded city coordinates (lat/lon converted to SVG coordinates).

- Create a second `<svg>` overlay positioned to match the map exactly
- Hardcode dot positions for major cities, grouped by tier:
  - Tier 1: Berkeley/Bay Area, LA, NYC, Chicago, DC, Seattle, Portland, Austin, Denver, Boston, Philadelphia, Atlanta, Miami, Phoenix, Houston (15 cities — high-profile)
  - Tier 2: ~15 more mid-size cities (Nashville, Minneapolis, Detroit, etc.)
- All dots start dim/invisible (opacity ~0.08, small radius)
- No scroll interaction yet — just verify the coordinate system is correct

**Done when:** Dots are visible at the right geographic positions on the map.

---

### Step 3 — Wire scroll position to pillar progress
**Goal:** Use an IntersectionObserver (or scroll listener) to detect which pillar (01, 02, 03) is currently in view, and expose that as a state variable.

- Track scroll position relative to the Theory of Change section
- Define three zones: entering the section / at pillar 01 / at pillar 02 / at pillar 03
- Log the current zone to the console to verify detection works
- No visual changes to the map yet

**Done when:** Console correctly logs which zone the user is in as they scroll through the section.

---

### Step 4 — Light up Tier 1 cities on pillar 01 scroll
**Goal:** When the user reaches pillar 01 (City Council Resolutions), a cluster of dots near Berkeley/major progressive cities light up with a glow effect.

- Trigger: pillar 01 enters view
- Animate: 5–8 specific dots transition from dim → bright with a radial glow (CSS `box-shadow` or SVG `filter`)
- Use a staggered delay so they appear to "spread" rather than all at once
- Dots stay lit as user continues scrolling (no reverse on scroll-up for now)

**Done when:** Scrolling to pillar 01 causes a subset of city dots to glow.

---

### Step 5 — Expand to state capitals on pillar 02 scroll
**Goal:** When pillar 02 (State Laws) enters view, more dots light up — state capitals and major cities across the full US.

- Trigger: pillar 02 enters view
- Animate: remaining Tier 1 cities + Tier 2 cities light up in a wave pattern (left-to-right or center-outward)
- The already-lit dots from Step 4 remain lit, visually showing accumulation
- Glow intensity increases slightly, suggesting movement and momentum

**Done when:** Scrolling to pillar 02 causes a broader wave of dots to light up across the country.

---

### Step 6 — Full national coverage on pillar 03 scroll
**Goal:** Pillar 03 (Federal Policy) triggers all remaining dots lighting up plus a subtle "pulse" that spreads from DC outward.

- Trigger: pillar 03 enters view
- Animate: all dots fully lit; a ripple/pulse animation radiates outward from Washington DC's dot position
- Optional: the map itself brightens slightly or the opacity of the background SVG increases

**Done when:** Scrolling to the final pillar produces a satisfying "all lit up" national coverage moment.

---

### Step 7 — Polish: map fit, responsiveness, reverse-scroll
**Goal:** Clean up edge cases and make the effect feel intentional across viewports.

- Make dots un-light on scroll-up (optional — test whether it feels right)
- Ensure the map scales correctly on mobile (may need to hide or simplify on small screens)
- Tune dot sizes, glow colors, and animation timing against the palette
- Consider: a very subtle map pan/zoom effect as scroll progresses (parallax on the map SVG)

**Done when:** The effect feels polished on desktop and degrades gracefully on mobile.

---

## Key Decisions to Revisit

- **Inline SVG vs `<img>`:** Inline SVG gives more control (can style paths, animate fills) but is verbose. `<img>` is simpler. Decision: start with `<img>` in Step 1, switch to inline if needed in Step 4+.
- **City coordinates:** Need to convert lat/lon to the SVG viewBox coordinate system. The US SVG likely uses Albers projection — will need to check and derive a mapping formula.
- **Animation library:** Plan is to use vanilla CSS transitions + JS scroll events (no library). If timing complexity grows, consider GSAP ScrollTrigger.
- **Reverse scroll:** Lighting up on scroll-down is straightforward; reverse (dimming on scroll-up) requires tracking direction. Defer to Step 7.
