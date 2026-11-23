---
title: 'Portfolio personal'
description: 'Sitio web bilingüe (español e inglés) para mostrar mis proyectos y mi experiencia.'
tech: ['Astro', 'Tailwind CSS', 'TypeScript']
image: '../../../assets/projects/personal-portfolio.png'
imageAlt: 'Página de inicio de mi portfolio en modo oscuro, con mi nombre, mi rol y los botones Ver proyectos, Contactame y CV'
date: 2026-11-19
repo: 'https://github.com/romerof7/portfolio'
---

## De qué se trata

Mi portfolio personal: un sitio estático y bilingüe (español e inglés) donde muestro mis proyectos, mi stack y mi experiencia. Tiene modo claro y oscuro, una página de detalle por proyecto y está optimizado para SEO y accesibilidad.

## Decisiones técnicas

- **Astro** para generar un sitio estático, rápido y sin backend.
- **Tailwind CSS** para el diseño, con modo claro y oscuro.
- **Content collections:** cada proyecto es un archivo Markdown por idioma, así sumar uno nuevo no requiere tocar el código.
- **Calidad automatizada:** Prettier, `astro check` y un workflow de GitHub Actions que corre en cada push.

## Qué aprendí

- Internacionalización con rutas por idioma, etiquetas `hreflang` y URLs canónicas.
- Accesibilidad y SEO: navegación por teclado, datos estructurados y vistas previas al compartir.
- Automatizar chequeos con integración continua.
