// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/*
 * Indirizzo pubblico del sito e sottocartella di pubblicazione.
 *
 * - In locale non serve toccare nulla.
 * - Su GitHub Pages i valori arrivano dalle variabili d'ambiente SITE_URL e
 *   BASE_PATH, impostate dal workflow di deploy. Esempi:
 *     sito di progetto:     SITE_URL=https://utente.github.io  BASE_PATH=/nome-repo
 *     dominio personalizzato: SITE_URL=https://www.tuodominio.it  BASE_PATH=/
 */
const SITE_URL = process.env.SITE_URL || 'http://localhost:4321';
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
