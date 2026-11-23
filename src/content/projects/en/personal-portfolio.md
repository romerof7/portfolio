---
title: 'Personal portfolio'
description: 'Bilingual website (Spanish and English) to showcase my projects and experience.'
tech: ['Astro', 'Tailwind CSS', 'TypeScript']
image: '../../../assets/projects/personal-portfolio.png'
imageAlt: 'Home page of my portfolio in dark mode, with my name, my role and the View projects, Contact me and CV buttons'
date: 2026-11-19
repo: 'https://github.com/romerof7/portfolio'
---

## What it is about

My personal portfolio: a static, bilingual (Spanish and English) website where I showcase my projects, my stack and my experience. It has light and dark modes, a detail page for each project, and is optimized for SEO and accessibility.

## Technical decisions

- **Astro** to generate a fast static site with no backend.
- **Tailwind CSS** for the design, with light and dark modes.
- **Content collections:** each project is one Markdown file per language, so adding a new one does not require touching the code.
- **Automated quality:** Prettier, `astro check` and a GitHub Actions workflow that runs on every push.

## What I learned

- Internationalization with per-language routes, `hreflang` tags and canonical URLs.
- Accessibility and SEO: keyboard navigation, structured data and share previews.
- Automating checks with continuous integration.
