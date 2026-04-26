// ─── Section 07: Кейсы ────────────────────────────────────────────────────────
//
// Figma reference: bg-[#faf9f7], cards bg-white w-[450px] p-[40px].
// Card anatomy: category/format tags → case title + index → hypotheses list →
// process description → results block with border-t.
// Carousel-ready: data-carousel-track / data-carousel-slide for future JS.

interface Section07Props {
  sectionIndexLabel: string;  // "07"
  sectionHanzi: string;       // "证"
  decorativeHanzi: string;    // "证"
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

// ─── Case data ────────────────────────────────────────────────────────────────

const cases = [
  {
    id: "case-1",
    index: "01/02",
    platform: "WeChat",
    format: "Статья",
    brand: "Бренд под NDA",
    hypotheses: [
      "Географическая близость к РФ",
      "Релевантная тематика у крупных блогеров",
      "Релевантная тематика у нишевых блогеров",
      "Тревел-направление",
    ],
    process:
      "Первично отобрано более 30 блогеров, после аналитического отбора — 5 наиболее релевантных.",
    results: [
      "Перевыполнение KPI по CPV на 20%",
      "Средний ER — 2%",
      "CTR — ~0,5%",
    ],
  },
  {
    id: "case-2",
    index: "02/02",
    platform: "Douyin",
    format: "Инфлюенсеры",
    brand: "Бренд под NDA",
    hypotheses: [
      "Китайцы, проживающие в России",
      "Россияне, проживающие в Китае",
      "Бизнес-блогеры, работающие с РФ",
    ],
    process:
      "Первичный отбор — более 40 блогеров, финальный список — 6. С двумя блогерами достигнуто соглашение о кросс-платформенном размещении (WeChat, BiliBili) без увеличения бюджета. Запуск кампании осуществлён за 7 рабочих дней, включая локализацию сценариев.",
    results: [
      "Перевыполнение KPI по CPV на 20%",
      "Более 1 млн показов за 30 дней",
      "Средний ER — 1,5%",
    ],
  },
] as const;

// ─── Case card ────────────────────────────────────────────────────────────────

function CaseCard({
  index,
  platform,
  format,
  brand,
  hypotheses,
  process,
  results,
}: (typeof cases)[number]) {
  return (
    <article
      data-carousel-slide
      className="flex w-full flex-col bg-white p-[40px] sm:w-[450px] sm:shrink-0"
    >
      {/* ── Card header ────────────────────────────────────────────────────── */}
      <header className="mb-[32px] flex flex-col gap-[12px]">
        {/* Tags row */}
        <div className="flex flex-wrap items-center gap-[8px]">
          <span
            className="text-[11px] tracking-[0.1em] uppercase text-[#c00000]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
          >
            {platform}
          </span>
          <span
            className="text-[11px] tracking-[0.1em] uppercase text-[#5c605d]"
            style={{ opacity: 0.5 }}
          >
            /
          </span>
          <span
            className="text-[11px] tracking-[0.1em] uppercase text-[#5c605d]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, opacity: 0.5 }}
          >
            {format}
          </span>
          <span
            className="ml-auto text-[11px] tracking-[0.05em] text-[#5c605d]"
            style={{ opacity: 0.4 }}
          >
            {brand}
          </span>
        </div>

        {/* Title row: case number label */}
        <div className="flex items-end justify-between">
          <h3
            className="text-[20px] leading-[1.2] text-[#2f3331] lg:text-[24px]"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
          >
            Кейс
          </h3>
          <span
            className="text-[13px] text-[#2f3331]"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 700, opacity: 0.25 }}
          >
            {index}
          </span>
        </div>
      </header>

      {/* ── Hypotheses ─────────────────────────────────────────────────────── */}
      <div className="mb-[24px]">
        <p
          className="mb-[12px] text-[10px] tracking-[0.15em] uppercase text-[#5c605d]"
          style={{ opacity: 0.6 }}
        >
          Гипотезы
        </p>
        <ul className="flex flex-col gap-[8px]">
          {hypotheses.map((h) => (
            <li key={h} className="flex items-start gap-[10px]">
              <span
                className="mt-[3px] shrink-0 text-[#c00000]"
                style={{ fontSize: 10, lineHeight: 1, opacity: 0.6 }}
                aria-hidden
              >
                —
              </span>
              <span className="text-[14px] leading-[1.5] text-[#5c605d]">{h}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ── Process ────────────────────────────────────────────────────────── */}
      <p className="mb-[24px] text-[13px] leading-[1.65] text-[#5c605d]">
        {process}
      </p>

      {/* ── Results ────────────────────────────────────────────────────────── */}
      <div className="mt-auto">
        {/* Divider: full-width muted + left-third red accent */}
        <div className="relative mb-[24px] h-px">
          <div className="absolute inset-0 bg-[rgba(175,179,176,0.25)]" />
          <div className="absolute left-0 top-0 h-px w-1/3 bg-[#c00000]" style={{ opacity: 0.5 }} />
        </div>

        <p
          className="mb-[12px] text-[10px] tracking-[0.15em] uppercase text-[#5c605d]"
          style={{ opacity: 0.6 }}
        >
          Результаты
        </p>
        <ul className="flex flex-col gap-[8px]">
          {results.map((r) => (
            <li
              key={r}
              className="text-[14px] leading-[1.4] text-[#2f3331]"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
            >
              {r}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section07({
  sectionIndexLabel,
  sectionHanzi,
  decorativeHanzi,
}: Section07Props) {
  return (
    <section id="cases" className="bg-[#faf9f7]">
      <div className="mx-auto max-w-[1280px] px-8 py-[96px]">

        {/* ── Header block ──────────────────────────────────────────────────── */}
        <div className="relative mb-[64px] flex flex-col gap-6">

          {/* Decorative background 证 */}
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
            className="relative text-[28px] leading-[1.1] tracking-[-0.025em] text-[#2f3331] lg:text-[36px]"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
          >
            Кейсы
          </h2>
        </div>

        {/* ── Cards: horizontal scroll on mobile, row on desktop ────────────── */}
        {/*
          To convert to a full carousel:
          1. Wrap the track div in a relative overflow-hidden container
          2. Add JS / state to translate the track by card width
          3. Inject prev/next buttons targeting data-carousel-track
        */}
        <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: "touch" } as React.CSSProperties}>
          <div
            data-carousel-track
            className="flex gap-[40px] pb-2"
            style={{ minWidth: "min-content" }}
          >
            {cases.map((c) => (
              <CaseCard key={c.id} {...c} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
