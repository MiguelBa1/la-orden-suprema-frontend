import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': resolve(__dirname, 'src/pages'),
      '@routes': resolve(__dirname, 'src/routes'),
      '@models': resolve(__dirname, 'src/models'),
      '@services': resolve(__dirname, 'src/services'),
      '@lib': resolve(__dirname, 'src/lib'),
    },
  },
})
