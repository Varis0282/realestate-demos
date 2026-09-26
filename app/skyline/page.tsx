"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import { inst, img } from "@/lib/config";
import { projects, amenities, whyUs, reviews } from "@/lib/content";
import Icon from "@/components/Icon";
import { FadeIn, SectionHead, StatsBand, FAQList, MapBlock, CTABand } from "./_ui";
import { Star, MapPin, ArrowRight } from "lucide-react";

export default function Home() {
  const { lang, t } = useLang();
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 text-center md:pt-24">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto mb-5 w-fit rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-semibold text-[#F59E0B]">
          {t.hero.badge}
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          {t.hero.title}{" "}
          <span className="bg-gradient-to-r from-[#F59E0B] via-[#FB7185] to-[#F59E0B] bg-clip-text text-transparent">{t.hero.titleAccent}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="mx-auto mt-6 max-w-2xl text-slate-400">
          {t.hero.sub}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/skyline/contact" className="rounded-full bg-gradient-to-r from-[#F59E0B] to-[#FB7185] px-7 py-3.5 font-bold text-[#0B1220] shadow-[0_0_30px_rgba(245,158,11,0.4)] transition hover:shadow-[0_0_44px_rgba(245,158,11,0.6)]">{t.hero.cta1}</Link>
          <a href={`tel:${inst.phoneRaw}`} className="rounded-full border border-white/20 px-7 py-3.5 font-bold hover:bg-white/10">{t.hero.cta2}</a>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.4 }} className="relative mx-auto mt-12 max-w-5xl">
          <img src={img.hero} alt="Shivalik township" className="aspect-[21/10] w-full rounded-3xl border border-white/10 object-cover shadow-2xl" />
          <div className="absolute -bottom-5 left-6 rounded-2xl border border-white/10 bg-[#0F1830]/90 px-5 py-3 shadow-xl backdrop-blur">
            <p className="bg-gradient-to-r from-[#F59E0B] to-[#FB7185] bg-clip-text text-xl font-black text-transparent">100%</p>
            <p className="text-xs text-slate-400">{lang === "en" ? "On-time possession" : "समय पर पज़ेशन"}</p>
          </div>
          <div className="absolute -top-4 right-6 rounded-2xl border border-white/10 bg-[#0F1830]/90 px-5 py-3 shadow-xl backdrop-blur">
            <p className="text-xl font-black text-white">1,200+</p>
            <p className="text-xs text-slate-400">{lang === "en" ? "Happy families" : "खुशहाल परिवार"}</p>
          </div>
        </motion.div>
      </section>

      <StatsBand />

      {/* Projects */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow={t.nav.projects} title={t.sections.projectsTitle} sub={t.sections.projectsSub} />
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.1}>
              <motion.div whileHover={{ y: -8 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] backdrop-blur">
                <div className="relative">
                  <img src={img.projects[p.photo]} alt={p[lang].name} className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-[#0B1220]/85 px-3 py-1 text-xs font-bold text-[#F59E0B] backdrop-blur">{p[lang].status}</span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold">{p[lang].name}</h3>
                  <p className="text-sm text-slate-400">{p[lang].type}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-slate-300"><MapPin className="h-4 w-4 text-[#FB7185]" />{p[lang].location}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
                    <p className="font-black text-[#F59E0B]">{p[lang].priceFrom}</p>
                    <Link href="/skyline/contact" className="text-sm font-bold text-white underline decoration-[#FB7185] underline-offset-4">{t.misc.enquire}</Link>
                  </div>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-9 text-center">
          <Link href="/skyline/projects" className="inline-flex items-center gap-2 font-bold text-[#F59E0B]">{t.misc.viewAll}<ArrowRight className="h-4 w-4" /></Link>
        </FadeIn>
      </section>

      {/* Why us */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="Shivalik" title={t.sections.whyTitle} sub={t.sections.whySub} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((w, i) => (
            <FadeIn key={w.icon} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur transition hover:border-[#F59E0B]/40">
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F59E0B]/25 to-[#FB7185]/25 text-[#F59E0B]"><Icon name={w.icon} className="h-6 w-6" /></span>
                <h3 className="font-bold">{w[lang].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{w[lang].desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Amenities strip */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow={t.nav.amenities} title={t.sections.amenitiesTitle} sub={t.sections.amenitiesSub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {amenities.slice(0, 8).map((a, i) => (
            <FadeIn key={a.en.title} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur">
                <Icon name={a.icon} className="h-6 w-6 shrink-0 text-[#FB7185]" />
                <p className="text-sm font-semibold">{a[lang].title}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Reviews marquee */}
      <section className="py-14">
        <SectionHead eyebrow="Reviews" title={t.sections.reviewsTitle} sub={t.sections.reviewsSub} />
        <div className="group relative overflow-hidden">
          <div className="flex w-max animate-marquee gap-5 group-hover:[animation-play-state:paused]">
            {[...reviews, ...reviews].map((r, i) => (
              <div key={i} className="w-80 shrink-0 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur">
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: r.stars }).map((_, j) => <Star key={j} className="h-4 w-4 fill-[#F59E0B] text-[#F59E0B]" />)}
                </div>
                <p className="text-sm leading-relaxed text-slate-300">&ldquo;{lang === "en" ? r.en : r.hi}&rdquo;</p>
                <p className="mt-4 font-bold">{r.name}</p>
                <p className="text-xs text-slate-500">{r.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow={t.nav.gallery} title={t.sections.galleryTitle} sub={t.sections.gallerySub} />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {img.gallery.slice(0, 4).map((g, i) => (
            <FadeIn key={g} delay={i * 0.07}>
              <motion.img whileHover={{ scale: 1.03 }} src={g} alt={`Gallery ${i + 1}`} className="aspect-square w-full rounded-2xl border border-white/10 object-cover" />
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8 text-center">
          <Link href="/skyline/gallery" className="font-bold text-[#F59E0B]">{t.misc.readMore} →</Link>
        </FadeIn>
      </section>

      {/* FAQ + Map */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <SectionHead eyebrow="FAQ" title={t.sections.faqTitle} sub={t.sections.faqSub} />
        <FAQList />
      </section>
      <section className="mx-auto max-w-6xl px-4 py-6">
        <SectionHead eyebrow={t.nav.contact} title={t.sections.visitTitle} sub={t.sections.visitSub} />
        <FadeIn><MapBlock /></FadeIn>
      </section>

      <CTABand />
    </main>
  );
}
