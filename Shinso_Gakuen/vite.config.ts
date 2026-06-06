import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'app',
  base: '/policy/Shinso_Gakuen/',
  cacheDir: '../node_modules/.vite/shinso-gakuen',
  plugins: [react()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'app/index.html'),
        app: resolve(__dirname, 'app/app.html'),
        character: resolve(__dirname, 'app/character.html'),
        comic: resolve(__dirname, 'app/comic.html'),
        'privacy-policy': resolve(__dirname, 'app/privacy-policy.html'),
        story: resolve(__dirname, 'app/story.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
