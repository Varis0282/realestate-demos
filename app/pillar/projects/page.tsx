"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { projects } from "@/lib/content";
import { SectionHead, CTABand } from "../_ui";
import { MapPin, Ruler, BadgeCheck, IndianRupee, CalendarCheck } from "lucide-react";

export default function Projects() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="bg-gradient-to-br from-[#E8F1F1] to-[#F7F9F9] py-14 text-center">
        <h1 className="text-4xl font-black text-[#0F5E63]">{t.sections.projectsTitle}</h1>
        <p className="mt-2 text-slate-500">{t.sections.projectsSub}</p>
      </section>
      <section className="mx-auto max-w-7xl space-y-14 px-4 py-16">
        {projects.map((p, i) => (
          <div key={p.id} className={`grid items-center gap-8 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="relative">
              <img src={img.projects[p.photo]} alt={p[lang].name} className="aspect-[4/3] w-full rounded-xl object-cover shadow-xl" />
              <span className="absolute left-4 top-4 rounded-full bg-[#D9A441] px-3.5 py-1.5 text-xs font-bold text-[#12312F]">{p[lang].status}</span>
            </div>
            <div>
              <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#D9A441]"><BadgeCheck className="h-4 w-4" />{t.misc.rera}</p>
              <h2 className="mt-2 text-3xl font-black text-[#0F5E63]">{p[lang].name}</h2>
              <p className="font-semibold text-slate-500">{p[lang].type}</p>
              <p className="mt-4 leading-relaxed text-slate-600">{p[lang].desc}</p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-[#F0F5F5] p-3"><dt className="flex items-center gap-1.5 text-xs uppercase text-slate-400"><MapPin className="h-3.5 w-3.5" />{t.misc.location}</dt><dd className="mt-1 font-bold text-[#12312F]">{p[lang].location}</dd></div>
                <div className="rounded-lg bg-[#F0F5F5] p-3"><dt className="flex items-center gap-1.5 text-xs uppercase text-slate-400"><Ruler className="h-3.5 w-3.5" />{t.misc.sizes}</dt><dd className="mt-1 font-bold text-[#12312F]">{p[lang].sizes}</dd></div>
                <div className="rounded-lg bg-[#F0F5F5] p-3"><dt className="flex items-center gap-1.5 text-xs uppercase text-slate-400"><IndianRupee className="h-3.5 w-3.5" />{t.misc.priceFrom}</dt><dd className="mt-1 font-bold text-[#12312F]">{p[lang].priceFrom}</dd></div>
                <div className="rounded-lg bg-[#F0F5F5] p-3"><dt className="flex items-center gap-1.5 text-xs uppercase text-slate-400"><CalendarCheck className="h-3.5 w-3.5" />{t.misc.status}</dt><dd className="mt-1 font-bold text-[#12312F]">{p[lang].status}</dd></div>
              </dl>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.highlights[lang].map((h) => (
                  <span key={h} className="rounded-full border border-[#0F5E63]/25 bg-white px-3 py-1 text-xs font-semibold text-[#0F5E63]">{h}</span>
                ))}
              </div>
              <Link href="/pillar/contact#book" className="mt-7 inline-block rounded-md bg-[#0F5E63] px-6 py-3 font-bold text-white shadow hover:brightness-110">{t.hero.cta1}</Link>
            </div>
          </div>
        ))}
      </section>
      <CTABand />
    </main>
  );
}
