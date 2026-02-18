<script>
  import Home from '../pages/Home.svelte';
  import BlogIndex from '../pages/BlogIndex.svelte';
  import Post from '../pages/Post.svelte';

  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import { refreshSectionTracking, trackPageView } from './analytics.js';

  const route = writable({ path: '/', params: {} });

  function parseHash() {
    const h = window.location.hash.replace(/^#/, '') || '/';
    const parts = h.split('/').filter(Boolean); // ['', 'blog', 'slug'] -> ['blog','slug']
    if (parts.length === 0) return { path: '/', params: {} };
    if (parts[0] === 'blog' && parts.length === 1) return { path: '/blog', params: {} };
    if (parts[0] === 'blog' && parts[1]) return { path: '/blog/[slug]', params: { slug: decodeURIComponent(parts[1]) } };
    return { path: '/', params: {} };
  }

  function setFromHash() { route.set(parseHash()); }

  onMount(() => {
    setFromHash();
    window.addEventListener('hashchange', setFromHash);
    return () => window.removeEventListener('hashchange', setFromHash);
  });

  $: if ($route) {
    trackPageView(window.location.hash || '#/');
    refreshSectionTracking();
  }
</script>

{#await (async () => 0)() then _}
  {#key $route}
    {#if $route.path === '/'}
      <Home />
    {:else if $route.path === '/blog'}
      <BlogIndex />
    {:else if $route.path === '/blog/[slug]'}
      <Post slug={$route.params.slug} />
    {:else}
      <Home />
    {/if}
  {/key}
{/await}

