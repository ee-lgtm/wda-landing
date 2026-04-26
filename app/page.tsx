import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Section01 from "@/components/Section01";
import Section02 from "@/components/Section02";
import Section03 from "@/components/Section03";
import Section04 from "@/components/Section04";
import Section05 from "@/components/Section05";
import Section06 from "@/components/Section06";
import Section07 from "@/components/Section07";
import Section09 from "@/components/Section09";

export const metadata: Metadata = {
  title: "WDA — Стратегический доступ к рынкам Китая и Центральной Азии",
  description:
    "Помогаем брендам выстраивать медийную инфраструктуру и усиливать присутствие в регионе — от выхода на рынок до масштабирования действующих кампаний.",
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <Hero />

        {/* 01 — Медийная архитектура */}
        <Section01
          sectionIndexLabel="01"
          sectionHanzi="构"
          decorativeHanzi="构"
        />

        {/* 02 — Работаем с брендами */}
        <Section02
          sectionIndexLabel="02"
          sectionHanzi="合"
          decorativeHanzi="合"
        />

        {/* 03 — Регионы */}
        <Section03
          sectionIndexLabel="03"
          sectionHanzi="区"
          decorativeHanzi="区"
        />

        {/* 04 — Структура запуска */}
        <Section04
          sectionIndexLabel="04"
          sectionHanzi="序"
          decorativeHanzi="序"
        />

        {/* 05 — Решения */}
        <Section05
          sectionIndexLabel="05"
          sectionHanzi="解"
          decorativeHanzi="解"
        />

        {/* 06 — Масштабирование */}
        <Section06
          sectionIndexLabel="06"
          sectionHanzi="扩"
          decorativeHanzi="扩"
        />

        {/* 07 — Кейсы */}
        <Section07
          sectionIndexLabel="07"
          sectionHanzi="证"
          decorativeHanzi="证"
        />

        {/* 09 — Запросить консультацию */}
        <Section09 />
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8 text-xs text-zinc-400">
          <span>© {new Date().getFullYear()} Studio</span>
          <a href="/blog" className="transition-colors hover:text-zinc-600">
            Публикации
          </a>
        </div>
      </footer>
    </>
  );
}
