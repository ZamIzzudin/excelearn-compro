/** @format */

import type { Metadata } from "next";

import Navbar from "@/components/navbar";

import "@/styles/globals.css";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Excelearn",
  description: "Company Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
