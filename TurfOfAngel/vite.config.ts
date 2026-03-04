import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: 'app',
  publicDir: '../public',
  base: '/policy/TurfOfAngel/',
  plugins: [react()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
})
