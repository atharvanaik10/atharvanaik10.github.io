<script>
  export let item
</script>

<article class="glass-card animate-float p-7">
  <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
    <h3 class="text-2xl font-bold">{item.name}</h3>
    <p class="text-sm text-primary">{item.period}</p>
  </div>
  <p class="mt-1 text-white/80">
    {item.role}{item.location ? ` • ${item.location}` : ''}
  </p>
  <div class="mt-4 prose-lite">
    {@html item.html}
  </div>
  {#if item.tech && item.tech.length}
    <div class="mt-4 flex flex-wrap gap-1">
      {#each item.tech as t}
        <span
          class="rounded-full border border-white/15 px-3 py-1 text-xs
          text-white/75">
          {t}
        </span>
      {/each}
    </div>
  {/if}
  {#if item.links && item.links.length}
    <div class="mt-4 flex flex-wrap gap-3">
      {#each item.links as link}
        <a
          href={link.url}
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2 text-xs font-semibold text-black shadow-glow transition hover:scale-105">
          {link.label}
        </a>
      {/each}
    </div>
  {/if}
</article>
