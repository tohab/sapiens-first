const local = window.location.protocol === 'file:';
const lnk = (page) => local ? `${page}.html` : `/${page}`;
document.querySelector('footer.footer').innerHTML = `
  <div class="container">
    <div class="footer-inner">
      <a class="footer-logo" href="${local ? 'index.html' : '/'}">Sapiens First</a>
      <nav class="footer-nav">
        <a class="footer-link" href="${lnk('about')}">About</a>
        <a class="footer-link" href="${lnk('join')}">Join</a>
        <a class="footer-link" href="https://www.zeffy.com/en-US/donation-form/support-sapiens-first" target="_blank" rel="noopener">Donate</a>
        <a class="footer-link" href="${lnk('learn')}">Learn</a>
        <a class="footer-link" href="${lnk('guide')}">Guide</a>
        <a class="footer-link" href="${lnk('privacy')}">Privacy</a>
      </nav>
      <span class="footer-meta">© 2026 SAPIENS FIRST</span>
    </div>
  </div>
`;
