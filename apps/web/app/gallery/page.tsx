import { Reveal } from "../components/reveal";
import { GalleryClient } from "./gallery-client";

export const metadata = { title: "Gallery — My Storybook", description: "A visual journal of quiet Japanese places and passing seasons." };

export default function GalleryPage() {
  return (
    <main className="inner-page gallery-page">
      <header className="page-hero wrap"><Reveal><p className="eyebrow"><span>写真</span> Visual journal</p><h1>Light, place,<br /><em>and passing time.</em></h1></Reveal><Reveal delay={100}><p className="page-intro">A small collection of moments found between destinations. Select an image to slow down and look closer.</p></Reveal></header>
      <section className="gallery-manifesto wrap">
        <Reveal><blockquote>“The photograph is not proof that we were there. It is a way of asking what the place left inside us.”</blockquote></Reveal>
        <Reveal delay={100}><div><span>Our visual practice</span><p>We work with available light, patient framing, and minimal intervention. Weather remains weather; shadows remain dark; a quiet street is allowed to stay empty.</p><p>The captions hold location and feeling together, because an image without context can become only surface.</p></div></Reveal>
      </section>
      <section className="full-gallery wrap"><div className="gallery-index"><span>04 frames</span><span>04 places</span><span>01 changing season</span></div><GalleryClient /></section>
      <section className="gallery-after wrap">
        <Reveal><div className="gallery-after-mark">光</div><div><p className="eyebrow">BEHIND THE FRAME</p><h2>We wait for the image to become quiet.</h2><p>Sometimes that takes a minute. Sometimes it takes returning at another hour. The goal is not a flawless scene, but a frame with enough stillness for you to enter it.</p></div></Reveal>
      </section>
    </main>
  );
}
