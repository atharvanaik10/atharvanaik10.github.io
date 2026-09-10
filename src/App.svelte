<script>
  import Router from './lib/Router.svelte'
</script>

<div class="site-shell">
  <header class="site-header">
    <nav class="site-nav" aria-label="Primary navigation">
      <a href="#/" class="wordmark type-subtitle">Atharva Naik</a>
      <div class="nav-links">
        <a href="#about">About</a>
        <a href="#research">Research</a>
        <a href="#experience">
          Experience
        </a>
        <a href="#projects">Projects</a>
        <!-- <a href="#/blog" class="hover:text-primary transition">Blog</a> -->
      </div>
    </nav>
  </header>

  <main class="site-main">
    <Router />
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <span>© {new Date().getFullYear()} Atharva Naik</span>
      <span>
        Made with
        <a
          href="https://svelte.dev"
          target="_blank"
          rel="noreferrer"
          class="footer-link">
          Svelte
        </a>
        and
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          class="footer-link">
          Tailwind
        </a>
      </span>
    </div>
  </footer>
</div>
