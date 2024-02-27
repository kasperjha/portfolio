<template>
    <div class="max-w-lg space-y-5">

        <h1 class="text-3xl font-bold py-2">Contact</h1>

        <p>
            Follow me here for the occasional webdev related post:
        </p>

        <div class="flex flex-col items-start gap-3 py-5 ml-5 text-3xl uppercase">
            <BrandGradient class="transition ease-in-out duration-300 hover:translate-x-4 flex">
                <a href="https://instagram.com/kasper.jha">instagram</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mt-1 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            </BrandGradient>
            <BrandGradient class="transition ease-in-out duration-300 hover:translate-x-4 flex">
                <a href="https://www.linkedin.com/in/kasper-alfarnes-a3b97b25b/">linkedin</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5 mt-1 ml-1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
            </BrandGradient>
        </div>

        <p>
            Do you know how to ride a bike without hands? or want a website?
        </p>

        <p class="py-5 ml-5">
            Tell me about it at: <br>
            <a class="underline" href="mailto:kakka0903@hotmail.no">kakka0903@hotmail.no</a>
        </p>

    </div>
</template>

<script setup>
useHead({
    title: 'kakka.dev - contact',
    meta: [{ name: 'description', content: 'Contact information for kakka.dev. Social media links and email address.' }]
});
</script>
