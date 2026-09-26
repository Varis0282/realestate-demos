import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-sans" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Shivalik Buildcon — Indore | Blueprint Demo",
  description: "Flats, row houses & commercial spaces in Indore. On-time possession since 2001. Book a free site visit.",
};

export default function BlueprintLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${sans.variable} ${mono.variable} min-h-screen bg-white font-[family-name:var(--font-sans)] text-[#101418]`}>
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
