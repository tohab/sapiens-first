const local = window.location.protocol === 'file:';
const footerLinksHtml = SITE_CONFIG.FOOTER_LINKS.map((link) => {
  const href = link.external ? link.href : SITE_CONFIG.pageLink(link.page);
  const attrs = link.external ? ' target="_blank" rel="noopener"' : '';
  return `<a class="footer-link" href="${href}"${attrs}>${link.label}</a>`;
}).join('\n        ');
document.querySelector('footer.footer').innerHTML = `
  <div class="container">
    <div class="footer-inner">
      <a class="footer-logo" href="${local ? 'index.html' : '/'}">Sapiens First</a>
      <nav class="footer-nav">
        ${footerLinksHtml}
      </nav>
      <span class="footer-meta">© ${new Date().getFullYear()} SAPIENS FIRST</span>
    </div>
  </div>
`;
