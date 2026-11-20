# Portfolio · Francisco Romero

Mi portfolio personal: un sitio estático y bilingüe (español e inglés) para mostrar mis proyectos, mi stack y mi experiencia.

> **Estado:** en construcción. La estructura y el diseño están listos; el contenido todavía es de ejemplo y está marcado con etiquetas visibles en el sitio.

## Stack

- [Astro](https://astro.build) (sitio estático, sin backend)
- [Tailwind CSS](https://tailwindcss.com) con modo claro y oscuro
- TypeScript
- Content collections de Astro para los proyectos (un archivo Markdown por proyecto)
- Prettier, `astro check` y GitHub Actions para mantener la calidad del código

## Características

- Español (`/es/`) e inglés (`/en/`), con selector que lleva a la misma página en el otro idioma
- Modo claro y oscuro, que respeta la preferencia del sistema y recuerda la elección
- Proyectos como archivos Markdown, con capturas optimizadas, listado y página de detalle
- SEO: etiquetas Open Graph, URLs canónicas, `hreflang`, sitemap, `robots.txt` y datos estructurados
- Página 404 bilingüe
- Accesibilidad: link para saltar al contenido, navegación por teclado y Lighthouse 100/100/100/100

## Cómo correrlo

Necesitás Node 22.23.4 o superior.

```bash
npm install
npm run dev           # servidor local en http://localhost:4321
npm run build         # genera el sitio en dist/
npm run preview       # sirve el build para probarlo
npm run check         # verificación de tipos (astro check)
npm run format        # formatea el código con Prettier
npm run format:check  # solo verifica el formato (lo usa el CI)
```

El workflow de GitHub Actions (`.github/workflows/ci.yml`) corre `format:check`, `check` y `build` en cada push.

## Estructura

```
src/
├── assets/
│   ├── profile/      # tu foto (un solo archivo)
│   └── projects/     # capturas de los proyectos
├── components/       # Header, Hero, About, Experience, Contact, ProjectCard, Footer...
├── content/projects/ # un .md por proyecto, dentro de es/ y en/
├── data/profile.ts   # datos personales (rol, bio, stack, experiencia, contacto)
├── i18n/ui.ts        # textos de la interfaz en cada idioma
├── layouts/          # layout base con meta tags y SEO
├── lib/              # utilidades para los proyectos
└── pages/            # rutas: /[lang]/, /[lang]/projects/, 404, robots.txt
public/               # favicon, imagen de vista previa, CV y archivos estáticos
netlify.toml          # build, redirección de idioma y cabeceras de seguridad
```

## Cómo cargar contenido

**Datos personales:** editá `src/data/profile.ts` (un bloque por idioma). Cuando estén los reales, poné `isPlaceholder = false` para quitar las etiquetas de ejemplo. Lo que dejes vacío o borres (experiencia, stack, medios de contacto) simplemente no se muestra.

**Foto:** poné un solo archivo (jpg, png o webp) en `src/assets/profile/`. Se redimensiona y optimiza solo, no hace falta achicarla antes. Sin foto se muestran las iniciales.

**CV:** copiá los PDF a `public/` (por ejemplo `public/cv-es.pdf` y `public/cv-en.pdf`) y poné sus rutas en `cv` dentro de `profile.ts`. Sin CV, el botón queda deshabilitado.

**Un proyecto nuevo:** copiá uno de los archivos de `src/content/projects/es/`, cambiá los datos y repetí en `en/` con el mismo nombre de archivo. El nombre del archivo es la URL del proyecto (`/es/projects/<nombre>/`), así que usá siempre nombres en inglés y con guiones, ej. `mi-proyecto.md`: las URLs solo cambian de idioma en el prefijo `/es/` o `/en/`.

```md
---
title: 'Nombre del proyecto'
description: 'Qué hace, en una o dos líneas'
tech: ['Python', 'FastAPI']
image: '../../../assets/projects/mi-proyecto.png' # opcional: captura en src/assets/projects/
imageAlt: 'Qué se ve en la captura' # opcional: si falta se usa el título
date: 2026-11-19
repo: 'https://github.com/usuario/proyecto'
demo: 'https://...' # opcional
featured: true # true = aparece en la home
---

Texto más largo del proyecto en Markdown.
```

La captura del proyecto también se usa como vista previa al compartir su link. Conviene que sea apaisada (16:9).

**Textos de la interfaz:** `src/i18n/ui.ts`. Cada texto nuevo se agrega en `es` y en `en`.

## Antes de publicar

- Cambiar `site` en `astro.config.mjs` por la URL real del sitio.
- Reemplazar `public/og-default.png` por la imagen de vista previa definitiva.
- Revisar que no quede ningún texto de ejemplo (`isPlaceholder`, `placeholder: true` y los proyectos de muestra).
- Borrar `src/assets/projects/ejemplo.png` cuando ya no lo use ningún proyecto.
