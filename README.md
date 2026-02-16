# atharvanaik10.github.io

Personal portfolio website built with **Svelte + Tailwind CSS**.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to GitHub Pages

This repo is configured with a GitHub Actions workflow that:
1. Installs dependencies.
2. Builds with Vite.
3. Deploys `dist/` to GitHub Pages.

### One-time GitHub settings

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, set source to **GitHub Actions**.
3. Push to `main` (or merge a PR into `main`) to publish.

The site uses `base: '/atharvanaik10.github.io/'` in `vite.config.js` for project-page hosting.
