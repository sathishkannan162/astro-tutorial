import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://sensational-sprinkles-69cb96.netlify.app/",
  integrations: [preact()]
});