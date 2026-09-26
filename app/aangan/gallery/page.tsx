"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { CTABand, Squiggle } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  return (
    <main>
      <section className="py-14 text-center">
        <h1 className="text-4xl font-black text-[#9E3B2F]">{t.sections.galleryTitle}</h1>
        <Squiggle />
        <p className="mt-2 text-[#7a6354]">{t.sections.gallerySub}</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <div key={g} className={`rounded-3xl bg-white p-2.5 shadow-md ${i % 2 ? "rotate-1" : "-rotate-1"} transition hover:rotate-0 hover:shadow-xl`}>
              <img src={g} alt={`Project photo ${i + 1}`} className={`w-full rounded-2xl object-cover ${i % 4 === 0 ? "aspect-[4/5]" : "aspect-square"}`} />
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
