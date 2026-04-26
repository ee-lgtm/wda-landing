import Link from "next/link";

export default function Nav() {
  return (
    <header className="border-b border-zinc-100 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-900">
          Studio
        </Link>
        <nav className="flex items-center gap-6 text-sm text-zinc-500">
          <Link href="/blog" className="transition-colors hover:text-zinc-900">
            Blog
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-zinc-700"
          >
            Get in touch
          </Link>
        </nav>
      </div>
    </header>
  );
}
