import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        'dca-orders': resolve(__dirname, 'dca-orders/index.html'),
        'devices': resolve(__dirname, 'devices/index.html'),
        'login': resolve(__dirname, 'login/index.html'),
        'main': resolve(__dirname, 'index.html'),
        'open-orders': resolve(__dirname, 'open-orders/index.html'),
        'register': resolve(__dirname, 'register/index.html'),
        'settings': resolve(__dirname, 'settings/index.html'),
        'trades': resolve(__dirname, 'trades/index.html'),
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
