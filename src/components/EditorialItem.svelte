<script>
  import { Button, Card, Icon } from 'm3-svelte'
  import iconOpenInNew from '@ktibow/iconset-material-symbols/open-in-new'
  import ItemSubheading from './ItemSubheading.svelte'

  export let title
  export let period
  export let role
  export let location = ''
  export let locationHtml = ''
  export let html
  export let tech = []
  export let links = []
</script>

<article class="editorial-card" data-card>
  <Card variant="outlined">
    <div class="item-heading">
      <h3 class="type-title">{title}</h3>
      <p class="item-period type-meta">{period}</p>
    </div>
    <ItemSubheading left={role} right={location} rightHtml={locationHtml} />
    <div class="prose-lite">{@html html}</div>
    {#if tech.length}
      <div class="chip-row">
        {#each tech as item}
          <span class="skill-chip">{item}</span>
        {/each}
      </div>
    {/if}
    {#if links.length}
      <div class="link-row">
        {#each links as link}
          <Button variant="tonal" href={link.url} target="_blank" rel="noreferrer" iconType="left">
            <Icon icon={iconOpenInNew} size={18} />
            {link.label}
          </Button>
        {/each}
      </div>
    {/if}
  </Card>
</article>
