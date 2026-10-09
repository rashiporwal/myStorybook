"use client";

import { type FormEvent, useState } from "react";
import { ArrowIcon } from "../components/icons";

export function ContactForm() {
  const [ready, setReady] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") || "A note from My Storybook"));
    const body = encodeURIComponent(`From: ${data.get("name")} (${data.get("email")})\n\n${data.get("message")}`);
    setReady(true);
    window.location.href = `mailto:hello@mystorybook.jp?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form glass" onSubmit={submit}>
      <div className="field-row"><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label></div>
      <label>Subject<select name="subject" defaultValue="A story submission"><option>A story submission</option><option>Editorial collaboration</option><option>Photography licensing</option><option>Just saying hello</option></select></label>
      <label>Message<textarea name="message" rows={6} required placeholder="Tell us what is on your mind…" /></label>
      <button type="submit" className="button primary-button">Open in email <ArrowIcon /></button>
      <p className="form-note" aria-live="polite">{ready ? "Your email app should open now." : "This form opens your email app. We usually reply within three days."}</p>
    </form>
  );
}
