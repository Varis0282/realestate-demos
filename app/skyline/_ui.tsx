"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import { BookingStyles } from "@/components/BookingForm";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";

export const AMBER = "#F59E0B";

export function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#F59E0B]/15 blur-[130px]" />
      <div className="absolute right-[-10rem] top-1/4 h-[36rem] w-[36rem] rounded-full bg-[#FB7185]/12 blur-[140px]" />
      <div className="absolute bottom-[-12rem] left-1/3 h-[34rem] w-[34rem] rounded-full bg-[#1E3A5F]/60 blur-[120px]" />
    </div>
  );
}

export function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const num = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/^[0-9,]+/, "");
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView || isNaN(num)) return;
    const t0 = performance.now();
    const dur = 1200;
    let raf: number;
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      setN(Math.round(num * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, num]);
  if (isNaN(num)) return <span ref={ref}>{value}</span>;
  return <span ref={ref}>{n.toLocaleString("en-IN")}{suffix}</span>;
}

export function Nav() {
  const { lang, t } = useLang();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/skyline", label: t.nav.home },
    { href: "/skyline/about", label: t.nav.about },
    { href: "/skyline/projects", label: t.nav.projects },
    { href: "/skyline/amenities", label: t.nav.amenities },
    { href: "/skyline/gallery", label: t.nav.gallery },
    { href: "/skyline/contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-4 z-40 px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.07] px-5 py-3 shadow-2xl backdrop-blur-xl">
        <Link href="/skyline" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#F59E0B] to-[#FB7185] text-base font-black text-[#0B1220]">S</span>
          <span className="font-bold">{lang === "en" ? inst.shortName : "शिवालिक"}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? "font-semibold text-[#F59E0B]" : "text-slate-300 hover:text-white"}>{l.label}</Link>
          ))}
          <Link href="/" className="text-xs text-slate-400 hover:text-white">← All demos</Link>
          <LangToggle className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold hover:bg-white/20" />
          <Link href="/skyline/contact#book" className="rounded-full bg-gradient-to-r from-[#F59E0B] to-[#FB7185] px-4 py-2 text-sm font-bold text-[#0B1220] shadow-[0_0_24px_rgba(245,158,11,0.35)] transition hover:shadow-[0_0_36px_rgba(245,158,11,0.55)]">{t.nav.book}</Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mx-auto mt-2 max-w-6xl rounded-2xl border border-white/10 bg-[#0F1830]/95 p-4 backdrop-blur-xl lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm text-slate-200">{l.label}</Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <LangToggle className="rounded-full border border-white/15 px-3 py-1 text-xs" />
            <Link href="/" className="text-xs text-slate-400">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <FadeIn className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-[#F59E0B]">{eyebrow}</p>
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-slate-400">{sub}</p>}
    </FadeIn>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.en} delay={i * 0.08}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur">
              <p className="bg-gradient-to-r from-[#F59E0B] to-[#FB7185] bg-clip-text text-3xl font-black text-transparent md:text-4xl"><Counter value={s.value} /></p>
              <p className="mt-1.5 text-sm text-slate-400">{lang === "en" ? s.en : s.hi}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <FadeIn key={i} delay={i * 0.05}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur">
            <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
              {f[lang].q}
              <ChevronDown className={`h-5 w-5 shrink-0 text-[#F59E0B] transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
            </button>
            {openIdx === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{f[lang].a}</p>}
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.05] backdrop-blur">
      <iframe src={inst.mapEmbed} className="h-80 w-full opacity-90 [filter:invert(0.9)_hue-rotate(180deg)]" loading="lazy" title="Map" />
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <p className="flex items-center gap-2 text-sm text-slate-300"><MapPin className="h-4 w-4 text-[#F59E0B]" />{inst.address}</p>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-bold text-[#F59E0B]">{t.misc.getDirections}</a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <FadeIn>
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-[#1E3A5F] via-[#3B2F4E] to-[#0B1220] p-10 text-center shadow-2xl md:p-14">
          <h2 className="text-3xl font-bold md:text-4xl">{t.sections.ctaTitle}</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-300">{t.sections.ctaSub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/skyline/contact#book" className="rounded-full bg-gradient-to-r from-[#F59E0B] to-[#FB7185] px-7 py-3.5 font-bold text-[#0B1220] shadow-[0_0_30px_rgba(245,158,11,0.4)] transition hover:shadow-[0_0_44px_rgba(245,158,11,0.6)]">{t.hero.cta1}</Link>
            <a href={`tel:${inst.phoneRaw}`} className="rounded-full border border-white/25 px-7 py-3.5 font-bold hover:bg-white/10">{t.hero.cta2}</a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#070C17]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold">{lang === "en" ? inst.name : inst.nameHi}</p>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{t.footer.tagline}</p>
          <p className="mt-2 text-xs text-[#F59E0B]">{t.misc.rera}</p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-[#F59E0B]">{t.footer.quick}</p>
          {[["/skyline", t.nav.home], ["/skyline/projects", t.nav.projects], ["/skyline/amenities", t.nav.amenities], ["/skyline/gallery", t.nav.gallery], ["/skyline/contact", t.nav.contact]].map(([h, l]) => (
            <Link key={h} href={h} className="block py-1 text-sm text-slate-400 hover:text-white">{l}</Link>
          ))}
        </div>
        <div>
          <p className="mb-3 font-semibold text-[#F59E0B]">{t.footer.contact}</p>
          <p className="text-sm leading-relaxed text-slate-400">{lang === "en" ? inst.address : inst.addressHi}</p>
          <a href={`tel:${inst.phoneRaw}`} className="mt-2 block text-sm font-semibold text-white">{inst.phone}</a>
          <p className="text-sm text-slate-400">{inst.email}</p>
        </div>
        <div>
          <p className="mb-3 font-semibold text-[#F59E0B]">{t.footer.hours}</p>
          {inst.timings[lang].map((r) => (
            <p key={r.days} className="py-1 text-sm text-slate-400"><span className="font-semibold text-slate-200">{r.days}:</span> {r.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} {inst.name}. {t.footer.rights}</div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl md:p-8",
  label: "mb-1.5 block text-sm font-semibold text-slate-200",
  input: "w-full rounded-xl border border-white/15 bg-white/[0.06] px-3.5 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/30",
  select: "w-full rounded-xl border border-white/15 bg-[#101a30] px-3.5 py-2.5 text-sm text-white outline-none transition focus:border-[#F59E0B] focus:ring-2 focus:ring-[#F59E0B]/30",
  dayBtn: "rounded-xl border border-white/10 bg-white/[0.04] px-1 py-2 text-center text-slate-300 transition hover:border-[#F59E0B]/60",
  dayBtnActive: "rounded-xl border border-[#F59E0B] bg-gradient-to-b from-[#F59E0B] to-[#e2820a] px-1 py-2 text-center font-semibold text-[#0B1220] shadow-[0_0_18px_rgba(245,158,11,0.4)]",
  slotBtn: "rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-sm text-slate-300 transition hover:border-[#F59E0B]/60",
  slotBtnActive: "rounded-full border border-[#F59E0B] bg-[#F59E0B] px-3.5 py-2 text-sm font-bold text-[#0B1220] shadow-[0_0_18px_rgba(245,158,11,0.4)]",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-500",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-[0_0_26px_rgba(37,211,102,0.35)] transition hover:shadow-[0_0_38px_rgba(37,211,102,0.55)]",
  success: "rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-300",
  error: "rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm font-medium text-rose-300",
};
