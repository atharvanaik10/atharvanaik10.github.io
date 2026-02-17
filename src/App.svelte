<script>
  import Router from './lib/Router.svelte'
</script>

<div
  class="min-h-screen bg-gradient-to-b from-[#030814] via-midnight to-[#02050D]">
  <header
    class="sticky top-0 z-50 border-b border-white/10 bg-[#020915]/80
    backdrop-blur-lg">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#/" class="text-sm font-semibold tracking-widest text-white/90">
        ATHARVA NAIK
      </a>
      <div class="hidden gap-6 text-sm text-white/80 md:flex">
        <a href="#about" class="hover:text-electric transition">About</a>
        <a href="#research" class="hover:text-electric transition">Research</a>
        <a href="#experience" class="hover:text-electric transition">
          Experience
        </a>
        <a href="#projects" class="hover:text-electric transition">Projects</a>
        <!-- <a href="#/blog" class="hover:text-electric transition">Blog</a> -->
      </div>
    </nav>
  </header>

  <main class="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
    <Router />
  </main>
</div>
