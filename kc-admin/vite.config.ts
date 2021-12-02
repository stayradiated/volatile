import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/admin/',
  build: {
    rollupOptions: {
      input: {
        'main': resolve(__dirname, 'index.html'),
        'event': resolve(__dirname, 'event/index.html'),
        'exchange': resolve(__dirname, 'exchange/index.html'),
      }
    }
  },
  server: {
    proxy: {
      '/hasura': {
        target: 'http://localhost:7947',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hasura/, ''),
        secure: false
      }
    }
  }
})
