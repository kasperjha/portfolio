export default defineNuxtConfig({
    target: 'static',
    mode: 'universal',
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        pageTransition: { name: 'page', mode: 'out-in', appear: true }
    },
})
