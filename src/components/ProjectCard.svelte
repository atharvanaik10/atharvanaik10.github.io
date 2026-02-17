<script>
  export let project
</script>

<article
  class="glass-card p-6 transition duration-300 hover:-translate-y-1
  hover:border-primary/50">
  {#if project.image}
    <img
      src={project.image}
      alt={project.name}
      class="mb-4 w-full h-40 object-cover rounded-xl border border-white/10" />
  {/if}
  <h3 class="text-xl font-bold">{project.name}</h3>
  <div class="mt-3 text-sm text-white/80">
    {@html project.html}
  </div>
  {#if project.tech && project.tech.length}
    <div class="mt-4 flex flex-wrap gap-1">
      {#each project.tech as t}
        <span
          class="rounded-full border border-white/25 px-3 py-1 text-xs
          text-white/75">
          {t}
        </span>
      {/each}
    </div>
  {/if}
  {#if project.github}
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
      class="mt-5 inline-flex items-center gap-2 text-sm text-primary
      hover:underline">
      <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
        <path
          d="M12 .5A12 12 0 0 0 8.2
          23.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8
          1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1
          .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4
          1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2
          0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.6.3 2.9.2 3.2.8.9 1.2 2 1.2 3.3 0
          4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
      </svg>
      View on GitHub
    </a>
  {/if}
</article>
