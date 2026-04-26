"use client";

import { useState } from "react";

// ─── Section 09: Запросить консультацию ───────────────────────────────────────
//
// Figma reference: bg-[#e6e9e6] section, white card max-w-[896px] px-[80px].
// Form inputs: bottom-border only (no box border) — key Figma signature.
// Labels: 12px uppercase tracking-[0.1em] text-[#5c605d].
// Button: bg-[#c00000] rectangular, uppercase tracking-widest, no border-radius.

interface Section09Props {
  sectionIndexLabel?: string;  // "09"
  sectionHanzi?: string;       // "联"
  decorativeHanzi?: string;    // "联"
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

// ─── Field ────────────────────────────────────────────────────────────────────

function Field({
  id,
  label,
  placeholder,
  autoComplete,
}: {
  id: string;
  label: string;
  placeholder: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-[9px]">
      <label
        htmlFor={id}
        className="text-[12px] tracking-[0.1em] uppercase text-[#5c605d]"
        style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
      >
        {label}
      </label>
      <input
        id={id}
        type="text"
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full border-b border-[rgba(175,179,176,0.3)] bg-transparent pb-[14px] pt-[13px] text-[16px] leading-normal text-[#2f3331] outline-none transition-colors placeholder:text-[rgba(175,179,176,0.5)] focus:border-[#c00000]"
      />
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function Section09({
  sectionIndexLabel = "09",
  sectionHanzi = "联",
  decorativeHanzi = "联",
}: Section09Props) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data = {
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      position: (form.elements.namedItem("position") as HTMLInputElement).value,
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value,
      message: (form.elements.namedItem("request") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("server");
      setSuccess(true);
      form.reset();
    } catch {
      setError("Не удалось отправить заявку. Попробуйте позже.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" style={{ background: "#e6e9e6", borderTop: "1px solid rgba(175,179,176,0.2)" }}>
      <div className="relative mx-auto max-w-[1280px] overflow-hidden px-8 py-[96px]">

        {/* Decorative background 联 */}
        <span
          aria-hidden
          className="pointer-events-none select-none absolute -right-6 top-1/2 -translate-y-1/2 leading-none"
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 800,
            fontSize: "clamp(200px, 25vw, 340px)",
            color: "#2f3331",
            opacity: 0.04,
            lineHeight: 1,
          }}
        >
          {decorativeHanzi}
        </span>

        {/* ── White card ────────────────────────────────────────────────────── */}
        <div
          className="relative mx-auto w-full max-w-[896px] bg-white px-[40px] pb-[64px] pt-[56px] sm:px-[64px] lg:px-[80px] lg:pt-[80px] lg:pb-[96px]"
          style={{ boxShadow: "0px 25px 50px -12px rgba(47,51,49,0.05)" }}
        >
          {/* Section label */}
          <div className="mb-[32px]">
            <SectionLabel indexLabel={sectionIndexLabel} hanzi={sectionHanzi} />
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px] text-[28px] leading-[1.1] tracking-[-0.025em] text-[#2f3331] lg:text-[36px]"
            style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
          >
            Запросить консультацию
          </h2>

          {/* Subtitle */}
          <p className="mb-[48px] text-[16px] leading-[1.65] text-[#5c605d]">
            Если вы рассматриваете Китай или Центральную Азию как направление
            роста, свяжитесь с нами для предварительного обсуждения проекта.
          </p>

          {/* ── Form ────────────────────────────────────────────────────────── */}
          <form onSubmit={handleSubmit}>
            {/* 2-column grid for first 4 fields */}
            <div className="grid grid-cols-1 gap-x-[48px] gap-y-[40px] sm:grid-cols-2">
              <Field
                id="company"
                label="Название компании"
                placeholder="ООО Компания"
                autoComplete="organization"
              />
              <Field
                id="name"
                label="ФИО"
                placeholder="Иванов Иван Иванович"
                autoComplete="name"
              />
              <Field
                id="position"
                label="Должность"
                placeholder="Директор по маркетингу"
                autoComplete="organization-title"
              />
              <Field
                id="contact"
                label="Контакт для связи"
                placeholder="email, телефон или мессенджер"
                autoComplete="email"
              />
            </div>

            {/* Textarea — full width */}
            <div className="mt-[40px] flex flex-col gap-[9px]">
              <label
                htmlFor="request"
                className="text-[12px] tracking-[0.1em] uppercase text-[#5c605d]"
                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
              >
                Запрос
              </label>
              <textarea
                id="request"
                rows={5}
                placeholder="Опишите задачу, регион, сроки и любые важные детали"
                className="w-full resize-none border-b border-[rgba(175,179,176,0.3)] bg-transparent pb-[12px] pt-[12px] text-[16px] leading-[1.65] text-[#2f3331] outline-none transition-colors placeholder:text-[rgba(175,179,176,0.5)] focus:border-[#c00000]"
              />
            </div>

            {/* Checkbox */}
            <label className="mt-[32px] flex cursor-pointer items-start gap-[12px]">
              <span className="relative mt-[2px] flex shrink-0 items-center justify-center">
                <input
                  type="checkbox"
                  className="peer h-[16px] w-[16px] cursor-pointer appearance-none border border-[#afb3b0] bg-white transition-colors checked:border-[#c00000] checked:bg-[#c00000]"
                />
                {/* Checkmark — shown when checked */}
                <svg
                  aria-hidden
                  className="pointer-events-none absolute hidden peer-checked:block"
                  width="10"
                  height="8"
                  viewBox="0 0 10 8"
                  fill="none"
                >
                  <path
                    d="M1 3.5L3.8 6.5L9 1"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-[12px] leading-[1.65] text-[#5c605d]">
                Я ознакомлен(а) и принимаю условия политики обработки персональных данных
              </span>
            </label>

            {/* Submit button */}
            <div className="mt-[40px] flex flex-wrap items-center gap-[24px]">
              <button
                type="submit"
                disabled={loading || success}
                className="bg-[#c00000] px-[64px] py-[20px] text-[13px] tracking-[0.2em] uppercase text-white transition-colors hover:bg-[#a00000] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
              >
                {loading ? "Отправка..." : "Отправить заявку"}
              </button>

              {success && (
                <p className="text-[13px] text-[#2f3331]" style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}>
                  Заявка отправлена
                </p>
              )}
              {error && (
                <p className="text-[13px] text-[#c00000]">
                  {error}
                </p>
              )}
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}
