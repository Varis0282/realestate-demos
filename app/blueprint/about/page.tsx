"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { Mono, GridPanel, SectionHead, CTABand } from "../_ui";

export default function About() {
  const { lang, t } = useLang();
  const a = t.about;
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <Mono className="text-xs uppercase text-[#1D4ED8]">// {a.sub}</Mono>
        <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">{a.title}</h1>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2">
        <div className="space-y-6 leading-relaxed text-[#4B5563]">
          <p className="text-xl font-medium text-[#101418]">{a.story1}</p>
          <p>{a.story2}</p>
          <p className="border-l-2 border-[#1D4ED8] pl-5 font-medium text-[#101418]">{a.story3}</p>
        </div>
        <div className="relative">
          <img src={img.about} alt="Shivalik construction" className="aspect-[4/5] w-full object-cover grayscale" />
          <Mono className="absolute bottom-3 right-3 bg-white px-3 py-1 text-xs">FIG. 08 — SITE, {new Date().getFullYear()}</Mono>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <GridPanel className="p-10 text-center md:p-16">
          <Mono className="text-xs uppercase text-[#1D4ED8]">{a.missionTitle}</Mono>
          <p className="mx-auto mt-5 max-w-3xl text-2xl font-bold leading-relaxed md:text-3xl">&ldquo;{a.mission}&rdquo;</p>
        </GridPanel>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="01 / VALUES" title={a.missionTitle} />
        <div className="grid gap-x-10 md:grid-cols-2">
          {a.values.map((v, i) => (
            <div key={v.title} className="border-b-2 border-[#E5E7EB] py-6">
              <div className="flex items-baseline gap-4">
                <Mono className="text-sm text-[#1D4ED8]">{String(i + 1).padStart(2, "0")}</Mono>
                <div>
                  <h3 className="font-bold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#4B5563]">{v.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 border-2 border-[#101418] md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.en} className={`p-7 text-center ${i % 2 === 0 ? "border-r-2 border-[#101418]" : ""} ${i < 2 ? "border-b-2 border-[#101418] md:border-b-0" : ""} ${i === 1 ? "md:border-r-2" : ""}`}>
              <p className="text-3xl font-bold text-[#1D4ED8]">{s.value}</p>
              <Mono className="mt-1 block text-xs uppercase text-[#4B5563]">{lang === "en" ? s.en : s.hi}</Mono>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
