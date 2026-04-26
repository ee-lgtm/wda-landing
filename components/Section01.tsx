import Image from "next/image";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Section01Props {
  /**
   * Section index label (e.g. "01").
   * Rendered as text now; swap the inner <SectionLabel> children for
   * <Image src={labelImageSrc} … /> once Chinese-numeral images are ready.
   */
  sectionIndexLabel: string;

  /**
   * Hanzi character displayed next to the section index label.
   * Same swap contract as sectionIndexLabel.
   */
  sectionHanzi: string;

  /**
   * Large background-decoration hanzi rendered behind the text column.
   * Very low opacity, does not interfere with readability.
   */
  decorativeHanzi: string;
}

// ─── Sub-component: swappable section label ───────────────────────────────────
// When Chinese-numeral images are ready, replace the inner <span>s with
// a single <Image> — the wrapper div keeps layout stable.

function SectionLabel({
  indexLabel,
  hanzi,
}: {
  indexLabel: string;
  hanzi: string;
}) {
  return (
    <div className="flex items-center gap-[10px]" aria-label={`Section ${indexLabel}`}>
      {/* ↓ Replace both spans with <Image src="…" alt={indexLabel} /> when ready */}
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

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section01({
  sectionIndexLabel,
  sectionHanzi,
  decorativeHanzi,
}: Section01Props) {
  return (
    <section id="architecture" className="bg-[#faf9f7]">
      <div className="mx-auto max-w-[1280px] px-8 py-[96px]">
        <div className="grid grid-cols-1 items-center gap-[60px] lg:grid-cols-2 lg:gap-[96px]">

          {/* ── Left: image panel ──────────────────────────────────────────── */}
          <div className="relative aspect-square bg-[#f3f4f1] p-[48px]">
            {/* Outer ghost border */}
            <div className="pointer-events-none absolute inset-[-20px] border border-[rgba(47,51,49,0.05)]" />
            {/* Inner red-tinted border */}
            <div className="pointer-events-none absolute inset-0 border border-[rgba(192,0,0,0.2)]" />
            {/* Cross dividers */}
            <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[rgba(192,0,0,0.1)]" />
            <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-[rgba(192,0,0,0.1)]" />

            {/* Image — if file absent the bg-[#f3f4f1] shows as neutral placeholder */}
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="/section-architecture.jpg"
                alt="Медийная архитектура"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* ── Right: text column ─────────────────────────────────────────── */}
          <div className="relative flex flex-col gap-6">
            {/* Decorative background hanzi — very light, non-intrusive */}
            <span
              aria-hidden
              className="pointer-events-none select-none absolute -right-4 bottom-0 leading-none"
              style={{
                fontFamily: "var(--font-montserrat)",
                fontWeight: 800,
                fontSize: "clamp(180px, 22vw, 280px)",
                color: "#ece9e3",
                opacity: 0.35,
                lineHeight: 1,
              }}
            >
              {decorativeHanzi}
            </span>

            {/* Section label (swappable) */}
            <SectionLabel indexLabel={sectionIndexLabel} hanzi={sectionHanzi} />

            {/* Heading */}
            <h2
              className="relative max-w-[480px] text-[28px] leading-[1.15] tracking-[-0.025em] text-[#2f3331] lg:text-[36px] lg:leading-[1.1]"
              style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
            >
              Медийная архитектура для сложных рынков
            </h2>

            {/* Body paragraphs */}
            <div className="relative space-y-5 text-[16px] leading-[1.7] text-[#5c605d] lg:text-[18px] lg:leading-[1.7]">
              <p>
                Мы работаем на стыке стратегии, локальной экспертизы и
                операционного сопровождения.
              </p>
              <p>
                Наша задача — не просто организовать размещение, а выстроить
                управляемую систему медийного присутствия бренда в регионе.
              </p>
              <p>
                Подключаемся как на этапе выхода на рынок, так и для усиления
                уже действующих кампаний.
              </p>
            </div>

            {/* Red horizontal divider — matches Figma 96px rule */}
            <div className="relative h-px w-[96px] bg-[#c00000]" />
          </div>

        </div>
      </div>
    </section>
  );
}
