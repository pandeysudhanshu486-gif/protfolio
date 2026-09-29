import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true, // Exposes on 0.0.0.0, 127.0.0.1, and localhost (100% Safari & Chrome compatible)
    port: 3000
  }
})
