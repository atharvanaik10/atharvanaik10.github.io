<script>
  import EditorialItem from './EditorialItem.svelte'
  export let exp
</script>

<EditorialItem
  title={exp.company}
  period={exp.period}
  role={exp.role}
  location={exp.location}
  html={exp.html}
  tech={exp.tech}
  links={exp.links} />
