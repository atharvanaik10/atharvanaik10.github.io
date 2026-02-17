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

Planned approach to enable a blog (options):

- Minimal: render a simple list with hardcoded links and copy post content into Svelte components.
- Markdown-based: integrate a Markdown pipeline (e.g., `mdsvex` or `markdown-it`) to render posts from `src/content/glp`.

Suggested next step (recommended):

1. Install `mdsvex` and configure it with Svelte + Vite.
2. Convert the GLP Markdown files to `.svx` or keep as `.md` with `mdsvex` support.
3. Create a `Blog` section (or route) that lists posts and renders them.

Note: The top nav contains a temporary "Blog" anchor and placeholder section.

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

Edit `src/App.svelte` to update:

- Experience entries
- Projects
- About bio
- Contact links
 - Blog content in `src/content/glp` (optional)
