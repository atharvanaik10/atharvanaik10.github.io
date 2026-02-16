# Atharva Naik Personal Website

A simple, modern personal website built with **Svelte + Tailwind CSS**, designed with inspiration from Apple/Notion/Robinhood aesthetics and midnight-blue + neon accents.

## Sections included

- About
- Experience
- Projects
- Contact (with polished icon links for GitHub, LinkedIn, and Email)

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

