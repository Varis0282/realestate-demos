import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { LangProvider } from "@/lib/lang";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Nav, Footer, Backdrop } from "./_ui";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivalik Buildcon — Indore | Skyline Demo",
  description: "Flats, row houses & commercial spaces in Indore. On-time possession since 2001. Book a free site visit.",
};

export default function SkylineLayout({ children }: { children: React.ReactNode }) {
  return (
    <LangProvider>
      <div className={`${sora.className} relative min-h-screen overflow-x-clip bg-[#0B1220] text-slate-100`}>
        <Backdrop />
        <Nav />
        <div className="relative z-10">{children}</div>
        <Footer />
        <WhatsAppFloat />
      </div>
    </LangProvider>
  );
}
