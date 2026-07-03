/** @format */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://compro.example.com";

export const metadata: Metadata = {
  title: "Kuesioner Profil Perilaku DISC — TACO | Excelearn",
  description:
    "Kenali gaya perilaku Anda dalam menghadapi pelanggan — Dominance, Influence, Steadiness, Conscientiousness — dan kaitannya dengan consultative selling.",
  metadataBase: new URL(BASE_URL),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function DiscTacoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${inter.className} bg-[#15202D]`}>{children}</div>;
}
