<script>
  import { Card } from 'm3-svelte'
  export let exp
</script>

<article class="editorial-card">
  <Card variant="outlined">
    <div class="item-heading">
      <h3>{exp.company}</h3>
      <p class="item-period">{exp.period}</p>
    </div>
    <p class="item-meta">{exp.role}{exp.location ? ` • ${exp.location}` : ''}</p>
    <div class="prose-lite">{@html exp.html}</div>
    {#if exp.tech && exp.tech.length}
      <div class="chip-row">
        {#each exp.tech as t}
          <span class="skill-chip">{t}</span>
        {/each}
      </div>
    {/if}
  </Card>
</article>
