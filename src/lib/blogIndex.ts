import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

export const BLOGS_PER_PAGE = 20;

const blogRoot = join(process.cwd(), "public", "content", "blog");

const toTitle = (slug: string) =>
  slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");

const cleanLine = (line: string) =>
  line
    .replace(/^#+\s*/, "")
    .replace(/\*\*/g, "")
    .replace(/`/g, "")
    .replace(/^\*\s*/, "")
    .trim();

export type BlogListItem = {
  slug: string;
  title: string;
  mtime: number;
};

export async function getAllBlogs(): Promise<BlogListItem[]> {
  const files = (await readdir(blogRoot)).filter((file) => file.endsWith(".md"));
  const withMeta = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".md", "");
      const fullPath = join(blogRoot, file);
      const [raw, st] = await Promise.all([readFile(fullPath, "utf-8"), stat(fullPath)]);
      const firstHeading = raw
        .split("\n")
        .map((line) => cleanLine(line))
        .find((line) => line.length > 0);
      return {
        slug,
        title: firstHeading ? firstHeading.replace(/^#\s*/, "") : toTitle(slug),
        mtime: st.mtimeMs,
      };
    })
  );

  return withMeta.sort((a, b) => b.mtime - a.mtime);
}
