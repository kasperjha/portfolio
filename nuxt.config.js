import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',
    ssr:true,
    buildModules: ['@nuxtjs/tailwindcss', 'vue-plausible'],

    plausible: {
        domain:'kakka.dev',
        apiHost:'https://plausible.kakka.dev'
    },

})
