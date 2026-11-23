import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** "es/my-project" -> "my-project" */
export function projectSlug(project: Project): string {
	return project.id.split('/').slice(1).join('/');
}

/** Projects of one language: by `priority` first (1 on top) and, on a tie, newest to oldest. */
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
