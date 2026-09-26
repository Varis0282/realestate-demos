"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { amenities } from "@/lib/content";
import Icon from "@/components/Icon";
import { FadeIn, CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <FadeIn>
          <h1 className="text-4xl font-bold md:text-5xl">{t.sections.amenitiesTitle}</h1>
          <p className="mt-3 text-slate-400">{t.sections.amenitiesSub}</p>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <FadeIn key={a.en.title} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition hover:border-[#FB7185]/40">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F59E0B]/25 to-[#FB7185]/25 text-[#FB7185]"><Icon name={a.icon} className="h-6 w-6" /></span>
                <h3 className="font-bold">{a[lang].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{a[lang].desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-12">
          <img src={img.heroAlt} alt="Township" className="aspect-[21/9] w-full rounded-3xl border border-white/10 object-cover shadow-2xl" />
        </FadeIn>
      </section>
      <CTABand />
    </main>
  );
}
