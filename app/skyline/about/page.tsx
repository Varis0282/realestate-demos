"use client";

import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { FadeIn, SectionHead, StatsBand, CTABand } from "../_ui";
import { Sparkles } from "lucide-react";

export default function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <FadeIn>
          <h1 className="text-4xl font-bold md:text-5xl">{a.title}</h1>
          <p className="mt-3 text-slate-400">{a.sub}</p>
        </FadeIn>
      </section>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2">
        <FadeIn className="space-y-5 leading-relaxed text-slate-300">
          <p>{a.story1}</p>
          <p>{a.story2}</p>
          <p className="font-semibold text-white">{a.story3}</p>
        </FadeIn>
        <FadeIn delay={0.15}>
          <img src={img.about} alt="Shivalik construction" className="aspect-[4/3] w-full rounded-3xl border border-white/10 object-cover shadow-2xl" />
        </FadeIn>
      </section>
      <section className="mx-auto max-w-4xl px-4 py-10 text-center">
        <FadeIn>
          <div className="rounded-3xl border border-[#F59E0B]/25 bg-gradient-to-r from-[#F59E0B]/10 to-[#FB7185]/10 p-10">
            <Sparkles className="mx-auto mb-4 h-7 w-7 text-[#F59E0B]" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#F59E0B]">{a.missionTitle}</p>
            <p className="mt-4 text-2xl font-bold leading-relaxed">&ldquo;{a.mission}&rdquo;</p>
          </div>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10">
        <SectionHead eyebrow="Values" title={a.missionTitle} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.values.map((v, i) => (
            <FadeIn key={v.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <p className="mb-2 bg-gradient-to-r from-[#F59E0B] to-[#FB7185] bg-clip-text text-2xl font-black text-transparent">0{i + 1}</p>
                <h3 className="font-bold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
      <StatsBand />
      <CTABand />
    </main>
  );
}
