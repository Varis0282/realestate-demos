"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  return (
    <main>
      <section className="bg-gradient-to-br from-[#E8F1F1] to-[#F7F9F9] py-14 text-center">
        <h1 className="text-4xl font-black text-[#0F5E63]">{t.sections.galleryTitle}</h1>
        <p className="mt-2 text-slate-500">{t.sections.gallerySub}</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <img key={g} src={g} alt={`Project photo ${i + 1}`} className={`w-full rounded-xl object-cover shadow-sm transition hover:opacity-90 ${i % 4 === 0 ? "aspect-[4/5]" : "aspect-square"}`} />
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
