import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const PROPOSALS_DIR = path.join(process.cwd(), "content/proposals");

export interface Proposal {
  slug: string;
  title: string;
  client: string;
  token: string;
  content: string;
}

export function getProposalBySlug(slug: string): Proposal | null {
  const filePath = path.join(PROPOSALS_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "Proposal",
    client: data.client ?? "",
    token: data.token ?? "",
    content: marked(content) as string,
  };
}
