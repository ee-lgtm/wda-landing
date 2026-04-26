import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on design, development, and running a digital agency.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="mb-2 text-3xl font-semibold text-zinc-900">Blog</h1>
        <p className="mb-12 text-zinc-500">
          Thoughts on design, development, and running a digital agency.
        </p>

        {posts.length === 0 ? (
          <p className="text-zinc-400">No posts yet.</p>
        ) : (
          <ul className="divide-y divide-zinc-100">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-1 py-7 sm:flex-row sm:items-start sm:gap-12"
                >
                  <time className="shrink-0 text-sm text-zinc-400 sm:w-32">
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <div>
                    <h2 className="font-semibold text-zinc-900 transition-colors group-hover:text-zinc-600">
                      {post.title}
                    </h2>
                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">{post.excerpt}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
