"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "./icons";

const nav = [
  ["Stories", "/stories"],
  ["Documentation", "/documentation"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="nav-shell glass">
        <Link href="/" className="brand" aria-label="My Storybook home">
          <span className="brand-mark">物</span>
          <span>
            <strong>MY STORYBOOK</strong>
            <small>ものがたり</small>
          </span>
        </Link>
        <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className={pathname === href ? "active" : ""}>
              {label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="menu-button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}
