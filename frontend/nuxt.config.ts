import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', 'nuxt-strapi-blocks-renderer'],
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },

  image: {
    domains: ['cms.alfarnes.dev'],
    format: ['avif', 'webp'],
  },

  runtimeConfig: {
    public: {
      cms: {
        url: 'https://cms.alfarnes.dev',
      },
    },
  },
})
