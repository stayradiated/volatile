import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  root: 'routes',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        'dca-orders': resolve(__dirname, 'routes/dca-orders/index.html'),
        'devices': resolve(__dirname, 'routes/devices/index.html'),
        'login': resolve(__dirname, 'routes/login/index.html'),
        'main': resolve(__dirname, 'routes/index.html'),
        'open-orders': resolve(__dirname, 'routes/open-orders/index.html'),
        'register': resolve(__dirname, 'routes/register/index.html'),
        'settings': resolve(__dirname, 'routes/settings/index.html'),
        'trades': resolve(__dirname, 'routes/trades/index.html'),
      }
    }
  },
  server: {
    proxy: {
      '/hasura': {
        // target: 'http://localhost:7947',
        target: 'http://localhost:9999',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/hasura/, ''),
        secure: false
      }
    }
  }
})
