// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://AntonioOrtega32.github.io',
  //base: '/portafolio-personal', // quítalo si el repo se llama TU-USUARIO.github.io
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});