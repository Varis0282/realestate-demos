"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { bookingStyles, FadeIn, MapBlock } from "../_ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { lang, t } = useLang();
  const b = t.booking;
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-16 text-center">
        <FadeIn>
          <h1 className="text-4xl font-bold md:text-5xl">{b.title}</h1>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">{b.sub}</p>
        </FadeIn>
      </section>
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 lg:grid-cols-[1.2fr,0.8fr]">
        <FadeIn><BookingForm styles={bookingStyles} /></FadeIn>
        <div className="space-y-4">
          {[
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi },
            { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}` },
            { icon: Mail, title: "Email", body: inst.email },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.08}>
              <div className="flex gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F59E0B]/25 to-[#FB7185]/25 text-[#F59E0B]"><c.icon className="h-5 w-5" /></span>
                <div>
                  <p className="font-bold">{c.title}</p>
                  {c.href ? <a href={c.href} className="text-sm font-semibold text-[#F59E0B]">{c.body}</a> : <p className="text-sm text-slate-400">{c.body}</p>}
                </div>
              </div>
            </FadeIn>
          ))}
          <FadeIn delay={0.24}>
            <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur">
              <p className="mb-2 flex items-center gap-2 font-bold"><Clock className="h-5 w-5 text-[#FB7185]" />{t.footer.hours}</p>
              {inst.timings[lang].map((r) => (
                <p key={r.days} className="py-0.5 text-sm text-slate-400"><span className="font-semibold text-slate-200">{r.days}:</span> {r.hours}</p>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <FadeIn><MapBlock /></FadeIn>
      </section>
    </main>
  );
}
