import { VitePWA } from "vite-plugin-pwa";
// import { createFAVICON } from 'vite-plugin-favicon'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  base: "./",
  plugins: [
    react(),

    VitePWA({
      registerType: 'prompt',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'maskable-icon.png'],
      manifest: {
        name: 'Coursify',
        short_name: 'CsY',
        description: 'Coursify Improve skills by learning',
        theme_color: '#ff3951',
        start_url: '/',
        icons: [
          {
            "src": "/icon-48.png",
            "sizes": "48x48",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icon-72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icon-96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable"

          },
          {
            "src": "/icon-144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icon-192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icon-512x.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "/icon-48.png",
            "sizes": "48x48",
            "type": "image/png"

          },
          {
            "src": "/icon-72.png",
            "sizes": "72x72",
            "type": "image/png"

          },
          {
            "src": "/icon-96.png",
            "sizes": "96x96",
            "type": "image/png"


          },
          {
            "src": "/icon-128.png",
            "sizes": "128x128",
            "type": "image/png"

          },
          {
            "src": "/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"

          },
          {
            "src": "/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"

          }
        ]
      },
    })
  ],
})
