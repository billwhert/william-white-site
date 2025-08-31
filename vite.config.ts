
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/william-white-site/',
  build: {
    sourcemap: true, // helps map errors back to TS/TSX files
  },
})
