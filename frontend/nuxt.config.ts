import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxtjs/mdc',
    'nuxt-strapi-blocks-renderer',
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },

  experimental: {
    payloadExtraction: true,
  },

  image: {
    domains: [new URL(import.meta.env.VITE_PUBLIC_CMS_URL).hostname],
    format: ['avif', 'webp'],
  },

  runtimeConfig: {
    public: {
      cms: {
        url: import.meta.env.VITE_PUBLIC_CMS_URL,
      },
    },
  },

  ui: {
    colorMode: false,
  },

  mdc: {
    highlight: {
      theme: 'github-light',
    },
  },
})
