(function () {
  /* Inject a hand-drawn SVG oval into every desktop nav link.
     CSS in shared.css animates stroke-dashoffset on hover. */
  document.querySelectorAll('.site-nav .nav-link:not(.active)').forEach(function (link) {
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.classList.add('nav-circle');
    svg.setAttribute('viewBox', '0 0 100 40');
    svg.setAttribute('preserveAspectRatio', 'none');
    svg.setAttribute('aria-hidden', 'true');

    var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    /* Slightly irregular closed oval starting at left side, going clockwise.
       Endpoint (3,21) is 1px off from start (3,20) — hand-drawn overshoot. */
    path.setAttribute('d',
      'M 3,20 C 4,7 25,1 50,1 C 75,1 97,7 97,20 C 97,33 75,39 50,39 C 25,39 3,33 3,21'
    );
    path.setAttribute('pathLength', '1');
    path.setAttribute('stroke', 'currentColor');
    path.setAttribute('stroke-width', '1.8');
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');

    svg.appendChild(path);
    link.appendChild(svg);
  });
})();
