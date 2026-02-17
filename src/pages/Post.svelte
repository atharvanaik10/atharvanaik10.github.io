<script>
  import { posts } from '../lib/blog.js';
  export let slug = '';
  $: post = posts.find(p => p.slug === slug);
</script>

{#if !post}
  <section class="pt-20">
    <div class="glass-card p-8">
      <h2 class="text-2xl font-bold mb-2">Post not found</h2>
      <p class="text-white/70">We couldn't find that article. <a href="#/blog" class="text-electric hover:underline">Back to Blog</a></p>
    </div>
  </section>
{:else}
  <section class="pt-20">
    <a href="#/blog" class="text-sm text-white/70 hover:text-electric">← Back to Blog</a>
    <article class="glass-card p-8 prose-lite mt-4">
      <h1 class="text-3xl font-extrabold mb-4">{post.title}</h1>
      {#if post.draft}
        <span class="mb-4 inline-flex items-center rounded-md bg-yellow-400/10 px-2 py-1 text-xs font-medium text-yellow-300 ring-1 ring-inset ring-yellow-400/20">Draft</span>
      {/if}
      {@html post.html}
    </article>
  </section>
{/if}

