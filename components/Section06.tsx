// ─── Section 06: Масштабирование ─────────────────────────────────────────────
//
// Figma reference: bg-white, 2-column grid gap-x-[96px].
// Left col: section label + H2 (36px) + body text.
// Right col: numbered items — red 24px number + title (20px Manrope).
// Figma items have sub-descriptions; user provides label-only items — adapted.

interface Section06Props {
  sectionIndexLabel: string;  // "06"
  sectionHanzi: string;       // "扩"
  decorativeHanzi: string;    // "扩"
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

// ─── List items ───────────────────────────────────────────────────────────────

const items = [
  "аудита текущей стратегии",
  "оценки эффективности каналов",
  "расширения пула блогеров",
  "подключения дополнительных платформ",
  "оптимизации медийных инвестиций",
] as const;

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section06({
  sectionIndexLabel,
  sectionHanzi,
  decorativeHanzi,
}: Section06Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-8 py-[96px]">
        <div className="relative grid grid-cols-1 gap-x-[96px] gap-y-[64px] lg:grid-cols-2 lg:items-start">

          {/* Decorative background 扩 — spans both columns, anchored right */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -right-8 top-0 leading-none"
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

          {/* ── Left column ───────────────────────────────────────────────── */}
          <div className="relative flex flex-col gap-8">
            <SectionLabel indexLabel={sectionIndexLabel} hanzi={sectionHanzi} />

            <h2
              className="text-[28px] leading-[1.1] tracking-[-0.025em] text-[#2f3331] lg:text-[36px]"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
            >
              Масштабирование и расширение медиа-микса
            </h2>

            <p className="text-[16px] leading-[1.7] text-[#5c605d] lg:text-[18px]">
              Работаем с брендами, уже представленными в регионе, и помогаем
              усилить их медийную архитектуру за счёт новых каналов, форматов и
              партнёрств.
            </p>

            {/* Red divider — same pattern as Section01 */}
            <div className="h-px w-[96px] bg-[#c00000]" />

            <p className="text-[15px] leading-[1.65] text-[#5c605d] lg:text-[16px]">
              Усиление позволяет масштабироваться без полной перестройки
              существующей модели.
            </p>
          </div>

          {/* ── Right column: numbered items ──────────────────────────────── */}
          <div className="relative flex flex-col">
            {/* Sub-label */}
            <p className="mb-[32px] text-[12px] tracking-[0.1em] uppercase text-[#5c605d]">
              Подключаемся для:
            </p>

            <div className="flex flex-col divide-y divide-[rgba(175,179,176,0.25)]">
              {items.map((text, i) => (
                <div
                  key={text}
                  className="flex items-start gap-[24px] py-[24px] first:pt-0 last:pb-0"
                >
                  {/* Red number — 24px Manrope Bold, matches Figma */}
                  <span
                    className="shrink-0 text-[20px] leading-[1] text-[#c00000] lg:text-[24px]"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Item text */}
                  <p
                    className="pt-[2px] text-[16px] leading-[1.4] text-[#2f3331] lg:text-[18px]"
                    style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
                  >
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
