import type { APIRoute } from 'astro';

// Se genera con la URL del sitio (astro.config.mjs) para que el sitemap siempre apunte bien
export const GET: APIRoute = ({ site }) => {
	const sitemap = new URL('sitemap-index.xml', site).href;

	return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	});
};
