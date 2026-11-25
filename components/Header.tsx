import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Медийная архитектура", href: "#architecture" },
  { label: "Регионы",              href: "#regions" },
  { label: "Структура",            href: "#structure" },
  { label: "Решения",              href: "#solutions" },
  { label: "Кейсы",               href: "#cases" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm"
            style={{ borderBottom: "1px solid rgba(175,179,176,0.2)" }}>
      <div className="mx-auto flex h-[88px] max-w-[1280px] items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/logo.svg"
            alt="WDA"
            width={80}
            height={40}
            priority
          />
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-goal="nav_click"
              data-goal-label={link.label}
              className="text-[12px] tracking-[0.04em] text-[#5c605d] transition-colors hover:text-[#2f3331]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Выделенная ссылка на лендинг для туризма */}
          <Link
            href="/tourism"
            data-goal="nav_click"
            data-goal-label="Туризм из Китая"
            className="inline-flex h-9 items-center gap-2 border border-[#c00000] px-4
                       text-[11px] uppercase tracking-[0.1em] text-[#c00000]
                       transition-colors hover:bg-[#c00000] hover:text-white"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
            </span>
            Туризм из Китая
          </Link>

          {/* CTA */}
          <a
            href="#contact"
            data-goal="cta_header"
            className="hidden sm:inline-flex items-center justify-center h-9 px-6
                       bg-[#c00000] text-[#fff6f4] text-[11px] tracking-[0.1em] uppercase
                       transition-colors hover:bg-[#a80000]"
            style={{ fontFamily: "var(--font-montserrat)", fontWeight: 800 }}
          >
            Запросить консультацию
          </a>
        </div>

      </div>
    </header>
  );
}
