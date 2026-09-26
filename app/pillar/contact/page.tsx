"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { bookingStyles, MapBlock } from "../_ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { lang, t } = useLang();
  const b = t.booking;
  return (
    <main>
      <section className="bg-gradient-to-br from-[#0F5E63] to-[#12312F] py-14 text-center text-white">
        <h1 className="text-4xl font-black">{b.title}</h1>
        <p className="mx-auto mt-3 max-w-xl px-4 text-teal-100/85">{b.sub}</p>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-14 lg:grid-cols-[1.2fr,0.8fr]">
        <BookingForm styles={bookingStyles} />
        <div className="space-y-4">
          {[
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
            { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
            { icon: Mail, title: "Email", body: inst.email },
          ].map((c) => (
            <div key={c.title} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#0F5E63]/10 text-[#0F5E63]"><c.icon className="h-5 w-5" /></span>
              <div>
                <p className="font-bold text-[#12312F]">{c.title}</p>
                {c.href ? <a href={c.href} className="text-sm font-semibold text-[#0F5E63]">{c.body}</a> : <p className="text-sm text-slate-600">{c.body}</p>}
              </div>
            </div>
          ))}
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <p className="mb-2 flex items-center gap-2 font-bold text-[#12312F]"><Clock className="h-5 w-5 text-[#0F5E63]" />{t.footer.hours}</p>
            {inst.timings[lang].map((r) => (
              <p key={r.days} className="py-0.5 text-sm text-slate-600"><span className="font-semibold">{r.days}:</span> {r.hours}</p>
            ))}
          </div>
          <div className="rounded-xl bg-[#D9A441]/15 p-5 text-sm font-semibold text-[#7A5A17]">
            {t.misc.emergency}: <a href={`tel:${inst.phoneRaw}`} className="underline underline-offset-4">{inst.phone}</a>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <MapBlock />
      </section>
    </main>
  );
}
