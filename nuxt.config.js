export default defineNuxtConfig({
  target: 'static',
  mode: 'universal',
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  app: {
      pageTransition: { name: 'page', mode: 'out-in', appear: true }
  },
  compatibilityDate: '2024-07-08',
})
