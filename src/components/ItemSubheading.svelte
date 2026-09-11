<script>
  export let left = ''
  export let right = ''
  export let rightHtml = ''
</script>

{#if left || right || rightHtml}
  <div class="item-meta-row type-meta">
    {#if left}
      <p class="item-meta-primary">{left}</p>
    {/if}
    {#if rightHtml}
      <p class="item-meta-secondary">{@html rightHtml}</p>
    {:else if right}
      <p class="item-meta-secondary">{right}</p>
    {/if}
  </div>
{/if}
