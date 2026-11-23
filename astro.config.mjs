// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	// Keep in sync with the real site URL (Netlify site name or custom domain).
	// Used for the sitemap, canonical URLs and the share preview image.
	site: 'https://francisco-romero.netlify.app',

	// The site root redirects to the default language
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
			// The 404 page must not appear in the sitemap
			filter: (page) => !page.includes('/404'),
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
