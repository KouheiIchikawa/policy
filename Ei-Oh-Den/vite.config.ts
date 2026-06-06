import { defineConfig } from 'vite'

export default defineConfig({
  base: '/policy/Ei-Oh-Den/',
  cacheDir: '../node_modules/.vite/ei-oh-den',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
