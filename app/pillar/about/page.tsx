"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { stats } from "@/lib/content";
import { SectionHead, CTABand } from "../_ui";
import { BadgeCheck } from "lucide-react";

export default function About() {
  const { lang, t } = useLang();
  const a = t.about;
  return (
    <main>
      <section className="bg-gradient-to-br from-[#E8F1F1] to-[#F7F9F9] py-14 text-center">
        <h1 className="text-4xl font-black text-[#0F5E63]">{a.title}</h1>
        <p className="mt-2 text-slate-500">{a.sub}</p>
      </section>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2">
        <div className="space-y-5 leading-relaxed text-slate-600">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-semibold text-[#12312F]">{a.story3}</p>
        </div>
        <img src={img.about} alt="Shivalik construction" className="aspect-[4/3] w-full rounded-xl object-cover shadow-xl" />
      </section>
      <section className="bg-[#0F5E63] py-14 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#D9A441]">{a.missionTitle}</p>
          <p className="mt-4 text-2xl font-bold leading-relaxed md:text-3xl">&ldquo;{a.mission}&rdquo;</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHead eyebrow="Values" title={a.missionTitle} sub={a.sub} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v) => (
            <div key={v.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <BadgeCheck className="mb-3 h-7 w-7 text-[#D9A441]" />
              <h3 className="font-bold text-[#12312F]">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-6 rounded-xl bg-[#F0F5F5] p-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.en} className="text-center">
              <p className="text-3xl font-black text-[#0F5E63]">{s.value}</p>
              <p className="mt-1 text-sm text-slate-500">{lang === "en" ? s.en : s.hi}</p>
            </div>
          ))}
        </div>
      </section>
      <CTABand />
    </main>
  );
}
