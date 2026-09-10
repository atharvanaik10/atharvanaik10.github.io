const postcss = require('postcss')
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

const localTailwind = {
  postcssPlugin: 'local-tailwind',
  async Once(root) {
    const filename = root.source?.input?.file || ''
    if (filename.includes('node_modules')) return

    const result = await postcss([tailwindcss()]).process(root, { from: filename })
    root.removeAll()
    root.append(result.root.nodes)
  }
}

module.exports = {
  plugins: [localTailwind, autoprefixer()]
}
