export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', "@nuxt/image"],
  app: {
    pageTransition: { name: 'page', mode: 'out-in', appear: true }
  },
  compatibilityDate: '2024-07-08'
})
