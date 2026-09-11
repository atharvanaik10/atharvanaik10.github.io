<script>
  import { Icon, pathArch, pathBun, pathFlower } from 'm3-svelte'
  import iconExperiment from '@ktibow/iconset-material-symbols/experiment-outline'
  import iconWorkHistory from '@ktibow/iconset-material-symbols/work-history-outline'
  import iconDeployedCode from '@ktibow/iconset-material-symbols/deployed-code-outline'

  export let title
  export let kind

  const marks = {
    research: {
      shape: pathFlower,
      icon: iconExperiment
    },
    experience: {
      shape: pathArch,
      icon: iconWorkHistory
    },
    projects: {
      shape: pathBun,
      icon: iconDeployedCode
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
