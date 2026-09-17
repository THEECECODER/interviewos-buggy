"use client";

import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const options = ["Use focus trapping and a clear close action.", "Disable keyboard controls.", "Use color alone for every state.", "Hide labels until hover."];

export default function QuestionsPage() {
  return (
    <main className="screen questions-reference">
      <Header />
      <section className="questions-reference-layout">
        <article className="questions-reference-stack">
          <section className="question-card coding-task"><div><p className="eyebrow">CODING CHALLENGE</p><h2>Bracket combinations</h2><p>20 mins · JavaScript</p></div><Link href="/challenge"><Button>Start challenge</Button></Link></section>
          <section className="response-card"><div className="question-title"><span className="tag">01</span><h2>How many years of experience do you have as a developer?</h2></div><p className="question-helper">Please answer honestly.</p><textarea placeholder="Write your response here..." /></section>
          <section className="mcq-card"><div className="question-title"><span className="tag">02</span><h2>Which behavior is essential for an accessible modal dialog?</h2></div>{options.map((option,index)=><label key={option} className={index===0?"selected-option":""}><input type="radio" name="modal" defaultChecked={index===0}/>{option}</label>)}</section>
          <section className="mcq-card"><div className="question-title"><span className="tag">03</span><h2>What is a key principle of universal design?</h2></div><label><input type="radio" name="design"/>Design for the widest range of users.</label><label><input type="radio" name="design"/>Design for one average user.</label></section>
        </article>
        <aside className="questions-reference-rail"><p className="eyebrow">TIME LEFT</p><strong>2:47:12</strong><h2>Your progress</h2><ul><li>Coding challenge <span>Not started</span></li><li>Open-ended <span>2 questions</span></li><li>Review & submit <span>Locked</span></li></ul><Button>Submit assessment</Button></aside>
      </section>
      <style>{`.questions-reference{background:#fffdf8}.questions-reference .app-header{height:58px;padding:0 34px;background:#fffdf8;border-bottom:1px solid #e9e4d9}.questions-reference .brand-mark{font-size:11px}.questions-reference .brand-icon{width:18px;height:18px;border-radius:3px;font-size:10px}.questions-reference .header-divider{width:1px;height:18px}.questions-reference .app-header h1{font-size:10px;font-weight:500}.questions-reference .avatar{width:24px;height:24px;font-size:9px;background:#f7e8d9;color:#bd7447}.questions-reference-layout{display:grid;grid-template-columns:minmax(0,1fr) 235px;gap:14px;padding:14px 18px;background:#f0eee6;min-height:calc(100vh - 58px)}.questions-reference-stack{display:grid;gap:12px;min-width:0}.questions-reference .question-card,.questions-reference .response-card,.questions-reference .mcq-card,.questions-reference-rail{border:1px solid #eee8dc;border-radius:8px;box-shadow:0 6px 16px #322a1c0b;background:#fff;padding:14px}.questions-reference .coding-task{display:flex;justify-content:space-between;align-items:center}.questions-reference .eyebrow{font-size:8px;color:#a09a8e;letter-spacing:.06em}.questions-reference h2{font-size:13px;margin:8px 0}.questions-reference p{font-size:9px;color:#77756d}.questions-reference .button{min-height:28px;padding:0 12px;border-radius:5px;background:#bd4c2d;font-size:9px}.questions-reference .question-title{display:flex;align-items:center;gap:8px;margin-bottom:12px}.questions-reference .tag{min-height:18px;padding:0 7px;border-radius:4px;font-size:8px;background:#f7e8d9;color:#bd7447}.questions-reference textarea{width:100%;height:80px;resize:none;border:1px solid #e8e2d7;border-radius:5px;padding:10px;font-size:10px}.questions-reference label{display:flex;gap:8px;align-items:center;padding:9px;margin-top:6px;border:1px solid #eee8dc;border-radius:5px;font-size:9px;color:#77756d}.questions-reference .selected-option{background:#fff1df;border-color:#d9a66b}.questions-reference-rail{background:#fffdf8}.questions-reference-rail strong{display:block;font-size:29px;margin:10px 0 55px;color:#292b24}.questions-reference-rail ul{list-style:none;padding:0;margin:20px 0}.questions-reference-rail li{display:flex;justify-content:space-between;gap:10px;padding:10px 0;border-bottom:1px solid #eee8dc;font-size:9px;color:#57534a}.questions-reference-rail li span{color:#aaa093}.questions-reference-rail .button{width:100%;margin-top:180px}@media(max-width:800px){.questions-reference-layout{grid-template-columns:1fr;padding:12px}.questions-reference-rail .button{margin-top:30px}.questions-reference .coding-task{align-items:flex-start;gap:12px;flex-direction:column}}
      `}</style>
    </main>
  );
}
