<script>
  export let exp;
</script>

<article class="glass-card animate-float p-7">
  <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
    <h3 class="text-2xl font-bold">{exp.company}</h3>
    <p class="text-sm text-primary">{exp.period}</p>
  </div>
  <p class="mt-1 text-white/80">{exp.role}{exp.location ? ` • ${exp.location}` : ''}</p>
  <div class="mt-4 prose-lite">{@html exp.html}</div>
  {#if exp.tech && exp.tech.length}
    <div class="mt-4 flex flex-wrap gap-2">
      {#each exp.tech as t}
        <span class="rounded-full border border-white/15 px-3 py-1 text-xs text-white/75">{t}</span>
      {/each}
    </div>
  {/if}
</article>
