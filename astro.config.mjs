import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://blahg.netlify.app/",
  base: "/",
  integrations: [sitemap(), react()],
  markdown: {
    shikiConfig: {
      theme: "material-theme-darker",
      langs: [],
      wrap: true, // Mejora el renderizado de código
    },
    remarkPlugins: [], // Puedes añadir plugins de remark si los necesitas
    rehypePlugins: [], // Puedes añadir plugins de rehype si los necesitas
  },
});