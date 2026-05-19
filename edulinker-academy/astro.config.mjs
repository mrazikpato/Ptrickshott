import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://edulinker-academy.cz',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
