const SITE_CONFIG = {
  DONATION_URL: 'https://www.zeffy.com/en-US/donation-form/support-sapiens-first',
  JOIN_URL: 'https://sapiensfirst.org/join',
  GUIDE_DOC_ID: '1dG4DL_Bak93Sah1LK5oSxtXQ3yQvWp15UMWFv-z9Nvs',
  EVENTS_SHEET_ID: '1mkPKC7MmmKhW8PS2K-7lqmjreQOln6zz9t5C-lSDqOU',
  EMBER_COLORS: ['#f97316','#fb923c','#fbbf24','#ef4444','#f59e0b','#fdba74'],
  EMBER_COUNT: 174,
};

// Resolve a page name to a link, working both in production (clean, extensionless
// URLs served via .htaccess rewrites) and when the site is opened directly from
// disk via file:// (no rewrite support, so the real .html file must be targeted).
SITE_CONFIG.pageLink = function (page) {
  return window.location.protocol === 'file:' ? `${page}.html` : `/${page}`;
};

// Single source of truth for the top nav links (excludes Donate, which is
// rendered separately in nav.js as a distinct external/styled item).
SITE_CONFIG.NAV_LINKS = [
  { page: 'about', label: 'About' },
  { page: 'join', label: 'Join' },
];

// Single source of truth for the footer links, in render order.
SITE_CONFIG.FOOTER_LINKS = [
  { page: 'about', label: 'About' },
  { page: 'join', label: 'Join' },
  { label: 'Donate', href: SITE_CONFIG.DONATION_URL, external: true },
  { page: 'learn', label: 'Learn' },
  { page: 'privacy', label: 'Privacy' },
];

function initEmberField() {
  const field = document.querySelector('.ember-field');
  if (!field) return;
  for (let i = 0; i < SITE_CONFIG.EMBER_COUNT; i++) {
    const el = document.createElement('div');
    el.className = 'ember';
    const size = 1.5 + Math.random() * 2;
    const col = SITE_CONFIG.EMBER_COLORS[Math.floor(Math.random() * SITE_CONFIG.EMBER_COLORS.length)];
    const dur = (2.2 + Math.random() * 3.52).toFixed(2);
    const del = (-Math.random() * 7).toFixed(2);
    const peak = (0.35 + Math.random() * 0.55).toFixed(2);
    const glow = (size * 1.8).toFixed(1);
    const x = Math.random() * 100;
    const u = Math.random();
    const y = (-0.8 + Math.sqrt(0.64 + 0.8 * u)) / 0.4 * 100;
    el.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;background:${col};--ec:${col};--ed:${dur}s;--ey:${del}s;--ep:${peak};--eg:${glow}px`;
    field.appendChild(el);
  }
}
