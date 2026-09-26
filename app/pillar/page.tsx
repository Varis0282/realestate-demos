"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { projects, amenities, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { SectionHead, StatsBand, FAQList, MapBlock, CTABand } from "./_ui";
import { Star, MapPin, Ruler, BadgeCheck, ArrowRight } from "lucide-react";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E8F1F1] to-[#F7F9F9]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0F5E63]/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#0F5E63]">
              <span className="h-2 w-2 rounded-full bg-[#D9A441]" />
              {t.hero.badge}
            </p>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-[#12312F] md:text-5xl">
              {t.hero.title} <span className="text-[#0F5E63]">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-600">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/pillar/contact#book" className="rounded-md bg-[#0F5E63] px-6 py-3.5 font-bold text-white shadow-lg transition hover:brightness-110">{t.hero.cta1}</Link>
              <a href={`tel:${inst.phoneRaw}`} className="rounded-md border-2 border-[#0F5E63] px-6 py-3 font-bold text-[#0F5E63] transition hover:bg-[#0F5E63]/5">{t.hero.cta2}</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600">
              {whyUs.slice(0, 3).map((w) => (
                <span key={w.icon} className="flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#0F5E63]" />{w[lang].title}</span>
              ))}
            </div>
          </div>
          <div className="relative">
            <img src={img.hero} alt="Shivalik township" className="aspect-[4/3] w-full rounded-xl object-cover shadow-2xl" />
            <div className="absolute -bottom-5 left-5 rounded-lg bg-white px-5 py-3 shadow-xl">
              <p className="text-2xl font-black text-[#0F5E63]">100%</p>
              <p className="text-xs text-slate-500">{lang === "en" ? "On-time possession record" : "समय पर पज़ेशन रिकॉर्ड"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHead eyebrow={t.nav.projects} title={t.sections.projectsTitle} sub={t.sections.projectsSub} />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.id} className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative">
                <img src={img.projects[p.photo]} alt={p[lang].name} className="aspect-[4/3] w-full object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-[#D9A441] px-3 py-1 text-xs font-bold text-[#12312F]">{p[lang].status}</span>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-extrabold text-[#0F5E63]">{p[lang].name}</h3>
                <p className="text-sm font-medium text-slate-500">{p[lang].type}</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-600"><MapPin className="h-4 w-4 text-[#D9A441]" />{p[lang].location}</p>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600"><Ruler className="h-4 w-4 text-[#D9A441]" />{p[lang].sizes}</p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[11px] uppercase text-slate-400">{t.misc.priceFrom}</p>
                    <p className="font-black text-[#12312F]">{p[lang].priceFrom}</p>
                  </div>
                  <Link href="/pillar/contact#book" className="rounded-md bg-[#0F5E63] px-4 py-2 text-sm font-bold text-white transition group-hover:brightness-110">{t.misc.enquire}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/pillar/projects" className="inline-flex items-center gap-2 font-bold text-[#0F5E63] underline decoration-[#D9A441] decoration-2 underline-offset-8">{t.misc.viewAll}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="Shivalik" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w) => (
              <div key={w.icon} className="rounded-xl border border-slate-100 bg-[#F7F9F9] p-6">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#0F5E63] text-[#D9A441]"><Icon name={w.icon} className="h-6 w-6" /></span>
                <h3 className="font-bold text-[#12312F]">{w[lang].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{w[lang].desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <SectionHead eyebrow={t.nav.amenities} title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {amenities.slice(0, 8).map((a) => (
            <div key={a.icon + a.en.title} className="flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-4">
              <Icon name={a.icon} className="h-6 w-6 shrink-0 text-[#0F5E63]" />
              <p className="text-sm font-semibold text-[#12312F]">{a[lang].title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#0F5E63]/[0.04] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow={t.nav.gallery} title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.slice(0, 6).map((r) => (
              <div key={r.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-[#D9A441] text-[#D9A441]" />)}
                </div>
                <p className="text-sm leading-relaxed text-slate-600">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
                <p className="mt-4 font-bold text-[#12312F]">{r.name}</p>
                <p className="text-xs text-slate-400">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHead eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {img.gallery.slice(0, 4).map((g, i) => (
            <img key={g} src={g} alt={`Gallery ${i + 1}`} className="aspect-square w-full rounded-lg object-cover transition hover:opacity-90" />
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link href="/pillar/gallery" className="font-bold text-[#0F5E63] underline decoration-[#D9A441] decoration-2 underline-offset-8">{t.misc.readMore}</Link>
        </div>
      </section>

      {/* FAQ + Map */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
