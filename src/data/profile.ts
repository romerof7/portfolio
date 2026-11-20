import type { Lang } from '../i18n/ui';

/**
 * TODOS TUS DATOS PERSONALES VIVEN ACÁ.
 *
 * Cuando cargues los reales: reemplazá los textos de ejemplo, y poné
 * `isPlaceholder = false` para que desaparezcan las etiquetas "Ejemplo".
 * (Los proyectos se cargan aparte, en src/content/projects/.)
 */
export const isPlaceholder = true;

export interface TimelineItem {
	type: 'work' | 'education';
	period: string;
	title: string;
	place: string;
	description: string;
}

export interface StackGroup {
	title: string;
	items: string[];
}

interface LocalizedProfile {
	role: string;
	intro: string;
	about: string[];
	stack: StackGroup[];
	timeline: TimelineItem[];
}

export const profile = {
	name: 'Francisco Romero',

	/** Ruta de tu foto dentro de /public, ej. '/foto.jpg'. Sin foto se muestran las iniciales. */
	photo: undefined as string | undefined,

	/** Ruta de tu CV en PDF dentro de /public, ej. '/cv-es.pdf'. Sin CV el botón queda deshabilitado. */
	cv: {
		es: undefined,
		en: undefined,
	} as Record<Lang, string | undefined>,

	contact: {
		email: 'tu-email@ejemplo.com',
		linkedin: 'https://www.linkedin.com/in/tu-usuario',
		github: 'https://github.com/romerof7',
	},

	es: {
		role: 'Desarrollador de software',
		intro:
			'Texto de ejemplo. Acá va una frase corta que explique a qué te dedicás y qué tipo de cosas te gusta construir.',
		about: [
			'Texto de ejemplo. Primer párrafo sobre vos: quién sos, de dónde venís y qué te llevó a la programación.',
			'Texto de ejemplo. Segundo párrafo: en qué estás trabajando ahora, qué estás aprendiendo y qué buscás a futuro.',
		],
		stack: [
			{ title: 'Lenguajes', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
			{ title: 'Frameworks', items: ['FastAPI', 'Astro', 'React', 'Node.js'] },
			{ title: 'Bases de datos', items: ['PostgreSQL', 'MySQL'] },
			{ title: 'Herramientas', items: ['Git', 'GitHub', 'Linux', 'Docker'] },
		],
		timeline: [
			{
				type: 'work',
				period: '2025 – Actualidad',
				title: 'Puesto de ejemplo',
				place: 'Empresa de ejemplo',
				description: 'Texto de ejemplo sobre qué hacés o hacías en este puesto.',
			},
			{
				type: 'education',
				period: '2021 – Actualidad',
				title: 'Carrera de ejemplo',
				place: 'Universidad de ejemplo',
				description: 'Texto de ejemplo sobre tu formación.',
			},
		],
	},

	en: {
		role: 'Software developer',
		intro:
			'Example text. A short sentence explaining what you do and what kind of things you like to build.',
		about: [
			'Example text. First paragraph about you: who you are, where you come from and what led you to programming.',
			"Example text. Second paragraph: what you're working on now, what you're learning and what you're looking for.",
		],
		stack: [
			{ title: 'Languages', items: ['Python', 'TypeScript', 'JavaScript', 'SQL'] },
			{ title: 'Frameworks', items: ['FastAPI', 'Astro', 'React', 'Node.js'] },
			{ title: 'Databases', items: ['PostgreSQL', 'MySQL'] },
			{ title: 'Tools', items: ['Git', 'GitHub', 'Linux', 'Docker'] },
		],
		timeline: [
			{
				type: 'work',
				period: '2025 – Present',
				title: 'Example position',
				place: 'Example company',
				description: 'Example text about what you do or did in this position.',
			},
			{
				type: 'education',
				period: '2021 – Present',
				title: 'Example degree',
				place: 'Example university',
				description: 'Example text about your education.',
			},
		],
	},
} satisfies {
	name: string;
	photo: string | undefined;
	cv: Record<Lang, string | undefined>;
	contact: { email: string; linkedin: string; github: string };
} & Record<Lang, LocalizedProfile>;
