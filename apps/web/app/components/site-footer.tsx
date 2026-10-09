import Link from "next/link";
import { InstagramIcon, MailIcon } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-orb" aria-hidden="true">月</div>
      <div className="footer-grid wrap">
        <div>
          <Link href="/" className="brand footer-brand">
            <span className="brand-mark">物</span>
            <span><strong>MY STORYBOOK</strong><small>小さな物語、大きな余韻。</small></span>
          </Link>
          <p>Small stories, lasting echoes. An independent digital journal of places, people, and quiet moments.</p>
        </div>
        <div>
          <span className="footer-kicker">Explore</span>
          <Link href="/stories">Stories</Link>
          <Link href="/documentation">Documentation</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div>
          <span className="footer-kicker">Say hello</span>
          <a href="mailto:hello@mystorybook.jp"><MailIcon /> hello@mystorybook.jp</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><InstagramIcon /> Instagram</a>
        </div>
      </div>
      <div className="footer-bottom wrap">
        <span>© 2026 My Storybook</span>
        <span className="footer-credit">Designed by <strong>Rashi Porwal</strong></span>
      </div>
    </footer>
  );
}
