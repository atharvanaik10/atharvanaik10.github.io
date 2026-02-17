<script>
  import { experiences } from '../lib/experience.js'
  import { projects } from '../lib/projects.js'
  import ExperienceItem from '../components/ExperienceItem.svelte'
  import ProjectCard from '../components/ProjectCard.svelte'
</script>

<section
  class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5
  p-8 shadow-2xl md:p-14">
  <div
    class="absolute -right-16 -top-12 h-64 w-64 rounded-full bg-electric/20
    blur-3xl" />
  <div
    class="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-cyan-400/20
    blur-3xl" />

  <div class="relative z-10 grid items-center gap-10 md:grid-cols-2">
    <div>
      <h1 class="max-w-3xl text-4xl font-black leading-tight md:text-6xl">
        Hello, I'm Atharva.
      </h1>
      <p class="mt-6 max-w-3xl text-lg text-white/80">
        I’m a second year M.S. student studying Computer Science at the
        <a
          href="https://cd.illinois.edu"
          target="_blank"
          rel="noreferrer"
          class="text-electric hover:underline">
          University of Illinois Urbana-Champaign
        </a>
      </p>
      <div class="mt-8 flex flex-wrap gap-4">
        <a
          href="#projects"
          class="rounded-xl bg-electric px-5 py-3 font-semibold text-black
          shadow-glow transition hover:scale-105">
          View Projects
        </a>
        <a
          href="#contact"
          class="rounded-xl border border-white/20 px-5 py-3 font-semibold
          text-white transition hover:border-electric hover:text-electric">
          Let’s Connect
        </a>
      </div>
    </div>
    <div class="hidden md:block">
      <div
        class="w-full aspect-square rounded-2xl overflow-hidden border
        border-white/15 shadow-2xl">
        <img
          src="/headshot.jpg"
          alt="Atharva Naik headshot"
          class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</section>

<section id="about" class="pt-20">
  <h2 class="section-heading">About</h2>
  <div class="glass-card p-8">
    <p class="text-white/85 leading-relaxed">
      Currently pursuing an M.S. in Computer Science at the University of
      Illinois Urbana-Champaign (Aug 2024 – May 2026), after completing a B.S.
      in Mathematics & Computer Science with Highest Distinction. I enjoy
      building reliable ML platforms, researching bias in language models, and
      combining mathematical rigor with product-minded execution.
    </p>
    <div class="mt-6 grid gap-3 text-sm text-white/75 md:grid-cols-2">
      <div class="rounded-xl border border-white/10 p-4">
        Teaching Assistant: Artificial Intelligence, Discrete Mathematics,
        Compilers
      </div>
      <div class="rounded-xl border border-white/10 p-4">
        Skills: Java, C++, Python, Spark, FastAPI, React, Swift, Google Cloud
      </div>
    </div>
  </div>
</section>

<section id="experience" class="pt-20">
  <h2 class="section-heading">Experience</h2>
  <div class="space-y-5">
    {#each experiences as exp}
      <ExperienceItem {exp} />
    {/each}
  </div>
</section>

<section id="projects" class="pt-20">
  <h2 class="section-heading">Projects</h2>
  <div class="grid gap-5 md:grid-cols-3">
    {#each projects as project}
      <ProjectCard {project} />
    {/each}
  </div>
</section>

<section id="contact" class="pt-20">
  <h2 class="section-heading">Contact</h2>
  <div class="glass-card p-8">
    <p class="text-white/80">
      Open to ML engineering, AI research, and systems opportunities.
    </p>
    <div class="mt-6 flex flex-wrap gap-4">
      <a
        class="inline-flex items-center gap-2 rounded-xl border border-white/15
        px-4 py-3 text-sm font-medium transition hover:border-electric
        hover:text-electric"
        href="https://github.com/atharvanaik10"
        target="_blank"
        rel="noreferrer">
        <svg
          viewBox="0 0 24 24"
          class="h-5 w-5 fill-current"
          aria-hidden="true">
          <path
            d="M12 .5A12 12 0 0 0 8.2
            23.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8
            1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1
            .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4
            1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2
            0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.6.3 2.9.2 3.2.8.9 1.2 2 1.2 3.3 0
            4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12
            .5Z" />
        </svg>
        GitHub
      </a>
      <a
        class="inline-flex items-center gap-2 rounded-xl border border-white/15
        px-4 py-3 text-sm font-medium transition hover:border-electric
        hover:text-electric"
        href="https://www.linkedin.com/in/atharvanaik10"
        target="_blank"
        rel="noreferrer">
        <svg
          viewBox="0 0 24 24"
          class="h-5 w-5 fill-current"
          aria-hidden="true">
          <path
            d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2
            3v5.7H9.1V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.4 2.5 4.4
            5.7v6.1ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM6.9
            20.5H3.3V9h3.6v11.5Z" />
        </svg>
        LinkedIn
      </a>
      <a
        class="inline-flex items-center gap-2 rounded-xl border border-white/15
        px-4 py-3 text-sm font-medium transition hover:border-electric
        hover:text-electric"
        href="mailto:atharvanaik10@gmail.com">
        <svg
          viewBox="0 0 24 24"
          class="h-5 w-5 fill-current"
          aria-hidden="true">
          <path
            d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0
            1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.1-.5L12 10.3 19.9
            5H4.1Zm15.9 2.2-7.4 5a1 1 0 0 1-1.2 0l-7.4-5v11.3c0 .3.2.5.5.5h15c.3
            0 .5-.2.5-.5V7.2Z" />
        </svg>
        atharvanaik10@gmail.com
      </a>
    </div>
  </div>
</section>
