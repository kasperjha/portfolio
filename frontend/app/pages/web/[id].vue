<script lang="ts" setup>
const route = useRoute()

const website = ref()

const options = {
  populate: {
    mockups: { populate: '*' },
    about: { populate: '*' },
    testemonial: { populate: '*' },
    tags: { populate: '*' },
    links: { populate: '*' },
  },
}

const strapi = useStrapi()
await strapi.findOne('websites', route.params.id as string, options)
  .then(res => website.value = res.data)

useBreadcrumbs([
  { label: 'home', to: '/' },
  { label: 'web', to: '/web' },
  { label: website.value.slug },
])
</script>

<template>
  <AppPadding>
    <WebsiteMockupCard :website class="max-w-[330px]" />
    <div class="space-y-5 max-w-sm">
      <WebsiteAboutCard :website />
      <WebsiteTestemonialCard v-if="website.testemonial" :website />
    </div>
    <div class="space-y-5 max-w-2xs">
      <WebsiteLinksCard :website />
      <WebsiteMiscCard :website />
    </div>
  </AppPadding>

  <!-- <AppPadding class="flex gap-5 items-start">
    <WebsiteMockupCard :website class="max-w-[330px]" />
    <div class="space-y-5 max-w-sm">
      <WebsiteAboutCard :website />
      <WebsiteTestemonialCard v-if="website.testemonial" :website />
    </div>
    <div class="space-y-5 max-w-2xs">
      <WebsiteLinksCard :website />
      <WebsiteMiscCard :website />
    </div>
  </AppPadding> -->
</template>
