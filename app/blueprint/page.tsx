"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { projects, amenities, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { Mono, GridPanel, SectionHead, StatsBand, FAQList, MapBlock, CTABand } from "./_ui";
import { Star, ArrowUpRight } from "lucide-react";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pt-14 md:pt-20">
        <Mono className="text-xs uppercase text-[#1D4ED8]">// {t.hero.badge}</Mono>
        <h1 className="mt-6 text-5xl font-bold leading-[1.02] tracking-tight md:text-8xl">
          {t.hero.title}
          <br />
          <span className="text-[#1D4ED8]">{t.hero.titleAccent}</span>
        </h1>
        <div className="mt-10 grid items-end gap-8 border-t-2 border-[#101418] pt-8 md:grid-cols-[1fr,auto]">
          <p className="max-w-xl leading-relaxed text-[#4B5563]">{t.hero.sub}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/blueprint/contact" className="bg-[#1D4ED8] px-7 py-4 font-bold text-white hover:bg-[#101418]">{t.hero.cta1}</Link>
            <a href={`tel:${inst.phoneRaw}`} className="border-2 border-[#101418] px-7 py-3.5 font-bold hover:bg-[#101418] hover:text-white">{t.hero.cta2}</a>
          </div>
        </div>
        <div className="relative mt-10">
          <img src={img.hero} alt="Shivalik township" className="aspect-[21/9] w-full object-cover grayscale" />
          <Mono className="absolute bottom-3 right-4 bg-white px-3 py-1 text-xs text-[#101418]">FIG. 01 — {lang === "en" ? "SUPER CORRIDOR TOWNSHIP" : "सुपर कॉरिडोर टाउनशिप"}</Mono>
        </div>
      </section>

      <StatsBand />

      {/* Projects table */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="01 / PROJECTS" title={t.sections.projectsTitle} sub={t.sections.projectsSub} />
        <div>
          {projects.map((p, i) => (
            <Link key={p.id} href="/blueprint/projects" className="group grid items-center gap-4 border-b-2 border-[#101418] py-6 transition hover:bg-[#F8FAFF] md:grid-cols-[64px,1.4fr,1fr,auto,40px]">
              <Mono className="text-sm text-[#1D4ED8]">{String(i + 1).padStart(2, "0")}</Mono>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{p[lang].name}</h3>
                <p className="text-sm text-[#4B5563]">{p[lang].type}</p>
              </div>
              <Mono className="text-xs uppercase text-[#4B5563]">{p[lang].location} · {p[lang].status}</Mono>
              <p className="font-bold text-[#1D4ED8]">{p[lang].priceFrom}</p>
              <ArrowUpRight className="hidden h-6 w-6 text-[#9CA3AF] transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1D4ED8] md:block" />
            </Link>
          ))}
        </div>
      </section>

      {/* Why us — grid panel */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="02 / WHY US" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <GridPanel className="grid gap-px bg-[#101418] p-0 sm:grid-cols-2">
          {whyUs.map((w, i) => (
            <div key={w.icon} className="bg-white p-7">
              <div className="flex items-start justify-between">
                <Icon name={w.icon} className="h-6 w-6 text-[#1D4ED8]" />
                <Mono className="text-xs text-[#9CA3AF]">{String(i + 1).padStart(2, "0")}</Mono>
              </div>
              <h3 className="mt-4 font-bold">{w[lang].title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">{w[lang].desc}</p>
            </div>
          ))}
        </GridPanel>
      </section>

      {/* Amenities */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="03 / AMENITIES" title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
        <div className="grid grid-cols-2 gap-x-8 md:grid-cols-4">
          {amenities.slice(0, 8).map((a, i) => (
            <div key={a.en.title} className="border-b-2 border-[#E5E7EB] py-4">
              <p className="flex items-center gap-2.5 text-sm font-semibold"><Icon name={a.icon} className="h-5 w-5 text-[#1D4ED8]" />{a[lang].title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="04 / OWNERS" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.slice(0, 3).map((r) => (
            <figure key={r.name} className="border-l-2 border-[#1D4ED8] pl-5">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-[#101418] text-[#101418]" />)}
              </div>
              <blockquote className="text-[15px] leading-relaxed">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-bold">{r.name}</p>
                <Mono className="text-xs text-[#6B7280]">{r.area}</Mono>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {reviews.slice(3, 6).map((r) => (
            <figure key={r.name} className="border-l-2 border-[#E5E7EB] pl-5">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-[#101418] text-[#101418]" />)}
              </div>
              <blockquote className="text-[15px] leading-relaxed">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-bold">{r.name}</p>
                <Mono className="text-xs text-[#6B7280]">{r.area}</Mono>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="05 / GALLERY" title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {img.gallery.slice(0, 4).map((g, i) => (
            <div key={g} className="relative">
              <img src={g} alt={`Gallery ${i + 1}`} className="aspect-square w-full object-cover grayscale transition hover:grayscale-0" />
              <Mono className="absolute bottom-2 left-2 bg-white px-2 py-0.5 text-[10px]">FIG. {String(i + 2).padStart(2, "0")}</Mono>
            </div>
          ))}
        </div>
        <Link href="/blueprint/gallery" className="mt-8 inline-block font-bold text-[#1D4ED8] underline decoration-2 underline-offset-8">{t.misc.readMore} →</Link>
      </section>

      {/* FAQ + Map */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead num="06 / FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <SectionHead num="07 / LOCATION" title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
