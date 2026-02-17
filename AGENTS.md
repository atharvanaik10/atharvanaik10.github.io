# Project Overview and Guide

This repo hosts my personal website built with Svelte + Tailwind. It previously used Hugo for a GLP ePortfolio; that content is preserved and now powers a simple blog section.

## Overview

- Stack: Svelte 4, Vite 5, Tailwind 3
- Content: Markdown files under `src/content/glp` with images/PDFs in `public/`
- Build/Deploy: Vite static build deployed via GitHub Pages Action

## Design Inspirations

- Clean, high-contrast UI (Apple/Notion/Robinhood influences)
- Midnight blue backgrounds with neon electric accents
- Subtle glassmorphism: translucent surfaces with light borders/shadows
- Crisp typography and generous spacing for readability

## Blog Architecture

- Posts are raw Markdown loaded via `import.meta.glob` and rendered through a small Markdown renderer.
- Frontmatter supports minimal keys: `title`, `draft`.
- Post listing renders title + draft badge; full content appears below with anchors for deep links.

### Why no extra dependencies?

The current renderer covers headings, lists, paragraphs, links, and images which is sufficient for the preserved GLP content. We can switch to `mdsvex` or `markdown-it` if features grow (code highlighting, tables, etc.).

## Best Practices

- Content management:
  - Keep posts in `src/content/glp` as `.md` with a `title` in frontmatter.
  - Store large assets in `public/` and link via absolute `/path.ext`.

- Styling:
  - Use `glass-card` and `prose-lite` for content blocks.
  - Prefer semantic headings (`##`) and short paragraphs for readability.

- Performance:
  - Avoid oversized images; compress before adding to `public/`.
  - Keep the home page light; heavy embeds should be behind links.

- Deployment:
  - Verify `npm run build` locally before pushing to `main`.
  - GitHub Actions deploys `dist/` automatically to Pages.

## Future Enhancements

- Swap minimal renderer for `mdsvex` to author posts as `.svx` and get Svelte in Markdown.
- Add tags/dates to frontmatter and a filterable list.
- Integrate Tailwind Typography plugin for richer prose styles.
- Add basic hash-based routing for dedicated post pages.

