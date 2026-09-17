"use client";

import { useState } from "react";

const candidates = [
  { name: "Jordan Lee", role: "Backend Platform Engineer", status: "In review", score: "92%", checks: "3 / 4", tone: "amber" },
  { name: "Vikram Singh", role: "Frontend Engineer", status: "Completed", score: "88%", checks: "4 / 4", tone: "green" },
  { name: "Ihvanya Shah", role: "Product Engineer", status: "Completed", score: "84%", checks: "4 / 4", tone: "green" },
];

const checks = [
  { label: "Identity verification", detail: "Government ID and identity match", status: "Verified", tone: "green" },
  { label: "Employment history", detail: "Previous employer confirmation", status: "In review", tone: "amber" },
  { label: "Education verification", detail: "Degree and institution check", status: "Pending", tone: "neutral" },
  { label: "Reference checks", detail: "Manager and peer feedback", status: "Verified", tone: "green" },
];

export default function BackgroundCheckPage() {
  const [activeTab, setActiveTab] = useState("Candidates");
  const [selectedCandidate, setSelectedCandidate] = useState("Jordan Lee");

  return (
    <main className="bc-screen">
      <header className="bc-topbar">
        <div className="bc-company"><span className="bc-company-mark">A</span><strong>ABC Company</strong></div>
        <span className="bc-assessment">Frontend Engineer Assessment</span>
        <span className="bc-user-chip">DA</span>
      </header>

      <div className="bc-shell">
        <aside className="bc-sidebar">
          <div className="bc-sidebar-heading">INTERVIEWOS</div>
          <nav>
            {["Dashboard", "All Assessments", "Candidates", "Results", "Question Bank"].map((item) => (
              <button key={item} className={activeTab === item ? "bc-nav-item active" : "bc-nav-item"} onClick={() => setActiveTab(item)}>
                <span className="bc-nav-dot" />{item}
              </button>
            ))}
          </nav>
          <div className="bc-sidebar-footer"><span className="bc-avatar">MC</span><div><strong>Maya Chen</strong><small>Talent team</small></div></div>
        </aside>

        <section className="bc-content">
          <div className="bc-heading-row">
            <div><p className="bc-kicker">CANDIDATE SCREENING</p><h1>Background checks</h1><p className="bc-subtitle">Review candidate verification and keep every hiring decision moving.</p></div>
            <button className="bc-primary" onClick={() => setSelectedCandidate("Jordan Lee")}>Invite candidate</button>
          </div>

          <div className="bc-metrics">
            <article><span>ACTIVE CHECKS</span><strong>12</strong><small>2 awaiting response</small></article>
            <article><span>COMPLETED</span><strong>24</strong><small>4 cleared this week</small></article>
            <article><span>VERIFICATION RATE</span><strong>78%</strong><small>Across all candidates</small></article>
            <article><span>NEEDS REVIEW</span><strong>5</strong><small>Requires your attention</small></article>
          </div>

          <div className="bc-main-grid">
            <section className="bc-panel bc-candidate-panel">
              <div className="bc-panel-header"><div><h2>Candidate list</h2><p>Manage candidate screening progress.</p></div><button className="bc-link-button">View all</button></div>
              <div className="bc-filter-row"><button className="bc-filter active">All candidates</button><button className="bc-filter">In review</button><button className="bc-filter">Completed</button></div>
              <div className="bc-candidate-list">
                {candidates.map((candidate) => (
                  <button key={candidate.name} className={selectedCandidate === candidate.name ? "bc-candidate selected" : "bc-candidate"} onClick={() => setSelectedCandidate(candidate.name)}>
                    <span className="bc-person-avatar">{candidate.name.split(" ").map((part) => part[0]).join("")}</span>
                    <span className="bc-person-copy"><strong>{candidate.name}</strong><small>{candidate.role}</small></span>
                    <span className={`bc-status ${candidate.tone}`}>{candidate.status}</span>
                    <span className="bc-candidate-score"><strong>{candidate.score}</strong><small>{candidate.checks}</small></span>
                  </button>
                ))}
              </div>
            </section>

            <section className="bc-panel bc-detail-panel">
              <div className="bc-panel-header"><div><p className="bc-kicker">SELECTED CANDIDATE</p><h2>{selectedCandidate}</h2><p>{candidates.find((candidate) => candidate.name === selectedCandidate)?.role ?? "Candidate profile"}</p></div><span className="bc-status amber">In review</span></div>
              <div className="bc-detail-summary"><div><span>OVERALL SCORE</span><strong>92%</strong></div><div><span>TIME USED</span><strong>51 min</strong></div><div><span>COMPLETION</span><strong>3 / 4</strong></div></div>
              <div className="bc-check-header"><h3>Verification checklist</h3><span>3 of 4 complete</span></div>
              <div className="bc-check-list">
                {checks.map((check) => <div className="bc-check" key={check.label}><span className={`bc-check-icon ${check.tone}`}>{check.tone === "green" ? "✓" : "•"}</span><div><strong>{check.label}</strong><small>{check.detail}</small></div><span className={`bc-status ${check.tone}`}>{check.status}</span></div>)}
              </div>
              <div className="bc-detail-actions"><button className="bc-secondary">Open documents</button><button className="bc-primary">Send reminder</button></div>
            </section>
          </div>

          <section className="bc-panel bc-recent-panel"><div className="bc-panel-header"><div><h2>Recent verification activity</h2><p>Latest updates from employers and candidates.</p></div><button className="bc-link-button">View report</button></div><div className="bc-activity"><span className="bc-activity-mark green">✓</span><div><strong>Identity verification completed</strong><p>Jordan Lee · 12 minutes ago</p></div><span className="bc-status green">Verified</span></div><div className="bc-activity"><span className="bc-activity-mark amber">!</span><div><strong>Employment confirmation requested</strong><p>Acme Labs · 34 minutes ago</p></div><span className="bc-status amber">Pending</span></div></section>
        </section>
      </div>

      <style jsx>{`
        .bc-screen{min-height:100vh;background:#f8f4eb;color:#17221c;font-family:Arial,Helvetica,sans-serif}.bc-topbar{height:34px;display:flex;align-items:center;justify-content:space-between;padding:0 28px;background:#fffdf7;border-bottom:1px solid #d8cdbb;font-size:9px}.bc-company,.bc-assessment{display:flex;align-items:center;gap:7px}.bc-company-mark{display:grid;place-items:center;width:15px;height:15px;border:1px solid #d7c9b5;border-radius:3px;font-size:8px}.bc-user-chip{padding:3px 5px;border:1px solid #e4d7c5;border-radius:4px}.bc-shell{display:grid;grid-template-columns:188px 1fr;min-height:calc(100vh - 34px)}.bc-sidebar{display:flex;flex-direction:column;padding:26px 15px 14px;background:#12221b;color:#d6dfd7}.bc-sidebar-heading{margin:0 10px 25px;font-size:9px;letter-spacing:.13em;color:#8e9f94}.bc-sidebar nav{display:grid;gap:5px}.bc-nav-item{display:flex;align-items:center;gap:9px;padding:10px;border:0;border-radius:4px;background:transparent;color:#b9c8bc;text-align:left;font-size:10px;cursor:pointer}.bc-nav-item.active{background:#f2e8d3;color:#17221c;font-weight:700}.bc-nav-dot{width:4px;height:4px;border:1px solid currentColor;border-radius:50%}.bc-sidebar-footer{display:flex;align-items:center;gap:8px;margin-top:auto;padding:10px 5px;background:#203128;border-radius:5px;font-size:9px}.bc-sidebar-footer strong,.bc-sidebar-footer small{display:block}.bc-sidebar-footer small{margin-top:3px;color:#91a396;font-size:8px}.bc-avatar{display:grid;place-items:center;width:24px;height:24px;border-radius:50%;background:#f2e8d3;color:#17221c;font-size:8px}.bc-content{max-width:1250px;width:100%;margin:0 auto;padding:38px 46px 48px}.bc-heading-row,.bc-panel-header,.bc-check-header,.bc-detail-actions{display:flex;align-items:center;justify-content:space-between;gap:18px}.bc-kicker{margin:0 0 8px;font-size:9px;letter-spacing:.09em;color:#8b806e;font-weight:700}.bc-heading-row h1{margin:0;font-size:27px;letter-spacing:-.04em}.bc-subtitle,.bc-panel-header p{margin:8px 0 0;color:#8b806e;font-size:11px}.bc-primary,.bc-secondary,.bc-link-button,.bc-filter{border:1px solid #dfcdb3;border-radius:4px;padding:9px 13px;background:#d75b35;color:white;font-size:10px;font-weight:700;cursor:pointer}.bc-secondary{background:#fffdf7;color:#b64b2d}.bc-link-button{border:0;background:transparent;color:#b64b2d;padding:5px}.bc-metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin:30px 0 20px}.bc-metrics article{padding:15px 16px;background:#fffdf7;border:1px solid #e5d8c4;border-radius:5px;box-shadow:0 3px 0 #f0e5d5}.bc-metrics article:nth-child(2){background:#fff5dc}.bc-metrics article:nth-child(3){background:#edf4e9}.bc-metrics span,.bc-detail-summary span{display:block;font-size:8px;letter-spacing:.06em;color:#9a8d79;font-weight:700}.bc-metrics strong{display:block;margin:8px 0 4px;font-size:24px;font-weight:500;letter-spacing:-.04em}.bc-metrics small{font-size:9px;color:#9a8d79}.bc-main-grid{display:grid;grid-template-columns:1fr 1.05fr;gap:16px}.bc-panel{background:#fffdf7;border:1px solid #e4d7c4;border-radius:6px;padding:20px;box-shadow:0 4px 12px rgba(80,60,35,.035)}.bc-panel-header h2{margin:0;font-size:16px;letter-spacing:-.03em;font-weight:600}.bc-filter-row{display:flex;gap:6px;margin:22px 0 13px}.bc-filter{padding:6px 9px;background:transparent;color:#8d806d;font-weight:500}.bc-filter.active{background:#f2e8d3;color:#4d4a36;border-color:#e5d6bb}.bc-candidate-list{display:grid;gap:7px}.bc-candidate{display:grid;grid-template-columns:30px minmax(0,1fr) auto auto;align-items:center;gap:10px;width:100%;padding:11px 8px;border:1px solid transparent;border-radius:5px;background:transparent;text-align:left;cursor:pointer;color:inherit}.bc-candidate.selected{background:#f7eddb;border-color:#ead8bc}.bc-person-avatar{display:grid;place-items:center;width:29px;height:29px;border-radius:50%;background:#e9eee5;color:#5d795f;font-size:9px;font-weight:700}.bc-person-copy strong,.bc-person-copy small{display:block}.bc-person-copy strong{font-size:10px}.bc-person-copy small,.bc-candidate-score small{margin-top:4px;font-size:8px;color:#9a8d79}.bc-status{display:inline-flex;align-items:center;justify-content:center;padding:4px 7px;border-radius:4px;font-size:8px;white-space:nowrap;background:#eee9df;color:#8e806b}.bc-status.green{background:#e1eedf;color:#5c825b}.bc-status.amber{background:#fae8cf;color:#a16d32}.bc-candidate-score{text-align:right}.bc-candidate-score strong{display:block;font-size:10px;font-weight:600}.bc-detail-summary{display:grid;grid-template-columns:repeat(3,1fr);gap:7px;margin:22px 0;padding:12px;background:#f8f0e1;border:1px solid #ebdcc5;border-radius:5px}.bc-detail-summary strong{display:block;margin-top:7px;font-size:18px;font-weight:500}.bc-check-header{margin:18px 0 10px}.bc-check-header h3{margin:0;font-size:11px}.bc-check-header span{font-size:9px;color:#9a8d79}.bc-check-list{display:grid;gap:8px}.bc-check{display:grid;grid-template-columns:22px minmax(0,1fr) auto;align-items:center;gap:9px;padding:10px 0;border-bottom:1px solid #eee5d8}.bc-check-icon,.bc-activity-mark{display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:#eee9df;color:#9a8d79;font-size:10px}.bc-check-icon.green,.bc-activity-mark.green{background:#e1eedf;color:#5c825b}.bc-check-icon.amber,.bc-activity-mark.amber{background:#fae8cf;color:#a16d32}.bc-check strong,.bc-check small{display:block}.bc-check strong{font-size:10px}.bc-check small{margin-top:3px;font-size:8px;color:#9a8d79}.bc-detail-actions{margin-top:20px}.bc-recent-panel{margin-top:16px}.bc-activity{display:grid;grid-template-columns:24px minmax(0,1fr) auto;align-items:center;gap:10px;padding:14px 0;border-top:1px solid #eee5d8}.bc-activity strong{font-size:10px}.bc-activity p{margin:4px 0 0;font-size:9px;color:#9a8d79}@media(max-width:950px){.bc-content{padding:28px 22px}.bc-main-grid{grid-template-columns:1fr}.bc-metrics{grid-template-columns:repeat(2,1fr)}}@media(max-width:620px){.bc-topbar{padding:0 12px}.bc-assessment{display:none}.bc-shell{grid-template-columns:1fr}.bc-sidebar{padding:12px;min-height:auto}.bc-sidebar-heading{margin-bottom:12px}.bc-sidebar nav{display:flex;overflow-x:auto}.bc-nav-item{white-space:nowrap}.bc-sidebar-footer{display:none}.bc-content{padding:25px 14px}.bc-heading-row{align-items:flex-start;flex-direction:column}.bc-heading-row h1{font-size:25px}.bc-metrics{gap:8px}.bc-metrics article{padding:12px}.bc-main-grid{gap:12px}.bc-panel{padding:14px}.bc-candidate{grid-template-columns:28px minmax(0,1fr) auto}.bc-candidate-score{display:none}.bc-candidate .bc-status{font-size:7px}.bc-detail-actions{align-items:stretch;flex-direction:column}.bc-detail-actions button{width:100%}}
      `}</style>
    </main>
  );
}
