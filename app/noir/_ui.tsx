"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import { BookingStyles } from "@/components/BookingForm";
import { ChevronDown, MapPin, Menu, X } from "lucide-react";

export const COPPER = "#B87352";

export function Serif({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-[family-name:var(--font-serif)] ${className}`}>{children}</span>;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#B87352]">
      <span className="h-px w-10 bg-[#B87352]" />
      {children}
    </p>
  );
}

export function Nav() {
  const { lang, t } = useLang();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/noir", label: t.nav.home },
    { href: "/noir/about", label: t.nav.about },
    { href: "/noir/projects", label: t.nav.projects },
    { href: "/noir/amenities", label: t.nav.amenities },
    { href: "/noir/gallery", label: t.nav.gallery },
    { href: "/noir/contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0A0C10]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/noir" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center border border-[#B87352] font-[family-name:var(--font-serif)] text-lg font-semibold text-[#B87352]">S</span>
          <span className="font-[family-name:var(--font-serif)] text-xl font-semibold tracking-wide text-white">{lang === "en" ? inst.name : inst.nameHi}</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13px] uppercase tracking-[0.15em] lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? "text-[#B87352]" : "text-[#8B929C] transition hover:text-white"}>{l.label}</Link>
          ))}
          <Link href="/" className="text-[11px] normal-case tracking-normal text-[#5B626C] hover:text-white">← All demos</Link>
          <LangToggle className="border border-white/20 px-3 py-1 text-[11px] hover:border-[#B87352] hover:text-[#B87352]" />
          <Link href="/noir/contact" className="border border-[#B87352] px-5 py-2.5 text-[12px] font-semibold text-[#B87352] transition hover:bg-[#B87352] hover:text-[#0A0C10]">{t.nav.book}</Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t border-white/10 bg-[#0A0C10] px-4 py-4 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm uppercase tracking-widest text-[#8B929C]">{l.label}</Link>
          ))}
          <div className="mt-3 flex items-center gap-3">
            <LangToggle className="border border-white/20 px-3 py-1 text-[11px]" />
            <Link href="/" className="text-[11px] text-[#5B626C]">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, center = false }: { eyebrow: string; title: string; sub?: string; center?: boolean }) {
  return (
    <div className={`mb-14 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <p className={`mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#B87352] ${center ? "justify-center" : ""}`}>
        {!center && <span className="h-px w-10 bg-[#B87352]" />}
        {eyebrow}
        {center && <span className="h-px w-10 bg-[#B87352]" />}
      </p>
      <h2 className="font-[family-name:var(--font-serif)] text-4xl font-medium text-white md:text-5xl">{title}</h2>
      {sub && <p className="mt-4 text-[#8B929C]">{sub}</p>}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="border-y border-white/10">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.en} className="px-6 py-10 text-center">
            <p className="font-[family-name:var(--font-serif)] text-4xl font-medium text-[#B87352] md:text-5xl">{s.value}</p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#8B929C]">{lang === "en" ? s.en : s.hi}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FAQList() {
  const { lang } = useLang();
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10 border-y border-white/10">
      {faqs.map((f, i) => (
        <div key={i}>
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-medium text-white">
            <span><span className="mr-4 font-[family-name:var(--font-serif)] text-[#B87352]">0{i + 1}</span>{f[lang].q}</span>
            <ChevronDown className={`h-5 w-5 shrink-0 text-[#B87352] transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
          </button>
          {openIdx === i && <p className="pb-6 pl-10 text-sm leading-relaxed text-[#8B929C]">{f[lang].a}</p>}
        </div>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="border border-white/10">
      <iframe src={inst.mapEmbed} className="h-80 w-full opacity-80 grayscale [filter:invert(0.92)_grayscale(1)]" loading="lazy" title="Map" />
      <div className="flex items-center justify-between gap-4 border-t border-white/10 px-6 py-4">
        <p className="flex items-center gap-2 text-sm text-[#8B929C]"><MapPin className="h-4 w-4 text-[#B87352]" />{inst.address}</p>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="shrink-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#B87352]">{t.misc.getDirections}</a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="border-t border-white/10 py-20 text-center">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-[family-name:var(--font-serif)] text-4xl font-medium text-white md:text-5xl">{t.sections.ctaTitle}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-[#8B929C]">{t.sections.ctaSub}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/noir/contact" className="bg-[#B87352] px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-[#0A0C10] transition hover:brightness-110">{t.hero.cta1}</Link>
          <a href={`tel:${inst.phoneRaw}`} className="border border-white/25 px-8 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition hover:border-[#B87352] hover:text-[#B87352]">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="border-t border-white/10 bg-[#07090C]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-serif)] text-xl font-semibold text-white">{lang === "en" ? inst.name : inst.nameHi}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#8B929C]">{t.footer.tagline}</p>
          <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#B87352]">{t.misc.rera}</p>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B87352]">{t.footer.quick}</p>
          {[["/noir", t.nav.home], ["/noir/projects", t.nav.projects], ["/noir/amenities", t.nav.amenities], ["/noir/gallery", t.nav.gallery], ["/noir/contact", t.nav.contact]].map(([h, l]) => (
            <Link key={h} href={h} className="block py-1.5 text-sm text-[#8B929C] hover:text-white">{l}</Link>
          ))}
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B87352]">{t.footer.contact}</p>
          <p className="text-sm leading-relaxed text-[#8B929C]">{lang === "en" ? inst.address : inst.addressHi}</p>
          <a href={`tel:${inst.phoneRaw}`} className="mt-2 block text-sm font-semibold text-white">{inst.phone}</a>
          <p className="text-sm text-[#8B929C]">{inst.email}</p>
        </div>
        <div>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#B87352]">{t.footer.hours}</p>
          {inst.timings[lang].map((r) => (
            <p key={r.days} className="py-1 text-sm text-[#8B929C]"><span className="text-[#D7DBE0]">{r.days}:</span> {r.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-[11px] uppercase tracking-[0.2em] text-[#5B626C]">© {new Date().getFullYear()} {inst.name} · {t.footer.rights}</div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border border-white/10 bg-[#0E1116] p-6 md:p-9",
  label: "mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B929C]",
  input: "w-full border border-white/15 bg-transparent px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#4A5058] focus:border-[#B87352]",
  select: "w-full border border-white/15 bg-[#0E1116] px-4 py-3 text-sm text-white outline-none transition focus:border-[#B87352]",
  dayBtn: "border border-white/10 px-1 py-2.5 text-center text-[#8B929C] transition hover:border-[#B87352]/60",
  dayBtnActive: "border border-[#B87352] bg-[#B87352] px-1 py-2.5 text-center font-semibold text-[#0A0C10]",
  slotBtn: "border border-white/10 px-4 py-2 text-sm text-[#8B929C] transition hover:border-[#B87352]/60",
  slotBtnActive: "border border-[#B87352] bg-[#B87352] px-4 py-2 text-sm font-semibold text-[#0A0C10]",
  groupTitle: "mb-2 mt-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#5B626C]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition hover:brightness-110",
  success: "border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300",
  error: "border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-300",
};
