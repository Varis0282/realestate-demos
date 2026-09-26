import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Real Estate Website Demos — 5 Styles",
  description:
    "One builder, five completely different websites. Free site-visit booking on WhatsApp, Hindi/English, project showcases with pricing, amenities, gallery and map — pick the design you love.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
