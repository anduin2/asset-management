"""
auto_sync.py — 自动同步最新报告到部署目录
每次运行：复制最新输出 → 注入认证/自动刷新 → 更新版本号
"""
import os, shutil, re, subprocess, json, smtplib, urllib.request, urllib.parse, tempfile
from datetime import datetime
from pathlib import Path
from email.mime.text import MIMEText
from email.header import Header

ROOT = Path(r"c:\Users\fixedincome.intern\Desktop\资管项目")
DEPLOY = ROOT / "deploy"

SOURCES = {
    "intel.html":             ROOT / "Daily Commentary" / "output" / "卖方每日情报.html",
    "deposit.html":           ROOT / "Deposit-main" / "每日存款报价汇总.html",
    "repo.html":              ROOT / "repo-tool-main" / "output" / "每日REPO报价汇总.html",
    "交易台报告.html":         ROOT / "交易台报告" / "卖方每日情报.html",
    "trading_data.js":        ROOT / "交易台报告" / "report-data.js",
    "ca-report.html":         ROOT / "Corporate Actions" / "ca-report.html",
    "macro-dashboard.html":   ROOT / "宏观" / "indicator_dashboard.html",
    "macro-matrix.html":      None,  # 动态查找最新 FI_Daily_Digest_*.html 或 固定收益宏观日报.html
}

def find_latest_macro_matrix():
    """在 宏观研报 目录下找到最新的宏观矩阵报告"""
    macro_dir = ROOT / "宏观研报"
    # 优先匹配 FI_Daily_Digest_*.html，其次 固定收益宏观日报.html
    files = sorted(macro_dir.glob("FI_Daily_Digest_*.html"), reverse=True)
    if not files:
        files = sorted(macro_dir.glob("固定收益宏观日报.html"))
    return files[0] if files else None

# 板块友好名称（通知/日志用）
BOARD_NAMES = {
    "intel.html": "卖方每日情报",
    "deposit.html": "每日存款报价汇总",
    "repo.html": "每日 REPO 报价汇总",
    "交易台报告.html": "交易台报告",
    "trading_data.js": "交易台数据",
    "ca-report.html": "Corporate Actions",
    "macro-dashboard.html": "宏观指标仪表盘",
    "macro-matrix.html": "宏观矩阵日报",
}

AUTH_TAG = '<script src="auth.js"></script>'
REFRESH_TAG = '<script src="auto_refresh.js"></script>'
INJECT_BLOCK = f'{AUTH_TAG}\n{REFRESH_TAG}'

REPORT_DATA_RE = re.compile(r'<script src="report-data\.js[^"]*"></script>')
TRADING_DATA_RE = re.compile(r'<script src="trading_data\.js"(\?v=[^"]*)?"></script>')

# ============================================================
# 邮件通知配置（推送成功后发送）
# ============================================================
NOTIFY_RECIPIENT = os.environ.get("SMTP_RECIPIENT", "fiteam@clamc.com.hk")
SMTP_CONFIG_PATH = DEPLOY / "smtp_config.json"
NOTIFY_CONFIG_PATH = DEPLOY / "notify_config.json"
PAGES_URL = "https://anduin2.github.io/asset-management/"

def load_notify_config():
    """通知渠道配置：企业微信 Webhook / Server酱 SendKey 等。环境变量优先，其次 notify_config.json"""
    cfg = {
        "wecom_webhook": os.environ.get("WECOM_WEBHOOK", ""),
        "serverchan_sendkey": os.environ.get("SERVERCHAN_SENDKEY", ""),
    }
    if NOTIFY_CONFIG_PATH.exists():
        try:
            file_cfg = json.loads(NOTIFY_CONFIG_PATH.read_text(encoding="utf-8"))
            for k, v in file_cfg.items():
                if v:
                    cfg[k] = v
        except Exception as e:
            print(f"  [notify] notify_config.json 解析失败: {e}")
    return cfg

def build_summary(board_results, commit_hash):
    """把本次板块变更摘要拼成一段文本（企业微信/邮件共用）。
    board_results: [(name, status, size_kb)]，status ∈ updated/same/miss"""
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    updated, unchanged, missing = [], [], []
    for name, status, size_kb in board_results:
        friendly = BOARD_NAMES.get(name, name)
        if status == "updated":
            updated.append(f"· {friendly}（{size_kb:.0f} KB）")
        elif status == "same":
            unchanged.append(f"· {friendly}")
        else:
            missing.append(f"· {friendly}")

    parts = [f"状态：✅ 部署成功", f"同步时间：{now}", f"Commit：{commit_hash}", ""]
    parts.append(f"✅ 已更新（{len(updated)}）：")
    parts.extend(updated)
    if unchanged:
        parts.append("")
        parts.append(f"⏸ 未更新（{len(unchanged)}）：")
        parts.extend(unchanged)
    if missing:
        parts.append("")
        parts.append(f"⚠️ 源文件缺失（{len(missing)}）：")
        parts.extend(missing)
    parts.append("")
    parts.append(f"在线查看：{PAGES_URL}")
    return "\n".join(parts)

def send_wecom_notification(summary):
    """推送成功后发到企业微信群机器人。未配置时仅告警不阻断。"""
    cfg = load_notify_config()
    url = cfg.get("wecom_webhook", "")
    if not url:
        print("  [notify] 企业微信 Webhook 未配置，跳过通知")
        return False
    payload = json.dumps(
        {"msgtype": "text", "text": {"content": f"【资管项目】报告已更新\n{summary}"}},
        ensure_ascii=False
    ).encode("utf-8")
    req = urllib.request.Request(url, data=payload, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read().decode("utf-8"))
        if result.get("errcode") == 0:
            print("  [notify] 企业微信通知已发送")
            return True
        print(f"  [notify] 企业微信返回错误: {result}")
        return False
    except Exception as e:
        print(f"  [notify] 企业微信通知失败: {e}")
        return False

def send_serverchan_notification(summary, title="【资管项目】部署成功"):
    """发到个人微信（Server酱）。未配置时仅告警不阻断。title 可自定义（成功/失败）。"""
    cfg = load_notify_config()
    sendkey = cfg.get("serverchan_sendkey", "")
    if not sendkey:
        print("  [notify] Server酱 SendKey 未配置，跳过通知")
        return False
    url = f"https://sctapi.ftqq.com/{sendkey}.send"
    data = urllib.parse.urlencode({
        "title": title,
        "desp": summary,
    }).encode("utf-8")
    req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/x-www-form-urlencoded"})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read().decode("utf-8"))
        if result.get("code") == 0:
            print("  [notify] Server酱通知已发送")
            return True
        print(f"  [notify] Server酱返回错误: {result}")
        return False
    except Exception as e:
        print(f"  [notify] Server酱通知失败: {e}")
        return False

def notify(summary):
    """按配置向所有已配置渠道发送通知（企业微信 + Server酱 + PowerShell 邮件）"""
    send_wecom_notification(summary)
    send_serverchan_notification(summary)
    send_powershell_notification(summary, title="【资管项目】报告更新通知")

def send_failure_notification(error_msg):
    """git 提交/推送失败时发告警到 Server酱/企业微信，确保用户知道上传失败。不发邮件。"""
    summary = (
        f"状态：❌ 部署失败\n"
        f"时间：{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
        f"错误信息：\n{error_msg}\n"
    )
    send_serverchan_notification(summary, title="【资管项目】上传失败告警")
    # 失败时不发邮件（仅 Server酱/微信推送）

def send_nochange_notification(board_results):
    """无变更时仅发 Server酱通知，告知用户本轮已检查且所有板块无变化。不发邮件。"""
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    unchanged, missing = [], []
    for name, status, size_kb in board_results:
        friendly = BOARD_NAMES.get(name, name)
        if status == "miss":
            missing.append(f"· {friendly}")
        else:
            unchanged.append(f"· {friendly}")
    summary = (
        f"状态：⏸ 本轮无更新\n"
        f"同步时间：{now}\n"
        f"已检查板块（均无变化）：\n" + "\n".join(unchanged)
    )
    if missing:
        summary += f"\n\n⚠️ 源文件缺失：\n" + "\n".join(missing)
    summary += f"\n\n在线查看：{PAGES_URL}"
    send_serverchan_notification(summary, title="【资管项目】本轮无更新")
    # 无变化时不发邮件（仅 Server酱/微信推送）

def send_powershell_notification(summary, title="【资管项目】部署成功"):
    """通过 PowerShell 调用本机 Outlook COM 发信（走已登录的公司邮箱，无需 SMTP/密码）。
    中文正文/标题写入临时 UTF-8 文件，再由 PowerShell 读取，避免命令行编码乱码。
    注意：本机没有可达的 SMTP 服务器（mail.clamc.com.hk 25/587/465 均连不通），
    公司邮箱实际走 M365/Graph API，故用 Outlook COM 是最可靠的 PowerShell 发信方式。
    邮件正文自动附带问候语（各位同事），无落款（发件人为团队邮箱）。"""
    cfg = load_smtp_config()
    recipient = cfg.get("recipient") or NOTIFY_RECIPIENT

    # 邮件正文：问候语 + 正文（无落款，发件人为团队邮箱）
    full_body = "各位同事，大家好：\n\n" + summary

    tmp = Path(tempfile.gettempdir())
    title_file = tmp / "ms_mail_title.txt"
    body_file = tmp / "ms_mail_body.txt"
    title_file.write_text(title, encoding="utf-8")
    body_file.write_text(full_body, encoding="utf-8")

    ps = (
        "$title = Get-Content -Raw -Encoding UTF8 $env:MAIL_TITLE_FILE; "
        "$body = Get-Content -Raw -Encoding UTF8 $env:MAIL_BODY_FILE; "
        "$body = $body -replace \"`r?`n\", \"`r`n\"; "
        "$wasRunning = $null -ne (Get-Process outlook -ErrorAction SilentlyContinue); "
        "$ol = New-Object -ComObject Outlook.Application; "
        "$mail = $ol.CreateItem(0); "
        "$mail.Subject = $title; "
        "$mail.Body = $body; "
        "$mail.To = $env:MAIL_TO; "
        "$mail.Send(); "
        "if (-not $wasRunning) { Start-Sleep -Seconds 2; $ol.Quit() }"
    )

    env = os.environ.copy()
    env["MAIL_TO"] = recipient
    env["MAIL_TITLE_FILE"] = str(title_file)
    env["MAIL_BODY_FILE"] = str(body_file)

    try:
        r = subprocess.run(
            ["powershell", "-NoProfile", "-ExecutionPolicy", "Bypass",
             "-Command", ps],
            capture_output=True, text=True, timeout=120, env=env,
            errors="replace"
        )
    finally:
        for f in (title_file, body_file):
            try:
                f.unlink()
            except OSError:
                pass

    if r.returncode == 0:
        print(f"  [notify] PowerShell(Outlook) 邮件已发送 → {recipient}")
        return True
    err = (r.stderr or r.stdout or "").strip()
    print(f"  [notify] PowerShell 发信失败: {err}")
    return False

def load_smtp_config():
    """SMTP 配置：环境变量优先，其次 smtp_config.json（本地文件，勿提交）"""
    cfg = {
        "host": os.environ.get("SMTP_HOST", ""),
        "port": int(os.environ.get("SMTP_PORT", "587")),
        "user": os.environ.get("SMTP_USER", ""),
        "password": os.environ.get("SMTP_PASSWORD", ""),
        "sender": os.environ.get("SMTP_SENDER", ""),
        "recipient": NOTIFY_RECIPIENT,
    }
    if SMTP_CONFIG_PATH.exists():
        try:
            file_cfg = json.loads(SMTP_CONFIG_PATH.read_text(encoding="utf-8"))
            for k, v in file_cfg.items():
                if v:
                    cfg[k] = v
        except Exception as e:
            print(f"  [notify] smtp_config.json 解析失败: {e}")
    if not cfg.get("sender"):
        cfg["sender"] = cfg["user"]
    return cfg

def send_notification(summary):
    """推送成功后，把本次变更摘要发到指定邮箱。配置缺失时仅告警不阻断。"""
    cfg = load_smtp_config()
    if not (cfg.get("host") and cfg.get("user") and cfg.get("password")):
        print("  [notify] SMTP 未配置（缺 host/user/password），跳过邮件通知")
        return False

    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    body = f"资管项目报告已自动同步并推送到 GitHub Pages。\n\n{summary}\n"
    subject = f"【资管项目】报告已更新 {now}"

    msg = MIMEText(body, "plain", "utf-8")
    msg["Subject"] = Header(subject, "utf-8")
    msg["From"] = cfg["sender"]
    msg["To"] = cfg["recipient"]

    try:
        port = int(cfg.get("port", 25))
        # 端口自适应：465=SSL，587=STARTTLS，25/其他=明文（自建服务器常用 25）
        if port == 465:
            server = smtplib.SMTP_SSL(cfg["host"], port, timeout=20)
        else:
            server = smtplib.SMTP(cfg["host"], port, timeout=20)
        with server:
            server.ehlo()
            if port == 587:
                server.starttls()
                server.ehlo()
            server.login(cfg["user"], cfg["password"])
            server.sendmail(cfg["sender"], [cfg["recipient"]], msg.as_string())
        print(f"  [notify] 邮件已发送 → {cfg['recipient']}")
        return True
    except Exception as e:
        print(f"  [notify] 邮件发送失败: {e}")
        return False

def fixup_trading_desk_html(html_path: Path):
    """修复 交易台报告.html：将 report-data.js 引用替换为 trading_data.js + 缓存破坏"""
    content = html_path.read_text(encoding="utf-8")
    # Step 1: 把 report-data.js 引用替换为 trading_data.js（兼容带/不带版本号）
    ts = datetime.now().strftime("%Y%m%d%H%M")
    new_tag = f'<script src="trading_data.js?v={ts}"></script>'
    if REPORT_DATA_RE.search(content):
        content = REPORT_DATA_RE.sub(new_tag, content)
    else:
        # fallback: 如果已有 trading_data.js 引用，更新版本号
        content = TRADING_DATA_RE.sub(new_tag, content)
    html_path.write_text(content, encoding="utf-8")
    print(f"  [ok] {html_path.name}: script ref fixed → trading_data.js (v={ts})")

def inject_tags(html_path: Path):
    """在 <body> 后注入 auth.js + auto_refresh.js（如果尚未注入）"""
    content = html_path.read_text(encoding="utf-8")
    
    # 检查是否已注入
    if REFRESH_TAG in content:
        print(f"  [skip] {html_path.name} already has auth+refresh tags")
        return
    
    # 移除旧版单独 auth.js 标签（如果有）
    content = content.replace(AUTH_TAG + '\n', '')
    
    # 在 <body> 后注入
    injected = re.sub(r'(<body[^>]*>)', r'\1\n' + INJECT_BLOCK, content, count=1)
    
    if injected == content:
        print(f"  [warn] {html_path.name}: <body> tag not found")
    else:
        html_path.write_text(injected, encoding="utf-8")
        print(f"  [ok] {html_path.name}: auth+refresh injected")

def main():
    print(f"=== Auto Sync @ {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} ===")
    changed = False
    board_results = []
    
    for name, src in SOURCES.items():
        # 动态查找 macro_matrix 源文件
        if src is None and name == "macro-matrix.html":
            src = find_latest_macro_matrix()
        
        if src is None or not src.exists():
            print(f"  [miss] {name} source not found, skipping")
            board_results.append((name, "miss", None))
            continue
        
        dst = DEPLOY / name
        
        # 检查是否有变化（对比文件大小/修改时间）
        need_copy = True
        if dst.exists():
            src_mtime = src.stat().st_mtime
            dst_mtime = dst.stat().st_mtime
            if src_mtime <= dst_mtime:
                print(f"  [same] {name} — no changes")
                need_copy = False
        
        if need_copy:
            shutil.copy2(src, dst)
            size_kb = src.stat().st_size / 1024
            print(f"  [copy] {name} — updated ({size_kb:.0f} KB)")
            changed = True
            board_results.append((name, "updated", size_kb))
        else:
            board_results.append((name, "same", None))
        
        # 注入 auth + refresh tags
        inject_tags(dst)
        
        # 交易台报告.html: 修复 script src 引用 + 缓存破坏
        if name == "交易台报告.html":
            fixup_trading_desk_html(dst)
    
    if changed:
        # 只有真正有变更时才更新 version.txt
        version = datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
        ver_path = DEPLOY / "version.txt"
        ver_path.write_text(version, encoding="utf-8")
        print(f"  [ver] version.txt → {version}")
        print(f"\n*** CHANGED=true ***")
        try:
            subprocess.run(["git", "add", "-A"], cwd=str(DEPLOY), check=True)
            subprocess.run(
                ["git", "commit", "-m", f"Auto sync @ {version}"],
                cwd=str(DEPLOY), check=True
            )
            subprocess.run(["git", "push"], cwd=str(DEPLOY), check=True)
            print(f"  [git] pushed to GitHub Pages")
            # 推送成功后：提取变更摘要 → 发通知（企业微信 + 可选邮件）
            r = subprocess.run(
                ["git", "rev-parse", "HEAD"],
                cwd=str(DEPLOY), check=True, capture_output=True, text=True
            )
            commit_hash = r.stdout.strip()[:7]
            summary = build_summary(board_results, commit_hash)
            notify(summary)
        except subprocess.CalledProcessError as e:
            print(f"  [git] FAILED: {e}")
            send_failure_notification(str(e))
    else:
        print(f"\nCHANGED=false — No changes detected.")
        send_nochange_notification(board_results)
    
    return changed

if __name__ == "__main__":
    main()
