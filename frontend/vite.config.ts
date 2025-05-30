import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'

import { alphaTab } from '@coderline/alphatab/vite'

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@features': path.resolve(__dirname, './src/features'),
      '@entities': path.resolve(__dirname, './src/entities'),
      '@shared': path.resolve(__dirname, './src/shared'),
    }
  },
  server: {
    port: 3000,
  },
  base: "/",
  plugins: [
    react(),
    alphaTab()
  ]
})
