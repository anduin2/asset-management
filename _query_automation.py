import sqlite3, json, io
con = sqlite3.connect(r'C:\Users\fixedincome.intern\AppData\Roaming\CodeBuddy\automations\automations.db')
cur = con.cursor()
out = io.StringIO()
cols = ['id','name','status','schedule_type','next_run_at','last_run_at','cwds','rrule','scheduled_at','valid_from','valid_until','push_to_wechat']
cur.execute(f"SELECT {','.join(cols)} FROM automations")
for row in cur.fetchall():
    d = dict(zip(cols, row))
    out.write(json.dumps(d, ensure_ascii=False, default=str) + "\n")
out.write("\n---PROMPT---\n")
cur.execute("SELECT id, prompt FROM automations")
for rid, prompt in cur.fetchall():
    out.write(f"\n### {rid}\n{prompt}\n")
con.close()
with open(r'c:\Users\fixedincome.intern\Desktop\资管项目\deploy\_automation_dump.txt', 'w', encoding='utf-8') as f:
    f.write(out.getvalue())
print("DONE")
