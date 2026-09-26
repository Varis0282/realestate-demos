"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { amenities } from "@/lib/content";
import Icon from "@/components/Icon";
import { CTABand, Squiggle, Blob } from "../_ui";

export default function Amenities() {
  const { lang, t } = useLang();
  const tints = ["bg-[#F6E3D5]", "bg-[#E9EDDA]", "bg-[#FBE9C7]", "bg-[#F3DEDA]"];
  return (
    <main>
      <section className="relative overflow-hidden py-14 text-center">
        <Blob className="-right-20 top-0 h-56 w-56 bg-[#E9EDDA]" />
        <div className="relative">
          <h1 className="text-4xl font-black text-[#9E3B2F]">{t.sections.amenitiesTitle}</h1>
          <Squiggle />
          <p className="mt-2 text-[#7a6354]">{t.sections.amenitiesSub}</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-14">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {amenities.map((a, i) => (
            <div key={a.en.title} className={`rounded-[2rem] ${tints[i % 4]} p-6 transition hover:-translate-y-1`}>
              <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#9E3B2F]"><Icon name={a.icon} className="h-6 w-6" /></span>
              <h3 className="font-black text-[#4A342B]">{a[lang].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#7a6354]">{a[lang].desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 rotate-1 rounded-[2rem] bg-white p-3 shadow-xl transition hover:rotate-0">
          <img src={img.heroAlt} alt="Township" className="aspect-[21/9] w-full rounded-[1.6rem] object-cover" />
        </div>
      </section>
      <CTABand />
    </main>
  );
}
