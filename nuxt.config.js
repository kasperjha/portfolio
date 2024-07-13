export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', "@nuxt/image", "@nuxtjs/sitemap"],
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
  compatibilityDate: '2024-07-08'
})
