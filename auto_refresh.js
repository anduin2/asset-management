// ── 手动刷新 + 回到导航页 ──
(function() {
  // 回到导航页按钮
  var homeBtn = document.createElement('button');
  homeBtn.textContent = '🏠 导航';
  homeBtn.style.cssText = [
    'position: fixed',
    'bottom: 76px',
    'right: 24px',
    'z-index: 9999',
    'padding: 10px 18px',
    'font-size: 15px',
    'font-weight: 600',
    'color: #374151',
    'background: #f3f4f6',
    'border: 1px solid #d1d5db',
    'border-radius: 8px',
    'cursor: pointer',
    'box-shadow: 0 2px 12px rgba(0,0,0,0.08)',
    'transition: background 0.2s, transform 0.1s',
    'outline: none'
  ].join(';');

  homeBtn.onmouseenter = function() {
    homeBtn.style.background = '#e5e7eb';
  };
  homeBtn.onmouseleave = function() {
    homeBtn.style.background = '#f3f4f6';
  };
  homeBtn.onmousedown = function() {
    homeBtn.style.transform = 'scale(0.95)';
  };
  homeBtn.onmouseup = function() {
    homeBtn.style.transform = 'scale(1)';
  };
  homeBtn.onclick = function() {
    location.href = './';
  };

  // 刷新按钮
  var refreshBtn = document.createElement('button');
  refreshBtn.textContent = '⟳ 刷新';
  refreshBtn.style.cssText = [
    'position: fixed',
    'bottom: 24px',
    'right: 24px',
    'z-index: 9999',
    'padding: 10px 18px',
    'font-size: 15px',
    'font-weight: 600',
    'color: #fff',
    'background: #1a56db',
    'border: none',
    'border-radius: 8px',
    'cursor: pointer',
    'box-shadow: 0 2px 12px rgba(26,86,219,0.35)',
    'transition: background 0.2s, transform 0.1s',
    'outline: none'
  ].join(';');

  refreshBtn.onmouseenter = function() {
    refreshBtn.style.background = '#1e40af';
  };
  refreshBtn.onmouseleave = function() {
    refreshBtn.style.background = '#1a56db';
  };
  refreshBtn.onmousedown = function() {
    refreshBtn.style.transform = 'scale(0.95)';
  };
  refreshBtn.onmouseup = function() {
    refreshBtn.style.transform = 'scale(1)';
  };
  refreshBtn.onclick = function() {
    refreshBtn.textContent = '刷新中…';
    refreshBtn.style.pointerEvents = 'none';
    location.reload(true);
  };

  document.body.appendChild(homeBtn);
  document.body.appendChild(refreshBtn);

  // 首页只显示刷新按钮，不显示导航按钮
  var isHome = location.pathname === '/' || location.pathname.endsWith('/index.html') || location.pathname.split('/').filter(Boolean).length === 0;
  if (isHome) {
    homeBtn.style.display = 'none';
  }
})();
