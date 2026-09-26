"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { projects } from "@/lib/content";
import { FadeIn, CTABand } from "../_ui";
import { MapPin, Ruler, IndianRupee, CalendarCheck, BadgeCheck } from "lucide-react";

export default function Projects() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <FadeIn>
          <h1 className="text-4xl font-bold md:text-5xl">{t.sections.projectsTitle}</h1>
          <p className="mt-3 text-slate-400">{t.sections.projectsSub}</p>
        </FadeIn>
      </section>
      <section className="mx-auto max-w-6xl space-y-12 px-4 py-14">
        {projects.map((p, i) => (
          <FadeIn key={p.id}>
            <motion.div whileHover={{ y: -4 }} className={`grid items-center gap-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur md:grid-cols-2 md:p-9 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
              <div className="relative">
                <img src={img.projects[p.photo]} alt={p[lang].name} className="aspect-[4/3] w-full rounded-2xl border border-white/10 object-cover" />
                <span className="absolute left-4 top-4 rounded-full bg-[#0B1220]/85 px-3.5 py-1.5 text-xs font-bold text-[#F59E0B] backdrop-blur">{p[lang].status}</span>
              </div>
              <div>
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FB7185]"><BadgeCheck className="h-4 w-4" />{t.misc.rera}</p>
                <h2 className="mt-2 text-3xl font-bold">{p[lang].name}</h2>
                <p className="text-slate-400">{p[lang].type}</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-300">{p[lang].desc}</p>
                <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  {[
                    [MapPin, t.misc.location, p[lang].location],
                    [Ruler, t.misc.sizes, p[lang].sizes],
                    [IndianRupee, t.misc.priceFrom, p[lang].priceFrom],
                    [CalendarCheck, t.misc.status, p[lang].status],
                  ].map(([Ic, label, val]: any) => (
                    <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                      <dt className="flex items-center gap-1.5 text-xs uppercase text-slate-500"><Ic className="h-3.5 w-3.5" />{label}</dt>
                      <dd className="mt-1 font-bold">{val}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights[lang].map((h) => (
                    <span key={h} className="rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3 py-1 text-xs font-semibold text-[#F59E0B]">{h}</span>
                  ))}
                </div>
                <Link href="/skyline/contact" className="mt-7 inline-block rounded-full bg-gradient-to-r from-[#F59E0B] to-[#FB7185] px-6 py-3 font-bold text-[#0B1220] shadow-[0_0_24px_rgba(245,158,11,0.35)]">{t.hero.cta1}</Link>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </section>
      <CTABand />
    </main>
  );
}
