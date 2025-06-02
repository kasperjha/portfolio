export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image", "@nuxtjs/sitemap", "nuxt-og-image", "nuxt-strapi-blocks-renderer"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in', appear: true }
  },
  site: {
    url: 'https://alfarnes.dev',
    trailingSlash: true,
  },
  sitemap: {
    sources: [
      '/api/__sitemap__/urls'
    ]
  },
  runtimeConfig: {
    public: {
      strapi: {
        url: 'https://localhost:1337',
      }
    }
  },
  experimental: {
    payloadExtraction: true
  },
  compatibilityDate: '2024-07-08',
})
