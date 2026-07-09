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
    "daily_commentary.html":  ROOT / "Daily Commentary（NEW）" / "report.html",
    "report-data.js":         ROOT / "Daily Commentary（NEW）" / "report-data.js",
    "deposit.html":           ROOT / "Deposit-main" / "每日存款报价汇总.html",
    "repo.html":              ROOT / "repo-tool-main" / "output" / "每日REPO报价汇总.html",
}

AUTH_TAG = '<script src="auth.js"></script>'
REFRESH_TAG = '<script src="auto_refresh.js"></script>'
INJECT_BLOCK = f'{AUTH_TAG}\n{REFRESH_TAG}'

DATA_JS_RE = re.compile(r'<script src="report-data\.js"(\?v=[^"]*)?"></script>')

def inject_cache_buster(html_path: Path):
    """在 report-data.js 引用上添加时间戳缓存破坏参数"""
    content = html_path.read_text(encoding="utf-8")
    ts = datetime.now().strftime("%Y%m%d%H%M")
    new_tag = f'<script src="report-data.js?v={ts}"></script>'
    new_content = DATA_JS_RE.sub(new_tag, content)
    if new_content != content:
        html_path.write_text(new_content, encoding="utf-8")
        print(f"  [ok] {html_path.name}: cache-buster added (v={ts})")
    else:
        print(f"  [warn] {html_path.name}: report-data.js tag not found for cache-buster")

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
        if not src.exists():
            print(f"  [miss] {src} not found, skipping")
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
        
        # daily_commentary.html 需要缓存破坏参数确保加载最新 data
        if name == "daily_commentary.html":
            inject_cache_buster(dst)
    
    # 更新 version.txt
    version = datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
    ver_path = DEPLOY / "version.txt"
    ver_path.write_text(version, encoding="utf-8")
    print(f"  [ver] version.txt → {version}")
    
    if changed:
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
