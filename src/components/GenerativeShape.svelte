<script>
  export let kind = 'arcs'
  export let className = ''
  export let dataParallax = false

  const contourPaths = [
    'M305 82C241 29 127 46 83 119C38 193 69 301 151 335C230 368 331 316 348 233C360 173 347 117 305 82Z',
    'M286 113C236 72 149 79 113 137C76 196 100 278 165 304C227 330 306 289 319 224C329 178 319 140 286 113Z',
    'M264 146C229 117 170 122 145 162C120 203 136 257 180 275C222 292 276 264 285 220C292 189 286 165 264 146Z',
    'M242 177C223 161 190 164 176 186C162 209 171 239 195 249C218 258 247 243 252 219C256 202 254 187 242 177Z'
  ]

  const bars = [74, 124, 174, 224, 274, 324, 374]
</script>

{#if kind === 'arcs'}
  <svg class="generative-shape arcs {className}" viewBox="0 0 520 520" aria-hidden="true" data-parallax={dataParallax || undefined}>
    <g fill="none" stroke="currentColor">
      <ellipse class="shape-primary" cx="260" cy="260" rx="218" ry="112" stroke-width="4" transform="rotate(-32 260 260)" />
      <ellipse class="shape-secondary" cx="260" cy="260" rx="176" ry="82" stroke-width="18" transform="rotate(-32 260 260)" />
      <ellipse class="shape-primary" cx="260" cy="260" rx="124" ry="54" stroke-width="5" transform="rotate(-32 260 260)" />
      <circle class="shape-tertiary" cx="365" cy="190" r="32" fill="currentColor" stroke="none" />
    </g>
  </svg>
{:else if kind === 'flow'}
  <svg class="generative-shape flow {className}" viewBox="0 0 430 430" aria-hidden="true" data-parallax={dataParallax || undefined}>
    <g fill="none" stroke="currentColor">
      {#each contourPaths as path, index}
        <path class={index % 2 ? 'shape-secondary' : 'shape-primary'} d={path} stroke-width={index === 1 ? 8 : 3} />
      {/each}
    </g>
  </svg>
{:else if kind === 'ring'}
  <svg class="generative-shape ring {className}" viewBox="0 0 460 460" aria-hidden="true" data-parallax={dataParallax || undefined}>
    <g fill="none" stroke="currentColor" stroke-linecap="round">
      {#each bars as y, index}
        <path class={index % 3 === 0 ? 'shape-secondary' : index % 3 === 1 ? 'shape-primary' : 'shape-tertiary'} d={`M${54 + index * 10} ${y}H${406 - index * 18}`} stroke-width={index % 2 ? 10 : 4} />
      {/each}
    </g>
  </svg>
{:else if kind === 'bloom'}
  <svg class="generative-shape bloom {className}" viewBox="0 0 440 440" aria-hidden="true" data-parallax={dataParallax || undefined}>
    <g fill="none" stroke="currentColor" stroke-linecap="round">
      <path class="shape-primary" d="M60 342Q220 54 380 342" stroke-width="5" />
      <path class="shape-secondary" d="M89 342Q220 105 351 342" stroke-width="13" />
      <path class="shape-primary" d="M124 342Q220 158 316 342" stroke-width="5" />
      <path class="shape-tertiary" d="M162 342Q220 218 278 342" stroke-width="22" />
    </g>
  </svg>
{/if}
