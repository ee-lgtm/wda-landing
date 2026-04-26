// ─── Section 04: Структура запуска ────────────────────────────────────────────
//
// Figma reference: 7-column horizontal grid, h-[176px] cells on bg-[#faf9f7].
// Separators = 1px gaps on bg-[rgba(175,179,176,0.2)] outer wrapper.
// Cell anatomy: number (12px red) → title (16px Manrope Bold) → desc (12px grey).
//
// Mobile: horizontal scroll with snap — preserves the "sequential system" feel.
// Desktop (lg): full 7-column row, no scroll.

interface Section04Props {
  sectionIndexLabel: string;  // "04"
  sectionHanzi: string;       // "序"
  decorativeHanzi: string;    // "序"
}

// ─── Section label ────────────────────────────────────────────────────────────

function SectionLabel({
  indexLabel,
  hanzi,
}: {
  indexLabel: string;
  hanzi: string;
}) {
  return (
    <div className="flex items-center gap-[10px]" aria-label={`Section ${indexLabel}`}>
      <span
        className="text-[12px] tracking-[0.1em] uppercase text-[#c00000]"
        style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
      >
        {hanzi}
      </span>
      <span className="text-[12px] tracking-[0.1em] uppercase text-[#c00000]">
        {indexLabel}
      </span>
    </div>
  );
}

// ─── Step data ────────────────────────────────────────────────────────────────

const steps = [
  {
    num: "01",
    title: "Брифинг",
    desc: "Определяем задачи бизнеса, KPI и стратегические приоритеты.",
  },
  {
    num: "02",
    title: "Комплаенс и регуляторная проверка",
    desc: "Анализируем ограничения платформ и требования локального законодательства.",
  },
  {
    num: "03",
    title: "Стратегия и гипотезы",
    desc: "Формируем коммуникационную архитектуру и ключевые гипотезы по аудитории и каналам.",
  },
  {
    num: "04",
    title: "Формирование медиа-микса",
    desc: "Подбираем релевантные платформы и форматы. Формируем структуру медиа-микса и распределяем медийные инвестиции.",
  },
  {
    num: "05",
    title: "Запуск кампании",
    desc: "Локализация сценариев, координация размещений, контроль сроков.",
  },
  {
    num: "06",
    title: "Еженедельная аналитика",
    desc: "Контроль KPI и прозрачная отчётность.",
  },
  {
    num: "07",
    title: "Корректировка или масштабирование",
    desc: "Оптимизация гипотез либо масштабирование наиболее эффективных форматов.",
  },
] as const;

// ─── Step cell ────────────────────────────────────────────────────────────────

function StepCell({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    // min-w keeps cells from squishing in the scrollable container on mobile
    <div className="relative bg-[#faf9f7] flex flex-col p-8 min-w-[200px] lg:min-w-0">
      {/* Step number */}
      <span className="mb-8 block text-[12px] leading-[16px] text-[#c00000]">
        {num}
      </span>

      {/* Title */}
      <p
        className="mb-4 text-[15px] leading-[1.35] text-[#2f3331] lg:text-[16px]"
        style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
      >
        {title}
      </p>

      {/* Description */}
      <p className="text-[13px] leading-[1.55] text-[#5c605d]">
        {desc}
      </p>

      {/* Bottom red accent on last step — subtle signal of completion */}
      {num === "07" && (
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#c00000] opacity-20" />
      )}
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section04({
  sectionIndexLabel,
  sectionHanzi,
  decorativeHanzi,
}: Section04Props) {
  return (
    <section id="structure" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-8 py-[96px]">

        {/* ── Header block ──────────────────────────────────────────────────── */}
        <div className="relative mb-[64px] flex flex-col gap-6">

          {/* Decorative background 序 */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -right-8 -top-4 leading-none"
            style={{
              fontFamily: "var(--font-montserrat)",
              fontWeight: 800,
              fontSize: "clamp(160px, 20vw, 260px)",
              color: "#ece9e3",
              opacity: 0.35,
              lineHeight: 1,
            }}
          >
            {decorativeHanzi}
          </span>

          <SectionLabel indexLabel={sectionIndexLabel} hanzi={sectionHanzi} />

          <h2
            className="relative max-w-[640px] text-[28px] leading-[1.1] tracking-[-0.025em] text-[#2f3331] lg:text-[36px]"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
          >
            Структура запуска и масштабирования
          </h2>

          <p className="relative max-w-[576px] text-[16px] leading-[1.7] text-[#5c605d] lg:text-[18px]">
            Каждый проект проходит через последовательные этапы — от анализа до
            масштабирования.
          </p>
        </div>

        {/* ── 7-step grid ───────────────────────────────────────────────────── */}
        {/*
          Outer wrapper acts as the 1px separator: its bg-[rgba(175,179,176,0.2)]
          colour shows through the gap-px gaps between cells.
          On mobile: horizontal scroll with snap-start per cell.
          On lg: full 7-column layout, no scroll.
        */}
        <div
          className="overflow-x-auto"
          style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}
        >
          <div
            className="grid grid-cols-7 gap-px border border-[rgba(175,179,176,0.2)] min-w-[840px]"
            style={{ background: "rgba(175,179,176,0.2)" }}
          >
            {steps.map((step) => (
              <StepCell key={step.num} {...step} />
            ))}
          </div>
        </div>

        {/* Progress line below grid — subtle visual anchor */}
        <div className="mt-0 flex">
          <div className="h-px flex-1 bg-[#c00000]" style={{ opacity: 0.15 }} />
        </div>

      </div>
    </section>
  );
}
