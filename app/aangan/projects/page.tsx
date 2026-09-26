"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { projects } from "@/lib/content";
import { SectionHead, CTABand, Squiggle } from "../_ui";
import { MapPin, Ruler, IndianRupee, CalendarCheck, BadgeCheck } from "lucide-react";

export default function Projects() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="py-14 text-center">
        <h1 className="text-4xl font-black text-[#9E3B2F]">{t.sections.projectsTitle}</h1>
        <Squiggle />
        <p className="mt-2 text-[#7a6354]">{t.sections.projectsSub}</p>
      </section>
      <section className="mx-auto max-w-7xl space-y-14 px-4 pb-14">
        {projects.map((p, i) => (
          <div key={p.id} className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className={`rounded-[2rem] bg-white p-3 shadow-xl ${i % 2 ? "rotate-2" : "-rotate-2"} transition hover:rotate-0`}>
              <div className="relative">
                <img src={img.projects[p.photo]} alt={p[lang].name} className="aspect-[4/3] w-full rounded-[1.6rem] object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-extrabold text-[#6B7F3E]">{p[lang].status}</span>
              </div>
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#6B7F3E]"><BadgeCheck className="h-4 w-4" />{t.misc.rera}</p>
              <h2 className="mt-2 text-3xl font-black text-[#9E3B2F]">{p[lang].name}</h2>
              <p className="font-bold text-[#a08b7a]">{p[lang].type}</p>
              <p className="mt-4 leading-relaxed text-[#7a6354]">{p[lang].desc}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                {[
                  [MapPin, t.misc.location, p[lang].location],
                  [Ruler, t.misc.sizes, p[lang].sizes],
                  [IndianRupee, t.misc.priceFrom, p[lang].priceFrom],
                  [CalendarCheck, t.misc.status, p[lang].status],
                ].map(([Ic, label, val]: any) => (
                  <div key={label} className="rounded-2xl border-2 border-[#E8D9C3] bg-white p-3">
                    <dt className="flex items-center gap-1.5 text-xs font-bold uppercase text-[#a08b7a]"><Ic className="h-3.5 w-3.5" />{label}</dt>
                    <dd className="mt-1 font-black text-[#4A342B]">{val}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.highlights[lang].map((h) => (
                  <span key={h} className="rounded-full bg-[#E9EDDA] px-3.5 py-1.5 text-xs font-extrabold text-[#4c5a2c]">{h}</span>
                ))}
              </div>
              <Link href="/aangan/contact#book" className="mt-7 inline-block rounded-full bg-[#9E3B2F] px-7 py-3.5 font-extrabold text-white shadow-xl shadow-[#9E3B2F]/25 transition hover:scale-105">{t.hero.cta1}</Link>
            </div>
          </div>
        ))}
      </section>
      <CTABand />
    </main>
  );
}
