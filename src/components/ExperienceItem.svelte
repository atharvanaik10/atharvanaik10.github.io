<script>
  import { Button, Card } from 'm3-svelte'
  export let exp
</script>

<article class="editorial-card">
  <Card variant="outlined">
    <div class="item-heading">
      <h3 class="type-title">{exp.company}</h3>
      <p class="item-period type-meta">{exp.period}</p>
    </div>
    <p class="item-meta type-subtitle">{exp.role}{exp.location ? ` • ${exp.location}` : ''}</p>
    <div class="prose-lite">{@html exp.html}</div>
    {#if exp.tech && exp.tech.length}
      <div class="chip-row">
        {#each exp.tech as t}
          <span class="skill-chip">{t}</span>
        {/each}
      </div>
    {/if}
    {#if exp.links && exp.links.length}
      <div class="link-row">
        {#each exp.links as link}
          <Button variant="tonal" href={link.url} target="_blank" rel="noreferrer">{link.label}</Button>
        {/each}
      </div>
    {/if}
  </Card>
</article>
