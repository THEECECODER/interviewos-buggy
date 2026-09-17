import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export default function WelcomePage() {
  return (
    <main className="screen welcome-reference">
      <Header />
      <section className="welcome-reference-content">
        <article className="welcome-reference-card">
          <span className="tag">Assessment</span>
          <h2>Ready to show your craft?</h2>
          <p className="lead">You'll complete a short coding task and two open-ended questions. Read each prompt carefully and work at your own pace.</p>
          <dl className="metrics"><div><dt>SECTIONS</dt><dd>3</dd></div><div><dt>CODING</dt><dd>1 challenge</dd></div><div><dt>WRITING</dt><dd>2 responses</dd></div></dl>
          <div className="card-footer"><p>Once started, the timer cannot be paused.</p><Link href="/questions"><Button>Begin assessment →</Button></Link></div>
        </article>
        <aside className="sidebar-note"><div><p className="eyebrow">TIME LIMIT</p><strong>3 hours</strong><p>Complete the sections within the allotted time.</p></div><div><h3>Before you begin</h3><ul><li>Stable internet connection</li><li>Do not close your browser</li><li>Progress saves automatically</li></ul></div></aside>
      </section>
      <style>{`
        .welcome-reference{background:#fffdf8;color:#292b24}.welcome-reference .app-header{height:58px;padding:0 34px;background:#fffdf8;border-bottom:1px solid #e9e4d9}.welcome-reference .brand-mark{font-size:11px}.welcome-reference .brand-icon{width:18px;height:18px;border-radius:3px;font-size:10px}.welcome-reference .header-divider{width:1px;height:18px;background:#e4ded2}.welcome-reference .app-header h1{font-size:10px;font-weight:500}.welcome-reference .avatar{width:24px;height:24px;font-size:9px;background:#f7e8d9;color:#bd7447}.welcome-reference-content{display:grid;grid-template-columns:minmax(0,1fr) 270px;gap:55px;width:min(900px,calc(100% - 80px));margin:0 auto;padding:82px 0 110px}.welcome-reference-card{padding:24px;background:#fff;border:1px solid #eee8dc;border-radius:10px;box-shadow:0 8px 22px #322a1c0f}.welcome-reference .tag{min-height:20px;padding:0 9px;border-radius:5px;font-size:9px;background:#f7e8d9;color:#bd7447}.welcome-reference-card h2{margin:22px 0 12px;font-size:21px;letter-spacing:-.04em}.welcome-reference .lead{max-width:none;font-size:11px;line-height:1.7;color:#77756d}.welcome-reference .metrics{gap:42px;margin:24px 0}.welcome-reference .metrics dt{font-size:9px;color:#a09a8e}.welcome-reference .metrics dd{font-size:11px;margin-top:6px}.welcome-reference .card-footer{padding-top:20px;border-top:1px solid #eee8dc}.welcome-reference .card-footer p{font-size:10px;color:#999386}.welcome-reference .card-footer .button{min-height:32px;padding:0 14px;border-radius:5px;background:#bd4c2d;font-size:9px}.welcome-reference .sidebar-note{gap:65px;margin-top:20px}.welcome-reference .sidebar-note strong{font-size:31px;margin:8px 0}.welcome-reference .sidebar-note p,.welcome-reference .sidebar-note li{font-size:10px;line-height:1.7;color:#77756d}.welcome-reference .sidebar-note h3{font-size:12px}.welcome-reference .eyebrow{font-size:9px;color:#a09a8e}@media(max-width:700px){.welcome-reference-content{grid-template-columns:1fr;width:calc(100% - 32px);padding:40px 0 55px;gap:30px}.welcome-reference .app-header{padding:0 16px}.welcome-reference .metrics{flex-wrap:wrap;gap:22px}.welcome-reference .card-footer{flex-direction:column;align-items:flex-start;gap:15px}}
      `}</style>
    </main>
  );
}
