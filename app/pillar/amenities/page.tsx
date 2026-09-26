"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { amenities } from "@/lib/content";
import Icon from "@/components/Icon";
import { CTABand } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="bg-gradient-to-br from-[#E8F1F1] to-[#F7F9F9] py-14 text-center">
        <h1 className="text-4xl font-black text-[#0F5E63]">{t.sections.amenitiesTitle}</h1>
        <p className="mt-2 text-slate-500">{t.sections.amenitiesSub}</p>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a) => (
            <div key={a.en.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F5E63]/10 text-[#0F5E63]"><Icon name={a.icon} className="h-6 w-6" /></span>
              <h3 className="font-bold text-[#12312F]">{a[lang].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{a[lang].desc}</p>
            </div>
          ))}
        </div>
        <img src={img.heroAlt} alt="Township" className="mt-12 aspect-[21/9] w-full rounded-xl object-cover shadow-xl" />
      </section>
      <CTABand />
    </main>
  );
}
