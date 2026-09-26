"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { amenities } from "@/lib/content";
import Icon from "@/components/Icon";
import { Eyebrow, CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-20">
        <Eyebrow>{t.sections.amenitiesSub}</Eyebrow>
        <h1 className="font-[family-name:var(--font-serif)] text-5xl font-medium text-white md:text-6xl">{t.sections.amenitiesTitle}</h1>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a) => (
            <div key={a.en.title} className="bg-[#0A0C10] p-7 transition hover:bg-[#0E1116]">
              <span className="mb-5 flex h-12 w-12 items-center justify-center border border-[#B87352]/40 text-[#B87352]"><Icon name={a.icon} className="h-5 w-5" /></span>
              <h3 className="font-semibold text-white">{a[lang].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B929C]">{a[lang].desc}</p>
            </div>
          ))}
        </div>
        <img src={img.heroAlt} alt="Township" className="mt-14 aspect-[21/9] w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
      </section>
      <CTABand />
    </main>
  );
}
