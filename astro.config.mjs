import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://alldrit.ca',
  output: 'static',
  publicDir: './static',
  build: {
    format: 'directory',
  },
})
