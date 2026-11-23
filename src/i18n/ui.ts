export const languages = {
	es: 'Español',
	en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
	es: {
		'meta.title': 'Francisco Romero | Portfolio',
		'meta.description': 'Portfolio de Francisco Romero',
		'nav.label': 'Navegación principal',
		'a11y.skip': 'Saltar al contenido',
		'nav.about': 'Sobre mí',
		'nav.experience': 'Experiencia',
		'nav.projects': 'Proyectos',
		'nav.contact': 'Contacto',
		'theme.toggle': 'Cambiar entre modo claro y oscuro',
		'theme.dark': 'Oscuro',
		'theme.light': 'Claro',
		'lang.switch': 'Cambiar idioma',
		'common.placeholderSection': 'Contenido de ejemplo',
		'hero.hello': 'Hola, soy',
		'hero.ctaProjects': 'Ver proyectos',
		'hero.ctaContact': 'Contactame',
		'cv.download': 'Descargar CV',
		'cv.soon': 'CV próximamente',
		'about.title': 'Sobre mí',
		'about.photoAlt': 'Foto de Francisco Romero',
		'stack.title': 'Stack',
		'experience.title': 'Experiencia y educación',
		'experience.work': 'Experiencia',
		'experience.education': 'Educación',
		'footer.built': 'Hecho con Astro',
		'projects.title': 'Proyectos',
		'projects.featured': 'Proyectos destacados',
		'projects.viewAll': 'Ver todos los proyectos',
		'projects.viewDetail': 'Ver detalle',
		'projects.back': '← Volver a proyectos',
		'projects.repo': 'Código',
		'projects.stack': 'Stack',
		'gallery.label': 'Galería de imágenes',
		'gallery.prev': 'Imagen anterior',
		'gallery.next': 'Imagen siguiente',
		'gallery.goTo': 'Ir a la imagen',
		'projects.demo': 'Demo',
		'projects.empty': 'Todavía no hay proyectos cargados.',
		'projects.placeholder': 'Ejemplo',
		'projects.placeholderNote': 'Este proyecto es un ejemplo y se va a reemplazar por uno real.',
		'contact.title': 'Contacto',
		'contact.intro': '¿Querés charlar sobre un proyecto o una oportunidad? Escribime.',
		'contact.email': 'Email',
		'contact.linkedin': 'LinkedIn',
		'contact.github': 'GitHub',
	},
	en: {
		'meta.title': 'Francisco Romero | Portfolio',
		'meta.description': "Francisco Romero's portfolio",
		'nav.label': 'Main navigation',
		'a11y.skip': 'Skip to content',
		'nav.about': 'About',
		'nav.experience': 'Experience',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',
		'theme.toggle': 'Switch between light and dark mode',
		'theme.dark': 'Dark',
		'theme.light': 'Light',
		'lang.switch': 'Change language',
		'common.placeholderSection': 'Example content',
		'hero.hello': "Hi, I'm",
		'hero.ctaProjects': 'View projects',
		'hero.ctaContact': 'Get in touch',
		'cv.download': 'Download CV',
		'cv.soon': 'CV coming soon',
		'about.title': 'About me',
		'about.photoAlt': 'Photo of Francisco Romero',
		'stack.title': 'Stack',
		'experience.title': 'Experience and education',
		'experience.work': 'Experience',
		'experience.education': 'Education',
		'footer.built': 'Built with Astro',
		'projects.title': 'Projects',
		'projects.featured': 'Featured projects',
		'projects.viewAll': 'View all projects',
		'projects.viewDetail': 'View details',
		'projects.back': '← Back to projects',
		'projects.repo': 'Code',
		'projects.stack': 'Stack',
		'gallery.label': 'Image gallery',
		'gallery.prev': 'Previous image',
		'gallery.next': 'Next image',
		'gallery.goTo': 'Go to image',
		'projects.demo': 'Demo',
		'projects.empty': 'No projects have been added yet.',
		'projects.placeholder': 'Example',
		'projects.placeholderNote': 'This project is an example and will be replaced with a real one.',
		'contact.title': 'Contact',
		'contact.intro': 'Want to talk about a project or an opportunity? Drop me a line.',
		'contact.email': 'Email',
		'contact.linkedin': 'LinkedIn',
		'contact.github': 'GitHub',
	},
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)[typeof defaultLang];

/** Devuelve el idioma de la URL (/es/..., /en/...) o el idioma por defecto. */
export function getLangFromUrl(url: URL): Lang {
	const [, first] = url.pathname.split('/');
	return first in ui ? (first as Lang) : defaultLang;
}

/** Devuelve una función t('clave') con los textos del idioma pedido. */
export function useTranslations(lang: Lang) {
	return function t(key: UiKey): string {
		return ui[lang][key] ?? ui[defaultLang][key];
	};
}
