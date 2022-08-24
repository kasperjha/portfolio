<template>
    <div class="max-w-lg space-y-5">
        <p>
            My work is influenced by an interest in graphic
            design and user experience, and a strong passion for techonology.
        </p>

        <div class="flex flex-col items-start gap-3 py-5 ml-5 text-3xl">
            <BrandGradient class="flex">
                <a href="https://orkide.world">orkide.world</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mt-1 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            </BrandGradient>
        </div>

        <p>
            The links above are completed commisions 100% designed and developed by me. There is more to come soon, but if you would like to see more of my work
            <NuxtLink class="underline" to="/contact">contact me</NuxtLink> and i'll send some over.
        </p>
    </div>
</template>

<script setup>
useHead({
    title: 'kakka.dev - work',
    meta: [{ name: 'description', content: 'Completed client work by Kasper JHA. Latest project is portfolio site for Orkidé (orkide.world).'}]
});
</script>
