(function() {
  const depth = window.location.pathname.includes('/echo/') || window.location.pathname.includes('/doppler/') || window.location.pathname.includes('/notes/') ? '../' : '';

  const bar = document.createElement('div');
  bar.id = 'global-nav';
  bar.innerHTML = `
    <style>
      #global-nav {
        position: fixed; top: 0; left: 0; right: 0; height: 44px;
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
        border-bottom: 1px solid #e9e9e7;
        display: flex; align-items: center; padding: 0 16px; gap: 4px;
        z-index: 99999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 13.5px;
        -webkit-tap-highlight-color: transparent;
      }
      #global-nav a, #global-nav button {
        display: flex; align-items: center; gap: 5px;
        padding: 5px 10px; border-radius: 6px;
        text-decoration: none; color: #37352f; font-weight: 500;
        font-family: inherit; font-size: 13.5px; border: none;
        background: none; cursor: pointer; white-space: nowrap;
        transition: background .15s; -webkit-tap-highlight-color: transparent;
        min-height: 36px; /* touch target */
      }
      #global-nav a:hover, #global-nav button:hover { background: #f1f1ef; }
      #global-nav a.gnav-active { background: #e8f3fc; color: #2383e2; }
      #global-nav .gnav-brand { font-weight: 700; color: #e03e3e; font-size: 15px; }
      #global-nav .gnav-spacer { flex: 1; }
      #global-nav .gnav-notes {
        background: #2383e2; color: white !important; font-weight: 600; font-size: 13px;
        padding: 5px 12px; border-radius: 7px;
      }
      #global-nav .gnav-notes:hover { background: #1a6fc4 !important; }
      #global-nav .gnav-sep { color: #ccc; font-size: 11px; flex-shrink: 0; }
      /* Hide text labels on small screens, keep icons */
      @media (max-width: 400px) {
        #global-nav .gnav-label { display: none; }
        #global-nav a { padding: 5px 8px; }
      }
    </style>
    <a href="${depth}index.html" class="gnav-brand">🫀 <span class="gnav-label">Kardio</span></a>
    <span class="gnav-sep">›</span>
    <a href="${depth}echo/index.html" id="gnav-echo">📡 <span class="gnav-label">Echo</span></a>
    <span class="gnav-sep">›</span>
    <a href="${depth}doppler/index.html" id="gnav-doppler">🔊 <span class="gnav-label">Doppler</span></a>
    <div class="gnav-spacer"></div>
    <a href="${depth}notes/index.html" class="gnav-notes" id="gnav-notes">✏️ <span class="gnav-label">Notizen</span></a>
  `;
  document.body.prepend(bar);

  // Mark active link
  const path = window.location.pathname;
  if (path.includes('/echo/')) document.getElementById('gnav-echo').classList.add('gnav-active');
  else if (path.includes('/doppler/')) document.getElementById('gnav-doppler').classList.add('gnav-active');
  else if (path.includes('/notes/')) document.getElementById('gnav-notes').classList.add('gnav-active');

  // Push page content down
  const pushDown = 44;
  document.body.style.paddingTop = pushDown + 'px';

  // Adjust sidebar / topbar / header that is already fixed
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.style.top = pushDown + 'px';
  const topbar = document.querySelector('.topbar');
  if (topbar) { topbar.style.top = pushDown + 'px'; document.querySelector('.main') && (document.querySelector('.main').style.paddingTop = (parseInt(getComputedStyle(document.querySelector('.main')).paddingTop) + pushDown) + 'px'); }
  const header = document.querySelector('.header');
  if (header) { header.style.top = pushDown + 'px'; document.body.style.paddingTop = (pushDown + 56) + 'px'; }
})();
