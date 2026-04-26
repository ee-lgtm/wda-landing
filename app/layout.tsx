import type { Metadata } from "next";
import { Geist, Montserrat, Manrope } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: "800",
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

const manrope = Manrope({
  weight: "700",
  subsets: ["latin", "cyrillic"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "WDA — Стратегический доступ к рынкам Китая и Центральной Азии",
    template: "%s | WDA",
  },
  description: "Помогаем брендам выстраивать медийную инфраструктуру и усиливать присутствие в Китае и Центральной Азии.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${montserrat.variable} ${manrope.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
