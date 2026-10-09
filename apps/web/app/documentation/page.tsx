import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { Reveal } from "../components/reveal";

export const metadata = { title: "Documentation — My Storybook", description: "The ideas, editorial method and visual language behind My Storybook." };

const sections = [
  ["01", "purpose", "Purpose", "We preserve ordinary moments before they disappear. The journal is not a guide to Japan or a catalogue of perfection; it is a slow, personal record shaped by attention."],
  ["02", "principles", "Editorial principles", "Every piece begins with lived observation. We separate memory from fact, respect the privacy of the people in our stories, and favor precise, simple language over spectacle."],
  ["03", "method", "Our method", "Notice, listen, research, draft, rest, and revise. Photography and text are developed together so neither becomes decoration for the other."],
  ["04", "language", "Visual language", "Our palette borrows from sumi ink, washi paper, indigo dye, and faded vermilion. Glass surfaces suggest layers of memory; generous empty space gives each thought room."],
  ["05", "accessibility", "Accessibility", "The interface supports keyboard navigation, readable contrast, responsive type, descriptive image text, reduced motion, and a persistent light or dark theme."],
];

export default function DocumentationPage() {
  return (
    <main className="inner-page docs-page">
      <header className="page-hero wrap"><Reveal><p className="eyebrow"><span>手引き</span> Documentation</p><h1>How the journal<br /><em>takes shape.</em></h1></Reveal><Reveal delay={100}><p className="page-intro">A living guide to our purpose, process, and the principles behind every word and image.</p></Reveal></header>
      <div className="docs-layout wrap">
        <aside className="docs-nav glass"><span>On this page</span>{sections.map(([number, id, title]) => <a key={id} href={`#${id}`}><small>{number}</small>{title}</a>)}</aside>
        <div className="docs-content">
          {sections.map(([number, id, title, copy], index) => (
            <Reveal key={id}><section id={id} className="doc-section"><span className="doc-number">{number}</span><div><h2>{title}</h2><p>{copy}</p>
              {index === 1 && <ul><li>Be truthful about what is remembered.</li><li>Ask permission before sharing another person&apos;s story.</li><li>Use cultural references with context and care.</li><li>Leave the reader with space to feel.</li></ul>}
              {index === 2 && <div className="method-flow"><span>Observe</span><i>→</i><span>Draft</span><i>→</i><span>Rest</span><i>→</i><span>Refine</span></div>}
            </div></section></Reveal>
          ))}
          <Reveal><div className="docs-cta glass"><span>Still curious?</span><h2>Ask us about the work.</h2><Link href="/contact" className="line-link">Start a conversation <ArrowIcon /></Link></div></Reveal>
        </div>
      </div>
    </main>
  );
}
