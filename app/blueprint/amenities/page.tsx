"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { amenities } from "@/lib/content";
import Icon from "@/components/Icon";
import { Mono, GridPanel, CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <Mono className="text-xs uppercase text-[#1D4ED8]">// {t.sections.amenitiesSub}</Mono>
        <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">{t.sections.amenitiesTitle}</h1>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <GridPanel className="grid gap-px bg-[#101418] sm:grid-cols-2">
          {amenities.map((a, i) => (
            <div key={a.en.title} className="bg-white p-7">
              <div className="flex items-start justify-between">
                <Icon name={a.icon} className="h-6 w-6 text-[#1D4ED8]" />
                <Mono className="text-xs text-[#9CA3AF]">{String(i + 1).padStart(2, "0")}</Mono>
              </div>
              <h3 className="mt-4 font-bold">{a[lang].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{a[lang].desc}</p>
            </div>
          ))}
        </GridPanel>
        <div className="relative mt-12">
          <img src={img.heroAlt} alt="Township" className="aspect-[21/9] w-full object-cover grayscale" />
          <Mono className="absolute bottom-3 right-3 bg-white px-3 py-1 text-xs">FIG. 09 — {lang === "en" ? "TOWNSHIP VIEW" : "टाउनशिप दृश्य"}</Mono>
        </div>
      </section>
      <CTABand />
    </main>
  );
}
