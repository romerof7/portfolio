# Portfolio · Francisco Romero

My personal portfolio: a static, bilingual (Spanish and English) website that showcases my projects, my stack and my experience.

Live site: https://francisco-romero.vercel.app/en/

## Stack

- [Astro](https://astro.build) (static site, no backend)
- [Tailwind CSS](https://tailwindcss.com) with light and dark mode
- TypeScript
- Astro content collections for the projects (one Markdown file per project and language)
- Prettier, `astro check` and GitHub Actions to keep the code healthy

## Features

- Spanish (`/es/`) and English (`/en/`), with a switcher that goes to the same page in the other language
- Light and dark mode that follows the system preference and remembers the choice
- Projects as Markdown files, with optimized covers, a list, a detail page, an image gallery and an optional demo video
- SEO: Open Graph tags, canonical URLs, `hreflang`, sitemap, `robots.txt` and structured data
- Bilingual 404 page
- Accessibility: skip link, keyboard navigation, accessible image gallery and reduced-motion support

## Running it

Requires Node 22.23.4 or newer.

```bash
npm install
npm run dev           # local server at http://localhost:4321
npm run build         # builds the site into dist/
npm run preview       # serves the build to try it out
npm run check         # type checking (astro check)
npm run format        # formats the code with Prettier
npm run format:check  # only checks the formatting (used by CI)
```

The GitHub Actions workflow (`.github/workflows/ci.yml`) runs `format:check`, `check` and `build` on every push.

## Structure

```
src/
├── assets/
│   ├── profile/      # profile photo (a single file)
│   └── projects/     # project covers and images
├── components/       # Header, Hero, About, Experience, Contact, ProjectCard, Gallery, Footer...
├── content/projects/ # one .md per project, inside es/ and en/
├── data/profile.ts   # personal data (role, bio, stack, experience, contact)
├── i18n/ui.ts        # interface texts in each language
├── layouts/          # base layout with meta tags and SEO
├── lib/              # project helpers
└── pages/            # routes: /[lang]/, /[lang]/projects/, 404, robots.txt
public/               # favicon, share preview image, demo videos, CV and static files
vercel.json           # language redirect, security headers and cache rules
```

## Editing the content

**Personal data:** edit `src/data/profile.ts` (one block per language). Anything you leave empty or delete (experience, stack, contact methods) is simply not shown. While `isPlaceholder` is `true`, example labels are displayed (it is `false` now). Quick facts (location, age, languages, certifications) live in `facts`; the age is written by hand, so update it on your birthday.

**Photo:** put a single file (jpg, png or webp) in `src/assets/profile/`. It is resized and optimized automatically. Without a photo, the initials are shown.

**CV:** not published yet. To enable it, copy the PDFs to `public/` (for example `public/cv-es.pdf` and `public/cv-en.pdf`) and set their paths in `cv` inside `profile.ts`. The download buttons (hero and header) then use the PDF of the current language. Until then the hero shows a "coming soon" label and the header button is hidden.

**A new project:** copy one of the files in `src/content/projects/es/`, change the data and repeat in `en/` with the same file name. The file name is the project URL (`/es/projects/<name>/`), so always use English names with hyphens, e.g. `my-project.md`: URLs only change language in the `/es/` or `/en/` prefix.

```md
---
title: 'Project name'
description: 'What it does, in one or two lines'
tech: ['Python', 'FastAPI']
kind: 'University project' # optional: short label shown on the card
image: '../../../assets/projects/my-project.png' # optional: cover in src/assets/projects/
imageAlt: 'What the cover shows' # optional: falls back to the title
gallery: # optional: several images with arrows on the project page
  - image: '../../../assets/projects/my-project.png'
    alt: 'What the image shows'
video: '/videos/my-project.mp4' # optional: short demo in public/videos/
date: 2026-11-19
priority: 1 # optional: manual order, 1 comes first
repo: 'https://github.com/user/project'
demo: 'https://...' # optional
featured: true # true = shown on the home page
---

Longer description of the project, in Markdown.
```

The project cover is also used as the share preview for its link, so a 16:9 image works best.

**Interface texts:** `src/i18n/ui.ts`. Every new text is added in both `es` and `en`.

## Deploying

The site is deployed on Vercel; every push to `main` redeploys it. The language redirect, the security headers and the cache rules live in `vercel.json`. The project name must match `site` in `astro.config.mjs`.

Before going live, check that:

- `site` in `astro.config.mjs` is the real URL of the site.
- `public/og-default.png` is the final share preview image.
- No example text is left (`isPlaceholder`, `placeholder: true`).
