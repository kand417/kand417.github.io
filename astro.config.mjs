import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import pagefind from "astro-pagefind";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kand417.github.io",
  // Astro 7 defaults to "jsx", which drops spaces between inline elements
  compressHTML: true,
  integrations: [sitemap(), mdx(), pagefind()],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Keep font subsets as separate files so unicode-range can skip unused ones
      assetsInlineLimit: (filePath) =>
        /\.(woff2?|ttf|otf)$/.test(filePath) ? false : undefined,
    },
  },
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
});
