import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://100xlift.com',
  integrations: [mdx(), sitemap()],
  trailingSlash: "never" // or "always" but be consistent
});
