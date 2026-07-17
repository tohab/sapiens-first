(function () {
  const nav = document.querySelector('nav.site-nav');
  if (!nav) return;

  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const file = path.split('/').pop().replace(/\.html$/, '');
  const activeAbout = (path === '/about' || path.startsWith('/about/') || file === 'about') ? ' active' : '';
  const activeJoin = (path === '/join' || file === 'join' || file === 'membership') ? ' active' : '';

  nav.innerHTML = `
    <a class="nav-wordmark" href="/">
      <img class="nav-logo" src="/favicons/favicon-32x32.png" alt="Sapiens First">
    </a>
    <div class="nav-links">
      <a class="nav-link${activeAbout}" href="/about">About</a>
      <a class="nav-link${activeJoin}" href="/join">Join</a>
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
