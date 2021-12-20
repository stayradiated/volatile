import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  root: 'routes',
  plugins: [react()],
  base: '/admin/',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'routes/index.html'),
        'event': resolve(__dirname, 'routes/event/index.html'),
        'exchange': resolve(__dirname, 'routes/exchange/index.html'),
        'user': resolve(__dirname, 'routes/user/index.html'),
      }
    }
  },
  server: {
    proxy: {
      '/hasura': {
        // target: 'https://volatile.co.nz/',
        target: 'http://localhost:9999',
        rewrite: (path) => path.replace(/^\/hasura/, ''),
        changeOrigin: true,
        secure: false
      }
    }
  }
})
