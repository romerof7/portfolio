# Portfolio · Francisco Romero

Mi portfolio personal: un sitio estático y bilingüe (español e inglés) para mostrar mis proyectos, mi stack y mi experiencia.

> **Estado:** en construcción. La estructura y el diseño están listos; el contenido todavía es de ejemplo y está marcado con etiquetas visibles en el sitio.

## Stack

- [Astro](https://astro.build) (sitio estático, sin backend)
- [Tailwind CSS](https://tailwindcss.com) con modo claro y oscuro
- TypeScript
- Content collections de Astro para los proyectos (un archivo Markdown por proyecto)

## Características

- Español (`/es/`) e inglés (`/en/`), con selector que lleva a la misma página en el otro idioma
- Modo claro y oscuro, que respeta la preferencia del sistema y recuerda la elección
- Proyectos como archivos Markdown, con listado y página de detalle
- SEO: etiquetas Open Graph, URLs canónicas, `hreflang`, sitemap, `robots.txt` y datos estructurados
- Página 404 bilingüe

## Cómo correrlo

Necesitás Node 22.23.4 o superior.

```bash
npm install
npm run dev      # servidor local en http://localhost:4321
npm run build    # genera el sitio en dist/
npm run preview  # sirve el build para probarlo
```

## Estructura

```
src/
├── components/       # Header, Hero, About, Experience, Contact, ProjectCard, Footer...
├── content/projects/ # un .md por proyecto, dentro de es/ y en/
├── data/profile.ts   # datos personales (rol, bio, stack, experiencia, contacto)
├── i18n/ui.ts        # textos de la interfaz en cada idioma
├── layouts/          # layout base con meta tags y SEO
├── lib/              # utilidades para los proyectos
└── pages/            # rutas: /[lang]/, /[lang]/projects/, 404, robots.txt
public/               # favicon, imagen de vista previa y archivos estáticos
```

## Cómo cargar contenido

**Datos personales:** editá `src/data/profile.ts` (un bloque por idioma). Cuando estén los reales, poné `isPlaceholder = false` para quitar las etiquetas de ejemplo. La foto y el CV van en `public/`.

**Un proyecto nuevo:** copiá uno de los archivos de `src/content/projects/es/`, cambiá los datos y repetí en `en/` con el mismo nombre de archivo.

```md
---
title: "Nombre del proyecto"
description: "Qué hace, en una o dos líneas"
tech: ["Python", "FastAPI"]
date: 2026-11-19
repo: "https://github.com/usuario/proyecto"
demo: "https://..."        # opcional
featured: true             # true = aparece en la home
---
Texto más largo del proyecto en Markdown.
```

**Textos de la interfaz:** `src/i18n/ui.ts`. Cada texto nuevo se agrega en `es` y en `en`.

## Antes de publicar

- Cambiar `site` en `astro.config.mjs` por la URL real del sitio.
- Reemplazar `public/og-default.png` por la imagen de vista previa definitiva.
- Revisar que no quede ningún texto de ejemplo.
