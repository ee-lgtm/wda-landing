import Link from "next/link";
import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import { LEGAL_UPDATED_AT } from "@/lib/legal";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <header
        className="bg-white"
        style={{ borderBottom: "1px solid rgba(175,179,176,0.2)" }}
      >
        <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image src="/logo.svg" alt="WDA" width={80} height={40} priority />
          </Link>
          <Link
            href="/"
            className="text-[12px] tracking-[0.04em] text-[#5c605d] transition-colors hover:text-[#2f3331]"
          >
            ← На главную
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
        <h1
          className="mb-4 text-[28px] leading-[1.15] tracking-[-0.025em] text-[#2f3331] lg:text-[36px]"
          style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
        >
          {title}
        </h1>
        <p className="mb-12 text-[13px] text-[#5c605d]">
          Редакция от {LEGAL_UPDATED_AT}
        </p>
        <div className="prose prose-zinc max-w-none prose-headings:text-[#2f3331] prose-p:text-[#2f3331] prose-li:text-[#2f3331] prose-a:text-[#c00000]">
          {children}
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
