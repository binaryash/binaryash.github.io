import { readFile, readdir, stat } from "node:fs/promises";
import { join } from "node:path";

export const PROJECTS_PER_PAGE = 10;

const projectRoot = join(process.cwd(), "public", "content", "projects");

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

export type ProjectListItem = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  year: string;
  mtime: number;
  imageSeed: number;
};

export async function getAllProjects(): Promise<ProjectListItem[]> {
  const files = (await readdir(projectRoot)).filter((file) => file.endsWith(".md"));
  const withMeta = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(".md", "");
      const fullPath = join(projectRoot, file);
      const [raw, st] = await Promise.all([readFile(fullPath, "utf-8"), stat(fullPath)]);
      const lines = raw
        .split("\n")
        .map((line) => cleanLine(line))
        .filter((line) => line.length > 0);
      const firstHeading = lines.find((line) => line.length > 0);
      const summary =
        lines.find((line) => !line.startsWith("#") && !line.toLowerCase().startsWith("tags")) ||
        "Project overview.";
      const tags = slug
        .split("-")
        .filter((token) => token.length > 2)
        .slice(0, 3)
        .map((token) => token.toUpperCase());
      const imageSeed = slug.split("").reduce((sum, ch) => sum + ch.charCodeAt(0), 300);
      return {
        slug,
        title: firstHeading ? firstHeading.replace(/^#\s*/, "") : toTitle(slug),
        summary,
        tags,
        year: String(new Date(st.mtimeMs).getFullYear()),
        mtime: st.mtimeMs,
        imageSeed,
      };
    })
  );

  return withMeta.sort((a, b) => b.mtime - a.mtime);
}
