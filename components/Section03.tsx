// ─── Section 03: Китай и Центральная Азия ─────────────────────────────────────
//
// Figma reference: dark bg-[#2f3331] section, 2-column grid.
// China column uses red accent (#c00000); Central Asia uses golden (#715c32).
// Each column: 48×48 bordered code-badge + region title + content panel with left border.

interface Section03Props {
  sectionIndexLabel: string;  // "03"
  sectionHanzi: string;       // "区"
  decorativeHanzi: string;    // "区"
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
      {/* ↓ Replace with <Image> when Chinese-numeral assets are ready */}
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

// ─── Region column ────────────────────────────────────────────────────────────

function RegionColumn({
  code,
  title,
  accent,
  paragraphs,
}: {
  code: string;      // "CN" | "CA"
  title: string;
  accent: string;    // hex color
  paragraphs: string[];
}) {
  return (
    <div className="flex flex-col gap-[32px]">

      {/* Region header: bordered badge + label */}
      <div className="flex items-center gap-[16px]">
        <div
          className="flex shrink-0 items-center justify-center"
          style={{
            width: 48,
            height: 48,
            border: `1px solid ${accent}`,
          }}
        >
          <span
            className="text-[16px] leading-none"
            style={{ color: accent, fontWeight: 600 }}
          >
            {code}
          </span>
        </div>

        <h3
          className="text-[22px] leading-[1] tracking-[0.1em] uppercase text-[#faf9f7] lg:text-[24px]"
          style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
        >
          {title}
        </h3>
      </div>

      {/* Content panel */}
      <div
        className="flex flex-col gap-[16px] py-[32px] pl-[34px] pr-[32px]"
        style={{
          background: "rgba(250,249,247,0.05)",
          borderLeft: `2px solid ${accent}`,
        }}
      >
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[15px] leading-[1.65] text-[#faf9f7] lg:text-[16px]"
            style={{ opacity: 0.75 }}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section03({
  sectionIndexLabel,
  sectionHanzi,
  decorativeHanzi,
}: Section03Props) {
  return (
    <section id="regions" style={{ background: "#2f3331" }}>
      <div className="relative mx-auto max-w-[1280px] overflow-hidden px-8 py-[96px]">

        {/* Decorative background 区 — very faint on dark background */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -right-6 top-1/2 -translate-y-1/2 leading-none"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            fontSize: "clamp(200px, 25vw, 320px)",
            color: "#faf9f7",
            opacity: 0.04,
            lineHeight: 1,
          }}
        >
          {decorativeHanzi}
        </span>

        {/* ── Section label ──────────────────────────────────────────────────── */}
        <div className="mb-[48px] flex justify-center">
          <SectionLabel indexLabel={sectionIndexLabel} hanzi={sectionHanzi} />
        </div>

        {/* ── Heading (centered, as in Figma) ───────────────────────────────── */}
        <h2
          className="relative mb-[80px] text-center text-[26px] leading-[1.15] tracking-[-0.025em] text-[#faf9f7]
                     lg:text-[36px]"
          style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
        >
          Китай и Центральная Азия — разные модели, единая стратегия
        </h2>

        {/* ── Two-column region grid ─────────────────────────────────────────── */}
        <div className="relative grid grid-cols-1 gap-[48px] lg:grid-cols-2 lg:gap-[64px]">
          <RegionColumn
            code="CN"
            title="Китай"
            accent="#c00000"
            paragraphs={[
              "Самостоятельная digital-экосистема с собственными платформами, рекламными инструментами и регуляторикой.",
              "Работаем через локальные каналы, KOL и партнёрские сети.",
            ]}
          />
          <RegionColumn
            code="CA"
            title="Центральная Азия"
            accent="#715c32"
            paragraphs={[
              "Динамично растущий регион с формирующейся медиасредой и высокой чувствительностью к локальному контексту.",
              "Адаптируем стратегию с учётом культурных и рыночных особенностей.",
            ]}
          />
        </div>

      </div>
    </section>
  );
}
