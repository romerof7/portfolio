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
		'nav.home': 'Inicio',
		'nav.about': 'Sobre mí',
		'nav.projects': 'Proyectos',
		'nav.contact': 'Contacto',
		'theme.toggle': 'Cambiar entre modo claro y oscuro',
		'theme.dark': '🌙 Oscuro',
		'theme.light': '☀️ Claro',
		'lang.switch': 'Cambiar idioma',
		'home.subtitle': 'Mi portfolio está en construcción.',
		'about.title': 'Sobre mí',
		'projects.title': 'Proyectos',
		'projects.featured': 'Proyectos destacados',
		'projects.viewAll': 'Ver todos los proyectos',
		'projects.viewDetail': 'Ver detalle',
		'projects.back': '← Volver a proyectos',
		'projects.repo': 'Código',
		'projects.demo': 'Demo',
		'projects.empty': 'Todavía no hay proyectos cargados.',
		'projects.placeholder': 'Ejemplo',
		'projects.placeholderNote':
			'Este proyecto es un ejemplo y se va a reemplazar por uno real.',
		'contact.title': 'Contacto',
		'soon': 'Próximamente.',
	},
	en: {
		'meta.title': 'Francisco Romero | Portfolio',
		'meta.description': "Francisco Romero's portfolio",
		'nav.label': 'Main navigation',
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.projects': 'Projects',
		'nav.contact': 'Contact',
		'theme.toggle': 'Switch between light and dark mode',
		'theme.dark': '🌙 Dark',
		'theme.light': '☀️ Light',
		'lang.switch': 'Change language',
		'home.subtitle': 'My portfolio is under construction.',
		'about.title': 'About me',
		'projects.title': 'Projects',
		'projects.featured': 'Featured projects',
		'projects.viewAll': 'View all projects',
		'projects.viewDetail': 'View details',
		'projects.back': '← Back to projects',
		'projects.repo': 'Code',
		'projects.demo': 'Demo',
		'projects.empty': 'No projects have been added yet.',
		'projects.placeholder': 'Example',
		'projects.placeholderNote':
			'This project is an example and will be replaced with a real one.',
		'contact.title': 'Contact',
		'soon': 'Coming soon.',
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
