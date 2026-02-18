# Atharva Naik Personal Website

A simple, modern personal website built with **Svelte + Tailwind CSS**, designed with inspiration from Apple/Notion/Robinhood aesthetics and midnight-blue + neon accents.

## Sections included

- About
- Experience
- Projects
- Contact (with polished icon links for GitHub, LinkedIn, and Email)

## Blog content (from GLP ePortfolio)

Hugo has been removed from this repo. The GLP ePortfolio content has been preserved for a future blog section:

- Markdown posts: `src/content/blog/*.md`
- Linked assets (images, PDFs): `public/` (same filenames as before, e.g. `/appalachia_1.JPG`)

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

## Analytics (Google Analytics 4)

This site now includes an optional analytics layer that works on GitHub Pages static hosting:

- Tracks page views for hash routes (`#/`, `#/blog`, `#/blog/<slug>`)
- Tracks clicks on important nav/contact/blog links via `data-analytics-id`
- Tracks section views (`hero`, `research`, `experience`, `projects`, blog pages) with `IntersectionObserver`

### Setup

1. Create a GA4 property and Web Data Stream in Google Analytics.
2. For local development, create a `.env` file (not committed) using `.env.example`:

```bash
cp .env.example .env
# then edit .env and set your real ID
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

3. For GitHub Pages deployment, set the same value as a GitHub Actions secret:
   - Go to **Repo Settings → Secrets and variables → Actions**
   - Click **New repository secret**
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: your real GA4 Measurement ID (example: `G-AB12CD34EF`)

4. Push to `main` (or re-run the Pages workflow). The workflow injects `secrets.VITE_GA_MEASUREMENT_ID` into the Vite build step.

If `VITE_GA_MEASUREMENT_ID` is not set, analytics stays disabled automatically.

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

Blog content lives in `src/content/blog` (edit Markdown files). The Blog index and Post pages are in `src/pages/BlogIndex.svelte` and `src/pages/Post.svelte`.

## Content-driven Experience and Projects (single files)

Add entries by editing a single Markdown file for each section:

- Experience: `src/content/experience.md`
- Projects: `src/content/projects.md`

Experience entry format:

### Company Name
Role: Job Title
Location: City, State
Period: Mon YYYY — Mon YYYY
Order: 1

- Impact bullet 1
- Impact bullet 2

Projects entry format:

### Project Name
GitHub: https://github.com/username/repo
Image: /path-in-public/example.png
Tech: Tech1, Tech2
Order: 1

Short description paragraph.

Templates are available in `templates/experience-single.md` and `templates/projects-single.md`.

Notes:
- Images referenced by `Image:` should live under `public/`.
- Experiences and projects are sorted by `Order` (ascending).
