<script>
  import { Button, Card } from 'm3-svelte'
  export let project

  const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^[/]+/, '')}`
</script>

<article class="editorial-card project-card">
  <Card variant="filled">
    {#if project.image}
      <div class="project-media">
        <img src={assetUrl(project.image)} alt={project.name} class="project-image" />
      </div>
    {/if}
    <h3 class="type-title">{project.name}</h3>
    <div class="project-description">{@html project.html}</div>
    {#if project.tech && project.tech.length}
      <div class="chip-row">
        {#each project.tech as t}
          <span class="skill-chip">{t}</span>
        {/each}
      </div>
    {/if}
    {#if project.github}
      <div class="project-link">
        <Button variant="text" href={project.github} target="_blank" rel="noreferrer" iconType="left">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.1c-3.4.7-4.1-1.6-4.1-1.6-.6-1.4-1.3-1.8-1.3-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.4 1.3a11.8 11.8 0 0 1 6.2 0c2.4-1.6 3.4-1.3 3.4-1.3.7 1.6.3 2.9.2 3.2.8.9 1.2 2 1.2 3.3 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" /></svg>
          View on GitHub
        </Button>
      </div>
    {/if}
  </Card>
</article>
