<script>
  import { onMount } from 'svelte'
  import { Button, Icon, Menu, MenuItem, Switch } from 'm3-svelte'
  import iconSun from '@ktibow/iconset-material-symbols/light-mode'
  import iconMoon from '@ktibow/iconset-material-symbols/dark-mode'
  import iconMenu from '@ktibow/iconset-material-symbols/menu'
  import iconMenuOpen from '@ktibow/iconset-material-symbols/menu-open'
  import Router from './lib/Router.svelte'

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Research', href: '#research' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' }
  ]

  let mobileMenuOpen = false
  let darkMode = false
  let themeReady = false

  function applyTheme(value, persist = true) {
    document.documentElement.dataset.theme = value ? 'dark' : 'light'
    if (persist) localStorage.setItem('theme', value ? 'dark' : 'light')
  }

  function goTo(href) {
    mobileMenuOpen = false
    window.location.href = href
  }

  onMount(() => {
    const storedTheme = localStorage.getItem('theme')
    darkMode = storedTheme
      ? storedTheme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    applyTheme(darkMode, false)
    themeReady = true
  })

  $: if (themeReady) applyTheme(darkMode)
</script>

<div class="site-shell">
  <header class="site-header">
    <nav class="site-nav" aria-label="Primary navigation">
      <a href="#/" class="wordmark type-subtitle">Atharva Naik</a>
      <div class="nav-links">
        {#each navItems as item}
          <a href={item.href}>{item.label}</a>
        {/each}
        <!-- <a href="#/blog" class="hover:text-primary transition">Blog</a> -->
        <label class="theme-toggle" title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
          <Switch
            bind:checked={darkMode}
            icons="both"
            uncheckedIcon={iconSun}
            checkedIcon={iconMoon}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} />
        </label>
      </div>

      <details class="mobile-menu" bind:open={mobileMenuOpen}>
        <Button
          summary
          variant="tonal"
          size="s"
          iconType="full"
          square
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}>
          <Icon icon={mobileMenuOpen ? iconMenuOpen : iconMenu} size={22} />
        </Button>
        <div class="mobile-menu-panel">
          <Menu>
            {#each navItems as item}
              <MenuItem onclick={() => goTo(item.href)}>{item.label}</MenuItem>
            {/each}
            <label class="mobile-theme-row" title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}>
              <Switch
                bind:checked={darkMode}
                icons="both"
                uncheckedIcon={iconSun}
                checkedIcon={iconMoon}
                aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'} />
            </label>
          </Menu>
        </div>
      </details>
    </nav>
  </header>

  <main class="site-main">
    <Router />
  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <span>© {new Date().getFullYear()} Atharva Naik</span>
      <span>
        Made with
        <a
          href="https://m3.material.io/"
          target="_blank"
          rel="noreferrer"
          class="footer-link">
          Material 3
        </a>
        in
        <a
          href="https://svelte.dev"
          target="_blank"
          rel="noreferrer"
          class="footer-link">
          Svelte
        </a>
        and
        <a
          href="https://tailwindcss.com"
          target="_blank"
          rel="noreferrer"
          class="footer-link">
          Tailwind
        </a>
      </span>
    </div>
  </footer>
</div>
