// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserSite = repositoryName.endsWith('.github.io');
const base = process.env.GITHUB_ACTIONS && !isUserSite ? `/${repositoryName}` : '/';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base,
  integrations: [mdx(), sitemap()],
  trailingSlash: 'always',
});
