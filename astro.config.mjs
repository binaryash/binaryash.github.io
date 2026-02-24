import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const repository = process.env.GITHUB_REPOSITORY || '';
const repoName = repository.split('/')[1] || '';
const isUserOrOrgPagesRepo = repoName.toLowerCase().endsWith('.github.io');
const isGhActions = process.env.GITHUB_ACTIONS === 'true';
const base = isGhActions
  ? isUserOrOrgPagesRepo
    ? '/'
    : `/${repoName}/`
  : '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://binaryash.github.io',
  base,
  server: {
    port: 3000,
    host: true,
  },
  build: {
    format: 'directory',
  },
  outDir: 'docs',
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});
