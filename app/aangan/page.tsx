"use client";

import Link from "next/link";
import { useLang } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { projects, amenities, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { SectionHead, StatsBand, FAQList, MapBlock, CTABand, Blob, Squiggle } from "./_ui";
import { Star, MapPin, ArrowRight, Heart } from "lucide-react";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Blob className="-left-24 top-10 h-72 w-72 bg-[#F6E3D5]" />
        <Blob className="-right-20 bottom-0 h-80 w-80 bg-[#E9EDDA]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E9EDDA] px-4 py-2 text-sm font-extrabold text-[#4c5a2c]">
              <Heart className="h-4 w-4 fill-[#9E3B2F] text-[#9E3B2F]" />
              {t.hero.badge}
            </p>
            <h1 className="text-4xl font-black leading-tight text-[#4A342B] md:text-5xl">
              {t.hero.title}<br />
              <span className="text-[#9E3B2F]">{t.hero.titleAccent}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#7a6354]">{t.hero.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/aangan/contact#book" className="rounded-full bg-[#9E3B2F] px-7 py-3.5 font-extrabold text-white shadow-xl shadow-[#9E3B2F]/25 transition hover:scale-105">{t.hero.cta1}</Link>
              <a href={`tel:${inst.phoneRaw}`} className="rounded-full border-2 border-[#6B7F3E] px-7 py-3 font-extrabold text-[#6B7F3E] transition hover:bg-[#6B7F3E]/10">{t.hero.cta2}</a>
            </div>
            <p className="mt-6 text-sm font-bold text-[#6B7F3E]">{t.hero.open}</p>
          </div>
          <div className="relative">
            <div className="rotate-2 rounded-[2rem] bg-white p-3 shadow-2xl transition hover:rotate-0">
              <img src={img.hero} alt="Shivalik township" className="aspect-[4/3] w-full rounded-[1.6rem] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-4 -rotate-3 rounded-2xl bg-[#6B7F3E] px-5 py-3 text-white shadow-xl">
              <p className="text-xl font-black">1,200+</p>
              <p className="text-xs opacity-90">{lang === "en" ? "families call it home" : "परिवारों का अपना घर"}</p>
            </div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* Projects */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHead eyebrow={t.nav.projects} title={t.sections.projectsTitle} sub={t.sections.projectsSub} />
        <div className="grid gap-7 md:grid-cols-3">
          {projects.map((p, i) => (
            <div key={p.id} className={`rounded-[2rem] bg-white p-3 shadow-lg transition hover:-translate-y-2 ${i % 2 ? "-rotate-1" : "rotate-1"} hover:rotate-0`}>
              <div className="relative">
                <img src={img.projects[p.photo]} alt={p[lang].name} className="aspect-[4/3] w-full rounded-[1.6rem] object-cover" />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-extrabold text-[#6B7F3E]">{p[lang].status}</span>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-black text-[#9E3B2F]">{p[lang].name}</h3>
                <p className="text-sm font-bold text-[#a08b7a]">{p[lang].type}</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm text-[#7a6354]"><MapPin className="h-4 w-4 text-[#6B7F3E]" />{p[lang].location}</p>
                <div className="mt-4 flex items-center justify-between border-t-2 border-dashed border-[#E8D9C3] pt-4">
                  <p className="font-black text-[#4A342B]">{p[lang].priceFrom}</p>
                  <Link href="/aangan/contact#book" className="rounded-full bg-[#F6E3D5] px-4 py-2 text-sm font-extrabold text-[#9E3B2F] transition hover:bg-[#9E3B2F] hover:text-white">{t.misc.enquire}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/aangan/projects" className="inline-flex items-center gap-2 font-black text-[#6B7F3E]">{t.misc.viewAll}<ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* Why us */}
      <section className="relative overflow-hidden bg-white py-16">
        <Blob className="-right-24 top-8 h-64 w-64 bg-[#FBE9C7]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="Shivalik" title={t.sections.whyTitle} sub={t.sections.whySub} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((w, i) => {
              const tints = ["bg-[#F6E3D5]", "bg-[#E9EDDA]", "bg-[#FBE9C7]", "bg-[#F3DEDA]"];
              return (
                <div key={w.icon} className={`rounded-[2rem] ${tints[i % 4]} p-6`}>
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#9E3B2F]"><Icon name={w.icon} className="h-6 w-6" /></span>
                  <h3 className="font-black text-[#4A342B]">{w[lang].title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#7a6354]">{w[lang].desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Amenities preview */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHead eyebrow={t.nav.amenities} title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {amenities.slice(0, 8).map((a) => (
            <div key={a.en.title} className="flex items-center gap-3 rounded-2xl border-2 border-[#E8D9C3] bg-white p-4">
              <Icon name={a.icon} className="h-6 w-6 shrink-0 text-[#6B7F3E]" />
              <p className="text-sm font-extrabold text-[#4A342B]">{a[lang].title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-[#F3E7D7] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="Reviews" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
          <div className="grid gap-6 md:grid-cols-3">
            {reviews.map((r, i) => (
              <div key={r.name} className={`rounded-[2rem] bg-white p-6 shadow-md ${i % 2 ? "rotate-1" : "-rotate-1"} transition hover:rotate-0`}>
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9E3B2F] font-black text-white">{r.name[0]}</span>
                  <div>
                    <p className="font-black text-[#4A342B]">{r.name}</p>
                    <p className="text-xs text-[#a08b7a]">{r.area}</p>
                  </div>
                </div>
                <div className="mb-2 flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="h-4 w-4 fill-[#D9A441] text-[#D9A441]" />)}
                </div>
                <p className="text-sm leading-relaxed text-[#7a6354]">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <SectionHead eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {img.gallery.slice(0, 4).map((g, i) => (
            <div key={g} className={`rounded-3xl bg-white p-2 shadow-md ${i % 2 ? "rotate-1" : "-rotate-1"} transition hover:rotate-0`}>
              <img src={g} alt={`Gallery ${i + 1}`} className="aspect-square w-full rounded-2xl object-cover" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/aangan/gallery" className="font-black text-[#6B7F3E] underline decoration-wavy underline-offset-8">{t.misc.readMore}</Link>
        </div>
      </section>

      {/* FAQ + Map */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
          <FAQList />
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <MapBlock />
      </section>

      <CTABand />
    </main>
  );
}
