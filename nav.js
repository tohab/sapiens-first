if (window.location.protocol === 'file:') {
  document.querySelectorAll('a[href^="/"]').forEach(a => {
    const page = a.getAttribute('href').replace(/^\//, '').replace(/\/$/, '') || 'index';
    a.href = page ? page + '.html' : 'index.html';
  });
}

(function () {
  const nav = document.querySelector('nav.site-nav');
  if (!nav) return;

  const local = window.location.protocol === 'file:';
  const path = window.location.pathname.replace(/\/$/, '') || '/';
  const file = path.split('/').pop().replace(/\.html$/, '');
  const href = (page) => local ? `${page}.html` : `/${page}`;
  const active = (page) => {
    return (path === `/${page}` || file === page) ? ' active' : '';
  };
  nav.innerHTML = `
    <a class="nav-wordmark" href="${local ? 'index.html' : '/'}">
      <img class="nav-logo" src="favicons/favicon-32x32.png" alt="Sapiens First">
    </a>
    <div class="nav-links">
      <a class="nav-link${active('about')}" href="${href('about')}">About</a>
      <a class="nav-link${active('events')}" href="${href('events')}">Events</a>
      <a class="nav-link${active('join')}" href="${href('join')}">Join</a>
      <a class="nav-link nav-donate" href="https://www.zeffy.com/en-US/donation-form/support-sapiens-first" target="_blank" rel="noopener">Donate</a>
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
})();
