<script>
  const experiences = [
    {
      company: 'Cboe Global Markets',
      role: 'Machine Learning Intern',
      period: 'June 2025 – August 2025',
      highlights: [
        'Architected a modular observability and monitoring package in Docker for in-house LLM agents.',
        'Improved visibility into latency bottlenecks using Prometheus and Jaeger to monitor 15,000+ HTTP API and agent-user chat requests daily.',
        'Built a Streamlit app for prompt versioning and LLM-as-a-Judge evaluation to improve reliability and compliance.'
      ]
    },
    {
      company: 'Ameren',
      role: 'Machine Learning Intern',
      period: 'May 2023 – December 2024',
      highlights: [
        'Built supervised and unsupervised models for workforce planning and retirement forecasting with 3x better accuracy than previous methods.',
        'Improved natural gas forecasting and load balancing using FFT-based K-Means with ARIMA/Prophet, helping reduce vendor costs by $300k.',
        'Deployed ML pipelines in PySpark on Databricks for 20+ years of hourly usage data across 800,000 customers.'
      ]
    }
  ];

  const projects = [
    {
      name: 'GeoPi',
      tech: 'Cesium · Svelte · Raspberry Pi · GNSS',
      summary: 'A geo-analytics data warehouse and visualization tool for Raspberry Pi based GNSS systems.'
    },
    {
      name: 'Dagger',
      tech: 'C++ · GraphViz',
      summary: 'A dependency graph generator with cycle detection for large codebases and systems projects.'
    },
    {
      name: 'OccuPi',
      tech: 'Edge AI · Raspberry Pi · Zero-shot Learning',
      summary: 'Real-time and forecasted room occupancy analytics from edge devices for smarter space planning.'
    }
  ];

  const contacts = [
    {
      label: 'GitHub',
      value: 'atharvanaik10',
      href: 'https://github.com/atharvanaik10',
      icon: 'github'
    },
    {
      label: 'LinkedIn',
      value: 'in/atharvanaik10',
      href: 'https://www.linkedin.com/in/atharvanaik10',
      icon: 'linkedin'
    },
    {
      label: 'Email',
      value: 'atharvanaik10@gmail.com',
      href: 'mailto:atharvanaik10@gmail.com',
      icon: 'mail'
    }
  ];
</script>

<main class="px-6 md:px-10 pb-16">
  <header class="max-w-6xl mx-auto pt-8 md:pt-10 sticky top-4 z-20 fade-in">
    <nav class="glass rounded-2xl px-5 py-3 flex flex-wrap items-center justify-between gap-3">
      <h1 class="text-lg md:text-xl font-bold">Atharva Naik</h1>
      <div class="flex gap-4 text-sm text-slate-300">
        <a href="#about" class="hover:text-white transition">About</a>
        <a href="#experience" class="hover:text-white transition">Experience</a>
        <a href="#projects" class="hover:text-white transition">Projects</a>
        <a href="#contact" class="hover:text-white transition">Contact</a>
      </div>
    </nav>
  </header>

  <section id="about" class="max-w-6xl mx-auto pt-16 md:pt-20 fade-in">
    <div class="glass rounded-3xl p-8 md:p-12 card-hover">
      <p class="uppercase tracking-[0.24em] text-xs text-blue-300 mb-4">Graduate CS Student · UIUC</p>
      <h2 class="text-4xl md:text-6xl font-bold leading-tight text-white max-w-4xl">
        Building intelligent systems with a clean, high-performance product mindset.
      </h2>
      <p class="text-slate-300 text-lg mt-6 max-w-3xl leading-relaxed">
        I’m pursuing an M.S. in Computer Science at the University of Illinois Urbana-Champaign (GPA 3.81), with interests at the intersection of machine learning systems, distributed infrastructure, and product-focused engineering. I’ve worked on real-time observability for LLM agents, large-scale forecasting, and AI research on fairness.
      </p>
      <div class="mt-8 flex flex-wrap gap-3 text-sm">
        <span class="bg-blue-500/15 text-blue-200 px-3 py-1 rounded-full">ML Systems</span>
        <span class="bg-emerald-500/15 text-emerald-200 px-3 py-1 rounded-full">Distributed Computing</span>
        <span class="bg-violet-500/15 text-violet-200 px-3 py-1 rounded-full">AI Research</span>
      </div>
    </div>
  </section>

  <section id="experience" class="max-w-6xl mx-auto pt-16">
    <h3 class="section-title">Experience</h3>
    <div class="grid gap-6">
      {#each experiences as exp}
        <article class="glass rounded-2xl p-6 md:p-7 card-hover fade-in">
          <div class="flex flex-wrap items-baseline justify-between gap-2 mb-3">
            <div>
              <h4 class="text-xl font-bold text-white">{exp.company}</h4>
              <p class="text-blue-200">{exp.role}</p>
            </div>
            <p class="text-slate-400 text-sm">{exp.period}</p>
          </div>
          <ul class="list-disc pl-5 space-y-2 text-slate-300">
            {#each exp.highlights as point}
              <li>{point}</li>
            {/each}
          </ul>
        </article>
      {/each}
    </div>
  </section>

  <section id="projects" class="max-w-6xl mx-auto pt-16">
    <h3 class="section-title">Projects</h3>
    <div class="grid md:grid-cols-3 gap-5">
      {#each projects as project}
        <article class="glass rounded-2xl p-6 card-hover fade-in">
          <h4 class="text-xl font-bold text-white mb-2">{project.name}</h4>
          <p class="text-xs uppercase tracking-widest text-emerald-200 mb-3">{project.tech}</p>
          <p class="text-slate-300 leading-relaxed">{project.summary}</p>
        </article>
      {/each}
    </div>
  </section>

  <section id="contact" class="max-w-6xl mx-auto pt-16">
    <h3 class="section-title">Contact</h3>
    <div class="glass rounded-2xl p-6 md:p-8 fade-in">
      <p class="text-slate-300 mb-6">Open to internships, full-time roles, and collaborations in ML systems, software engineering, and research.</p>
      <div class="grid sm:grid-cols-3 gap-4">
        {#each contacts as contact}
          <a
            href={contact.href}
            target="_blank"
            rel="noreferrer"
            class="group border border-slate-700/60 hover:border-blue-300/50 rounded-xl p-4 flex items-center gap-3 transition-all hover:bg-slate-900/65"
          >
            <span class="w-10 h-10 rounded-lg bg-slate-800 grid place-items-center group-hover:scale-105 transition">
              {#if contact.icon === 'linkedin'}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-blue-300"><path fill="currentColor" d="M19 3A2 2 0 0 1 21 5v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3c0-2.8-1.5-4.1-3.5-4.1c-1.6 0-2.3.9-2.7 1.5v-1.3H9.5v9.2h2.8v-4.6c0-1.2.2-2.3 1.7-2.3c1.5 0 1.5 1.4 1.5 2.4v4.5zM6.3 7.8a1.6 1.6 0 1 0 0-3.2a1.6 1.6 0 0 0 0 3.2m-1.4 10.7h2.8V9.3H4.9z"/></svg>
              {:else if contact.icon === 'github'}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-slate-100"><path fill="currentColor" d="M12 .5A12 12 0 0 0 8.2 24c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.4-4-1.4c-.6-1.3-1.4-1.7-1.4-1.7c-1.1-.8.1-.8.1-.8c1.2.1 1.9 1.3 1.9 1.3c1.1 1.9 2.9 1.3 3.6 1c.1-.8.4-1.3.8-1.7c-2.7-.3-5.5-1.4-5.5-6.1c0-1.3.5-2.3 1.2-3.1c-.1-.3-.5-1.6.1-3.2c0 0 1-.3 3.3 1.2c1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2c.6 1.6.2 2.9.1 3.2c.8.8 1.2 1.8 1.2 3.1c0 4.8-2.9 5.8-5.6 6.1c.4.3.8 1 .8 2v2.9c0 .4.2.7.8.6A12 12 0 0 0 12 .5"/></svg>
              {:else}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 text-emerald-300"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v.4l10 5.3l10-5.3V6a2 2 0 0 0-2-2m0 4.3l-8.4 4.5a1 1 0 0 1-1 0L2 8.3V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"/></svg>
              {/if}
            </span>
            <div>
              <p class="text-white font-semibold">{contact.label}</p>
              <p class="text-sm text-slate-400">{contact.value}</p>
            </div>
          </a>
        {/each}
      </div>
    </div>
  </section>
</main>
