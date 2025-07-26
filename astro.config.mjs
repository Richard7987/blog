import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: "https://blahg.netlify.app/",
  base: "/",
  integrations: [sitemap(), react()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      wrap: true,
    },
    remarkPlugins: [remarkGfm],
    extendDefaultPlugins: true,
  },
});