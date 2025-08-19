<template>
  <div class="flex flex-col w-full items-center bg-neutral-100 text-neutral-600">

    <div class="sm:max-w-3xl w-full min-h-screen px-5 py-5">

      <div class="space-y-4 sm:grid sm:grid-cols-4 gap-y-16 gap-x-14">

        <div class="flex gap-4 sm:gap-14 items-center sm:grid sm:col-span-full sm:grid-cols-subgrid">
          <img
            src="/me.jpeg"
            alt=""
            class="justify-self-end min-w-[60px] w-[60px] h-[60px] aspect-square rounded-full border-2"
          >

          <p class="sm:col-span-3 text-sm max-w-sm sm:text-base">
            <span class="italic font-medium ">Hei! Hello!</span>
            My name is Kasper (@kasperjha).
            I live in Oslo. This is my portfolio website.
          </p>

        </div>

        <nav>
          <ul class="flex gap-4 justify-center sm:flex-col sm:justify-start sm:items-end sm:gap-0">
            <ul><NuxtLink class="underline" to="/">home</NuxtLink></ul>
            <ul><NuxtLink class="underline" to="/work">work</NuxtLink></ul>
            <ul><NuxtLink class="underline" to="/blog">posts</NuxtLink></ul>
            <ul><NuxtLink class="underline" to="/contact">contact</NuxtLink></ul>
          </ul>
        </nav>

        <div class="col-span-3 pt-10 sm:pt-0 pb-16">
          <NuxtPage />
        </div>

      </div>
    </div>
    <footer class="col-span-4 flex gap-2 text-center justify-center py-4 text-sm italic text-gray-700">
      <p>
        Made with ❤️
        code on <a href="https://github.com/kasperjha/portfolio">GitHub</a>
        📈 view <a href="https://plausible.kakk.dev/alfarnes.dev">visitor stats</a>
      </p>
    </footer>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 200ms;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(5px);
  transform: translateY(5px);
}
</style>

<script setup>
useHead({
  script: [
    { defer: 'defer', src: 'https://plausible.kakk.dev/js/plausible.js', 'data-domain': 'alfarnes.dev' }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
  ],
  meta: [{ name: 'description', content: 'Heyo! I\'m Kasper. Check out my portfolio: During daytime i study for a CompSci degree, and on the side i enjoy building ool websites for cool people.' }]
})

useSeoMeta({
  title: 'alfarnes.dev',
  ogTitle: 'alfarnes.dev',
  description: 'I\'m a freelance software developer, web designer and soon to be Computer Science graduate. Check out my projects, freelance availability and whats been my focus recently',
  ogDescription: 'I\'m a freelance software developer, web designer and soon to be Computer Science graduate.',
})
</script>
