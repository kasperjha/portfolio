<template>
  <div class="flex w-full justify-center">


    <div
      class="max-w-2xl w-full flex flex-col min-h-screen px-4 sm:px-8 leading-relaxed font-mono text-gray-700 break-words">
      <nav class="mt-6 mb-4">
        <div class="flex gap-x-4">
          <NavItem destination="/" name="alfarnes.dev" class="font-bold mr-auto" />
          <NavItem destination="/now/" name="now" class="hidden sm:block" />
          <NavItem destination="/work/" name="work" />
          <NavItem destination="/blog/" name="blog" />
          <NavItem destination="/contact/" name="contact" class="hidden sm:block" />
        </div>
      </nav>
      <main class="flex-grow pt-10 pb-20">
        <NuxtPage />
      </main>
      <footer class="flex gap-2 text-center justify-center py-4 text-sm italic text-gray-700">
        <p>
          Made with ❤️
          code on <a href="https://github.com/kasperjha/portfolio">GitHub</a>
          📈 view <a href="https://plausible.kakk.dev/alfarnes.dev">visitor stats</a>
        </p>
      </footer>
    </div>
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

body {
  --dot-bg: white;
  --dot-color: gray;
  --dot-size: 1px;
  --dot-space: 20px;
  background:
    linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    var(--dot-color);
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
  ogImage: '/me.jpeg'
})
</script>
