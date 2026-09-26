"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { Eyebrow, SectionHead, CTABand } from "../_ui";

export default function About() {
  const { lang, t } = useLang();
  const a = t.about;
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-20">
        <Eyebrow>{a.sub}</Eyebrow>
        <h1 className="max-w-3xl font-[family-name:var(--font-serif)] text-5xl font-medium text-white md:text-6xl">{a.title}</h1>
      </section>
      <section className="mx-auto grid max-w-7xl items-start gap-12 px-4 py-16 md:grid-cols-2">
        <div className="space-y-6 leading-relaxed text-[#8B929C]">
          <p className="font-[family-name:var(--font-serif)] text-2xl leading-relaxed text-[#D7DBE0]">{a.story1}</p>
          <p>{a.story2}</p>
          <p className="border-l-2 border-[#B87352] pl-5 text-[#D7DBE0]">{a.story3}</p>
        </div>
        <img src={img.about} alt="Shivalik construction" className="aspect-[4/5] w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
      </section>
      <section className="border-y border-white/10 py-20 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#B87352]">{a.missionTitle}</p>
          <p className="mt-6 font-[family-name:var(--font-serif)] text-3xl font-medium leading-relaxed text-white md:text-4xl">&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHead eyebrow="Values" title={a.missionTitle} />
        <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <div key={v.title} className="bg-[#0A0C10] p-7">
              <p className="mb-3 font-[family-name:var(--font-serif)] text-3xl text-[#B87352]/70">0{i + 1}</p>
              <h3 className="font-semibold text-white">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#8B929C]">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid grid-cols-2 divide-x divide-white/10 border border-white/10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.en} className="px-6 py-10 text-center">
              <p className="font-[family-name:var(--font-serif)] text-4xl font-medium text-[#B87352]">{s.value}</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#8B929C]">{lang === "en" ? s.en : s.hi}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
