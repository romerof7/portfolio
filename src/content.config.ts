import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada proyecto es un archivo .md dentro de src/content/projects/<idioma>/
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		tech: z.array(z.string()),
		date: z.coerce.date(),
		repo: z.url().optional(),
		demo: z.url().optional(),
		featured: z.boolean().default(false),
		// true = contenido de ejemplo. Poné false (o borrá la línea) cuando cargues el real.
		placeholder: z.boolean().default(false),
	}),
});

export const collections = { projects };
