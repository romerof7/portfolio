import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';

/**
 * TODOS TUS DATOS PERSONALES VIVEN ACÁ.
 *
 * Cuando cargues los reales: reemplazá los textos de ejemplo, y poné
 * `isPlaceholder = false` para que desaparezcan las etiquetas "Ejemplo".
 * (Los proyectos se cargan aparte, en src/content/projects/.)
 *
 * Los campos opcionales (contacto, listas) se pueden borrar o dejar vacíos:
 * lo que no tenga datos simplemente no se muestra.
 */
export const isPlaceholder = false;

// Tu foto: poné UN archivo (jpg, png o webp) en src/assets/profile/ y se usa solo, ya optimizado.
// Sin foto se muestran tus iniciales.
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

interface Profile {
	name: string;
	photo?: ImageMetadata;
	cv: Record<Lang, string | undefined>;
	contact: { email?: string; linkedin?: string; github?: string };
}

export const profile: Profile & Record<Lang, LocalizedProfile> = {
	name: 'Francisco Romero',

	photo,

	/** Ruta de tu CV en PDF dentro de /public, ej. '/cv-es.pdf'. Sin CV el botón queda deshabilitado. */
	cv: {
		es: undefined,
		en: undefined,
	},

	contact: {
		email: 'fran.romero051@gmail.com',
		linkedin: 'https://www.linkedin.com/in/francisco-romero-b03906327',
		github: 'https://github.com/romerof7',
	},

	es: {
		role: 'Desarrollador de software',
		intro:
			'Estudiante del último año de Ingeniería en Computación. Desarrollo software con foco en backend y experiencia en frontend.',
		about: [
			'Estoy en el último año de Ingeniería en Computación y hace 8 meses trabajo como desarrollador de software. En el día a día me enfoco sobre todo en el backend, y también trabajo en el frontend cuando hace falta.',
			'Me enfoco en aprender buenas prácticas de programación, como los principios SOLID y la arquitectura hexagonal, para escribir código mantenible. Busco seguir creciendo y aprender de equipos con más experiencia.',
		],
		stack: [
			{ title: 'Lenguajes', items: ['TypeScript', 'Python'] },
			{ title: 'Backend', items: ['Node.js', 'Prisma', 'Microservicios'] },
			{ title: 'Frontend', items: ['React'] },
			{ title: 'Bases de datos', items: ['MySQL', 'Supabase'] },
			{ title: 'Herramientas', items: ['Git', 'Docker', 'AWS'] },
			{ title: 'IoT y hardware', items: ['Arduino', 'ESP32', 'LoRaWAN'] },
		],
		timeline: [
			{
				type: 'work',
				period: '2026 – Actualidad',
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
			"I'm in the final year of my Computer Engineering degree and I've been working as a software developer for 8 months. Day to day I focus mostly on the backend, and I also work on the frontend when needed.",
			"I focus on learning good programming practices, such as SOLID principles and hexagonal architecture, to write maintainable code. I'm looking to keep growing and to learn from more experienced teams.",
		],
		stack: [
			{ title: 'Languages', items: ['TypeScript', 'Python'] },
			{ title: 'Backend', items: ['Node.js', 'Prisma', 'Microservices'] },
			{ title: 'Frontend', items: ['React'] },
			{ title: 'Databases', items: ['MySQL', 'Supabase'] },
			{ title: 'Tools', items: ['Git', 'Docker', 'AWS'] },
			{ title: 'IoT & Hardware', items: ['Arduino', 'ESP32', 'LoRaWAN'] },
		],
		timeline: [
			{
				type: 'work',
				period: '2026 – Present',
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
