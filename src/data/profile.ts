import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

/**
 * ALL PERSONAL DATA LIVES HERE.
 *
 * When the real data is in: replace the example texts, and set
 * `isPlaceholder = false` so the "Example" labels disappear.
 * (Projects are loaded separately, in src/content/projects/.)
 *
 * Optional fields (contact, lists) can be deleted or left empty:
 * anything without data is simply not shown.
 */
export const isPlaceholder = false;

// Your photo: put ONE file (jpg, png or webp) in src/assets/profile/ and it is used automatically, already optimized.
// Without a photo, your initials are shown.
const photos = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/profile/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG}',
	{ eager: true },
);
const photo = Object.values(photos)[0]?.default;

export interface TimelineItem {
	type: 'work' | 'education';
	period: string;
	title: string;
	place: string;
	description: string;
}

/** A quick fact shown in the About section. `href` turns the value into a link. */
export interface Fact {
	label: string;
	value: string;
	href?: string;
}

export interface StackGroup {
	title: string;
	items: string[];
}

interface LocalizedProfile {
	role: string;
	intro: string;
	about: string[];
	facts: Fact[];
	stack: StackGroup[];
	timeline: TimelineItem[];
}

interface Profile {
	name: string;
	photo?: ImageMetadata;
	cv: Record<Lang, string | undefined>;
	contact: { email?: string; linkedin?: string; github?: string };
}

const profileLinkedin = 'https://www.linkedin.com/in/francisco-romero-b03906327';

export const profile: Profile & Record<Lang, LocalizedProfile> = {
	name: 'Francisco Romero',

	photo,

	/** Path to your CV PDF inside /public, e.g. '/cv-es.pdf'. Without a CV the hero shows a "coming soon" label and the header button is hidden. */
	cv: {
		es: '/Francisco-Romero-CV.pdf',
		en: '/Francisco-Romero-CV-EN.pdf',
	},

	contact: {
		email: 'fran.romero051@gmail.com',
		linkedin: profileLinkedin,
		github: 'https://github.com/romerof7',
	},

	es: {
		role: 'Desarrollador de software',
		intro:
			'Estudiante del último año de Ingeniería en Computación. Desarrollo software con foco en backend y experiencia en frontend.',
		about: [
			'Estoy en el último año de Ingeniería en Computación y trabajo como desarrollador de software desde mayo de 2026. En el día a día me enfoco sobre todo en el backend, y también trabajo en el frontend cuando hace falta.',
			'Me enfoco en aprender buenas prácticas de programación, como los principios SOLID y la arquitectura hexagonal, para escribir código mantenible. Busco seguir creciendo y aprender de equipos con más experiencia.',
		],
		facts: [
			{ label: 'Ubicación', value: 'Rafaela, Santa Fe, Argentina' },
			{ label: 'Edad', value: '22 años' },
			{ label: 'Idiomas', value: 'Español (nativo) · Inglés (intermedio)' },
			{ label: 'Certificaciones', value: 'Ver en LinkedIn', href: profileLinkedin },
		],
		stack: [
			{ title: 'Lenguajes', items: ['TypeScript', 'Python', 'C/C++'] },
			{ title: 'Backend', items: ['Node.js', 'NestJS', 'Prisma', 'Microservicios'] },
			{ title: 'Frontend', items: ['React', 'Tailwind CSS'] },
			{ title: 'Bases de datos', items: ['MySQL', 'Supabase'] },
			{ title: 'Herramientas', items: ['Git', 'Docker', 'AWS'] },
			{ title: 'IoT y hardware', items: ['Arduino', 'ESP32', 'LoRaWAN'] },
		],
		timeline: [
			{
				type: 'work',
				period: 'Mayo de 2026 – Actualidad',
				title: 'Desarrollador de software (pasantía)',
				place: 'Vitolen · Área de Tecnología y Desarrollo',
				description:
					'Desarrollo de software dentro del área de Tecnología y Desarrollo, principalmente en el backend y también en el frontend.',
			},
			{
				type: 'education',
				period: '2021 – Actualidad',
				title: 'Ingeniería en Computación',
				place: 'Universidad Nacional de Rafaela (UNRaf)',
				description:
					'Cursando el último año. Egreso previsto para fines de 2027 o inicios de 2028.',
			},
		],
	},

	en: {
		role: 'Software developer',
		intro:
			'Final-year Computer Engineering student. I build software with a focus on the backend and hands-on experience in the frontend.',
		about: [
			"I'm in the final year of my Computer Engineering degree and I've been working as a software developer since May 2026. Day to day I focus mostly on the backend, and I also work on the frontend when needed.",
			"I focus on learning good programming practices, such as SOLID principles and hexagonal architecture, to write maintainable code. I'm looking to keep growing and to learn from more experienced teams.",
		],
		facts: [
			{ label: 'Location', value: 'Rafaela, Santa Fe, Argentina' },
			{ label: 'Age', value: '22' },
			{ label: 'Languages', value: 'Spanish (native) · English (intermediate)' },
			{ label: 'Certifications', value: 'See on LinkedIn', href: profileLinkedin },
		],
		stack: [
			{ title: 'Languages', items: ['TypeScript', 'Python', 'C/C++'] },
			{ title: 'Backend', items: ['Node.js', 'NestJS', 'Prisma', 'Microservices'] },
			{ title: 'Frontend', items: ['React', 'Tailwind CSS'] },
			{ title: 'Databases', items: ['MySQL', 'Supabase'] },
			{ title: 'Tools', items: ['Git', 'Docker', 'AWS'] },
			{ title: 'IoT & Hardware', items: ['Arduino', 'ESP32', 'LoRaWAN'] },
		],
		timeline: [
			{
				type: 'work',
				period: 'May 2026 – Present',
				title: 'Software developer (internship)',
				place: 'Vitolen · Technology and Development department',
				description:
					'Software development within the Technology and Development department, mainly on the backend and also on the frontend.',
			},
			{
				type: 'education',
				period: '2021 – Present',
				title: 'Computer Engineering',
				place: 'National University of Rafaela (UNRaf)',
				description: 'In the final year. Expected graduation in late 2027 or early 2028.',
			},
		],
	},
};
