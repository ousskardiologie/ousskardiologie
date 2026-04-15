// Shared navigation injector — included on echo/index.html and doppler/index.html
(function() {
  const depth = window.location.pathname.includes('/echo/') || window.location.pathname.includes('/doppler/') || window.location.pathname.includes('/notes/') ? '../' : '';

  const bar = document.createElement('div');
  bar.id = 'global-nav';
  bar.innerHTML = `
    <style>
      #global-nav {
        position: fixed; top: 0; left: 0; right: 0; height: 44px;
        background: rgba(255,255,255,0.97);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid #e9e9e7;
        display: flex; align-items: center; padding: 0 20px; gap: 6px;
        z-index: 99999; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 13.5px;
      }
      #global-nav a {
        display: flex; align-items: center; gap: 6px; padding: 5px 12px;
        border-radius: 6px; text-decoration: none; color: #37352f; font-weight: 500;
        transition: background .15s;
      }
      #global-nav a:hover { background: #f1f1ef; }
      #global-nav a.active { background: #e8f3fc; color: #2383e2; }
      #global-nav .home-link { font-weight: 700; color: #e03e3e; }
      #global-nav .sep { color: #ccc; font-size: 12px; }
      #global-nav .spacer { flex: 1; }
      #global-nav .notes-btn {
        background: #2383e2; color: white !important; font-weight: 600;
      }
      #global-nav .notes-btn:hover { background: #1a6fc4 !important; }
    </style>
    <a href="${depth}index.html" class="home-link">🫀 Kardiologie</a>
    <span class="sep">›</span>
    <a href="${depth}echo/index.html" id="nav-echo">📡 Echo-Kurs</a>
    <span class="sep">›</span>
    <a href="${depth}doppler/index.html" id="nav-doppler">🔊 Doppler</a>
    <div class="spacer"></div>
    <a href="${depth}notes/index.html" class="notes-btn" id="nav-notes">✏️ Meine Notizen</a>
  `;
  document.body.prepend(bar);

  // Mark active
  const path = window.location.pathname;
  if (path.includes('/echo/')) document.getElementById('nav-echo').classList.add('active');
  if (path.includes('/doppler/')) document.getElementById('nav-doppler').classList.add('active');
  if (path.includes('/notes/')) document.getElementById('nav-notes').classList.add('active');

  // Push content down
  document.body.style.paddingTop = '44px';
  const sidebar = document.querySelector('.sidebar');
  if (sidebar) sidebar.style.top = '44px';
  const topbar = document.querySelector('.topbar');
  if (topbar) topbar.style.top = '44px';
  const header = document.querySelector('.header');
  if (header) { header.style.top = '44px'; document.body.style.paddingTop = '100px'; }
})();
