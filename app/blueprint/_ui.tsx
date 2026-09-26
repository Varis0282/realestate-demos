"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import { BookingStyles } from "@/components/BookingForm";
import { Plus, MapPin, Menu, X } from "lucide-react";

export const BLUE = "#1D4ED8";

export function Mono({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`font-[family-name:var(--font-mono)] ${className}`}>{children}</span>;
}

/** Grid-paper background panel, like a working drawing */
export function GridPanel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`border-2 border-[#101418] ${className}`}
      style={{ backgroundImage: "linear-gradient(#1D4ED81a 1px, transparent 1px), linear-gradient(90deg, #1D4ED81a 1px, transparent 1px)", backgroundSize: "24px 24px" }}
    >
      {children}
    </div>
  );
}

export function Nav() {
  const { lang, t } = useLang();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/blueprint", label: t.nav.home },
    { href: "/blueprint/about", label: t.nav.about },
    { href: "/blueprint/projects", label: t.nav.projects },
    { href: "/blueprint/amenities", label: t.nav.amenities },
    { href: "/blueprint/gallery", label: t.nav.gallery },
    { href: "/blueprint/contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b-2 border-[#101418] bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/blueprint" className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight">{(lang === "en" ? inst.name : inst.nameHi).toUpperCase()}</span>
          <span className="font-[family-name:var(--font-mono)] text-xs text-[#1D4ED8]">EST. {inst.established}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? "text-[#1D4ED8] underline decoration-2 underline-offset-8" : "hover:text-[#1D4ED8] hover:underline hover:decoration-2 hover:underline-offset-8"}>{l.label}</Link>
          ))}
          <Link href="/" className="font-[family-name:var(--font-mono)] text-xs text-[#6B7280] hover:text-[#1D4ED8]">← ALL DEMOS</Link>
          <LangToggle className="border-2 border-[#101418] px-3 py-1 text-xs font-bold hover:bg-[#101418] hover:text-white" />
          <Link href="/blueprint/contact#book" className="bg-[#1D4ED8] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#101418]">{t.nav.book}</Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t-2 border-[#101418] bg-white px-4 py-3 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">{l.label}</Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <LangToggle className="border-2 border-[#101418] px-3 py-1 text-xs font-bold" />
            <Link href="/" className="font-[family-name:var(--font-mono)] text-xs text-[#6B7280]">← ALL DEMOS</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ num, title, sub }: { num: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 border-t-2 border-[#101418] pt-5">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>
        <Mono className="text-sm text-[#1D4ED8]">{num}</Mono>
      </div>
      {sub && <p className="mt-3 max-w-xl text-[#4B5563]">{sub}</p>}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid grid-cols-2 border-2 border-[#101418] md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.en} className={`p-7 ${i < 3 ? "border-b-2 border-[#101418] md:border-b-0 md:border-r-2" : ""} ${i === 1 ? "border-r-0 md:border-r-2" : i === 0 ? "border-r-2" : ""}`}>
            <p className="text-3xl font-bold text-[#1D4ED8] md:text-4xl">{s.value}</p>
            <Mono className="mt-1 block text-xs uppercase text-[#4B5563]">{lang === "en" ? s.en : s.hi}</Mono>
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
    <div className="border-t-2 border-[#101418]">
      {faqs.map((f, i) => (
        <div key={i} className="border-b-2 border-[#101418]">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold">
            <span className="flex items-baseline gap-4"><Mono className="text-sm text-[#1D4ED8]">{String(i + 1).padStart(2, "0")}</Mono>{f[lang].q}</span>
            <Plus className={`h-5 w-5 shrink-0 text-[#1D4ED8] transition-transform ${openIdx === i ? "rotate-45" : ""}`} />
          </button>
          {openIdx === i && <p className="pb-6 pl-11 text-sm leading-relaxed text-[#4B5563]">{f[lang].a}</p>}
        </div>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="border-2 border-[#101418]">
      <iframe src={inst.mapEmbed} className="h-80 w-full grayscale" loading="lazy" title="Map" />
      <div className="flex items-center justify-between gap-4 border-t-2 border-[#101418] px-5 py-4">
        <p className="flex items-center gap-2 text-sm text-[#4B5563]"><MapPin className="h-4 w-4 text-[#1D4ED8]" />{inst.address}</p>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-bold text-[#1D4ED8] underline decoration-2 underline-offset-4">{t.misc.getDirections}</a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-[#101418] py-20 text-white">
      <div className="mx-auto max-w-6xl px-4">
        <Mono className="text-xs uppercase text-[#7c9bf5]">// {t.nav.contact}</Mono>
        <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-5xl">{t.sections.ctaTitle}</h2>
        <p className="mt-4 max-w-2xl text-white/70">{t.sections.ctaSub}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/blueprint/contact#book" className="bg-[#1D4ED8] px-7 py-4 font-bold text-white hover:bg-white hover:text-[#101418]">{t.hero.cta1}</Link>
          <a href={`tel:${inst.phoneRaw}`} className="border-2 border-white px-7 py-3.5 font-bold hover:bg-white hover:text-[#101418]">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="border-t-2 border-[#101418] bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="font-bold">{(lang === "en" ? inst.name : inst.nameHi).toUpperCase()}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">{t.footer.tagline}</p>
          <Mono className="mt-3 block text-xs text-[#1D4ED8]">{t.misc.rera}</Mono>
        </div>
        <div>
          <Mono className="mb-3 block text-xs uppercase text-[#1D4ED8]">{t.footer.quick}</Mono>
          {[["/blueprint", t.nav.home], ["/blueprint/projects", t.nav.projects], ["/blueprint/amenities", t.nav.amenities], ["/blueprint/gallery", t.nav.gallery], ["/blueprint/contact", t.nav.contact]].map(([h, l]) => (
            <Link key={h} href={h} className="block py-1 text-sm text-[#4B5563] underline-offset-4 hover:text-[#1D4ED8] hover:underline">{l}</Link>
          ))}
        </div>
        <div>
          <Mono className="mb-3 block text-xs uppercase text-[#1D4ED8]">{t.footer.contact}</Mono>
          <p className="text-sm leading-relaxed text-[#4B5563]">{lang === "en" ? inst.address : inst.addressHi}</p>
          <a href={`tel:${inst.phoneRaw}`} className="mt-2 block text-sm font-bold text-[#101418]">{inst.phone}</a>
          <p className="text-sm text-[#4B5563]">{inst.email}</p>
        </div>
        <div>
          <Mono className="mb-3 block text-xs uppercase text-[#1D4ED8]">{t.footer.hours}</Mono>
          {inst.timings[lang].map((r) => (
            <p key={r.days} className="py-1 text-sm text-[#4B5563]"><span className="font-semibold text-[#101418]">{r.days}:</span> {r.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-[#101418] py-4 text-center">
        <Mono className="text-xs text-[#6B7280]">© {new Date().getFullYear()} {inst.name} — {t.footer.rights}</Mono>
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-6 border-2 border-[#101418] bg-white p-6 md:p-9",
  label: "mb-2 block font-[family-name:var(--font-mono)] text-xs font-semibold uppercase text-[#101418]",
  input: "w-full border-0 border-b-2 border-[#101418] bg-transparent px-0 py-2.5 text-sm outline-none transition placeholder:text-[#9CA3AF] focus:border-[#1D4ED8]",
  select: "w-full border-0 border-b-2 border-[#101418] bg-transparent px-0 py-2.5 text-sm outline-none transition focus:border-[#1D4ED8]",
  dayBtn: "border-2 border-[#E5E7EB] px-1 py-2 text-center text-[#4B5563] transition hover:border-[#101418]",
  dayBtnActive: "border-2 border-[#1D4ED8] bg-[#1D4ED8] px-1 py-2 text-center font-semibold text-white",
  slotBtn: "border-2 border-[#E5E7EB] px-4 py-2 font-[family-name:var(--font-mono)] text-xs text-[#4B5563] transition hover:border-[#101418]",
  slotBtnActive: "border-2 border-[#1D4ED8] bg-[#1D4ED8] px-4 py-2 font-[family-name:var(--font-mono)] text-xs font-semibold text-white",
  groupTitle: "mb-2 mt-1 font-[family-name:var(--font-mono)] text-[10px] uppercase text-[#6B7280]",
  submit: "flex w-full items-center justify-center gap-2 bg-[#25D366] px-6 py-4 font-bold text-white transition hover:bg-[#101418]",
  success: "border-2 border-emerald-600 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700",
  error: "border-2 border-red-600 bg-red-50 px-4 py-3 text-sm font-medium text-red-600",
};
