(function () {
  const nav = document.querySelector('nav.site-nav');
  if (!nav) return;

  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const file = path.split('/').pop().replace(/\.html$/, '');

  // Per-page active-state rules; each page can match multiple URL shapes
  // (extensionless production paths, raw .html files, path prefixes, etc.)
  // so this can't be derived purely from the flat NAV_LINKS data.
  const activeMatchers = {
    about: () => path === '/about' || path.startsWith('/about/') || file === 'about',
    join: () => path === '/join' || file === 'join' || file === 'membership',
  };

  const navLinksHtml = SITE_CONFIG.NAV_LINKS.map(({ page, label }) => {
    const active = (activeMatchers[page] && activeMatchers[page]()) ? ' active' : '';
    return `<a class="nav-link${active}" href="${SITE_CONFIG.pageLink(page)}">${label}</a>`;
  }).join('\n      ');

  nav.innerHTML = `
    <a class="nav-wordmark" href="/">
      <img class="nav-logo" src="/favicons/favicon-32x32.png" alt="Sapiens First">
    </a>
    <div class="nav-links">
      ${navLinksHtml}
      <a class="nav-link nav-donate" href="${SITE_CONFIG.DONATION_URL}" target="_blank" rel="noopener">Donate</a>
    </div>
    <button class="nav-burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
  `;

  const burger = nav.querySelector('.nav-burger');
  const navLinks = nav.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    navLinks.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflowY = open ? 'hidden' : '';
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && burger.classList.contains('open')) {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflowY = '';
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && burger.classList.contains('open')) {
      burger.classList.remove('open');
      navLinks.classList.remove('open');
      document.body.style.overflowY = '';
    }
  });
  // On mobile, replace forced breaks in hero titles with spaces so natural
  // word-wrap governs layout instead of desktop-tuned line breaks.
  if (window.matchMedia('(max-width: 600px)').matches) {
    document.querySelectorAll('.page-title br').forEach(function (br) {
      br.replaceWith(' ');
    });
  }
})();
