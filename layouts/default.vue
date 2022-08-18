<template>
    <section class="flex flex-col min-h-screen px-8 font-mono text-gray-900">
        <nav class="flex w-full pt-6 pb-4 gap-x-4">
            <NuxtLink class="font-bold" to="/">kakka.dev</NuxtLink>
            <NuxtLink class="ml-auto" to="/contact">contact</NuxtLink>
            <NuxtLink to="/work">work</NuxtLink>
        </nav>
        <main class="flex-grow">
            <Nuxt />
        </main>
        <footer class="py-4 text-sm italic text-gray-700">
            developed with <a class="underline" href="https://nuxtjs.org">nuxt</a>
            and <a class="underline" href="https://vuejs.org/">vue</a> by me</footer>
    </section>
</template>
