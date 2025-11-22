<script lang="ts" setup>
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
  ],
  script: [
    { 'defer': true, 'src': 'https://plausible.kakk.dev/js/plausible.js', 'data-domain': 'alfarnes.dev' },
  ],
})

useSeoMeta({
  title: 'Kasper Alfarnes',
  ogTitle: 'Kasper Alfarnes',

  description: 'Digital portfolio for graphic designer and developer Kasper Alfarnes.',
  ogDescription: 'Digital portfolio for graphic designer and developer Kasper Alfarnes.',

  author: 'Kasper Alfarnes',

  ogSiteName: 'Kasper\'s portfolio',
  ogLocale: 'no_NB',
  ogType: 'website',
  ogUrl: 'https://alfarnes.dev',

  robots: 'index, follow',
})
</script>

<template>
  <div class="text-neutral-700">
    <TheHeader />
    <main class="pb-30 space-y-8">
      <TheNavbar />
      <NuxtPage />
    </main>
  </div>
</template>
