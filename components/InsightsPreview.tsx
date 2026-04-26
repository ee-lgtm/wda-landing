import Image from "next/image";
import SectionIntro from "@/components/SectionIntro";

// ─── Data types ───────────────────────────────────────────────────────────────
//
// When the blog subdomain is ready, replace `localPosts` with a fetch/RSC call
// and keep this type as the contract between the API and this component.

export interface InsightPost {
  /** Post title */
  title: string;
  /** Short excerpt — ideally ≤ 120 chars for consistent card height */
  excerpt: string;
  /**
   * Absolute path to a local image (e.g. "/insights/post-1.jpg")
   * or a full URL to the blog CDN.
   * Pass `null` to render the neutral placeholder.
   */
  image: string | null;
  /**
   * Full URL to the article.
   * Local dev:  "/blog/slug"
   * Production: "https://blog.example.com/slug"
   */
  href: string;
  /** Display category label */
  category: string;
  /** ISO 8601 date string — "2025-11-14" */
  publishedAt: string;
}

// ─── Local seed data ──────────────────────────────────────────────────────────
//
// Replace this array with a real data-fetch once the blog subdomain is live.
// The shape must remain compatible with InsightPost.

const localPosts: InsightPost[] = [
  {
    title: "Платформенная экосистема WeChat: как работают медийные механики",
    excerpt:
      "Разбираем структуру рекламных инструментов WeChat и ключевые ограничения для иностранных брендов при запуске кампаний.",
    image: null,
    href: "/blog/wechat-platform-ecosystem",
    category: "Анализ рынка",
    publishedAt: "2025-10-20",
  },
  {
    title: "KOL vs. блогеры: как выбирать инфлюенсеров для рынков ЦА",
    excerpt:
      "Сравниваем модели работы с лидерами мнений в Казахстане, Узбекистане и Кыргызстане — ER, охваты, особенности контракта.",
    image: null,
    href: "/blog/kol-central-asia",
    category: "Инфлюенсер-маркетинг",
    publishedAt: "2025-09-05",
  },
  {
    title: "Медийный ландшафт Узбекистана: рост digital и возможности для брендов",
    excerpt:
      "Анализируем динамику digital-аудитории, ведущие платформы и регуляторный контекст для рекламных кампаний в Узбекистане.",
    image: null,
    href: "/blog/uzbekistan-media-landscape",
    category: "Региональные тренды",
    publishedAt: "2025-08-12",
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// ─── Sub-component: single article card ──────────────────────────────────────

function InsightCard({ post }: { post: InsightPost }) {
  return (
    <a
      href={post.href}
      className="group flex flex-col"
      aria-label={post.title}
    >
      {/* Image / placeholder — aspect-[16/10] matches Figma */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#edeeeb]">
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          /* Neutral placeholder — visible when image is null */
          <div className="absolute inset-0 bg-gradient-to-br from-[#e8e5de] to-[#d9d5cc]" />
        )}
      </div>

      {/* Card text */}
      <div className="flex flex-1 flex-col pt-6">
        {/* Category + date */}
        <div className="mb-3 flex items-center gap-4">
          <span className="text-[12px] tracking-[0.1em] uppercase text-[#c00000]">
            {post.category}
          </span>
          <span className="text-[11px] text-[#afb3b0]">{formatDate(post.publishedAt)}</span>
        </div>

        {/* Title */}
        <h3
          className="mb-3 text-[20px] leading-[1.25] tracking-[-0.02em] text-[#2f3331]
                     transition-colors group-hover:text-[#c00000]"
          style={{ fontFamily: "var(--font-manrope)", fontWeight: 700 }}
        >
          {post.title}
        </h3>

        {/* Excerpt — 2-line clamp mirrors Figma's clipped container */}
        <p className="line-clamp-2 text-[14px] leading-[1.625] text-[#5c605d]">
          {post.excerpt}
        </p>

        {/* Read arrow */}
        <span className="mt-4 text-[12px] tracking-[0.1em] uppercase text-[#2f3331] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Читать →
        </span>
      </div>
    </a>
  );
}

// ─── Section component ────────────────────────────────────────────────────────

interface InsightsPreviewProps {
  /**
   * Override the local seed data with live posts fetched from the blog API.
   * When omitted, renders `localPosts`.
   */
  posts?: InsightPost[];
}

export default function InsightsPreview({ posts = localPosts }: InsightsPreviewProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1280px] px-8 py-[96px]">

        <SectionIntro number="08" char="见" title="Публикации" />

        {/* 3-column grid — collapses to 1 on mobile, 2 on tablet */}
        <div className="grid grid-cols-1 gap-x-[48px] gap-y-[64px] sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <InsightCard key={post.href} post={post} />
          ))}
        </div>

        {/* "All publications" link — points to blog when subdomain is ready */}
        <div className="mt-[64px] border-t border-[rgba(175,179,176,0.3)] pt-8">
          <a
            href="/blog"
            className="text-[12px] tracking-[0.1em] uppercase text-[#2f3331] transition-colors hover:text-[#c00000]"
          >
            Все публикации →
          </a>
        </div>

      </div>
    </section>
  );
}
