import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-6 lg:px-8 text-xs text-zinc-400">
        <span>© {new Date().getFullYear()} WDA</span>
        <div className="flex flex-wrap gap-6">
          {/* Блог временно скрыт
          <Link href="/blog" className="transition-colors hover:text-zinc-600">
            Публикации
          </Link>
          */}
          <Link href="/privacy" className="transition-colors hover:text-zinc-600">
            Политика обработки персональных данных
          </Link>
        </div>
      </div>
    </footer>
  );
}
