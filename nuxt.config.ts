// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      title: 'University Portal – Document Request System',
      link: [
        { rel: 'manifest', href: '/manifest.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: 'anonymous'
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap'
        }
      ]
    }
  },

  // PWA MODULE
  modules: [
    [
      '@vite-pwa/nuxt',
      {
        registerType: 'autoUpdate',

        devOptions: {
          enabled: true
        },

        manifest: {
          name: 'Alumni Hub',
          short_name: 'AlumniHub',
          description: 'Document Request System for Alumni',
          theme_color: '#0f172a',
          background_color: '#ffffff',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          categories: ['productivity'],
          orientation: 'portrait-primary',

          icons: [
            {
              src: '/icon-192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any'
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
            }
          ],
          screenshots: [
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png'
            },
            {
              src: '/icon-512.png',
              sizes: '512x512',
              type: 'image/png',
              form_factor: 'wide'
            }
          ]
        },

        workbox: {
          navigateFallback: '/',

          runtimeCaching: [
            {
              urlPattern: ({ request }: { request: Request }) =>
                request.destination === 'image',
              handler: 'CacheFirst',
              options: {
                cacheName: 'images',
                expiration: {
                  maxEntries: 50
                }
              }
            },
            {
              urlPattern: ({ request }: { request: Request }) =>
                request.destination === 'document',
              handler: 'NetworkFirst'
            }
          ]
        }
      }
    ]
  ],
})