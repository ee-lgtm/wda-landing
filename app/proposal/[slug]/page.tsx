import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProposalBySlug } from "@/lib/proposals";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
};

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ token?: string }>;
};

export default async function ProposalPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { token } = await searchParams;

  const proposal = getProposalBySlug(slug);

  if (!proposal) notFound();

  const isAuthorised = token === proposal.token;

  if (!isAuthorised) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6">
        <div className="max-w-sm text-center">
          <p className="mb-2 text-4xl">🔒</p>
          <h1 className="mb-2 text-lg font-semibold text-zinc-900">Access required</h1>
          <p className="text-sm text-zinc-500">
            This page is private. Please use the link provided in your email to access it.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Minimal top bar — no public nav */}
      <div className="border-b border-zinc-100 px-6 py-4">
        <span className="text-sm font-semibold text-zinc-900">Studio</span>
      </div>

      <main className="mx-auto max-w-2xl px-6 py-16">
        <p className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
          Proposal · Private
        </p>
        <h1 className="mb-1 text-3xl font-semibold text-zinc-900">{proposal.title}</h1>
        {proposal.client && (
          <p className="mb-10 text-sm text-zinc-500">Prepared for {proposal.client}</p>
        )}

        <div
          className="prose prose-zinc max-w-none"
          dangerouslySetInnerHTML={{ __html: proposal.content }}
        />

        <div className="mt-16 border-t border-zinc-100 pt-8 text-xs text-zinc-400">
          This document is confidential and intended solely for the named recipient.
        </div>
      </main>
    </div>
  );
}
