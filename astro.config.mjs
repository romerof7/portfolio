// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: cambiar por la URL real cuando se publique (Netlify o dominio propio).
  // Se usa para el sitemap, las URLs canónicas y la imagen de vista previa.
  site: 'https://francisco-romero.netlify.app',

  // La raíz del sitio redirige al idioma por defecto
  redirects: {
    '/': '/es/',
  },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-AR', en: 'en-US' },
      },
      // La 404 no debe aparecer en el sitemap
      filter: (page) => !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
