"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { Mono, CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <Mono className="text-xs uppercase text-[#1D4ED8]">// {t.sections.gallerySub}</Mono>
        <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">{t.sections.galleryTitle}</h1>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <div key={g} className="relative">
              <img src={g} alt={`Project photo ${i + 1}`} className={`w-full object-cover grayscale transition hover:grayscale-0 ${i % 4 === 0 ? "aspect-[4/5]" : "aspect-square"}`} />
              <Mono className="absolute bottom-2 left-2 bg-white px-2 py-0.5 text-[10px]">FIG. {String(i + 1).padStart(2, "0")}</Mono>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
