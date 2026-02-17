# Atharva Naik Personal Website

A simple, modern personal website built with **Svelte + Tailwind CSS**, designed with inspiration from Apple/Notion/Robinhood aesthetics and midnight-blue + neon accents.

## Sections included

- About
- Experience
- Projects
- Contact (with polished icon links for GitHub, LinkedIn, and Email)

## Blog content (from GLP ePortfolio)

Hugo has been removed from this repo. The GLP ePortfolio content has been preserved for a future blog section:

- Markdown posts: `src/content/glp/*.md`
- Linked assets (images, PDFs): `public/` (same filenames as before, e.g. `/appalachia_1.JPG`)
  
Renamed to: `src/content/blog/*.md` (all preserved posts moved).

Navigation:

- Blog index: `#/blog`
- Post page: `#/blog/<slug>`

Implementation details:

- Minimal Markdown pipeline (no extra deps) in `src/lib` renders headings, lists, links, images, and code blocks.
- Hash-based routing via `src/lib/Router.svelte` serves separate pages for Home, Blog, and Post.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploying to GitHub Pages

This repository is configured with a GitHub Action (`.github/workflows/gh-pages.yml`) that:

1. Installs dependencies
2. Builds the site via Vite
3. Deploys `dist/` to GitHub Pages using the official Pages workflow

### One-time GitHub setup

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main`; the action will deploy automatically.

Your site URL should be:

- `https://atharvanaik10.github.io/`

## Customizing content

Edit `src/pages/Home.svelte` to update:

- Experience entries
- Projects
- About bio
- Contact links

Blog content lives in `src/content/glp` (edit Markdown files). The Blog index and Post pages are in `src/pages/BlogIndex.svelte` and `src/pages/Post.svelte`.

## Content-driven Experience and Projects

Add entries by creating Markdown files in:

- Experience: `src/content/experience/*.md`
- Projects: `src/content/projects/*.md`

Experience format (frontmatter + bullet list):

---
company: 'Company Name'
role: 'Job Title'
location: 'City, State'
period: 'Mon YYYY — Mon YYYY'
order: 1
---

- Impact bullet 1
- Impact bullet 2

Project format:

---
name: 'Project Name'
github: 'https://github.com/username/repo'
image: '/path-in-public/example.png'
tech: ['Tech1', 'Tech2']
order: 1
---

Short description paragraph.

Templates are available in `templates/experience-template.md` and `templates/project-template.md`.

Notes:
- Images referenced by `image` should live under `public/`.
- Experiences and projects are sorted by `order` (ascending).
