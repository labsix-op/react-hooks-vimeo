/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Required by testing-library ro run auto DOM cleanup.
    environment: 'jsdom',
  },
})
