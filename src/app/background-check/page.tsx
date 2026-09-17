"use client";

import { useState } from "react";

type Candidate = { name: string; role: string; docs: string; employers: string; status: string };

const candidates: Candidate[] = [
  { name: "Anjali Mehta", role: "Senior Frontend Engineer", docs: "3 / 4 docs", employers: "1 / 3 employers", status: "Docs pending" },
  { name: "Jordan Lee", role: "Junior UX Designer", docs: "3 / 3 docs", employers: "1 / 2 employers", status: "In progress" },
  { name: "Vikram Singh", role: "Data Analyst", docs: "2 / 3 docs", employers: "2 / 2 employers", status: "Needs review" },
  { name: "David Chen", role: "Software Engineer", docs: "3 / 3 docs", employers: "2 / 2 employers", status: "Verified" },
  { name: "Aisha Khan", role: "Senior Frontend Engineer", docs: "2 / 3 docs", employers: "0 / 2 employers", status: "Docs pending" },
  { name: "Marcus Holt", role: "Marketing Specialist", docs: "2 / 3 docs", employers: "1 / 1 employer", status: "Verified" },
  { name: "Neha Kapoor", role: "Junior Frontend Intern", docs: "1 / 3 docs", employers: "0 / 1 employer", status: "Docs pending" },
  { name: "Lee Wong", role: "Product Engineer", docs: "3 / 3 docs", employers: "1 / 2 employers", status: "In progress" },
  { name: "George Smith", role: "Backend Platform Engineer", docs: "3 / 3 docs", employers: "0 / 1 employer", status: "Awaiting reply" },
];

const employerRows = [
  { company: "Acme Labs", date: "Apr 2021 — Jul 2024", status: "Awaiting reply", requested: "12 Aug", outcome: "—", reminder: "Remind" },
  { company: "Northern Cloud", date: "Jan 2019 — Mar 2021", status: "Verified", requested: "11 Aug", outcome: "Match", reminder: "Sent" },
  { company: "Orion Systems", date: "Jul 2017 — Dec 2018", status: "Awaiting reply", requested: "12 Aug", outcome: "—", reminder: "Remind" },
];

export default function BackgroundCheckPage() {
  const [view, setView] = useState<"list" | "detail">("list");
  const [selected, setSelected] = useState("Anjali Mehta");

  const openCandidate = (name: string) => {
    setSelected(name);
    setView("detail");
  };

  return (
    <main className="verification-screen">
      <header className="verification-topbar">
        <div><strong>ABC Company</strong><span>Background checks</span></div>
        <span className="topbar-user">DA</span>
      </header>

      <div className="verification-shell">
        <aside className="verification-sidebar">
          <p className="workspace-label">HIRING WORKSPACE</p>
          <nav>
            {["Dashboard", "All Assessments", "Background checks", "Results", "Question Bank"].map((item) => (
              <button key={item} className={item === "Background checks" ? "side-link active" : "side-link"} onClick={() => item === "Background checks" ? setView("list") : undefined}>
                <span>•</span>{item}
              </button>
            ))}
          </nav>
          <div className="sidebar-user"><span className="sidebar-avatar">MC</span><div><strong>Maya Chen</strong><small>Talent lead</small></div></div>
        </aside>

        <section className="verification-content">
          {view === "list" ? (
            <>
              <div className="page-heading"><div><h1>Selected candidates</h1><p>Review and manage background checks for candidates selected across all assessments.</p></div></div>
              <div className="filters"><label>SEARCH<input placeholder="Search candidates" /></label><label>STATUS<select defaultValue="all"><option value="all">All statuses</option><option>Verified</option><option>In progress</option><option>Docs pending</option></select></label><label>ASSESSMENT<select defaultValue="all"><option value="all">All assessments</option></select></label><label>SORT BY<select defaultValue="recent"><option value="recent">Recently selected</option></select></label></div>
              <div className="list-heading"><h2>Candidate list</h2><span>16 candidates</span></div>
              <div className="candidate-table">
                {candidates.map((candidate) => (
                  <button className="candidate-row" key={candidate.name} onClick={() => openCandidate(candidate.name)}>
                    <span className="candidate-name"><strong>{candidate.name}</strong><small>{candidate.role}</small></span>
                    <span>{candidate.docs}</span><span>{candidate.employers}</span><span className="muted">{candidate.status}</span><span className="open-button">{candidate.name === "Vikram Singh" ? "Review" : "Open"}</span>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="detail-heading"><div><h1>{selected}</h1><p>Background check · Selected from Senior Frontend Engineer assessment · Started 12 Aug</p></div><button className="outline-button" onClick={() => setView("list")}>Back to candidates</button></div>
              <section className="status-banner"><div><span>CHECK STATUS</span><strong>In progress⌄</strong></div><button className="outline-button">Send reminder</button></section>
              <section className="detail-card"><h2>Candidate documents</h2><p>Employers receive an email to confirm dates, designation, reason for leaving, and rehire eligibility.</p><div className="document-fields"><label>RELIEVING LETTER<input value="Uploaded · 12 Aug 2026" readOnly /></label><label>PAYSLIPS<input value="2 of 3 months uploaded" readOnly /></label><button className="outline-button">Upload docs</button></div></section>
              <section className="detail-card"><h2>Employer verification</h2><div className="employer-table"><div className="employer-header"><span>EMPLOYER</span><span>STATUS</span><span>REQUESTED</span><span>OUTCOME</span><span>REMINDER</span><span>ACTION</span></div>{employerRows.map((row) => <div className="employer-row" key={row.company}><div><strong>{row.company}</strong><small>{row.date}</small></div><span className={row.status === "Verified" ? "pill green" : "pill amber"}>{row.status}</span><span>{row.requested}</span><strong>{row.outcome}</strong><span className="reminder">↗ {row.reminder}</span><span className="reminder">✉ Open</span></div>)}</div></section>
            </>
          )}
        </section>
      </div>

      <style jsx>{`
        .verification-screen{min-height:100vh;background:#242825;color:#19231d;font-family:Arial,Helvetica,sans-serif}.verification-topbar{height:40px;margin:0 0 0 43px;display:flex;align-items:center;justify-content:space-between;padding:0 18px 0 12px;background:#fffdf7;border-bottom:1px solid #d8cdbb;font-size:10px}.verification-topbar>div{display:flex;gap:38px;align-items:center}.verification-topbar span{color:#6e756d}.topbar-user{padding:4px 6px;background:#f6e7d2;border-radius:5px;color:#c66b42!important}.verification-shell{display:grid;grid-template-columns:152px 1fr;min-height:calc(100vh - 40px);margin-left:43px;margin-right:43px}.verification-sidebar{background:#12221b;color:#b9c8bc;padding:20px 9px 12px;display:flex;flex-direction:column}.workspace-label{font-size:7px;letter-spacing:.08em;color:#87998d;margin:0 9px 14px}.side-link{display:flex;gap:7px;align-items:center;width:100%;border:0;background:transparent;color:#b9c8bc;text-align:left;padding:8px 9px;border-radius:4px;font-size:8px;cursor:pointer}.side-link.active{background:#f2e5cc;color:#18241c;font-weight:700}.side-link span{font-size:12px}.sidebar-user{display:flex;gap:7px;align-items:center;margin-top:auto;padding:8px 6px;background:#203229;border-radius:5px;font-size:8px}.sidebar-user strong,.sidebar-user small{display:block}.sidebar-user small{color:#90a194;font-size:7px;margin-top:3px}.sidebar-avatar{display:grid;place-items:center;width:21px;height:21px;border-radius:50%;background:#fffdf7;color:#6c756c;font-size:7px}.verification-content{background:#fffdf7;padding:27px 27px 40px;min-width:0}.page-heading h1,.detail-heading h1{font-size:18px;margin:0 0 8px;letter-spacing:-.04em;font-weight:600}.page-heading p,.detail-heading p,.detail-card>p{font-size:9px;color:#827c70;margin:0}.filters{display:grid;grid-template-columns:minmax(150px,1fr) 110px 120px 115px;gap:8px;margin:24px 0 18px}.filters label,.document-fields label{display:grid;gap:6px;color:#8c8373;font-size:7px}.filters input,.filters select,.document-fields input{width:100%;height:27px;border:1px solid #eee2cf;border-radius:5px;background:#fffdf7;padding:0 8px;font-size:8px;color:#5f665d}.list-heading{display:flex;align-items:center;justify-content:space-between;margin-bottom:7px}.list-heading h2,.detail-card h2{font-size:11px;margin:0;font-weight:600}.list-heading span{font-size:7px;color:#9b927f}.candidate-table{border-top:1px solid #eee4d4}.candidate-row{display:grid;grid-template-columns:minmax(180px,1.5fr) 80px 95px 95px 42px;align-items:center;gap:8px;width:100%;border:1px solid #eee4d4;border-top:0;background:#fffdf7;padding:9px 8px;text-align:left;color:#283128;cursor:pointer;font-size:8px}.candidate-row:hover{background:#f8f0df}.candidate-name strong,.candidate-name small{display:block}.candidate-name strong{font-size:8px}.candidate-name small{font-size:7px;color:#9b927f;margin-top:3px}.muted{font-size:7px;color:#a69b89}.open-button{border:1px solid #e8d9c3;border-radius:4px;padding:5px 4px;text-align:center;font-size:7px}.detail-heading{display:flex;align-items:start;justify-content:space-between;gap:20px;border-bottom:1px solid #eee3d1;padding-bottom:17px}.outline-button{border:1px solid #e4bda6;border-radius:4px;background:#fffdf7;color:#c65e3b;padding:7px 11px;font-size:8px;cursor:pointer;white-space:nowrap}.status-banner{display:flex;align-items:center;justify-content:space-between;border-left:3px solid #d65c38;border-top:1px solid #eee3d1;border-right:1px solid #eee3d1;border-bottom:1px solid #eee3d1;border-radius:4px;padding:13px 10px;margin:17px 0 14px}.status-banner span{display:block;font-size:7px;color:#817867}.status-banner strong{display:block;font-size:10px;margin-top:5px;font-weight:500}.detail-card{border:1px solid #eee3d1;border-radius:6px;padding:15px;margin-bottom:14px}.detail-card h2{margin-bottom:8px}.document-fields{display:grid;grid-template-columns:1fr 1fr auto;align-items:end;gap:9px;margin-top:15px}.employer-table{margin-top:13px;border:1px solid #eee3d1;border-radius:5px;overflow:hidden}.employer-header,.employer-row{display:grid;grid-template-columns:1.45fr 1fr .8fr .65fr .85fr .55fr;gap:8px;align-items:center;padding:10px 8px;font-size:7px}.employer-header{background:#f3ede0;color:#827966;font-size:6px}.employer-row{border-top:1px solid #eee3d1}.employer-row>div strong,.employer-row>div small{display:block}.employer-row>div small{font-size:6px;color:#9a8e7c;margin-top:4px}.pill{display:inline-flex;justify-content:center;padding:4px 6px;border-radius:8px;font-size:6px}.pill.green{background:#e2efdf;color:#60815d}.pill.amber{background:#f8e6b9;color:#a27b31}.reminder{color:#d05d3b;font-size:7px}@media(max-width:900px){.verification-shell{margin:0;grid-template-columns:145px 1fr}.verification-topbar{margin:0}.verification-content{padding:22px 18px}.filters{grid-template-columns:1fr 1fr}.candidate-row{grid-template-columns:minmax(150px,1fr) 70px 80px 75px 42px}.employer-table{overflow-x:auto}.employer-header,.employer-row{min-width:650px}}@media(max-width:600px){.verification-shell{display:block}.verification-sidebar{padding:12px;min-height:auto}.verification-sidebar nav{display:flex;overflow:auto}.side-link{white-space:nowrap;width:auto}.sidebar-user{display:none}.verification-content{padding:20px 12px}.verification-topbar>div{gap:10px}.filters{grid-template-columns:1fr}.candidate-row{grid-template-columns:minmax(130px,1fr) 55px 42px}.candidate-row>span:nth-child(3),.candidate-row>span:nth-child(4){display:none}.detail-heading{flex-direction:column}.document-fields{grid-template-columns:1fr}.status-banner{align-items:flex-start;gap:12px;flex-direction:column}}
      `}</style>
    </main>
  );
}
