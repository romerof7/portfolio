import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Cada proyecto es un archivo .md dentro de src/content/projects/<idioma>/
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			tech: z.array(z.string()),
			date: z.coerce.date(),
			repo: z.url().optional(),
			demo: z.url().optional(),
			// Captura del proyecto. Va en src/assets/projects/ y se referencia con ruta relativa,
			// ej: image: "../../../assets/projects/mi-proyecto.png". Astro la optimiza sola.
			image: image().optional(),
			// Descripción de la imagen para lectores de pantalla. Si falta se usa el título.
			imageAlt: z.string().optional(),
			// Varias imágenes con flechas en la página del proyecto (reemplazan a `image` ahí; la portada sigue siendo `image`).
			gallery: z.array(z.object({ image: image(), alt: z.string() })).optional(),
			// Video de demostración (MP4 corto, sin audio) en public/videos/, ej: "/videos/mi-proyecto.mp4".
			// Si existe, reemplaza a la imagen en la página del proyecto; la imagen sigue siendo la portada.
			video: z.string().startsWith('/').optional(),
			// Etiqueta corta del tipo de proyecto, ej: "Proyecto de facultad", "Hackatón NASA".
			kind: z.string().optional(),
			// Orden manual en el listado y en la home: 1 sale primero. Sin número, va al final por fecha.
			priority: z.number().int().optional(),
			featured: z.boolean().default(false),
			// true = contenido de ejemplo. Poné false (o borrá la línea) cuando cargues el real.
			placeholder: z.boolean().default(false),
		}),
});

export const collections = { projects };
