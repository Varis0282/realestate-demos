"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { projects, amenities, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { Eyebrow, SectionHead, StatsBand, FAQList, MapBlock, CTABand } from "./_ui";
import { Star, ArrowRight } from "lucide-react";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="relative">
        <img src={img.hero} alt="Shivalik township" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0C10]/60 via-transparent to-[#0A0C10]" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 md:py-40">
          <Eyebrow>{t.hero.badge}</Eyebrow>
          <h1 className="max-w-3xl font-[family-name:var(--font-serif)] text-5xl font-medium leading-[1.08] text-white md:text-7xl">
            {t.hero.title}<br />
            <em className="text-[#B87352]">{t.hero.titleAccent}</em>
          </h1>
          <p className="mt-7 max-w-xl leading-relaxed text-[#8B929C]">{t.hero.sub}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/noir/contact" className="bg-[#B87352] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#0A0C10] transition hover:brightness-110">{t.hero.cta1}</Link>
            <a href={`tel:${inst.phoneRaw}`} className="border border-white/25 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#B87352] hover:text-[#B87352]">{t.hero.cta2}</a>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Projects — numbered rows */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHead eyebrow={t.nav.projects} title={t.sections.projectsTitle} sub={t.sections.projectsSub} />
        <div className="divide-y divide-white/10 border-y border-white/10">
          {projects.map((p, i) => (
            <Link key={p.id} href="/noir/projects" className="group grid items-center gap-6 py-8 transition hover:bg-white/[0.02] md:grid-cols-[80px,1fr,auto,auto]">
              <span className="font-[family-name:var(--font-serif)] text-3xl text-[#B87352]/70">0{i + 1}</span>
              <div>
                <h3 className="font-[family-name:var(--font-serif)] text-2xl font-medium text-white md:text-3xl">{p[lang].name}</h3>
                <p className="mt-1 text-sm text-[#8B929C]">{p[lang].type} · {p[lang].location}</p>
              </div>
              <div className="text-left md:text-right">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#5B626C]">{t.misc.priceFrom}</p>
                <p className="font-[family-name:var(--font-serif)] text-xl text-[#B87352]">{p[lang].priceFrom}</p>
              </div>
              <ArrowRight className="hidden h-6 w-6 text-[#5B626C] transition group-hover:translate-x-2 group-hover:text-[#B87352] md:block" />
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <Link href="/noir/projects" className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#B87352]">{t.misc.viewAll} →</Link>
        </div>
      </section>

      {/* Feature image + why us */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:grid-cols-2">
        <img src={img.heroAlt} alt="Township" className="aspect-[4/5] w-full object-cover grayscale transition duration-700 hover:grayscale-0" />
        <div>
          <SectionHead eyebrow="Shivalik" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="space-y-7">
            {whyUs.map((w) => (
              <div key={w.icon} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-[#B87352]/40 text-[#B87352]"><Icon name={w.icon} className="h-5 w-5" /></span>
                <div>
                  <h3 className="font-semibold text-white">{w[lang].title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#8B929C]">{w[lang].desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead center eyebrow={t.nav.amenities} title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
          <div className="grid grid-cols-2 gap-px border border-white/10 bg-white/10 md:grid-cols-4">
            {amenities.slice(0, 8).map((a) => (
              <div key={a.en.title} className="bg-[#0A0C10] p-6 transition hover:bg-[#0E1116]">
                <Icon name={a.icon} className="mb-4 h-6 w-6 text-[#B87352]" />
                <p className="text-sm font-medium text-white">{a[lang].title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHead center eyebrow="Testimonials" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="grid gap-px border border-white/10 bg-white/10 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#0A0C10] p-7">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-[#B87352] text-[#B87352]" />)}
              </div>
              <p className="font-[family-name:var(--font-serif)] text-lg leading-relaxed text-[#D7DBE0]">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
              <p className="mt-5 text-sm font-semibold text-white">{r.name}</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#5B626C]">{r.area}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery strip */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
          <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
            {img.gallery.slice(0, 4).map((g, i) => (
              <img key={g} src={g} alt={`Gallery ${i + 1}`} className="aspect-square w-full object-cover grayscale transition duration-500 hover:grayscale-0" />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/noir/gallery" className="text-[12px] font-semibold uppercase tracking-[0.25em] text-[#B87352]">{t.misc.readMore} →</Link>
          </div>
        </div>
      </section>

      {/* FAQ + Map */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHead center eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
