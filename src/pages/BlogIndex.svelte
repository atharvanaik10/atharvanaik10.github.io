<script>
  import { posts } from '../lib/blog.js';
</script>

<section class="pt-20">
  <h2 class="section-heading">Blog</h2>
  <div class="grid gap-5 md:grid-cols-3">
    {#each posts as post}
      <article class="glass-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50">
        <h3 class="text-xl font-bold">{post.title}</h3>
        {#if post.draft}
          <span class="mt-2 inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-300 ring-1 ring-inset ring-yellow-400/20">Draft</span>
        {/if}
        <a href={"#/blog/" + encodeURIComponent(post.slug)} class="mt-4 inline-block text-sm text-primary hover:underline">Read</a>
      </article>
    {/each}
  </div>
</section>
