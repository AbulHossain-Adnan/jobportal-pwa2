import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from "vite-plugin-pwa";
// import { GenerateSW } from 'workbox-webpack-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'production',
  plugins: [
    vue(),
     VitePWA(
      {   
        // strategies: 'generateSW',   
        manifest: { 
          icons: [
            {
              src: '/icons/icon192.png',
              sizes: '192x192',
              type: "image/png"
              },
            {
              src: "/icons/icon512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable"
            },
          ],
        },


        workboxOptions: {
          
          clientsClaim: true,
          skipWaiting: true,
          navigateFallback: '/',
          runtimeCaching: [
            
            {
              // urlPattern: ({ url }) => {
              //   return url.pathname.startsWith("/api");
              // },
              urlPattern: ({ url }) => {
                return url.origin === location.origin && url.pathname.startsWith('/api');
              },
              handler: 'CacheFirst',
              options: {
                networkTimeoutSeconds: 5,
                cacheName: 'api-cache',
                expiration: {
                  maxAgeSeconds: 60 * 60 * 24 * 30, // cache for 30 days
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),

  ],

})

