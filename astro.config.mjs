import { defineConfig } from "astro/config";
import compress from "astro-compress";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import purgecss from "astro-purgecss";
import sitemap from "@astrojs/sitemap";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.sakurakat.systems',
  integrations: [compress(), mdx(), tailwind(), purgecss(), sitemap(), robotsTxt(
    {
      sitemap: [
        'https://www.sakurakat.systems/sitemap-0.xml',
        'https://www.sakurakat.systems/sitemap-index.xml'],
      host: 'www.sakurakat.systems'
    }
  )]
});