import { InstagramIcon, MailIcon } from "../components/icons";
import { Reveal } from "../components/reveal";
import { ContactForm } from "./contact-form";

export const metadata = { title: "Contact — My Storybook", description: "Share a story, propose a collaboration, or simply say hello." };

export default function ContactPage() {
  return (
    <main className="inner-page contact-page">
      <header className="page-hero wrap"><Reveal><p className="eyebrow"><span>手紙</span> Get in touch</p><h1>Every good story<br />starts with <em>hello.</em></h1></Reveal><Reveal delay={100}><p className="page-intro">Share a memory, propose a collaboration, or send a quiet note from wherever you are.</p></Reveal></header>
      <section className="contact-layout wrap">
        <Reveal className="contact-aside">
          <p>We read every message personally.</p>
          <a href="mailto:hello@mystorybook.jp"><MailIcon /><span><small>Email</small>hello@mystorybook.jp</span></a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><InstagramIcon /><span><small>Follow the visual journal</small>@mystorybook</span></a>
          <div className="contact-note"><span>静</span><p>There is no rush.<br />Write when it feels right.</p></div>
        </Reveal>
        <Reveal delay={100}><ContactForm /></Reveal>
      </section>
      <section className="contact-prompts wrap">
        <Reveal><div className="prompt-heading"><p className="eyebrow"><span>質問</span> Before you write</p><h2>What can you send?</h2></div></Reveal>
        <div className="prompt-grid">
          <Reveal delay={60}><article><span>01</span><h3>A remembered place</h3><p>A street, kitchen, railway platform, or room that still appears clearly when you close your eyes.</p></article></Reveal>
          <Reveal delay={110}><article><span>02</span><h3>A family ritual</h3><p>A repeated gesture, seasonal meal, saying, or small tradition you would like to keep from disappearing.</p></article></Reveal>
          <Reveal delay={160}><article><span>03</span><h3>A creative proposal</h3><p>Editorial collaborations, thoughtful photography projects, licensing requests, and slow ideas are welcome.</p></article></Reveal>
        </div>
        <Reveal><p className="contact-boundary">Please do not send confidential or time-sensitive information. We are a small journal and usually reply within three days.</p></Reveal>
      </section>
    </main>
  );
}
