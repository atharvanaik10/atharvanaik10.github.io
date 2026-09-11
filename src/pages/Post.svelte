<script>
  import { Button, Card, Icon } from 'm3-svelte'
  import iconArrowBack from '@ktibow/iconset-material-symbols/arrow-back'
  import { posts } from '../lib/blog.js'
  export let slug = ''
  $: post = posts.find(p => p.slug === slug)
</script>

{#if !post}
  <section class="blog-page">
    <article class="editorial-card post-card">
      <Card variant="outlined">
        <h2 class="type-title">Post not found</h2>
        <p>We couldn't find that article.</p>
        <Button variant="tonal" href="#/blog" iconType="left">
          <Icon icon={iconArrowBack} size={18} />
          Back to Blog
        </Button>
      </Card>
    </article>
  </section>
{:else}
  <section class="blog-page">
    <div class="back-link">
      <Button variant="text" href="#/blog" iconType="left">
        <Icon icon={iconArrowBack} size={18} />
        Back to Blog
      </Button>
    </div>
    <article class="editorial-card post-card">
      <Card variant="outlined">
        <h1 class="type-section">{post.title}</h1>
        {#if post.draft}
          <span class="draft-badge">Draft</span>
        {/if}
        <div class="prose-lite">{@html post.html}</div>
      </Card>
    </article>
  </section>
{/if}
