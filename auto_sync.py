"""
auto_sync.py — 自动同步最新报告到部署目录
每次运行：复制最新输出 → 注入认证/自动刷新 → 更新版本号
"""
import os, shutil, re, subprocess
from datetime import datetime
from pathlib import Path

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
            print(f"  [copy] {name} — updated ({src.stat().st_size/1024:.0f} KB)")
            changed = True
        
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
        except subprocess.CalledProcessError as e:
            print(f"  [git] FAILED: {e}")
    else:
        print(f"\nCHANGED=false — No changes detected.")
    
    return changed

if __name__ == "__main__":
    main()
