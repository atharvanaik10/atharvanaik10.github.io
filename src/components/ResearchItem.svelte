<script>
  import { Button, Card } from 'm3-svelte'
  export let item
</script>

<article class="editorial-card">
  <Card variant="outlined">
    <div class="item-heading">
      <h3 class="type-title">{item.name}</h3>
      <p class="item-period type-meta">{item.period}</p>
    </div>
    <p class="item-meta type-subtitle">{item.role}{item.location ? ` • ${item.location}` : ''}</p>
    <div class="prose-lite">{@html item.html}</div>
    {#if item.tech && item.tech.length}
      <div class="chip-row">
        {#each item.tech as t}
          <span class="skill-chip">{t}</span>
        {/each}
      </div>
    {/if}
    {#if item.links && item.links.length}
      <div class="link-row">
        {#each item.links as link}
          <Button variant="tonal" href={link.url} target="_blank" rel="noreferrer">{link.label}</Button>
        {/each}
      </div>
    {/if}
  </Card>
</article>
