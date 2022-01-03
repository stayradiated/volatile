import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

export default defineConfig({
  root: 'routes',
  plugins: [react()],
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        'dca-orders': resolve(__dirname, 'routes/dca-orders/index.html'),
        'devices': resolve(__dirname, 'routes/devices/index.html'),
        'exchanges': resolve(__dirname, 'routes/exchanges/index.html'),
        'login': resolve(__dirname, 'routes/login/index.html'),
        'main': resolve(__dirname, 'routes/index.html'),
        'market-price': resolve(__dirname, 'routes/market-price/index.html'),
        'open-orders': resolve(__dirname, 'routes/open-orders/index.html'),
        'register': resolve(__dirname, 'routes/register/index.html'),
        'reset-password': resolve(__dirname, 'routes/reset-password/index.html'),
        'settings': resolve(__dirname, 'routes/settings/index.html'),
        'trades': resolve(__dirname, 'routes/trades/index.html'),
        'verify-email': resolve(__dirname, 'routes/verify-email/index.html'),
      }
    }
  },
  server: {
    proxy: {
      '/hasura': {
        /* production */
        // target: 'https://volatile.co.nz/',
        
        /* development */
        target: 'http://localhost:9999',
        rewrite: (path) => path.replace(/^\/hasura/, ''),

        changeOrigin: true,
        secure: false
      }
    }
  }
})
