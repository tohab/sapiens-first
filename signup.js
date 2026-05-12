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

const SIGNUP_SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';

// ─── STYLES ───────────────────────────────────────────────────────────────────
(function () {
  var s = document.createElement('style');
  s.textContent =
    '.sf{display:flex;gap:8px;max-width:460px;}' +
    '.sf input{' +
      'flex:1;min-width:0;' +
      'font-family:var(--font-body,sans-serif);font-size:16px;font-weight:400;' +
      'padding:13px 16px;border-radius:5px;outline:none;' +
      'transition:border-color .2s,background .2s;' +
    '}' +
    '.sf--dark input{background:rgba(255,255,255,0.1);border:1px solid rgba(255,255,255,0.22);color:#fff;}' +
    '.sf--dark input::placeholder{color:rgba(255,255,255,0.38);}' +
    '.sf--dark input:focus{border-color:rgba(255,255,255,0.55);background:rgba(255,255,255,0.14);}' +
    '.sf--light input{background:rgba(20,18,14,0.04);border:1px solid rgba(20,18,14,0.15);color:#141210;}' +
    '.sf--light input::placeholder{color:rgba(20,18,14,0.35);}' +
    '.sf--light input:focus{border-color:var(--accent,#CD551D);background:rgba(205,85,29,0.04);}' +
    '.sf input.sf-err{border-color:#b91c1c!important;}' +
    '.sf button{' +
      'font-family:var(--font-mono,monospace);font-size:12px;font-weight:500;' +
      'letter-spacing:0.16em;text-transform:uppercase;' +
      'padding:13px 22px;' +
      'background:var(--accent,#CD551D);color:#fff;' +
      'border:none;border-radius:5px;cursor:pointer;' +
      'white-space:nowrap;flex-shrink:0;' +
      'transition:opacity .2s;' +
    '}' +
    '.sf button:hover:not(:disabled){opacity:0.84;}' +
    '.sf button:disabled{opacity:0.5;cursor:default;}' +
    '.sf-done{' +
      'font-family:var(--font-mono,monospace);font-size:13px;' +
      'letter-spacing:0.1em;text-transform:uppercase;' +
      'padding:14px 0;display:block;' +
    '}' +
    '.sf--dark .sf-done{color:rgba(255,255,255,0.85);}' +
    '.sf--light .sf-done{color:var(--accent,#CD551D);}' +
    '@media(max-width:480px){.sf{flex-direction:column;}.sf button{width:100%;}}';
  document.head.appendChild(s);
})();

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
    if (!email || !email.includes('@')) {
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
