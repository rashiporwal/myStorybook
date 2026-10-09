import { Reveal } from "../components/reveal";
import { GalleryClient } from "./gallery-client";

export const metadata = { title: "Gallery — My Storybook", description: "A visual journal of quiet Japanese places and passing seasons." };

export default function GalleryPage() {
  return (
    <main className="inner-page gallery-page">
      <header className="page-hero wrap"><Reveal><p className="eyebrow"><span>写真</span> Visual journal</p><h1>Light, place,<br /><em>and passing time.</em></h1></Reveal><Reveal delay={100}><p className="page-intro">A small collection of moments found between destinations. Select an image to slow down and look closer.</p></Reveal></header>
      <section className="full-gallery wrap"><GalleryClient /></section>
    </main>
  );
}
