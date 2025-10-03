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

  runtimeConfig: {
    public: {
      cms: {
        url: import.meta.env.VITE_PUBLIC_CMS_URL,
      },
    },
  },

  strapiBlocksRenderer: {
    blocksPrefix: 'RichText',
    prefix: '',
  },
})
