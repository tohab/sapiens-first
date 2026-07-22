// ─── ACCORDION COMPONENT ──────────────────────────────────────────────────
// Wires up buttons matching toggleSelector, each expected to have its panel
// as the very next sibling. Toggling sets aria-expanded on the button and
// `.is-open` on the panel; the panel's own CSS drives the expand animation.
//
//   createAccordion(selector, { exclusive, onOpen })
//     exclusive: close every other match when one opens (default false)
//     onOpen(toggle): called after a toggle opens, incl. via .open()
//
// Returns { open(card) } to open a card/toggle programmatically (e.g. from
// a deep link), reusing the same exclusivity + onOpen behavior as a click.

function createAccordion(toggleSelector, opts) {
  opts = opts || {};
  var toggles = Array.from(document.querySelectorAll(toggleSelector));

  function closeToggle(toggle) {
    var panel = toggle.nextElementSibling;
    toggle.setAttribute('aria-expanded', 'false');
    if (panel) panel.classList.remove('is-open');
  }

  function openToggle(toggle) {
    if (opts.exclusive) {
      toggles.forEach(function (other) {
        if (other !== toggle) closeToggle(other);
      });
    }
    var panel = toggle.nextElementSibling;
    toggle.setAttribute('aria-expanded', 'true');
    if (panel) panel.classList.add('is-open');
    if (opts.onOpen) opts.onOpen(toggle);
  }

  toggles.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) closeToggle(toggle); else openToggle(toggle);
    });
  });

  return {
    open: function (card) {
      var toggle = card.matches(toggleSelector) ? card : card.querySelector(toggleSelector);
      if (toggle) openToggle(toggle);
    }
  };
}
