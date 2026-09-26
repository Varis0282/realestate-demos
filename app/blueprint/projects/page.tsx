"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { img } from "@/lib/config";
import { projects } from "@/lib/content";
import { Mono, SectionHead, CTABand } from "../_ui";

export default function Projects() {
  const { lang, t } = useLang();
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <Mono className="text-xs uppercase text-[#1D4ED8]">// {t.sections.projectsSub}</Mono>
        <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">{t.sections.projectsTitle}</h1>
      </section>
      <section className="mx-auto max-w-6xl space-y-16 px-4 py-14">
        {projects.map((p, i) => (
          <article key={p.id} className="border-t-2 border-[#101418] pt-8">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{p[lang].name}</h2>
              <Mono className="text-sm text-[#1D4ED8]">{String(i + 1).padStart(2, "0")} / {p[lang].status.toUpperCase()}</Mono>
            </div>
            <p className="mt-1 text-[#4B5563]">{p[lang].type}</p>
            <div className="mt-8 grid gap-10 md:grid-cols-2">
              <div className="relative">
                <img src={img.projects[p.photo]} alt={p[lang].name} className="aspect-[4/3] w-full object-cover grayscale transition hover:grayscale-0" />
                <Mono className="absolute bottom-3 right-3 bg-white px-3 py-1 text-xs">FIG. {String(i + 1).padStart(2, "0")}</Mono>
              </div>
              <div>
                <p className="leading-relaxed text-[#4B5563]">{p[lang].desc}</p>
                <table className="mt-6 w-full border-2 border-[#101418] text-sm">
                  <tbody>
                    {[
                      [t.misc.location, p[lang].location],
                      [t.misc.sizes, p[lang].sizes],
                      [t.misc.priceFrom, p[lang].priceFrom],
                      [t.misc.status, p[lang].status],
                      [t.misc.rera, "✓"],
                    ].map(([label, val]) => (
                      <tr key={label} className="border-b-2 border-[#E5E7EB] last:border-0">
                        <td className="border-r-2 border-[#101418] px-4 py-2.5"><Mono className="text-xs uppercase text-[#4B5563]">{label}</Mono></td>
                        <td className="px-4 py-2.5 font-semibold">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.highlights[lang].map((h) => (
                    <Mono key={h} className="border-2 border-[#101418] px-3 py-1 text-xs">{h}</Mono>
                  ))}
                </div>
                <Link href="/blueprint/contact#book" className="mt-7 inline-block bg-[#1D4ED8] px-7 py-3.5 font-bold text-white hover:bg-[#101418]">{t.hero.cta1}</Link>
              </div>
            </div>
          </article>
        ))}
      </section>
      <CTABand />
    </main>
  );
}
