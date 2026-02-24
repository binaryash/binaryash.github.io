import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function readMarkdownFile(contentFile: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'public', contentFile.replace(/^\//, ''));
  return readFile(filePath, 'utf-8');
}

function decorateMarkdownHtml(html: string): string {
  let decorated = html;

  decorated = decorated.replace(
    /<pre><code([^>]*)>([\s\S]*?)<\/code><\/pre>/g,
    (_, codeAttrs: string, codeContent: string) => `
      <div class="relative group my-6 bg-neutral-100 dark:bg-neutral-800 rounded-lg border border-neutral-200/60 dark:border-neutral-700/60 p-4 pr-12 markdown-code-wrapper">
        <button
          class="markdown-code-copy absolute top-3 right-3 p-2 rounded-md bg-neutral-200/80 dark:bg-neutral-700/80 hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Copy code"
          type="button"
        >
          <svg data-copy-icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="text-neutral-600 dark:text-neutral-400"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
          <svg data-check-icon xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="hidden text-green-600 dark:text-green-400"><path d="M20 6 9 17l-5-5" /></svg>
        </button>
        <pre class="overflow-x-auto text-sm font-mono"><code${codeAttrs} class="text-neutral-700 dark:text-neutral-300 leading-relaxed">${codeContent}</code></pre>
      </div>`,
  );

  decorated = decorated
    .replace(/<h1>/g, '<h1 class="text-3xl font-medium tracking-tight mt-8 mb-4 dark:text-neutral-100">')
    .replace(/<h2>/g, '<h2 class="text-2xl font-medium tracking-tight mt-8 mb-4 dark:text-neutral-200">')
    .replace(/<h3>/g, '<h3 class="text-xl font-medium tracking-tight mt-6 mb-3 dark:text-neutral-200">')
    .replace(/<p>/g, '<p class="text-neutral-600 dark:text-neutral-400 leading-7 mb-4">')
    .replace(/<ul>/g, '<ul class="list-disc ml-6 mb-4 space-y-1 text-neutral-600 dark:text-neutral-400">')
    .replace(/<ol>/g, '<ol class="list-decimal ml-6 mb-4 space-y-1 text-neutral-600 dark:text-neutral-400">')
    .replace(/<li>/g, '<li class="pl-1">')
    .replace(/<thead>/g, '<thead class="border-b-2 border-neutral-200 dark:border-neutral-800">')
    .replace(/<th>/g, '<th class="py-3 px-4 font-semibold text-neutral-900 dark:text-neutral-100 bg-neutral-50/50 dark:bg-neutral-900/50">')
    .replace(/<td>/g, '<td class="py-3 px-4 text-neutral-600 dark:text-neutral-400 border-b border-neutral-100 dark:border-neutral-900">')
    .replace(/<table>/g, '<div class="overflow-x-auto mb-8 my-6"><table class="w-full text-left border-collapse text-sm">')
    .replace(/<\/table>/g, '</table></div>');

  decorated = decorated.replace(
    /<code>([^<\n]+)<\/code>/g,
    '<code class="bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 rounded px-1.5 py-0.5 text-[0.9em] font-mono font-normal border border-neutral-200/60 dark:border-neutral-700/60">$1</code>',
  );

  return decorated;
}

export async function renderMarkdown(contentFile: string): Promise<string> {
  const raw = await readMarkdownFile(contentFile);
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .process(raw);

  return decorateMarkdownHtml(String(file));
}
