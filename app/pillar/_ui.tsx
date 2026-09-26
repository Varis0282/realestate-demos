"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import { faqs, stats } from "@/lib/content";
import LangToggle from "@/components/LangToggle";
import { BookingStyles } from "@/components/BookingForm";
import { Phone, Clock, ChevronDown, MapPin, Menu, X, BadgeCheck } from "lucide-react";

const TEAL = "#0F5E63";

export function Nav() {
  const { lang, t } = useLang();
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/pillar", label: t.nav.home },
    { href: "/pillar/about", label: t.nav.about },
    { href: "/pillar/projects", label: t.nav.projects },
    { href: "/pillar/amenities", label: t.nav.amenities },
    { href: "/pillar/gallery", label: t.nav.gallery },
    { href: "/pillar/contact", label: t.nav.contact },
  ];
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="bg-[#0F5E63] text-xs text-teal-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-1.5">
          <span className="flex items-center gap-4">
            <a href={`tel:${inst.phoneRaw}`} className="flex items-center gap-1.5"><Phone className="h-3 w-3" />{inst.phone}</a>
            <span className="hidden items-center gap-1.5 sm:flex"><Clock className="h-3 w-3" />{inst.timings[lang][0].hours}</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="hidden items-center gap-1 sm:flex"><BadgeCheck className="h-3 w-3 text-[#D9A441]" />{t.misc.rera}</span>
            <Link href="/" className="opacity-80 hover:opacity-100">← All demos</Link>
            <LangToggle className="rounded-full bg-white/15 px-3 py-0.5 font-semibold hover:bg-white/25" />
          </span>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/pillar" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0F5E63] text-lg font-black text-[#D9A441]">S</span>
          <span className="text-lg font-extrabold tracking-tight text-[#0F5E63]">{lang === "en" ? inst.name : inst.nameHi}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={path === l.href ? "text-[#0F5E63] underline decoration-[#D9A441] decoration-2 underline-offset-8" : "text-slate-600 hover:text-[#0F5E63]"}>
              {l.label}
            </Link>
          ))}
          <Link href="/pillar/contact" className="rounded-md bg-[#D9A441] px-4 py-2.5 text-sm font-bold text-[#12312F] shadow hover:brightness-105">
            {t.nav.book}
          </Link>
        </nav>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="border-t bg-white px-4 py-3 lg:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium text-slate-700">{l.label}</Link>
          ))}
          <Link href="/pillar/contact" onClick={() => setOpen(false)} className="mt-2 block rounded-md bg-[#D9A441] px-4 py-2.5 text-center text-sm font-bold text-[#12312F]">{t.nav.book}</Link>
        </nav>
      )}
    </header>
  );
}

export function SectionHead({ eyebrow, title, sub, light = false }: { eyebrow: string; title: string; sub?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D9A441]">{eyebrow}</p>
      <h2 className={`text-3xl font-extrabold tracking-tight md:text-4xl ${light ? "text-white" : "text-[#0F5E63]"}`}>{title}</h2>
      {sub && <p className={`mt-3 ${light ? "text-teal-100/80" : "text-slate-500"}`}>{sub}</p>}
    </div>
  );
}

export function StatsBand() {
  const { lang } = useLang();
  return (
    <section className="bg-[#0F5E63]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.en} className="text-center">
            <p className="text-3xl font-black text-[#D9A441] md:text-4xl">{s.value}</p>
            <p className="mt-1 text-sm text-teal-50/90">{lang === "en" ? s.en : s.hi}</p>
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
    <div className="mx-auto max-w-3xl divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white shadow-sm">
      {faqs.map((f, i) => (
        <div key={i}>
          <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold text-[#12312F]">
            {f[lang].q}
            <ChevronDown className={`h-5 w-5 shrink-0 text-[#D9A441] transition-transform ${openIdx === i ? "rotate-180" : ""}`} />
          </button>
          {openIdx === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{f[lang].a}</p>}
        </div>
      ))}
    </div>
  );
}

export function MapBlock() {
  const { t } = useLang();
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <iframe src={inst.mapEmbed} className="h-80 w-full" loading="lazy" title="Map" />
      <div className="flex items-center justify-between gap-4 px-5 py-4">
        <p className="flex items-center gap-2 text-sm text-slate-600"><MapPin className="h-4 w-4 text-[#0F5E63]" />{inst.address}</p>
        <a href={inst.mapLink} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-bold text-[#0F5E63] underline underline-offset-4">{t.misc.getDirections}</a>
      </div>
    </div>
  );
}

export function CTABand() {
  const { t } = useLang();
  return (
    <section className="bg-gradient-to-r from-[#0F5E63] to-[#12312F] py-16 text-center text-white">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-3xl font-extrabold md:text-4xl">{t.sections.ctaTitle}</h2>
        <p className="mt-3 text-teal-100/85">{t.sections.ctaSub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/pillar/contact" className="rounded-md bg-[#D9A441] px-7 py-3.5 font-bold text-[#12312F] shadow-lg hover:brightness-105">{t.hero.cta1}</Link>
          <a href={`tel:${inst.phoneRaw}`} className="rounded-md border border-white/40 px-7 py-3.5 font-bold hover:bg-white/10">{t.hero.cta2}</a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const { lang, t } = useLang();
  return (
    <footer className="bg-[#12312F] text-teal-50/85">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-lg font-extrabold text-white">{lang === "en" ? inst.name : inst.nameHi}</p>
          <p className="mt-3 text-sm leading-relaxed">{t.footer.tagline}</p>
          <p className="mt-3 flex items-center gap-1.5 text-xs text-[#D9A441]"><BadgeCheck className="h-4 w-4" />{t.misc.rera}</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">{t.footer.quick}</p>
          {[["/pillar", t.nav.home], ["/pillar/projects", t.nav.projects], ["/pillar/amenities", t.nav.amenities], ["/pillar/gallery", t.nav.gallery], ["/pillar/contact", t.nav.contact]].map(([h, l]) => (
            <Link key={h} href={h} className="block py-1 text-sm hover:text-[#D9A441]">{l}</Link>
          ))}
        </div>
        <div>
          <p className="mb-3 font-bold text-white">{t.footer.contact}</p>
          <p className="text-sm leading-relaxed">{lang === "en" ? inst.address : inst.addressHi}</p>
          <a href={`tel:${inst.phoneRaw}`} className="mt-2 block text-sm font-semibold text-[#D9A441]">{inst.phone}</a>
          <p className="text-sm">{inst.email}</p>
        </div>
        <div>
          <p className="mb-3 font-bold text-white">{t.footer.hours}</p>
          {inst.timings[lang].map((r) => (
            <p key={r.days} className="py-1 text-sm"><span className="font-semibold">{r.days}:</span> {r.hours}</p>
          ))}
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-teal-50/60">
        © {new Date().getFullYear()} {inst.name}. {t.footer.rights}
      </div>
    </footer>
  );
}

export const bookingStyles: BookingStyles = {
  wrap: "space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-md md:p-8",
  label: "mb-1.5 block text-sm font-semibold text-[#12312F]",
  input: "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-[#0F5E63] focus:ring-2 focus:ring-[#0F5E63]/20",
  select: "w-full rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-[#0F5E63] focus:ring-2 focus:ring-[#0F5E63]/20",
  dayBtn: "rounded-md border border-slate-200 bg-white px-1 py-2 text-center text-slate-600 transition hover:border-[#0F5E63]",
  dayBtnActive: "rounded-md border border-[#0F5E63] bg-[#0F5E63] px-1 py-2 text-center text-white shadow",
  slotBtn: "rounded-md border border-slate-200 bg-white px-3.5 py-2 text-sm text-slate-600 transition hover:border-[#0F5E63]",
  slotBtnActive: "rounded-md border border-[#0F5E63] bg-[#0F5E63] px-3.5 py-2 text-sm font-semibold text-white shadow",
  groupTitle: "mb-2 mt-1 text-xs font-bold uppercase tracking-wider text-slate-400",
  submit: "flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-6 py-3.5 font-bold text-white shadow-lg transition hover:brightness-105",
  success: "rounded-md bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700",
  error: "rounded-md bg-red-50 px-4 py-3 text-sm font-medium text-red-600",
};
