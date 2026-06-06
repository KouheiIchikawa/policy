import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  root: 'app',
  publicDir: '../public',
  cacheDir: '../../node_modules/.vite/turf-of-angel',
  base: '/policy/TurfOfAngel/',
  plugins: [react()],
  build: {
    outDir: '..',
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'app/index.html'),
        'privacy-policy': resolve(__dirname, 'app/privacy-policy.html'),
      },
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
})
