import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const mulish = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivalik Buildcon — Indore | Aangan Demo",
  description: "Flats, row houses & commercial spaces in Indore. On-time possession since 2001. Book a free site visit.",
};

export default function AanganLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${mulish.className} min-h-screen bg-[#FAF3EA] text-[#4A342B]`}>
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
