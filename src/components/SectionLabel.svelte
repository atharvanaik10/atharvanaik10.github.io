<script>
  import { Icon, pathArch, pathBun, pathFlower } from 'm3-svelte'

  export let title
  export let kind

  const marks = {
    research: {
      shape: pathFlower,
      icon: {
        width: 24,
        height: 24,
        body: '<path fill="currentColor" d="M9 3v2.4l-5.1 8.5A4.7 4.7 0 0 0 7.9 21h8.2a4.7 4.7 0 0 0 4-7.1L15 5.4V3h-2v3l2.4 4H8.6L11 6V3H9Zm-2 9h10l1.4 2.4c.2.3.3.7.4 1.1H5.2c.1-.4.2-.8.4-1.1L7 12Z" />'
      }
    },
    experience: {
      shape: pathArch,
      icon: {
        width: 24,
        height: 24,
        body: '<path fill="currentColor" d="M9 4V2h6v2h5a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5Zm2 0h2V3h-2v1Zm9 8h-5v1.5H9V12H4v6h16v-6ZM4 6v4h5V8.5h6V10h5V6H4Z" />'
      }
    },
    projects: {
      shape: pathBun,
      icon: {
        width: 24,
        height: 24,
        body: '<path fill="currentColor" d="M3 3h8v8H3V3Zm2 2v4h4V5H5Zm8-2h8v8h-8V3Zm2 2v4h4V5h-4ZM3 13h8v8H3v-8Zm2 2v4h4v-4H5Zm8-2h8v8h-8v-8Zm2 2v4h4v-4h-4Z" />'
      }
    }
  }

  $: mark = marks[kind] ?? marks.research
</script>

<div class="section-label">
  <span class="section-mark {kind}" aria-hidden="true">
    <svg class="expressive-shape" viewBox="0 0 380 380">
      <path d={mark.shape} />
    </svg>
    <Icon icon={mark.icon} size={28} />
  </span>
  <h2 class="type-section">{title}</h2>
</div>
