import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <Link
          href="/blog"
          className="mb-10 inline-flex items-center gap-1 text-sm text-zinc-400 transition-colors hover:text-zinc-700"
        >
          ← Blog
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="mb-3 text-3xl font-semibold leading-snug text-zinc-900">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-zinc-400">
              <time>
                {new Date(post.date).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
              {post.author && (
                <>
                  <span>·</span>
                  <span>{post.author}</span>
                </>
              )}
            </div>
          </header>

          <div
            className="prose prose-zinc max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}
