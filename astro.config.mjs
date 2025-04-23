import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://kingg22.github.io",
  base: "astro-vacunas-panama",
  trailingSlash: "ignore",
  integrations: [tailwind(), react()],
});
