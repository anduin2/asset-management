// ── 登录验证 ──
(function() {
  if (sessionStorage.getItem('_auth_') === 'ok') return;

  // 阻止页面显示
  document.documentElement.style.display = 'none';

  var style = document.createElement('style');
  style.textContent = [
    '#_login_overlay { position:fixed; top:0; left:0; width:100%; height:100%;',
    '  background:linear-gradient(135deg,#0f172a,#1e293b); z-index:99999;',
    '  display:flex; align-items:center; justify-content:center; font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif; }',
    '#_login_box { background:rgba(30,41,59,0.95); border:1px solid rgba(148,163,184,0.2);',
    '  border-radius:16px; padding:48px 40px; width:360px; max-width:90vw; text-align:center; }',
    '#_login_box h2 { color:#e2e8f0; font-size:1.5rem; margin-bottom:8px; }',
    '#_login_box .sub { color:#94a3b8; font-size:0.85rem; margin-bottom:32px; }',
    '#_login_box input { width:100%; padding:12px 16px; border-radius:10px; border:1px solid rgba(148,163,184,0.25);',
    '  background:rgba(15,23,42,0.8); color:#e2e8f0; font-size:1rem; margin-bottom:14px; outline:none; transition:border 0.2s; }',
    '#_login_box input:focus { border-color:#6366f1; }',
    '#_login_box button { width:100%; padding:12px; border-radius:10px; border:none;',
    '  background:linear-gradient(135deg,#6366f1,#8b5cf6); color:#fff; font-size:1rem; font-weight:600;',
    '  cursor:pointer; transition:opacity 0.2s; }',
    '#_login_box button:hover { opacity:0.9; }',
    '#_login_error { color:#f87171; font-size:0.82rem; margin-top:8px; min-height:20px; }'
  ].join('\n');
  document.head.appendChild(style);

  var overlay = document.createElement('div');
  overlay.id = '_login_overlay';
  overlay.innerHTML = [
    '<div id="_login_box">',
    '<h2>资管项目报告中心</h2>',
    '<p class="sub">请输入账号密码登录</p>',
    '<input type="text" id="_user" placeholder="用户名" autocomplete="off">',
    '<input type="password" id="_pass" placeholder="密码">',
    '<button id="_login_btn">登 录</button>',
    '<div id="_login_error"></div>',
    '</div>'
  ].join('');
  document.body.appendChild(overlay);

  var userInput = document.getElementById('_user');
  var passInput = document.getElementById('_pass');
  var btn = document.getElementById('_login_btn');
  var err = document.getElementById('_login_error');

  function tryLogin() {
    var u = userInput.value.trim();
    var p = passInput.value;
    if (u === 'CLAMC' && p === '1234') {
      sessionStorage.setItem('_auth_', 'ok');
      overlay.remove();
      document.documentElement.style.display = '';
    } else {
      err.textContent = '用户名或密码错误';
      passInput.value = '';
      passInput.focus();
    }
  }

  btn.addEventListener('click', tryLogin);
  passInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') tryLogin();
  });
  userInput.focus();

  // 同时修改 title hint
  var origTitle = document.title;
  document.title = '请登录 — ' + origTitle;

  // 页面加载完成后显示
  document.addEventListener('DOMContentLoaded', function() {
    document.documentElement.style.display = '';
  });
})();
