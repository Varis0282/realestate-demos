"use client";

import { useLang } from "@/lib/lang";
import { inst } from "@/lib/config";
import BookingForm from "@/components/BookingForm";
import { bookingStyles, MapBlock, Squiggle, Blob } from "../_ui";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { lang, t } = useLang();
  const b = t.booking;
  return (
    <main>
      <section className="relative overflow-hidden py-14 text-center">
        <Blob className="-left-24 top-0 h-64 w-64 bg-[#FBE9C7]" />
        <div className="relative">
          <h1 className="text-4xl font-black text-[#9E3B2F]">{b.title}</h1>
          <Squiggle />
          <p className="mx-auto mt-2 max-w-xl px-4 text-[#7a6354]">{b.sub}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 pb-14 lg:grid-cols-[1.2fr,0.8fr]">
        <BookingForm styles={bookingStyles} />
        <div className="space-y-4">
          {[
            { icon: MapPin, title: t.sections.visitTitle, body: lang === "en" ? inst.address : inst.addressHi, tint: "bg-[#F6E3D5]" },
            { icon: Phone, title: t.hero.cta2, body: inst.phone, href: `tel:${inst.phoneRaw}`, tint: "bg-[#E9EDDA]" },
            { icon: Mail, title: "Email", body: inst.email, tint: "bg-[#FBE9C7]" },
          ].map((c) => (
            <div key={c.title} className={`flex gap-4 rounded-[2rem] ${c.tint} p-5`}>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-[#9E3B2F]"><c.icon className="h-5 w-5" /></span>
              <div>
                <p className="font-black text-[#4A342B]">{c.title}</p>
                {c.href ? <a href={c.href} className="text-sm font-extrabold text-[#9E3B2F]">{c.body}</a> : <p className="text-sm text-[#7a6354]">{c.body}</p>}
              </div>
            </div>
          ))}
          <div className="rounded-[2rem] border-2 border-[#E8D9C3] bg-white p-5">
            <p className="mb-2 flex items-center gap-2 font-black text-[#4A342B]"><Clock className="h-5 w-5 text-[#6B7F3E]" />{t.footer.hours}</p>
            {inst.timings[lang].map((r) => (
              <p key={r.days} className="py-0.5 text-sm text-[#7a6354]"><span className="font-bold">{r.days}:</span> {r.hours}</p>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16">
        <MapBlock />
      </section>
    </main>
  );
}
