"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import { BookingStyles } from "@/components/BookingForm";
import { ChevronDown, MapPin, Menu, X, Home } from "lucide-react";

export function Squiggle({ className = "text-[#9E3B2F]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 12" className={`mx-auto mt-2 h-3 w-28 ${className}`} fill="none" aria-hidden>
      <path d="M2 8c10-6 20-6 30 0s20 6 30 0 20-6 30 0 16 5 26-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Blob({ className }: { className: string }) {
  return <div aria-hidden className={`pointer-events-none absolute rounded-[60%_40%_55%_45%/55%_60%_40%_45%] ${className}`} />;
}

export function Nav() {
  const { lang, t } = useLang();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/aangan", label: t.nav.home },
    { href: "/aangan/about", label: t.nav.about },
    { href: "/aangan/projects", label: t.nav.projects },
    { href: "/aangan/amenities", label: t.nav.amenities },
    { href: "/aangan/gallery", label: t.nav.gallery },
    { href: "/aangan/contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-[#E8D9C3] bg-[#FAF3EA]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5">
        <Link href="/aangan" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#9E3B2F] text-white"><Home className="h-5 w-5" /></span>
          <span className="text-lg font-extrabold text-[#9E3B2F]">{lang === "en" ? inst.name : inst.nameHi}</span>
        </Link>
        <nav className="hidden items-center gap-5 text-[15px] font-semibold lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? "text-[#9E3B2F]" : "text-[#7a6354] hover:text-[#9E3B2F]"}>{l.label}</Link>
          ))}
          <Link href="/" className="text-xs text-[#a08b7a] hover:text-[#9E3B2F]">← All demos</Link>
          <LangToggle className="rounded-full border-2 border-[#9E3B2F]/25 px-3.5 py-1 text-sm font-bold text-[#9E3B2F] hover:bg-[#9E3B2F]/5" />
          <Link href="/aangan/contact#book" className="rounded-full bg-[#9E3B2F] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#9E3B2F]/25 transition hover:brightness-110">{t.nav.book}</Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t border-[#E8D9C3] bg-[#FAF3EA] px-4 py-3 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 font-semibold text-[#7a6354]">{l.label}</Link>
          ))}
          <div className="mt-2 flex items-center gap-3">
            <LangToggle className="rounded-full border-2 border-[#9E3B2F]/25 px-3.5 py-1 text-sm font-bold text-[#9E3B2F]" />
            <Link href="/" className="text-xs text-[#a08b7a]">← All demos</Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-2 text-sm font-extrabold uppercase tracking-widest text-[#6B7F3E]">{eyebrow}</p>
      <h2 className="text-3xl font-extrabold text-[#9E3B2F] md:text-4xl">{title}</h2>
      <Squiggle />
      {sub && <p className="mt-3 text-[#7a6354]">{sub}</p>}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  const tints = ["bg-[#F6E3D5]", "bg-[#E9EDDA]", "bg-[#FBE9C7]", "bg-[#F3DEDA]"];
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.en} className={`rounded-3xl ${tints[i % 4]} p-6 text-center`}>
            <p className="text-3xl font-black text-[#9E3B2F]">{s.value}</p>
            <p className="mt-1 text-sm font-semibold text-[#7a6354]">{lang === "en" ? s.en : s.hi}</p>
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
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f, i) => (
        <div key={i} className="rounded-3xl border-2 border-[#E8D9C3] bg-white">
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left font-bold text-[#4A342B]">
            {f[lang].q}
            <ChevronDown className={`h-5 w-5 shrink-0 text-[#6B7F3E] transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
          </button>
          {openIdx === i && <p className="px-6 pb-5 text-[15px] leading-relaxed text-[#7a6354]">{f[lang].a}</p>}
        </div>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="overflow-hidden rounded-[2rem] border-2 border-[#E8D9C3] bg-white">
      <iframe src={inst.mapEmbed} className="h-80 w-full" loading="lazy" title="Map" />
      <div className="flex items-center justify-between gap-4 px-6 py-4">
        <p className="flex items-center gap-2 text-sm text-[#7a6354]"><MapPin className="h-4 w-4 text-[#9E3B2F]" />{inst.address}</p>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-extrabold text-[#6B7F3E] underline underline-offset-4">{t.misc.getDirections}</a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-4 py-16">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#9E3B2F] p-10 text-center text-white md:p-14">
        <Blob className="-left-16 -top-16 h-56 w-56 bg-white/10" />
        <Blob className="-bottom-20 -right-14 h-64 w-64 bg-[#6B7F3E]/40" />
        <h2 className="relative text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="relative mx-auto mt-3 max-w-2xl text-white/85">{t.sections.ctaSub}</p>
        <div className="relative mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/aangan/contact#book" className="rounded-full bg-white px-7 py-3.5 font-extrabold text-[#9E3B2F] shadow-xl transition hover:scale-105">{t.hero.cta1}</Link>
          <a href={`tel:${inst.phoneRaw}`} className="rounded-full border-2 border-white/50 px-7 py-3 font-bold hover:bg-white/10">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="border-t-2 border-[#E8D9C3] bg-[#F3E7D7]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-[#9E3B2F]">{lang === "en" ? inst.name : inst.nameHi}</p>
          <p className="mt-3 text-sm leading-relaxed text-[#7a6354]">{t.footer.tagline}</p>
          <p className="mt-2 text-xs font-bold text-[#6B7F3E]">{t.misc.rera}</p>
        </div>
        <div>
          <p className="mb-3 font-extrabold text-[#4A342B]">{t.footer.quick}</p>
          {[["/aangan", t.nav.home], ["/aangan/projects", t.nav.projects], ["/aangan/amenities", t.nav.amenities], ["/aangan/gallery", t.nav.gallery], ["/aangan/contact", t.nav.contact]].map(([h, l]) => (
            <Link key={h} href={h} className="block py-1 text-sm text-[#7a6354] hover:text-[#9E3B2F]">{l}</Link>
          ))}
        </div>
        <div>
          <p className="mb-3 font-extrabold text-[#4A342B]">{t.footer.contact}</p>
          <p className="text-sm leading-relaxed text-[#7a6354]">{lang === "en" ? inst.address : inst.addressHi}</p>
          <a href={`tel:${inst.phoneRaw}`} className="mt-2 block text-sm font-extrabold text-[#9E3B2F]">{inst.phone}</a>
          <p className="text-sm text-[#7a6354]">{inst.email}</p>
        </div>
        <div>
          <p className="mb-3 font-extrabold text-[#4A342B]">{t.footer.hours}</p>
          {inst.timings[lang].map((r) => (
            <p key={r.days} className="py-1 text-sm text-[#7a6354]"><span className="font-bold">{r.days}:</span> {r.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-[#E8D9C3] py-4 text-center text-xs text-[#a08b7a]">© {new Date().getFullYear()} {inst.name}. {t.footer.rights}</div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-[2rem] border-2 border-[#E8D9C3] bg-white p-6 md:p-8",
  label: "mb-1.5 block text-sm font-extrabold text-[#4A342B]",
  input: "w-full rounded-2xl border-2 border-[#E8D9C3] bg-[#FDFAF5] px-4 py-2.5 text-sm outline-none transition placeholder:text-[#b9a48f] focus:border-[#9E3B2F]",
  select: "w-full rounded-2xl border-2 border-[#E8D9C3] bg-[#FDFAF5] px-4 py-2.5 text-sm outline-none transition focus:border-[#9E3B2F]",
  dayBtn: "rounded-2xl border-2 border-[#E8D9C3] bg-white px-1 py-2 text-center text-[#7a6354] transition hover:border-[#6B7F3E]",
  dayBtnActive: "rounded-2xl border-2 border-[#9E3B2F] bg-[#9E3B2F] px-1 py-2 text-center text-white",
  slotBtn: "rounded-full border-2 border-[#E8D9C3] bg-white px-4 py-2 text-sm font-semibold text-[#7a6354] transition hover:border-[#6B7F3E]",
  slotBtnActive: "rounded-full border-2 border-[#6B7F3E] bg-[#6B7F3E] px-4 py-2 text-sm font-bold text-white",
  groupTitle: "mb-2 mt-1 text-xs font-extrabold uppercase tracking-wider text-[#a08b7a]",
  submit: "flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 font-extrabold text-white shadow-lg shadow-green-600/25 transition hover:scale-[1.02]",
  success: "rounded-2xl bg-[#E9EDDA] px-4 py-3 text-sm font-bold text-[#4c5a2c]",
  error: "rounded-2xl bg-[#F6DDD8] px-4 py-3 text-sm font-bold text-[#9E3B2F]",
};
