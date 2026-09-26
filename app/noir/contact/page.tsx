"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { bookingStyles, Eyebrow, MapBlock } from "../_ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { lang, t } = useLang();
  const b = t.booking;
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 pt-20">
        <Eyebrow>{b.sub}</Eyebrow>
        <h1 className="font-[family-name:var(--font-serif)] text-5xl font-medium text-white md:text-6xl">{b.title}</h1>
      </section>
      <section id="book" className="scroll-mt-28 mx-auto grid max-w-7xl gap-10 px-4 py-16 lg:grid-cols-[1.2fr,0.8fr]">
        <BookingForm styles={bookingStyles} />
        <div className="divide-y divide-white/10 border border-white/10">
          {[
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
            { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
            { icon: Mail, title: "Email", body: inst.email },
          ].map((c) => (
            <div key={c.title} className="flex gap-5 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-[#B87352]/40 text-[#B87352]"><c.icon className="h-5 w-5" /></span>
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8B929C]">{c.title}</p>
                {c.href ? <a href={c.href} className="mt-1 block font-[family-name:var(--font-serif)] text-lg text-[#B87352]">{c.body}</a> : <p className="mt-1 text-sm leading-relaxed text-[#D7DBE0]">{c.body}</p>}
              </div>
            </div>
          ))}
          <div className="p-6">
            <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#8B929C]"><Clock className="h-4 w-4 text-[#B87352]" />{t.footer.hours}</p>
            {inst.timings[lang].map((r) => (
              <p key={r.days} className="py-0.5 text-sm text-[#D7DBE0]"><span className="text-[#8B929C]">{r.days}:</span> {r.hours}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <MapBlock />
      </section>
    </main>
  );
}
