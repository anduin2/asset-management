"""
auto_sync.py — 自动同步最新报告到部署目录
每次运行：复制最新输出 → 注入认证/自动刷新 → 更新版本号
"""
import os, shutil, re, subprocess, json, smtplib, urllib.request, urllib.parse
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

AUTH_TAG = '<script src="auth.js"></script>'
REFRESH_TAG = '<script src="auto_refresh.js"></script>'
INJECT_BLOCK = f'{AUTH_TAG}\n{REFRESH_TAG}'

REPORT_DATA_RE = re.compile(r'<script src="report-data\.js[^"]*"></script>')
TRADING_DATA_RE = re.compile(r'<script src="trading_data\.js"(\?v=[^"]*)?"></script>')

# ============================================================
# 邮件通知配置（推送成功后发送）
# ============================================================
NOTIFY_RECIPIENT = os.environ.get("SMTP_RECIPIENT", "fixedincome.intern@clamc.com.hk")
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

def build_summary(changed_files, commit_hash):
    """把本次变更摘要拼成一段文本（企业微信/邮件共用）"""
    now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    lines = "\n".join(f"· {name}（{size:.0f} KB）" for name, size in changed_files)
    return (
        f"同步时间：{now}\n"
        f"Commit：{commit_hash}\n"
        f"更新文件：\n{lines}\n"
        f"在线查看：{PAGES_URL}"
    )

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

def send_serverchan_notification(summary):
    """推送成功后发到个人微信（Server酱）。未配置时仅告警不阻断。"""
    cfg = load_notify_config()
    sendkey = cfg.get("serverchan_sendkey", "")
    if not sendkey:
        print("  [notify] Server酱 SendKey 未配置，跳过通知")
        return False
    url = f"https://sctapi.ftqq.com/{sendkey}.send"
    data = urllib.parse.urlencode({
        "title": "【资管项目】报告已更新",
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
    """按配置向所有已配置渠道发送通知（企业微信 + Server酱 + 邮件）"""
    send_wecom_notification(summary)
    send_serverchan_notification(summary)
    send_notification(summary)

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
        port = int(cfg.get("port", 587))
        with smtplib.SMTP(cfg["host"], port, timeout=20) as server:
            server.ehlo()
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
    changed_files = []
    
    for name, src in SOURCES.items():
        # 动态查找 macro_matrix 源文件
        if src is None and name == "macro-matrix.html":
            src = find_latest_macro_matrix()
        
        if src is None or not src.exists():
            print(f"  [miss] {name} source not found, skipping")
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
            changed_files.append((name, size_kb))
        
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
            summary = build_summary(changed_files, commit_hash)
            notify(summary)
        except subprocess.CalledProcessError as e:
            print(f"  [git] FAILED: {e}")
    else:
        print(f"\nCHANGED=false — No changes detected.")
    
    return changed

if __name__ == "__main__":
    main()
