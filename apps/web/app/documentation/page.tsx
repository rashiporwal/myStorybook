import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { Reveal } from "../components/reveal";

export const metadata = { title: "Documentation — My Storybook", description: "The ideas, editorial method and visual language behind My Storybook." };

const sections = [
  ["01", "purpose", "Purpose", "We preserve ordinary moments before they disappear. The journal is not a guide to Japan or a catalogue of perfection; it is a slow, personal record shaped by attention.", "A useful story does not need to be loud. It needs to be specific enough that someone else can recognize a piece of their own life inside it."],
  ["02", "principles", "Editorial principles", "Every piece begins with lived observation. We separate memory from fact, respect the privacy of the people in our stories, and favor precise, simple language over spectacle.", "When memory is uncertain, we say so. When a detail belongs to someone else, permission matters more than a perfect paragraph."],
  ["03", "method", "Our method", "Notice, listen, research, draft, rest, and revise. Photography and text are developed together so neither becomes decoration for the other.", "Most drafts rest for at least one night. Distance reveals which sentences are carrying meaning and which are only asking to be admired."],
  ["04", "language", "Visual language", "Our palette borrows from sumi ink, washi paper, indigo dye, and faded vermilion. Glass surfaces suggest layers of memory; generous empty space gives each thought room.", "Movement is slow, surfaces are translucent, and ornament stays secondary to reading. The page should feel atmospheric without becoming difficult to use."],
  ["05", "accessibility", "Accessibility", "The interface supports keyboard navigation, readable contrast, responsive type, descriptive image text, reduced motion, and a persistent light or dark theme.", "A calm experience must also be an inclusive one. Beauty is not an excuse for faint text, trapped focus, forced motion, or unnecessary waiting."],
];

export default function DocumentationPage() {
  return (
    <main className="inner-page docs-page">
      <header className="page-hero wrap"><Reveal><p className="eyebrow"><span>手引き</span> Documentation</p><h1>How the journal<br /><em>takes shape.</em></h1></Reveal><Reveal delay={100}><p className="page-intro">A living guide to our purpose, process, and the principles behind every word and image.</p></Reveal></header>
      <section className="docs-primer wrap">
        <Reveal><div className="primer-intro"><span>読み方</span><h2>Four ideas to carry through the journal.</h2></div></Reveal>
        <div className="primer-grid">
          <Reveal delay={60}><article><small>もののあはれ</small><h3>Mono no aware</h3><p>A tender awareness that beautiful things pass—and matter because they do.</p></article></Reveal>
          <Reveal delay={110}><article><small>余白</small><h3>Yohaku</h3><p>Meaningful empty space that lets a thought, image, or person breathe.</p></article></Reveal>
          <Reveal delay={160}><article><small>侘寂</small><h3>Wabi-sabi</h3><p>An affection for honest materials, time-worn edges, and the unfinished.</p></article></Reveal>
          <Reveal delay={210}><article><small>一期一会</small><h3>Ichigo ichie</h3><p>The understanding that this particular meeting will never happen in quite the same way again.</p></article></Reveal>
        </div>
      </section>
      <div className="docs-layout wrap">
        <aside className="docs-nav glass"><span>On this page</span>{sections.map(([number, id, title]) => <a key={id} href={`#${id}`}><small>{number}</small>{title}</a>)}</aside>
        <div className="docs-content">
          {sections.map(([number, id, title, copy, detail], index) => (
            <Reveal key={id}><section id={id} className="doc-section"><span className="doc-number">{number}</span><div><h2>{title}</h2><p>{copy}</p>
              <p className="doc-detail">{detail}</p>
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
