import type { Metadata } from "next";
import localFont from "next/font/local";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { ThemeToggle } from "./components/theme-toggle";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "My Storybook — Stories for a slower moment",
  description: "An independent digital journal of quiet places, handwritten thoughts, and moments worth keeping.",
  keywords: ["stories", "journal", "photography", "Japan", "slow living"],
  openGraph: {
    title: "My Storybook",
    description: "Small stories, lasting echoes.",
  },
};

const themeScript = `(function(){try{var t=localStorage.getItem('my-story-theme');if(!t)t=matchMedia('(prefers-color-scheme:light)').matches?'light':'dark';document.documentElement.dataset.theme=t;document.documentElement.style.colorScheme=t}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <ThemeToggle />
        <div id="main-content">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
