<script>
  import { Card } from 'm3-svelte'
  import { posts } from '../lib/blog.js'
  export let slug = ''
  $: post = posts.find(p => p.slug === slug)
</script>

{#if !post}
  <section class="blog-page">
    <article class="editorial-card post-card">
      <Card variant="outlined">
        <h2 class="type-title">Post not found</h2>
        <p>We couldn't find that article. <a href="#/blog">Back to Blog</a></p>
      </Card>
    </article>
  </section>
{:else}
  <section class="blog-page">
    <a href="#/blog" class="back-link">← Back to Blog</a>
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
