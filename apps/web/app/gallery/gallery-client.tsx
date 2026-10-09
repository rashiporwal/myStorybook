"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CloseIcon } from "../components/icons";
import { galleryItems } from "../data";

const filters = ["All", "Quiet", "Night", "Still life", "Landscape"];

export function GalleryClient() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<(typeof galleryItems)[number] | null>(null);
  const visible = filter === "All" ? galleryItems : galleryItems.filter((item) => item.category === filter);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setSelected(null);
    document.body.classList.add("modal-open");
    window.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("modal-open"); window.removeEventListener("keydown", onKey); };
  }, [selected]);

  return (
    <>
      <div className="gallery-filters" aria-label="Filter photographs">
        {filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={filter === item ? "active" : ""}>{item}</button>)}
      </div>
      <div className="gallery-grid">
        {visible.map((item, index) => (
          <button key={item.src} type="button" className={`gallery-tile gallery-tile-${index + 1}`} onClick={() => setSelected(item)}>
            <Image src={item.src} alt={item.alt} fill sizes="(max-width: 760px) 100vw, 50vw" />
            <span><small>{item.place}</small><strong>{item.title}</strong><i>View — 見る</i></span>
          </button>
        ))}
      </div>
      {selected && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}>
          <button type="button" onClick={() => setSelected(null)} aria-label="Close image"><CloseIcon /></button>
          <div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={selected.src} alt={selected.alt} fill sizes="90vw" priority /></div>
          <p>{selected.title} <span>{selected.place}</span></p>
        </div>
      )}
    </>
  );
}
