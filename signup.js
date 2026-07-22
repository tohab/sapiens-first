// ─── SIGNUP FORM COMPONENT ────────────────────────────────────────────────────
// Replace this URL after deploying your Google Apps Script web app.
// Setup: script.google.com → New project → paste doPost below → Deploy as Web App
//
//   function doPost(e) {
//     var sheet = SpreadsheetApp.openById('1tFA7hIPKjgxoKBRgRaP5L360DzKW5u2IJGo4yNQRqmE').getSheets()[0];
//     var data = JSON.parse(e.postData.contents);
//     sheet.appendRow([new Date(), data.email]);
//     var out = ContentService.createTextOutput(JSON.stringify({ result: 'success' }));
//     out.setMimeType(ContentService.MimeType.JSON);
//     return out;
//   }

const SIGNUP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwq5O0dKmyb7g2phwi0eyM0WXTyFKJfSfG8WpDRnfl426C-LcSIcfQeMYx9N-8Vp3gC/exec';

// Styles for .sf/.sf-done live in shared.css alongside the rest of the design system.

// ─── FACTORY ──────────────────────────────────────────────────────────────────
// createSignupForm({ theme: 'dark'|'light', placeholder, buttonText })
// Returns a DOM node you can append wherever you like.

function createSignupForm(opts) {
  opts = opts || {};
  var theme       = opts.theme       || 'light';
  var placeholder = opts.placeholder || 'your@email.com';
  var btnText     = opts.buttonText  || 'Join →';

  var wrap   = document.createElement('div');
  wrap.className = 'sf sf--' + theme;

  var input  = document.createElement('input');
  input.type = 'email';
  input.placeholder = placeholder;
  input.autocomplete = 'email';

  var btn    = document.createElement('button');
  btn.type   = 'button';
  btn.textContent = btnText;

  wrap.appendChild(input);
  wrap.appendChild(btn);

  function submit() {
    var email = input.value.trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      input.classList.add('sf-err');
      input.focus();
      return;
    }
    input.classList.remove('sf-err');
    btn.disabled = true;
    btn.textContent = '…';

    fetch(SIGNUP_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email })
    }).then(function () {
      var done = document.createElement('span');
      done.className = 'sf-done';
      done.textContent = '✓ You\'re in — we\'ll be in touch.';
      wrap.innerHTML = '';
      wrap.appendChild(done);
      done.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }).catch(function () {
      btn.disabled = false;
      btn.textContent = btnText;
      input.classList.add('sf-err');
    });
  }

  btn.addEventListener('click', submit);
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter') submit(); });

  return wrap;
}
