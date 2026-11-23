import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Each project is a .md file inside src/content/projects/<language>/
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
			// Project screenshot. Lives in src/assets/projects/ and is referenced with a relative path,
			// e.g. image: "../../../assets/projects/my-project.png". Astro optimizes it automatically.
			image: image().optional(),
			// Image description for screen readers. Falls back to the title when missing.
			imageAlt: z.string().optional(),
			// Several images with arrows on the project page (they replace `image` there; the cover is still `image`).
			gallery: z.array(z.object({ image: image(), alt: z.string() })).optional(),
			// Demo video (short MP4, no audio) in public/videos/, e.g. "/videos/my-project.mp4".
			// If present, it replaces the image on the project page; the image is still the cover.
			video: z.string().startsWith('/').optional(),
			// Short label for the kind of project, e.g. "University project", "NASA hackathon".
			kind: z.string().optional(),
			// Manual order in the list and on the home page: 1 comes first. Without a number, it goes last, by date.
			priority: z.number().int().optional(),
			featured: z.boolean().default(false),
			// true = example content. Set it to false (or delete the line) once the real content is in.
			placeholder: z.boolean().default(false),
		}),
});

export const collections = { projects };
