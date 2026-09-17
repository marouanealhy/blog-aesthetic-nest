import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Explicit static HTML export — equivalent to Next.js output: 'export'
  output: 'static',

  site: 'https://aestheticnest.com',

  integrations: [
    mdx(),
    sitemap()
  ],

  // Disable Astro's built-in image optimization service.
  // This is the equivalent of Next.js images: { unoptimized: true }.
  // All <Image /> components will render as plain <img> tags,
  // which is required for static hosting on Hostinger (no Node.js server).
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop'
    }
  }
});
