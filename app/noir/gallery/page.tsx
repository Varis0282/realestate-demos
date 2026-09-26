"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { Eyebrow, CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-20">
        <Eyebrow>{t.sections.gallerySub}</Eyebrow>
        <h1 className="font-[family-name:var(--font-serif)] text-5xl font-medium text-white md:text-6xl">{t.sections.galleryTitle}</h1>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <img key={g} src={g} alt={`Project photo ${i + 1}`} className={`w-full object-cover grayscale transition duration-500 hover:grayscale-0 ${i % 4 === 0 ? "aspect-[4/5]" : "aspect-square"}`} />
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
