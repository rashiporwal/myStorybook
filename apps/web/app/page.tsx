import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./components/icons";
import { Reveal } from "./components/reveal";
import { galleryItems, stories } from "./data";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <Image src="/images/reading-room.webp" alt="A Japanese reading room overlooking a misty garden" fill priority fetchPriority="high" sizes="100vw" className="hero-image" />
        <div className="hero-wash" />
        <div className="hero-copy wrap">
          <p className="eyebrow"><span>読む</span> A place for stories</p>
          <h1>Every life holds<br />a <em>quiet story.</em></h1>
          <p className="hero-lede">A digital collection of fleeting places, handwritten thoughts, and the moments that stay after everything else has gone.</p>
          <div className="hero-actions">
            <Link href="/stories" className="button primary-button">Read the stories <ArrowIcon /></Link>
            <Link href="/gallery" className="text-link">Enter the gallery <span>↗</span></Link>
          </div>
        </div>
        <div className="hero-note glass"><span className="vertical-jp">一期一会</span><div><small>Japanese proverb</small><p>One time,<br />one meeting.</p></div></div>
        <a href="#begin" className="scroll-cue" aria-label="Scroll to discover"><span /> SCROLL TO DISCOVER</a>
      </section>

      <section id="begin" className="intro-section section wrap">
        <Reveal className="intro-kicker"><span>私たちについて</span><p>ABOUT THE JOURNAL</p></Reveal>
        <Reveal className="intro-copy" delay={100}>
          <p className="large-serif">We collect the details that are easy to miss—steam rising from a cup, an old road after rain, a sentence underlined twice.</p>
          <p>My Storybook is an independent digital journal inspired by the Japanese idea of <em>mono no aware</em>: a gentle awareness that every beautiful thing is passing.</p>
          <Link href="/documentation" className="line-link">Our philosophy <ArrowIcon /></Link>
        </Reveal>
        <div className="sun-stamp" aria-hidden="true"><span>物語</span></div>
      </section>

      <section className="section stories-section">
        <div className="section-heading wrap">
          <Reveal><p className="eyebrow"><span>新着</span> Recently written</p><h2>Stories for a<br /><em>slower moment.</em></h2></Reveal>
          <Reveal delay={120}><Link href="/stories" className="line-link">View all stories <ArrowIcon /></Link></Reveal>
        </div>
        <div className="story-grid wrap">
          {stories.map((story, index) => (
            <Reveal key={story.slug} delay={index * 90}>
              <article className="story-card glass">
                <Link href={`/stories#${story.slug}`} className="story-image-wrap" aria-label={`Read ${story.title}`}>
                  <Image src={story.image} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" /><span>{story.number}</span>
                </Link>
                <div className="story-body">
                  <div className="story-meta"><span>{story.category}</span><span>{story.readTime}</span></div>
                  <h3>{story.title}</h3><p>{story.excerpt}</p>
                  <Link href={`/stories#${story.slug}`} className="circle-link" aria-label={`Read ${story.title}`}><ArrowIcon /></Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section ritual-section wrap">
        <Reveal className="ritual-art"><div className="enso" aria-hidden="true"><span>間</span></div><p className="vertical-copy">余白の中に物語が生まれる</p></Reveal>
        <Reveal className="ritual-copy" delay={100}>
          <p className="eyebrow"><span>書くこと</span> The ritual of writing</p><h2>Made with attention,<br />not <em>urgency.</em></h2>
          <p>Every story begins offline: in a notebook, on a walk, or in a long conversation. We edit with care and publish only when the words feel ready.</p>
          <ol className="process-list">
            <li><span>一</span><div><strong>Notice</strong><small>Look closely at the ordinary.</small></div></li>
            <li><span>二</span><div><strong>Listen</strong><small>Let every place speak in its own voice.</small></div></li>
            <li><span>三</span><div><strong>Shape</strong><small>Write simply, and leave room to breathe.</small></div></li>
          </ol>
        </Reveal>
      </section>

      <section className="section gallery-preview">
        <div className="section-heading wrap">
          <Reveal><p className="eyebrow"><span>写真</span> Visual notes</p><h2>A glimpse into<br /><em>the in-between.</em></h2></Reveal>
          <Reveal delay={120}><Link href="/gallery" className="line-link">Open full gallery <ArrowIcon /></Link></Reveal>
        </div>
        <div className="preview-strip">
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} delay={index * 70} className={`preview-item preview-${index + 1}`}>
              <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 80vw, 35vw" />
              <div><span>{item.place}</span><strong>{item.title}</strong></div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <Reveal className="newsletter-card glass wrap">
          <span className="newsletter-kanji">便り</span>
          <div><p className="eyebrow">A LETTER, OCCASIONALLY</p><h2>One story for your <em>quiet Sunday.</em></h2><p>No noise. No weekly pressure. Just a thoughtful note when there is something worth sharing.</p></div>
          <form className="subscribe-form" action="mailto:hello@mystorybook.jp" method="get">
            <label className="sr-only" htmlFor="home-email">Your email address</label><input id="home-email" name="body" type="email" placeholder="your@email.com" required /><button type="submit" aria-label="Subscribe by email"><ArrowIcon /></button>
          </form>
        </Reveal>
      </section>
    </main>
  );
}
