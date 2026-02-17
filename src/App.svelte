<script>
  import { posts } from './lib/blog.js';
  const experiences = [
    {
      company: 'Cboe Global Markets',
      role: 'Machine Learning Intern',
      location: 'Chicago, IL',
      period: 'Jun 2025 — Aug 2025',
      points: [
        'Architected a modular observability and monitoring package for in-house LLM agents in Dockerized environments.',
        'Improved latency visibility by integrating Prometheus metrics and Jaeger tracing across 15,000+ API and chat requests daily.',
        'Built a Streamlit workflow for prompt versioning and LLM-as-a-Judge evaluations to improve reliability and compliance.'
      ]
    },
    {
      company: 'Ameren',
      role: 'Machine Learning Intern',
      location: 'Champaign, IL',
      period: 'May 2023 — Dec 2024',
      points: [
        'Built supervised and unsupervised forecasting systems for workforce planning with significantly improved retirement prediction accuracy.',
        'Designed natural gas demand forecasting pipelines (Regression, ARIMA, Prophet), enabling ~$300K annual savings.',
        'Scaled ML pipelines in PySpark + Databricks to process 20+ years of hourly usage data for 800,000 customers.'
      ]
    }
  ];

  const projects = [
    {
      name: 'GeoPi',
      description: 'A Cesium + Svelte data warehouse for Raspberry Pi-based GNSS systems.',
      tech: ['Svelte', 'Cesium', 'Raspberry Pi']
    },
    {
      name: 'Dagger',
      description: 'A repository dependency graph and cycle detection tool in C++ using GraphViz and Dirent.',
      tech: ['C++', 'GraphViz', 'Systems']
    },
    {
      name: 'OccuPi',
      description: 'A real-time and forecasted room occupancy system using Raspberry Pi edge devices and zero-shot learning.',
      tech: ['Python', 'Edge AI', 'IoT']
    }
  ];
</script>

<div class="min-h-screen bg-gradient-to-b from-[#030814] via-midnight to-[#02050D]">
  <header class="sticky top-0 z-50 border-b border-white/10 bg-[#020915]/80 backdrop-blur-lg">
    <nav class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
      <a href="#top" class="text-sm font-semibold tracking-widest text-white/90">ATHARVA NAIK</a>
      <div class="hidden gap-6 text-sm text-white/80 md:flex">
        <a href="#about" class="hover:text-electric transition">About</a>
        <a href="#experience" class="hover:text-electric transition">Experience</a>
        <a href="#projects" class="hover:text-electric transition">Projects</a>
        <a href="#blog" class="hover:text-electric transition">Blog</a>
        <a href="#contact" class="hover:text-electric transition">Contact</a>
      </div>
    </nav>
  </header>

  <main id="top" class="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pt-20">
    <section class="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl md:p-14">
      <div class="absolute -right-16 -top-12 h-64 w-64 rounded-full bg-electric/20 blur-3xl"></div>
      <div class="absolute -left-16 bottom-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl"></div>
      <p class="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-electric">Graduate Computer Science Student</p>
      <h1 class="max-w-3xl text-4xl font-black leading-tight md:text-6xl">Designing intelligent systems with clean engineering and measurable impact.</h1>
      <p class="mt-6 max-w-3xl text-lg text-white/80">
        I’m Atharva Naik, an M.S. Computer Science student at UIUC focused on machine learning systems, observability for LLM applications, and practical AI for high-impact domains.
      </p>
      <div class="mt-8 flex flex-wrap gap-4">
        <a href="#projects" class="rounded-xl bg-electric px-5 py-3 font-semibold text-black shadow-glow transition hover:scale-105">View Projects</a>
        <a href="#contact" class="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-electric hover:text-electric">Let’s Connect</a>
      </div>
    </section>

    <section id="about" class="pt-20">
      <h2 class="section-heading">About</h2>
      <div class="glass-card p-8">
        <p class="text-white/85 leading-relaxed">
          Currently pursuing an M.S. in Computer Science at the University of Illinois Urbana-Champaign (Aug 2024 – May 2026), after completing a B.S. in Mathematics & Computer Science with Highest Distinction.
          I enjoy building reliable ML platforms, researching bias in language models, and combining mathematical rigor with product-minded execution.
        </p>
        <div class="mt-6 grid gap-3 text-sm text-white/75 md:grid-cols-2">
          <div class="rounded-xl border border-white/10 p-4">Teaching Assistant: Artificial Intelligence, Discrete Mathematics, Compilers</div>
          <div class="rounded-xl border border-white/10 p-4">Skills: Java, C++, Python, Spark, FastAPI, React, Swift, Google Cloud</div>
        </div>
      </div>
    </section>

    <section id="experience" class="pt-20">
      <h2 class="section-heading">Experience</h2>
      <div class="space-y-5">
        {#each experiences as exp}
          <article class="glass-card animate-float p-7">
            <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
              <h3 class="text-2xl font-bold">{exp.company}</h3>
              <p class="text-sm text-electric">{exp.period}</p>
            </div>
            <p class="mt-1 text-white/80">{exp.role} • {exp.location}</p>
            <ul class="mt-4 list-disc space-y-2 pl-5 text-white/80">
              {#each exp.points as point}
                <li>{point}</li>
              {/each}
            </ul>
          </article>
        {/each}
      </div>
    </section>

    <section id="projects" class="pt-20">
      <h2 class="section-heading">Projects</h2>
      <div class="grid gap-5 md:grid-cols-3">
        {#each projects as project}
          <article class="glass-card p-6 transition duration-300 hover:-translate-y-1 hover:border-electric/50">
            <h3 class="text-xl font-bold">{project.name}</h3>
            <p class="mt-3 text-sm text-white/80">{project.description}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              {#each project.tech as t}
                <span class="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">{t}</span>
              {/each}
            </div>
          </article>
        {/each}
      </div>
    </section>

    <section id="blog" class="pt-20">
      <h2 class="section-heading">Blog</h2>
      <div class="grid gap-5 md:grid-cols-3">
        {#each posts as post}
          <article class="glass-card p-6 transition duration-300 hover:-translate-y-1 hover:border-electric/50">
            <h3 class="text-xl font-bold">{post.title}</h3>
            {#if post.draft}
              <span class="mt-2 inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-300 ring-1 ring-inset ring-yellow-400/20">Draft</span>
            {/if}
            <a href={"#post-" + post.slug} class="mt-4 inline-block text-sm text-electric hover:underline">Read</a>
          </article>
        {/each}
      </div>

      {#each posts as post}
        <section id={"post-" + post.slug} class="mt-10">
          <article class="glass-card p-8 prose-lite">
            <h2 class="text-2xl font-bold mb-4">{post.title}</h2>
            {@html post.html}
          </article>
        </section>
      {/each}
    </section>

    <section id="contact" class="pt-20">
      <h2 class="section-heading">Contact</h2>
      <div class="glass-card p-8">
        <p class="text-white/80">Open to ML engineering, AI research, and systems opportunities.</p>
        <div class="mt-6 flex flex-wrap gap-4">
          <a
            class="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium transition hover:border-electric hover:text-electric"
            href="https://github.com/atharvanaik10"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.6.3 2.9.2 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
            GitHub
          </a>
          <a
            class="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium transition hover:border-electric hover:text-electric"
            href="https://www.linkedin.com/in/atharvanaik10"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true"><path d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3.1-1.9-3.1s-2.2 1.5-2.2 3v5.7H9.1V9h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.4 2.5 4.4 5.7v6.1ZM5.1 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM6.9 20.5H3.3V9h3.6v11.5Z"/></svg>
            LinkedIn
          </a>
          <a class="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-medium transition hover:border-electric hover:text-electric" href="mailto:atharvanaik10@gmail.com">
            <svg viewBox="0 0 24 24" class="h-5 w-5 fill-current" aria-hidden="true"><path d="M2 5.5A2.5 2.5 0 0 1 4.5 3h15A2.5 2.5 0 0 1 22 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 18.5v-13Zm2.1-.5L12 10.3 19.9 5H4.1Zm15.9 2.2-7.4 5a1 1 0 0 1-1.2 0l-7.4-5v11.3c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5V7.2Z"/></svg>
            atharvanaik10@gmail.com
          </a>
        </div>
      </div>
    </section>
  </main>
</div>
