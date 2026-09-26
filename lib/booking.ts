import { inst } from "./config";

export const SLOTS = {
  morning: ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM"],
  evening: ["03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"],
};

const DAY_NAMES = { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], hi: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"] };
const MONTH_NAMES = { en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], hi: ["जन", "फर", "मार्च", "अप्रै", "मई", "जून", "जुला", "अग", "सितं", "अक्टू", "नवं", "दिसं"] };

export type BookableDay = { iso: string; day: string; dayHi: string; date: number; month: string; monthHi: string; isSunday: boolean };

/** Next 7 bookable days starting today (site visits run 7 days a week) */
export function getNextDays(count = 7): BookableDay[] {
  const days: BookableDay[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push({
      iso: d.toISOString().slice(0, 10),
      day: DAY_NAMES.en[d.getDay()],
      dayHi: DAY_NAMES.hi[d.getDay()],
      date: d.getDate(),
      month: MONTH_NAMES.en[d.getMonth()],
      monthHi: MONTH_NAMES.hi[d.getMonth()],
      isSunday: d.getDay() === 0,
    });
  }
  return days;
}

export type BookingDetails = { name: string; phone: string; project: string; unitType: string; day?: BookableDay; slot: string; note: string };

/** Build a wa.me deep link with a pre-filled site-visit request.
 *  Keep emoji to single code points (ZWJ emoji corrupted via heredoc once). */
export function whatsAppLink(b: BookingDetails): string {
  const HOUSE = "🏠";
  const lines = [
    `${HOUSE} *Free Site Visit Request — ${inst.name}*`,
    ``,
    `*Name:* ${b.name}`,
    `*Phone:* ${b.phone}`,
    `*Project:* ${b.project}`,
    `*Looking for:* ${b.unitType}`,
    b.day ? `*Visit Date:* ${b.day.day}, ${b.day.date} ${b.day.month}` : "",
    b.slot ? `*Preferred Time:* ${b.slot}` : "",
    b.note ? `*Pickup:* ${b.note}` : "",
    ``,
    `Please confirm my free site visit. Thank you!`,
  ].filter((l, i) => l !== "" || i === 1 || i === 9);
  return `https://wa.me/${inst.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}

/** Quick chat link (floating WhatsApp button) */
export function whatsAppChatLink(): string {
  return `https://wa.me/${inst.whatsapp}?text=${encodeURIComponent(`Hello ${inst.name}, I want to book a free site visit.`)}`;
}
