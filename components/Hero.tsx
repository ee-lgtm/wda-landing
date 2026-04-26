import Image from "next/image";

const extras = [
  "С 2018 года на рынке",
  "На связи любым удобным способом",
];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-8">
        <div className="flex min-h-[75vh] flex-col lg:flex-row lg:items-stretch">

          {/* ── Left content column ─────────────────────────────────────── */}
          <div className="relative flex flex-1 flex-col justify-center py-16 lg:py-[128px] lg:pr-16 overflow-hidden">

            {/* Decorative background 势 — very low contrast, behind content */}
            <span
              aria-hidden
              className="pointer-events-none select-none absolute -right-8 bottom-0 leading-none"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 800,
                fontSize: "clamp(240px, 30vw, 380px)",
                color: "#ede9e3",
                opacity: 0.38,
                lineHeight: 1,
              }}
            >
              势
            </span>

            {/* Content — flex col with consistent gaps */}
            <div className="relative flex flex-col gap-8">

              {/* Headline */}
              <h1
                className="max-w-[640px] text-[44px] font-extrabold leading-[1] tracking-[-0.04em] text-[#2f3331]
                           lg:text-[72px] lg:tracking-[-0.05em]"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                <span
                  className="text-[#c00000]"
                  style={{ opacity: 0.85 }}
                >势</span>{" "}
                Стратегический доступ к рынкам Китая и Центральной Азии
              </h1>

              {/* Description */}
              <p className="max-w-[576px] text-[17px] leading-[1.7] text-[#5c605d] lg:text-[20px]">
                Помогаем брендам выстраивать медийную инфраструктуру и усиливать
                присутствие в регионе — от выхода на рынок до масштабирования
                действующих кампаний.
              </p>

              {/* CTA + stat block */}
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-[#c00000] text-[#fff6f4]
                             text-[11px] tracking-[0.14em] uppercase transition-colors hover:bg-[#a80000]
                             w-full sm:w-[284px] h-[75px] shrink-0"
                >
                  Запросить консультацию
                </a>

                {/* Stat with left divider */}
                <div
                  className="flex items-center gap-4 py-4 sm:pl-[17px]"
                  style={{ borderLeft: "1px solid rgba(175,179,176,0.3)" }}
                >
                  <span
                    className="text-[24px] leading-8 text-[#2f3331]"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
                  >
                    15 мин
                  </span>
                  <span className="text-[11px] tracking-[0.1em] uppercase text-[#5c605d] leading-[1.35]">
                    Среднее время<br />ответа клиенту
                  </span>
                </div>
              </div>

              {/* Extra labels row */}
              <div
                className="flex flex-wrap gap-x-8 gap-y-2 pt-6"
                style={{ borderTop: "1px solid rgba(175,179,176,0.3)" }}
              >
                {extras.map((s) => (
                  <span key={s} className="text-[12px] text-[#5c605d]">
                    {s}
                  </span>
                ))}
              </div>

            </div>
          </div>

          {/* ── Right image panel ────────────────────────────────────────── */}
          {/* self-stretch fills the flex row height; max-h-[75vh] prevents over-stretching */}
          <div className="relative hidden lg:block w-[38%] max-w-[478px] max-h-[75vh] shrink-0 self-stretch overflow-hidden bg-[#f3f4f1]">
            <Image
              src="/hero-architecture.jpg"
              alt=""
              fill
              sizes="478px"
              className="object-cover"
              priority
            />

            {/* Bottom frosted glass overlay */}
            <div
              className="absolute bottom-0 left-0 right-0 p-8"
              style={{
                background: "rgba(255,255,255,0.8)",
                backdropFilter: "blur(6px)",
              }}
            >
              <p className="text-[12px] tracking-[0.2em] uppercase text-[#2f3331]">
                Пекин / Алматы / Ташкент
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
