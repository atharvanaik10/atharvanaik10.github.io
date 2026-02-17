<script>
  export let item;
</script>

<article class="glass-card animate-float p-7">
  <div class="flex flex-col justify-between gap-2 md:flex-row md:items-center">
    <h3 class="text-2xl font-bold">{item.name}</h3>
    <p class="text-sm text-primary">{item.period}</p>
  </div>
  <p class="mt-1 text-white/80">{item.role}{item.location ? ` • ${item.location}` : ''}</p>
  <div class="mt-4 prose-lite">{@html item.html}</div>
</article>
