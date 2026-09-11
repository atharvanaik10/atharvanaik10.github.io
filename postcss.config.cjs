const postcss = require('postcss')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

// m3-svelte ships CSS that uses its own `@apply`-style mixins. Running
// Tailwind over dependency styles makes Tailwind interpret those mixins as
// utility classes, so only transform styles authored in this project.
const localTailwind = {
  postcssPlugin: 'local-tailwind',
  async Once(root) {
    const filename = root.source?.input?.file || ''
    if (filename.includes('node_modules')) return

    // Tailwind mutates the root passed to it. Process a clone so replacing the
    // original tree does not accidentally clear the processed result as well.
    const result = await postcss([tailwindcss()]).process(root.clone(), { from: filename })
    root.removeAll()
    root.append(...result.root.nodes)
  }
}

module.exports = {
  plugins: [localTailwind, autoprefixer()]
}
