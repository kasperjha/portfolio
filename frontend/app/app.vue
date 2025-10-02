<script lang="ts" setup>
useHead({
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
    { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
    { rel: 'manifest', href: '/favicon/site.webmanifest' },
  ],
})

// TODO: support preview feature
const websites = ref()

const options = {
  populate: {
    mockups: { populate: '*' },
    about: { populate: '*' },
    testemonial: { populate: '*' },
  },
}

const strapi = useStrapi()
strapi.find('websites', options)
  .then(res => websites.value = res.data)
</script>

<template>
  <div>
    <TheNav />

    <main class="pb-30">
      <AppPadding class="flex flex-wrap gap-5">
        <WorkItemWebsite v-for="website in websites" :key="website.slug" :website="website" />
      </AppPadding>
    </main>
  </div>
</template>
