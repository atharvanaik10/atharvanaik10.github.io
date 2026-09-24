<script>
  import EditorialItem from './EditorialItem.svelte'
  export let item
</script>

<EditorialItem
  title={item.name}
  period={item.period}
  role={item.role}
  locationHtml={item.locationHtml}
  html={item.html}
  tech={item.tech}
  links={item.links} />
