import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://100xlift.com',
  integrations: [sitemap()],
});
