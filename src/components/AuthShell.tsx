"use client";

import Link from "next/link";
import { Button } from "./Button";

type AuthShellProps = {
  mode: "sign-in" | "create-account" | "forgot-password" | "reset-password" | "check-email";
};

type Field = {
  label: string;
  placeholder: string;
  type?: string;
};

const copy: Record<AuthShellProps["mode"], { title: string; subtitle: string; fields: Field[]; button: string; helper?: string; helperHref?: string; footer: string; footerHref: string }> = {
  "sign-in": {
    title: "Welcome back",
    subtitle: "Sign in to continue to your hiring workspace.",
    fields: [
      { label: "WORK EMAIL", placeholder: "name@company.com", type: "email" },
      { label: "PASSWORD", placeholder: "Enter your password", type: "password" },
    ],
    button: "Sign in",
    helper: "Forgot password?",
    helperHref: "/auth/forgot-password",
    footer: "New to ABC Company? Create your account",
    footerHref: "/auth/create-account",
  },
  "create-account": {
    title: "Create your account",
    subtitle: "Set up your profile to join the hiring workspace.",
    fields: [
      { label: "FULL NAME", placeholder: "Your name" },
      { label: "WORK EMAIL", placeholder: "name@company.com", type: "email" },
      { label: "PASSWORD", placeholder: "Create a password", type: "password" },
    ],
    button: "Create account",
    helper: "Use 8+ characters with a number or symbol",
    footer: "Already have an account? Sign in",
    footerHref: "/auth/sign-in",
  },
  "forgot-password": {
    title: "Recover your account",
    subtitle: "Enter your work email to receive a password reset link.",
    fields: [{ label: "WORK EMAIL", placeholder: "name@company.com", type: "email" }],
    button: "Send reset link",
    footer: "Return to sign in",
    footerHref: "/auth/sign-in",
  },
  "reset-password": {
    title: "Choose a new password",
    subtitle: "Set a new password for your account.",
    fields: [
      { label: "PASSWORD", placeholder: "Enter a new password", type: "password" },
      { label: "CONFIRM PASSWORD", placeholder: "Repeat your password", type: "password" },
    ],
    button: "Save password",
    footer: "Back to sign in",
    footerHref: "/auth/sign-in",
  },
  "check-email": {
    title: "Check your email",
    subtitle: "Follow the instructions sent to your email address.",
    fields: [],
    button: "Return to sign in",
    footer: "Back to sign in",
    footerHref: "/auth/sign-in",
  },
};

export function AuthShell({ mode }: AuthShellProps) {
  const data = copy[mode];

  return (
    <main className="auth-screen">
      <aside className="auth-visual">
        <div className="auth-brand">
          <span className="brand-icon">A</span>
          <strong>ABC Company</strong>
          <small>HIRING, WITHOUT THE BUSYWORK</small>
        </div>

        <div className="auth-visual-bottom">
          <p>Design assessments, review candidates, and move confidently from screening to hire.</p>
          <small>Structured assessments&nbsp; • &nbsp;Fair evaluation&nbsp; • &nbsp;Faster decisions</small>
        </div>
      </aside>

      <section className={`auth-panel auth-${mode}`}>
        <form className="auth-form">
          <h1>{data.title}</h1>
          <p className="auth-subtitle">{data.subtitle}</p>

          {data.fields.map((field) => (
            <label key={field.label}>
              <span>{field.label}</span>
              <input type={field.type ?? "text"} placeholder={field.placeholder} />
            </label>
          ))}

          {data.helper && data.helperHref ? (
            <Link className="auth-helper" href={data.helperHref}>{data.helper}</Link>
          ) : data.helper ? (
            <p className="auth-helper auth-helper-static">{data.helper}</p>
          ) : null}

          <Button>{data.button}</Button>
          <Link className="auth-footer-link" href={data.footerHref}>{data.footer}</Link>
        </form>
      </section>

      <style jsx global>{`
        .auth-screen {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 38% 62%;
          background: #f7f5ed;
        }
        .auth-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 100vh;
          padding: 34px 36px;
          color: #fff;
          background: linear-gradient(180deg, #092c25 0%, #143b2f 48%, #8c642c 100%);
          overflow: hidden;
        }
        .auth-visual::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: .14;
          background: repeating-linear-gradient(135deg, transparent 0 34px, #fff 34px 36px);
        }
        .auth-brand, .auth-visual-bottom { position: relative; z-index: 1; }
        .auth-brand { display: grid; justify-items: start; gap: 12px; }
        .auth-brand .brand-icon { width: 28px; height: 28px; border-radius: 7px; font-size: 14px; }
        .auth-brand strong { font-size: 20px; letter-spacing: .02em; }
        .auth-brand small { font-size: 10px; font-weight: 700; letter-spacing: .08em; }
        .auth-visual-bottom { max-width: 330px; }
        .auth-visual-bottom p { margin: 0 0 16px; font-size: 17px; line-height: 1.55; }
        .auth-visual-bottom small { font-size: 10px; }
        .auth-panel { display: grid; place-items: center; padding: 48px 56px; background: #f7f5ed; }
        .auth-form { width: min(100%, 430px); display: flex; flex-direction: column; gap: 0; }
        .auth-form h1 { margin: 0 0 12px; color: #202433; font-size: clamp(32px, 4vw, 48px); line-height: 1.08; letter-spacing: -.035em; }
        .auth-subtitle { margin: 0 0 38px; color: #7a7d87; font-size: 15px; line-height: 1.45; }
        .auth-form label { display: grid; gap: 8px; margin-bottom: 24px; color: #4d5360; font-size: 11px; font-weight: 800; letter-spacing: .02em; }
        .auth-form input { width: 100%; height: 40px; padding: 0 12px; border: 0; border-radius: 4px; outline: 1px solid #e6e0d4; background: #fffdf8; color: #272b35; font-size: 12px; }
        .auth-form input:focus { outline: 2px solid #c95231; }
        .auth-form input::placeholder { color: #8b8a87; }
        .auth-helper { align-self: flex-end; margin: -10px 0 24px; color: #c95231; font-size: 10px; font-weight: 700; }
        .auth-helper-static { margin: -6px 0 20px; align-self: flex-start; }
        .auth-form .button { width: 100%; min-height: 40px; border-radius: 4px; background: #c95231; font-size: 11px; }
        .auth-footer-link { align-self: center; margin-top: 16px; color: #484b4e; font-size: 10px; }
        @media (max-width: 760px) {
          .auth-screen { grid-template-columns: 1fr; }
          .auth-visual { min-height: 250px; padding: 28px; }
          .auth-visual-bottom { margin-top: 56px; }
          .auth-visual-bottom p { font-size: 15px; }
          .auth-panel { padding: 44px 24px; }
        }
      `}</style>
    </main>
  );
}
