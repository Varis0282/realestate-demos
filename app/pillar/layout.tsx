import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivalik Buildcon — Indore | Pillar Demo",
  description: "Flats, row houses & commercial spaces in Indore. On-time possession since 2001. Book a free site visit.",
};

export default function PillarLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${inter.className} min-h-screen bg-[#F7F9F9] text-[#12312F]`}>
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
