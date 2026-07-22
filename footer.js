const local = window.location.protocol === 'file:';
const footerGroupsHtml = SITE_CONFIG.FOOTER_GROUPS.map((group) => {
  const linksHtml = group.links.map((link) => {
    const href = link.external ? link.href : SITE_CONFIG.pageLink(link.page);
    const attrs = link.external ? ' target="_blank" rel="noopener"' : '';
    return `<a class="footer-link" href="${href}"${attrs}>${link.label}</a>`;
  }).join('\n          ');
  return `
        <div class="footer-col">
          <span class="footer-col-title">${group.title}</span>
          ${linksHtml}
        </div>`;
}).join('\n');
document.querySelector('footer.footer').innerHTML = `
  <div class="container">
    <div class="footer-inner">
      <a class="footer-logo" href="${local ? 'index.html' : '/'}">Sapiens First</a>
      <nav class="footer-nav">${footerGroupsHtml}
      </nav>
      <span class="footer-meta">© ${new Date().getFullYear()} SAPIENS FIRST</span>
    </div>
  </div>
`;
