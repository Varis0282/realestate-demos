"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { SectionHead, CTABand, Blob, Squiggle } from "../_ui";
import { Heart } from "lucide-react";

export default function About() {
  const { lang, t } = useLang();
  const a = t.about;
  return (
    <main>
      <section className="relative overflow-hidden py-14 text-center">
        <Blob className="-left-20 top-0 h-56 w-56 bg-[#F6E3D5]" />
        <div className="relative">
          <h1 className="text-4xl font-black text-[#9E3B2F]">{a.title}</h1>
          <Squiggle />
          <p className="mt-2 text-[#7a6354]">{a.sub}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-10 md:grid-cols-2">
        <div className="space-y-5 text-[17px] leading-relaxed text-[#7a6354]">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-extrabold text-[#4A342B]">{a.story3}</p>
        </div>
        <div className="-rotate-2 rounded-[2rem] bg-white p-3 shadow-2xl transition hover:rotate-0">
          <img src={img.about} alt="Shivalik construction" className="aspect-[4/3] w-full rounded-[1.6rem] object-cover" />
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-12 text-center">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#6B7F3E] p-10 text-white">
          <Blob className="-right-14 -top-14 h-44 w-44 bg-white/10" />
          <Heart className="mx-auto mb-4 h-8 w-8 fill-white" />
          <p className="text-sm font-extrabold uppercase tracking-widest opacity-85">{a.missionTitle}</p>
          <p className="mt-4 text-2xl font-black leading-relaxed">&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <SectionHead eyebrow="Values" title={a.missionTitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => {
            const tints = ["bg-[#F6E3D5]", "bg-[#E9EDDA]", "bg-[#FBE9C7]", "bg-[#F3DEDA]"];
            return (
              <div key={v.title} className={`rounded-[2rem] ${tints[i % 4]} p-6`}>
                <p className="mb-2 text-2xl font-black text-[#9E3B2F]">0{i + 1}</p>
                <h3 className="font-black text-[#4A342B]">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#7a6354]">{v.desc}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-12 grid grid-cols-2 gap-5 rounded-[2rem] bg-white p-8 shadow-md md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.en} className="text-center">
              <p className="text-3xl font-black text-[#6B7F3E]">{s.value}</p>
              <p className="mt-1 text-sm font-bold text-[#7a6354]">{lang === "en" ? s.en : s.hi}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
