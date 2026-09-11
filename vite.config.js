import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { functionsMixins } from 'vite-plugin-functions-mixins';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [svelte(), functionsMixins({ deps: ['m3-svelte'] })],
  server: {
    host: '0.0.0.0'
  }
});
