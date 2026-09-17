import Link from "next/link";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";

export default function ChallengePage() {
  return (
    <main className="screen challenge-reference">
      <Header showNav />

      <section className="challenge-reference-main">
        <p className="eyebrow">CHALLENGES</p>
        <h1>Bracket combinations</h1>
        <p className="challenge-reference-subtitle">
          Find every valid arrangement of parentheses with a clean, efficient solution.
        </p>

        <div className="challenge-reference-grid">
          <article className="challenge-reference-card">
            <div className="challenge-reference-card-top">
              <span className="tag tag-warning">Hard</span>
              <span className="challenge-reference-points">20 points</span>
            </div>
            <h2>Your brief</h2>
            <p>
              Given n pairs of brackets, return all valid combinations. Aim for clarity first,
              then use pruning to keep the recursion efficient.
            </p>
            <dl className="challenge-reference-facts">
              <div>
                <dt>TIME</dt>
                <dd>25 mins</dd>
              </div>
              <div>
                <dt>TYPE</dt>
                <dd>Frontend</dd>
              </div>
            </dl>
          </article>

          <aside className="challenge-reference-card challenge-reference-topics">
            <h2>What is this challenge about?</h2>
            <p>
              Explore a problem built to test fundamentals and your ability to write readable code.
            </p>
            <ul>
              <li>Depth-first search</li>
              <li>Stack patterns</li>
              <li>Input validation</li>
            </ul>
          </aside>
        </div>
      </section>

      <footer className="challenge-reference-footer">
        <div>
          <strong>Ready when you are</strong>
          <span>Your progress is saved automatically.</span>
        </div>
        <span className="challenge-reference-time">40 minutes</span>
        <Link href="/workspace">
          <Button>Begin challenge →</Button>
        </Link>
      </footer>

      <style>{`
        .challenge-reference { background: #fffdf8; color: #25251f; }
        .challenge-reference .app-header { height: 58px; padding: 0 34px; background: #fffdf8; border-bottom: 1px solid #e9e4d9; }
        .challenge-reference .brand-mark { font-size: 11px; }
        .challenge-reference .brand-icon { width: 18px; height: 18px; border-radius: 3px; font-size: 10px; }
        .challenge-reference .header-divider { width: 1px; height: 18px; background: #e4ded2; }
        .challenge-reference .primary-nav { gap: 22px; font-size: 10px; color: #777266; }
        .challenge-reference .avatar { width: 24px; height: 24px; font-size: 9px; background: #f7e8d9; color: #bd7447; }
        .challenge-reference-main { width: min(900px, calc(100% - 80px)); margin: 0 auto; padding: 82px 0 100px; }
        .challenge-reference-main .eyebrow { margin: 0 0 12px; color: #bd5637; font-size: 10px; letter-spacing: .08em; }
        .challenge-reference-main h1 { margin: 0; font-size: clamp(32px, 4vw, 48px); letter-spacing: -.05em; line-height: 1.05; }
        .challenge-reference-subtitle { margin: 14px 0 42px; color: #77756d; font-size: 13px; }
        .challenge-reference-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 20px; }
        .challenge-reference-card { padding: 24px; background: #fff; border: 1px solid #eee8dc; border-radius: 12px; box-shadow: 0 8px 22px rgba(50, 42, 28, .06); }
        .challenge-reference-card-top { display: flex; justify-content: space-between; align-items: center; }
        .challenge-reference .tag { min-height: 20px; padding: 0 9px; border-radius: 5px; font-size: 9px; }
        .challenge-reference-points { color: #969084; font-size: 10px; }
        .challenge-reference-card h2 { margin: 22px 0 12px; font-size: 16px; letter-spacing: -.02em; }
        .challenge-reference-card p { margin: 0; color: #77756d; font-size: 11px; line-height: 1.7; }
        .challenge-reference-facts { display: flex; gap: 52px; margin: 28px 0 0; }
        .challenge-reference-facts dt { color: #a09a8e; font-size: 9px; font-weight: 700; }
        .challenge-reference-facts dd { margin: 7px 0 0; color: #36342e; font-size: 11px; }
        .challenge-reference-topics { padding: 24px 26px; }
        .challenge-reference-topics h2 { margin-top: 0; }
        .challenge-reference-topics ul { margin: 20px 0 0; padding-left: 15px; color: #4f4b42; font-size: 11px; line-height: 2; }
        .challenge-reference-footer { display: flex; align-items: center; gap: 30px; min-height: 78px; padding: 0 42px; border-top: 1px solid #eee8dc; background: #fffdf8; color: #817b70; font-size: 10px; }
        .challenge-reference-footer div { display: grid; gap: 5px; margin-right: auto; }
        .challenge-reference-footer strong { color: #4b473e; font-size: 10px; }
        .challenge-reference-time { white-space: nowrap; }
        .challenge-reference-footer .button { min-height: 34px; padding: 0 16px; border-radius: 5px; background: #bd4c2d; font-size: 10px; }
        @media (max-width: 700px) { .challenge-reference-main { width: min(100% - 32px, 520px); padding: 44px 0 56px; } .challenge-reference-grid { grid-template-columns: 1fr; } .challenge-reference .app-header { padding: 0 16px; } .challenge-reference .primary-nav { display: none; } .challenge-reference-footer { flex-wrap: wrap; gap: 14px; padding: 18px 16px; } .challenge-reference-footer div { width: 100%; } }
      `}</style>
    </main>
  );
}
