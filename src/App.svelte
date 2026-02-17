<script>
  import Router from './lib/Router.svelte'
</script>

<div
  class="min-h-screen bg-gradient-to-b from-[#030814] via-secondary to-[#02050D]">
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-[#020915]/80
    backdrop-blur-lg">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#/" class="font-bold text-white/90">Atharva Naik</a>
      <div class="hidden gap-6 text-sm text-white/80 md:flex">
        <a href="#about" class="hover:text-primary transition">About</a>
        <a href="#research" class="hover:text-primary transition">Research</a>
        <a href="#experience" class="hover:text-primary transition">
          Experience
        </a>
        <a href="#projects" class="hover:text-primary transition">Projects</a>
        <!-- <a href="#/blog" class="hover:text-primary transition">Blog</a> -->
      </div>
    </nav>
  </header>

  <main class="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
    <Router />
  </main>

  <footer class="border-t border-white/10 bg-[#020915]/80 backdrop-blur-lg">
    <div
      class="mx-auto flex max-w-6xl items-center justify-between px-6 py-6
      text-sm text-white/70">
      <span>© {new Date().getFullYear()} Atharva Naik</span>
      <span>
        Made with
        <a
          href="https://svelte.dev"
          target="_blank"
          rel="noreferrer"
          class="text-primary hover:underline">
          Svelte
        </a>
        and
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          class="text-primary hover:underline">
          Tailwind
        </a>
      </span>
    </div>
  </footer>
</div>
