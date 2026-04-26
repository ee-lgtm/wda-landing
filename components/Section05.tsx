// ─── Section 05: Решения ──────────────────────────────────────────────────────
//
// Figma reference: 3×2 card grid on bg-[#faf9f7].
// Each card: bg-white, border-t-2 border-[#c00000], pt-[42px] pb-[40px] px-[40px].
// Card anatomy: title (Manrope 20px) → icon placeholder at bottom.
// Grid: grid-cols-3, gap-[32px], row-height ~214px.

interface Section05Props {
  sectionIndexLabel: string;  // "05"
  sectionHanzi: string;       // "解"
  decorativeHanzi: string;    // "解"
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

// ─── Solution data ────────────────────────────────────────────────────────────

const solutions = [
  "Медийная реклама",
  "Работа с блогерами и KOL",
  "Специальные проекты",
  "Кросс-платформенные кампании",
  "Локализация сценариев и контента",
  "Операционное сопровождение",
] as const;

// ─── Solution card ────────────────────────────────────────────────────────────
//
// bg-white with 2px red top border (key Figma signature).
// min-h matches Figma's 214px row height.
// Icon slot at the bottom: replace the dot with <Image> when assets are ready.

function SolutionCard({
  title,
  index,
}: {
  title: string;
  index: number;
}) {
  return (
    <div
      className="flex flex-col bg-white min-h-[214px] pt-[42px] pb-[40px] px-[40px]"
      style={{ borderTop: "2px solid #c00000" }}
    >
      {/* Title */}
      <p
        className="flex-1 text-[18px] leading-[1.4] text-[#2f3331] lg:text-[20px] lg:leading-[28px]"
        style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
      >
        {title}
      </p>

      {/* Icon slot — small index mark; swap for <Image> when icons arrive */}
      <div className="mt-4 flex items-center">
        <span
          className="text-[11px] tracking-[0.15em] text-[#c00000]"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800, opacity: 0.5 }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section05({
  sectionIndexLabel,
  sectionHanzi,
  decorativeHanzi,
}: Section05Props) {
  return (
    <section id="solutions" className="bg-[#faf9f7]">
      <div className="mx-auto max-w-[1280px] px-8 py-[96px]">

        {/* ── Header block ──────────────────────────────────────────────────── */}
        <div className="relative mb-[64px] flex flex-col gap-6">

          {/* Decorative background 解 */}
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
            Решения
          </h2>
        </div>

        {/* ── 3×2 solution card grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((title, i) => (
            <SolutionCard key={title} title={title} index={i} />
          ))}
        </div>

        {/* ── Closing paragraph ─────────────────────────────────────────────── */}
        <p className="mt-[48px] max-w-[576px] text-[16px] leading-[1.7] text-[#5c605d] lg:text-[18px]">
          Каждое решение формируется индивидуально под задачи бизнеса и
          стратегические цели.
        </p>

      </div>
    </section>
  );
}
