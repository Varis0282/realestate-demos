"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { FadeIn, CTABand } from "../_ui";

export default function Gallery() {
  const { t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <FadeIn>
          <h1 className="text-4xl font-bold md:text-5xl">{t.sections.galleryTitle}</h1>
          <p className="mt-3 text-slate-400">{t.sections.gallerySub}</p>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {img.gallery.map((g, i) => (
            <FadeIn key={g} delay={(i % 3) * 0.07}>
              <motion.img whileHover={{ scale: 1.02 }} src={g} alt={`Project photo ${i + 1}`} className={`w-full rounded-2xl border border-white/10 object-cover ${i % 4 === 0 ? "aspect-[4/5]" : "aspect-square"}`} />
            </FadeIn>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
