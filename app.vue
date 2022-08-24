<template>
    <section class="flex flex-col min-h-screen px-8 font-mono text-gray-900">
        <nav class="flex w-full pt-6 pb-4 gap-x-4">
            <NuxtLink class="flex items-center font-bold" to="/">
                kakka.dev
            </NuxtLink>
            <NuxtLink class="ml-auto" to="/contact">contact</NuxtLink>
            <NuxtLink to="/work">work</NuxtLink>
        </nav>
        <main class="flex-grow">
            <NuxtPage />
        </main>
        <footer class="flex justify-center py-4 text-xs italic text-gray-700">
            <p>
                developed with <a class="underline" href="https://nuxtjs.org">nuxt</a>,
                <a class="underline" href="https://vuejs.org/">vue</a> and
                <a class="underline" href="https://tailwindcss.com">tailwind</a>
            </p>
        </footer>
    </section>
</template>

<script setup>
useHead({
    title:'kakka.dev',
    script:[
        {src:'https://plausible.kakka.dev/js/plausible.js', 'data-domain':'kakka.dev'}
    ]
})
</script>
