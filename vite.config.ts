/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.ts',
  },
  server: {
    watch: {
      usePolling: true,  // Ensures Vite detects changes inside Docker
    },
    host: '0.0.0.0', // Allows access inside Docker
    port: 5173, // Matches Docker's exposed port
  }
})
