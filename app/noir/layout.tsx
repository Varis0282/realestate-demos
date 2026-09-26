import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer } from "./_ui";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-serif" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Shivalik Buildcon — Indore | Noir Demo",
  description: "Flats, row houses & commercial spaces in Indore. On-time possession since 2001. Book a free site visit.",
};

export default function NoirLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${serif.variable} ${inter.variable} min-h-screen bg-[#0A0C10] font-[family-name:var(--font-sans)] text-[#D7DBE0]`}>
        <Nav />
        {children}
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
