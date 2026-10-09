import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "../components/icons";
import { Reveal } from "../components/reveal";
import { stories } from "../data";

export const metadata = { title: "Stories — My Storybook", description: "Essays, folklore and travel notes made for slow reading." };

export default function StoriesPage() {
  return (
    <main className="inner-page">
      <header className="page-hero wrap"><Reveal><p className="eyebrow"><span>物語</span> The story archive</p><h1>Words for the<br /><em>in-between.</em></h1></Reveal><Reveal delay={100}><p className="page-intro">Essays, folklore, and field notes about memory, place, and the beauty of things that do not last.</p></Reveal></header>
      <section className="featured-story wrap" id="the-last-lantern">
        <Reveal className="featured-image"><Image src="/images/kyoto-rain.webp" alt="Rain falling on a lantern-lit Kyoto lane" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></Reveal>
        <Reveal className="featured-copy glass" delay={100}><span className="story-number">Featured · 物語 01</span><h2>The Last Lantern</h2><p>At the edge of a rain-soaked village, an old lantern keeper waits for a promise made beneath the first plum blossom.</p><blockquote>“Some lights are kept not to show the way forward, but to remember the way home.”</blockquote><div className="story-meta"><span>Folklore</span><span>6 min read</span></div></Reveal>
      </section>
      <section className="archive-section wrap">
        <div className="archive-heading"><p>All entries</p><span>03 stories · Updated seasonally</span></div>
        {stories.map((story, index) => (
          <Reveal key={story.slug} delay={index * 80}><article className="archive-row" id={story.slug}>
            <span className="archive-index">0{index + 1}</span><div className="archive-thumb"><Image src={story.image} alt="" fill sizes="150px" /></div>
            <div><span className="story-category">{story.category} · {story.readTime}</span><h2>{story.title}</h2><p>{story.excerpt}</p></div>
            <Link href={`/contact?story=${story.slug}`} className="circle-link" aria-label={`Ask about ${story.title}`}><ArrowIcon /></Link>
          </article></Reveal>
        ))}
      </section>
    </main>
  );
}
