"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { bookingStyles, Mono, MapBlock } from "../_ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { lang, t } = useLang();
  const b = t.booking;
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-14">
        <Mono className="text-xs uppercase text-[#1D4ED8]">// {b.sub}</Mono>
        <h1 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">{b.title}</h1>
      </section>
      <section id="book" className="scroll-mt-28 mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[1.2fr,0.8fr]">
        <BookingForm styles={bookingStyles} />
        <div className="border-2 border-[#101418]">
          {[
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
            { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
            { icon: Mail, title: "Email", body: inst.email },
          ].map((c) => (
            <div key={c.title} className="flex gap-4 border-b-2 border-[#101418] p-5">
              <c.icon className="h-5 w-5 shrink-0 text-[#1D4ED8]" />
              <div>
                <Mono className="text-xs uppercase text-[#4B5563]">{c.title}</Mono>
                {c.href ? <a href={c.href} className="mt-1 block font-bold text-[#1D4ED8] underline decoration-2 underline-offset-4">{c.body}</a> : <p className="mt-1 text-sm leading-relaxed">{c.body}</p>}
              </div>
            </div>
          ))}
          <div className="p-5">
            <Mono className="flex items-center gap-2 text-xs uppercase text-[#4B5563]"><Clock className="h-4 w-4 text-[#1D4ED8]" />{t.footer.hours}</Mono>
            {inst.timings[lang].map((r) => (
              <p key={r.days} className="mt-2 text-sm"><span className="font-semibold">{r.days}:</span> {r.hours}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <MapBlock />
      </section>
    </main>
  );
}
