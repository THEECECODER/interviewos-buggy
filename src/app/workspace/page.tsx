"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

const codeLines = [
  "function generateParentheses(n: number): string[] {",
  "  const result: string[] = [];",
  "  function backtrack(current: string, open: number, close: number) {",
  "    if (current.length === n * 2) { result.push(current); return; }",
  "    if (open < n) backtrack(current + '(', open + 1, close);",
  "    if (close < open) backtrack(current + ')', open, close + 1);",
  "  }",
  "  backtrack('', 0, 0);",
  "  return result;",
  "}",
];

export default function WorkspacePage() {
  const [copilotOpen, setCopilotOpen] = useState(false);

  return (
    <main className="screen workspace-reference">
      <Header title="Bracket combinations" />
      <section className="workspace-reference-grid">
        <aside className="workspace-problem">
          <span className="tag tag-warning">Hard</span>
          <h2>The problem</h2>
          <p>
            Given an integer n, generate every unique sequence of balanced parentheses. A sequence
            is valid when every opening bracket has a matching closing bracket.
          </p>
          <h3>EXAMPLE</h3>
          <div className="workspace-example"><strong>Input: 2</strong><span>Output: ["(())", "()()"]</span></div>
          <div className="workspace-example"><strong>Input: 3</strong><span>Output: 5</span></div>
          <h3>Success checklist</h3>
          <ul><li>Returns every valid pair</li><li>No duplicate values</li><li>Handles edge cases</li></ul>
        </aside>

        <section className="workspace-editor">
          <div className="workspace-editor-top"><span>JavaScript · main.ts</span><span>Saved just now</span></div>
          <div className="workspace-editor-tabs"><span>main.ts</span><button onClick={() => setCopilotOpen((value) => !value)}>{copilotOpen ? "Close AI" : "AI Copilot"}</button><span>Run & verify</span></div>
          <pre className="workspace-code">{codeLines.map((line, index) => <span key={index}><b>{String(index + 1).padStart(2, "0")}</b><code>{line}</code></span>)}</pre>
          <div className="workspace-editor-bottom"><span>⌘ Enter to run</span><Button>Run code</Button></div>
          {copilotOpen && <div className="copilot-panel"><div className="copilot-heading"><strong>AI Copilot</strong><button onClick={() => setCopilotOpen(false)}>×</button></div><p>Ask for help with your code or generate test cases.</p><div className="copilot-message">How can I optimize this solution?</div><div className="copilot-message assistant">Try backtracking with open and close counters to avoid invalid states.</div><Button>Draft solution</Button></div>}
        </section>

        <aside className="workspace-output">
          <div className="workspace-output-top"><strong>Run & verify</strong><span>Saved just now</span></div>
          <label>TEST INPUT<input defaultValue="2" /></label>
          <label>OUTPUT<div className="workspace-output-log">Your console output will appear here.</div></label>
          <div className="workspace-result"><strong>RESULT</strong><span>1/3 tests passed</span></div>
        </aside>
      </section>
      <footer className="workspace-reference-footer"><span>22:10 remaining</span><Button>Submit solution</Button></footer>
      <style>{`
        .workspace-reference{background:#fffdf8;color:#292b24}.workspace-reference .app-header{height:58px;padding:0 34px;background:#fffdf8;border-bottom:1px solid #e9e4d9}.workspace-reference .brand-mark{font-size:11px}.workspace-reference .brand-icon{width:18px;height:18px;border-radius:3px;font-size:10px}.workspace-reference .header-divider{width:1px;height:18px;background:#e4ded2}.workspace-reference .app-header h1{font-size:10px;font-weight:500}.workspace-reference .avatar{width:24px;height:24px;font-size:9px;background:#f7e8d9;color:#bd7447}.workspace-reference-grid{display:grid;grid-template-columns:270px minmax(0,1fr) 270px;gap:8px;padding:14px 18px;min-height:calc(100vh - 114px);background:#f0eee6}.workspace-problem,.workspace-editor,.workspace-output{min-width:0;border-radius:8px;overflow:hidden}.workspace-problem{padding:18px 14px;background:#fff;border:1px solid #eee8dc}.workspace-problem h2{font-size:16px;margin:20px 0 10px}.workspace-problem h3{font-size:9px;letter-spacing:.08em;color:#999386;margin:24px 0 8px}.workspace-problem p,.workspace-problem li{font-size:10px;line-height:1.55;color:#77756d}.workspace-problem ul{padding-left:14px}.workspace-example{display:grid;gap:5px;padding:10px;background:#f5ecdc;border-radius:5px;margin:8px 0;font-size:9px;color:#6b5b45}.workspace-example span{color:#8c7c66}.workspace-reference .tag{min-height:19px;padding:0 8px;border-radius:5px;font-size:9px}.workspace-editor,.workspace-output{background:#101e18;color:#e6eee8;position:relative}.workspace-editor{padding:14px 16px;display:flex;flex-direction:column}.workspace-editor-top,.workspace-editor-tabs,.workspace-editor-bottom,.workspace-output-top{display:flex;justify-content:space-between;align-items:center;gap:10px;font-size:9px;color:#91a197}.workspace-editor-tabs{justify-content:flex-start;margin-top:14px}.workspace-editor-tabs button{border:0;border-radius:4px;padding:5px 9px;background:#b94d2e;color:#fff;font-size:8px}.workspace-code{flex:1;margin:24px 0;font:10px/2.1 Consolas,monospace;white-space:pre-wrap}.workspace-code span{display:grid;grid-template-columns:24px 1fr;gap:12px}.workspace-code b{color:#52655a;font-weight:400}.workspace-code code{color:#dbe6dc}.workspace-editor-bottom button,.workspace-reference-footer .button{background:#c64f2f;border-radius:5px;min-height:29px;padding:0 13px;font-size:9px}.workspace-output{padding:14px}.workspace-output-top{color:#e6eee8}.workspace-output label{display:grid;gap:8px;margin-top:22px;font-size:9px;color:#91a197}.workspace-output input{height:30px;padding:0 9px;background:#1a2a22;border:1px solid #34463b;border-radius:4px;color:#e6eee8}.workspace-output-log{min-height:160px;padding:10px;background:#1a2a22;border:1px solid #34463b;border-radius:4px;color:#65786c}.workspace-result{margin:18px -14px -14px;padding:12px 14px;background:#25352c;display:grid;gap:5px;font-size:9px}.workspace-result span{color:#9bad9f}.workspace-reference-footer{display:flex;justify-content:flex-end;align-items:center;gap:20px;padding:12px 24px;background:#fffdf8;border-top:1px solid #e9e4d9;color:#77756d;font-size:10px}.copilot-panel{position:absolute;left:18px;bottom:18px;width:240px;padding:12px;background:#fffaf1;color:#4c4439;border-radius:8px;box-shadow:0 10px 30px #0004;font-size:10px}.copilot-heading{display:flex;justify-content:space-between}.copilot-heading button{border:0;background:transparent}.copilot-panel p{color:#8b8174}.copilot-message{padding:8px;margin-top:8px;background:#f3e9da;border-radius:5px}.copilot-message.assistant{background:#e9efe7}.copilot-panel .button{margin-top:10px;min-height:28px;border-radius:5px;background:#c64f2f;font-size:9px}
        @media(max-width:900px){.workspace-reference-grid{grid-template-columns:1fr}.workspace-problem{order:1}.workspace-editor{order:2;min-height:520px}.workspace-output{order:3;min-height:320px}.workspace-reference .app-header{padding:0 16px}.workspace-reference-footer{padding:14px 16px}}
      `}</style>
    </main>
  );
}
