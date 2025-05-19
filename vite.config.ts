import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {VitePWA} from 'vite-plugin-pwa'
// https://vite.dev/config/
export default defineConfig({
   server: {
    host: true, // <-- allow access from LAN
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['app-icon.png'],
      manifest: {
        name: 'Order Manager',
        short_name: 'OrderManager',
        theme_color: '#3B82F6',
        background_color: '#3B82F6',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'app-icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }  
         ]
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: ({url}) => {
            return url.pathname.startsWith('/api');
          },
          handler: "CacheFirst" as const,
          options: {
            cacheName: "api-cache",
            cacheableResponse:{
              statuses: [0, 200]
            }
          }
        }]
      }
    })

  ],
})
