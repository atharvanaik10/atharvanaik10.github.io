<script>
  export let kind = 'arcs'
  export let className = ''

  const flowLines = Array.from({ length: 17 }, (_, index) => {
    const x = 22 + index * 18
    const swing = 17 + (index % 4) * 4
    const counter = 11 + ((index + 2) % 5) * 3
    return `M ${x} -24 C ${x - swing} 64, ${x + counter} 132, ${x} 206 S ${x - counter} 346, ${x} 414 S ${x + swing} 548, ${x} 684`
  })

  const goldenAngle = 137.508 * (Math.PI / 180)
  const bloomMarks = Array.from({ length: 176 }, (_, index) => {
    const radius = 10 + Math.sqrt(index) * 14.4
    const angle = index * goldenAngle
    return {
      x: 220 + Math.cos(angle) * radius,
      y: 220 + Math.sin(angle) * radius,
      rotation: angle * (180 / Math.PI),
      length: 4.5 + (index / 176) * 8.5
    }
  })
</script>

{#if kind === 'arcs'}
  <svg class="generative-shape arcs {className}" viewBox="0 0 520 520" aria-hidden="true">
    <g fill="none" stroke="currentColor" stroke-linecap="round">
      <circle class="shape-primary" cx="260" cy="260" r="210" pathLength="100" stroke-width="56" stroke-dasharray="71 29" transform="rotate(-28 260 260)" />
      <circle class="shape-secondary" cx="260" cy="260" r="152" pathLength="100" stroke-width="34" stroke-dasharray="56 44" transform="rotate(38 260 260)" />
      <circle class="shape-primary" cx="260" cy="260" r="107" pathLength="100" stroke-width="18" stroke-dasharray="64 36" transform="rotate(-83 260 260)" />
      <circle class="shape-tertiary" cx="260" cy="260" r="70" pathLength="100" stroke-width="10" stroke-dasharray="42 58" transform="rotate(116 260 260)" />
    </g>
  </svg>
{:else if kind === 'flow'}
  <svg class="generative-shape flow {className}" viewBox="0 0 350 660" aria-hidden="true" preserveAspectRatio="none">
    <g fill="none" stroke="currentColor" stroke-linecap="round">
      {#each flowLines as line}
        <path d={line} />
      {/each}
    </g>
  </svg>
{:else if kind === 'ring'}
  <svg class="generative-shape ring {className}" viewBox="0 0 460 460" aria-hidden="true">
    <g fill="none" stroke="currentColor">
      <circle class="shape-primary" cx="230" cy="230" r="176" pathLength="100" stroke-width="26" stroke-dasharray="11 4 22 7 15 5 19 17" transform="rotate(-18 230 230)" />
      <circle class="shape-secondary" cx="230" cy="230" r="137" pathLength="100" stroke-width="18" stroke-dasharray="27 8 9 5 20 12 7 12" transform="rotate(31 230 230)" />
      <circle class="shape-tertiary" cx="230" cy="230" r="101" pathLength="100" stroke-width="12" stroke-dasharray="17 9 31 12 8 23" transform="rotate(-61 230 230)" />
      <circle class="shape-primary" cx="230" cy="230" r="67" pathLength="100" stroke-width="7" stroke-dasharray="49 18 12 21" transform="rotate(104 230 230)" />
    </g>
  </svg>
{:else if kind === 'bloom'}
  <svg class="generative-shape bloom {className}" viewBox="0 0 440 440" aria-hidden="true">
    <g stroke="currentColor" stroke-linecap="round">
      {#each bloomMarks as mark}
        <line
          x1={mark.x}
          y1={mark.y}
          x2={mark.x + Math.cos(mark.rotation * Math.PI / 180) * mark.length}
          y2={mark.y + Math.sin(mark.rotation * Math.PI / 180) * mark.length} />
      {/each}
    </g>
  </svg>
{/if}
