<script>
  import { Button, Card } from 'm3-svelte'
  import { posts } from '../lib/blog.js'
</script>

<section class="blog-page">
  <h2 class="section-heading type-section">Blog</h2>
  <div class="blog-grid">
    {#each posts as post}
      <article class="editorial-card blog-card">
        <Card variant="outlined">
          <h3 class="type-title">{post.title}</h3>
          {#if post.draft}
            <span class="draft-badge">Draft</span>
          {/if}
          <div class="blog-link">
            <Button variant="text" href={"#/blog/" + encodeURIComponent(post.slug)}>Read</Button>
          </div>
        </Card>
      </article>
    {/each}
  </div>
</section>
