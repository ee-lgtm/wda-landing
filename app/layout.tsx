import type { Metadata } from "next";
import { Geist, Montserrat, Manrope } from "next/font/google";
import YandexMetrika from "@/components/YandexMetrika";
import "./globals.css";

// Номер счётчика Яндекс Метрики (можно переопределить через NEXT_PUBLIC_YM_ID)
const YM_ID = Number(process.env.NEXT_PUBLIC_YM_ID) || 114673110;

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
    <html lang="ru">
      <body className={`${geist.variable} ${montserrat.variable} ${manrope.variable} font-sans antialiased`}>{children}
        {YM_ID && <YandexMetrika id={YM_ID} />}
      </body>
    </html>
  );
}
