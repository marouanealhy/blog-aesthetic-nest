import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://aestheticnest.com',
  integrations: [
    mdx(),
    sitemap()
  ],
  image: {
    domains: ['images.unsplash.com']
  }
});
