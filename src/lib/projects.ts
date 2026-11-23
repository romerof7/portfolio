import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** "es/mi-proyecto" -> "mi-proyecto" */
export function projectSlug(project: Project): string {
	return project.id.split('/').slice(1).join('/');
}

/** Proyectos de un idioma: primero por `priority` (1 arriba) y, a igual prioridad, del más nuevo al más viejo. */
export async function getProjects(lang: Lang): Promise<Project[]> {
	const all = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
	return all.sort(
		(a, b) =>
			(a.data.priority ?? 99) - (b.data.priority ?? 99) ||
			b.data.date.valueOf() - a.data.date.valueOf(),
	);
}

export function formatDate(date: Date, lang: Lang): string {
	return date.toLocaleDateString(lang === 'es' ? 'es-AR' : 'en-US', {
		year: 'numeric',
		month: 'long',
		timeZone: 'UTC',
	});
}
