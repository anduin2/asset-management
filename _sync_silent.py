# -*- coding: utf-8 -*-
"""临时脚本：全量同步所有板块（复用 auto_sync 逻辑），但跳过所有通知"""
import shutil, subprocess
from datetime import datetime
from pathlib import Path
import auto_sync as A

def main():
    print(f"=== Silent Sync @ {datetime.now().strftime('%Y-%m-%d %H:%M:%S')} ===")
    changed = False
    changed_names = []

    for name, src in A.SOURCES.items():
        if src is None and name == "macro-matrix.html":
            src = A.find_latest_macro_matrix()
        if src is None or not src.exists():
            print(f"  [miss] {name} source not found, skipping")
            continue
        dst = A.DEPLOY / name
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
            changed_names.append(name)
        A.inject_tags(dst)

    if not changed:
        print("\nCHANGED=false — No changes detected. (no notification)")
        return

    version = datetime.now().strftime("%Y-%m-%dT%H:%M:%S")
    (A.DEPLOY / "version.txt").write_text(version, encoding="utf-8")
    print(f"  [ver] version.txt -> {version}")

    subprocess.run(["git", "add", "-A"], cwd=str(A.DEPLOY), check=True)
    subprocess.run(["git", "commit", "-m", f"Auto sync (silent) @ {version}"], cwd=str(A.DEPLOY), check=True)
    subprocess.run(["git", "push"], cwd=str(A.DEPLOY), check=True)
    r = subprocess.run(["git", "rev-parse", "HEAD"], cwd=str(A.DEPLOY), check=True, capture_output=True, text=True)
    print(f"  [git] pushed. commit={r.stdout.strip()[:7]}")
    print("\nDONE — no notification sent (per user request)")

if __name__ == "__main__":
    main()
