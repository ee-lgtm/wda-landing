// ─── Section 02: Работаем с брендами ──────────────────────────────────────────
//
// Figma reference: 4-column service card grid on white background.
// Each user bullet point maps to one card.

interface Section02Props {
  sectionIndexLabel: string;  // "02"
  sectionHanzi: string;       // "合"
  decorativeHanzi: string;    // "合"
}

// ─── Section label (same swap contract as Section01) ─────────────────────────

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

// ─── Service card ─────────────────────────────────────────────────────────────
//
// Figma card: bg-white, icon at top (~35px), title at ~80px, list at ~124px.
// Since user provides single-line items (no sub-bullets), we use the full
// card space for the title and a minimal icon placeholder.

function ServiceCard({ title, index }: { title: string; index: number }) {
  return (
    <div className="flex flex-col bg-[#faf9f7] px-8 py-10 min-h-[240px]">
      {/* Icon placeholder — replace with <Image> when assets are available */}
      <div className="mb-[32px] flex items-center">
        <span
          className="block text-[11px] tracking-[0.2em] uppercase text-[#c00000]"
          style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Title */}
      <p
        className="text-[18px] leading-[1.35] tracking-[-0.01em] text-[#2f3331] lg:text-[20px]"
        style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
      >
        {title}
      </p>
    </div>
  );
}

// ─── Service data ─────────────────────────────────────────────────────────────

const services = [
  "Системный подход к медийной стратегии",
  "Работа с локальными инфлюенсерами",
  "Запуск специальных проектов",
  "Расширение и оптимизация медиа-микса",
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section02({
  sectionIndexLabel,
  sectionHanzi,
  decorativeHanzi,
}: Section02Props) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-8 py-[96px]">

        {/* ── Header block ──────────────────────────────────────────────────── */}
        <div className="relative mb-[64px] flex flex-col gap-6 max-w-[768px]">

          {/* Decorative background 合 — behind the header text, right side */}
          <span
            aria-hidden
            className="pointer-events-none select-none absolute -right-8 -top-8 leading-none"
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

          {/* Section label */}
          <SectionLabel indexLabel={sectionIndexLabel} hanzi={sectionHanzi} />

          {/* Heading */}
          <h2
            className="relative text-[28px] leading-[1.1] tracking-[-0.025em] text-[#2f3331] lg:text-[36px]"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
          >
            Работаем с брендами, ориентированными на масштаб
          </h2>

          {/* Lead */}
          <p className="relative text-[16px] leading-[1.7] text-[#5c605d] lg:text-[18px]">
            Сотрудничаем с компаниями, которым необходим:
          </p>
        </div>

        {/* ── 4-column service card grid ────────────────────────────────────── */}
        <div className="grid grid-cols-1 gap-[40px] sm:grid-cols-2 lg:grid-cols-4">
          {services.map((title, i) => (
            <ServiceCard key={title} title={title} index={i} />
          ))}
        </div>

        {/* ── Closing paragraph ─────────────────────────────────────────────── */}
        <p className="mt-[56px] max-w-[640px] text-[16px] leading-[1.7] text-[#5c605d] lg:text-[18px]">
          Работа строится в формате стратегического партнёрства и прозрачной
          аналитики.
        </p>

      </div>
    </section>
  );
}
