<template>
    <div class="flex w-full justify-center bg-gray-100">
        <section class="max-w-xl w-full flex flex-col min-h-screen px-4 sm:px-8 leading-relaxed font-mono text-gray-900 text-lg break-words">
            <nav class="mt-6 mb-4 text-lg">
                <div class="flex gap-x-4">
                    <NavItem destination="/" name="kakka.dev" class="font-bold mr-auto"/>
                    <NavItem destination="/contact" name="contact" />
                    <NavItem destination="/work" name="work" />
                    <NavItem destination="https://plausible.kakk.dev/kakka.dev" name="stats" external/>
                </div>
            </nav>
            <main class="flex-grow py-5">
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
    </div>
</template>

<script setup>
useHead({
    title:'kakka.dev',
    script:[
        { defer:'defer', src:'https://plausible.kakk.dev/js/plausible.js', 'data-domain':'kakka.dev'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ],
    meta: [{ name: 'description', content: 'Heyo! I\'m Kasper. Check out my portfolio: During daytime i study for a CompSci degree, and on the side i enjoy building ool websites for cool people.' }]
})
</script>
