"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { projects } from "@/lib/content";
import { Eyebrow, CTABand } from "../_ui";
import { BadgeCheck } from "lucide-react";

export default function Projects() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-20">
        <Eyebrow>{t.sections.projectsSub}</Eyebrow>
        <h1 className="font-[family-name:var(--font-serif)] text-5xl font-medium text-white md:text-6xl">{t.sections.projectsTitle}</h1>
      </section>
      <section className="mx-auto max-w-7xl space-y-20 px-4 py-16">
        {projects.map((p, i) => (
          <div key={p.id} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative">
              <img src={img.projects[p.photo]} alt={p[lang].name} className="aspect-[4/3] w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
              <span className="absolute left-0 top-6 bg-[#B87352] px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#0A0C10]">{p[lang].status}</span>
            </div>
            <div>
              <p className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B87352]"><BadgeCheck className="h-4 w-4" />{t.misc.rera}</p>
              <h2 className="mt-3 font-[family-name:var(--font-serif)] text-4xl font-medium text-white md:text-5xl">{p[lang].name}</h2>
              <p className="mt-1 text-[#8B929C]">{p[lang].type}</p>
              <p className="mt-5 leading-relaxed text-[#8B929C]">{p[lang].desc}</p>
              <dl className="mt-7 grid grid-cols-2 gap-px border border-white/10 bg-white/10 text-sm">
                {[
                  [t.misc.location, p[lang].location],
                  [t.misc.sizes, p[lang].sizes],
                  [t.misc.priceFrom, p[lang].priceFrom],
                  [t.misc.status, p[lang].status],
                ].map(([label, val]) => (
                  <div key={label} className="bg-[#0A0C10] p-4">
                    <dt className="text-[10px] uppercase tracking-[0.25em] text-[#5B626C]">{label}</dt>
                    <dd className="mt-1.5 font-[family-name:var(--font-serif)] text-lg text-[#D7DBE0]">{val}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.highlights[lang].map((h) => (
                  <span key={h} className="border border-[#B87352]/35 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.15em] text-[#B87352]">{h}</span>
                ))}
              </div>
              <Link href="/noir/contact#book" className="mt-8 inline-block bg-[#B87352] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#0A0C10] transition hover:brightness-110">{t.hero.cta1}</Link>
            </div>
          </div>
        ))}
      </section>
      <CTABand />
    </main>
  );
}
