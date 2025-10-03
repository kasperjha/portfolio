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
  { label: website.value.slug },
])
</script>

<template>
  <AppPadding>
    <div class="flex flex-row flex-wrap gap-5">
      <div>
        <WebsiteMockupCard :website="website" variant="horizontal" class="md:hidden" />
        <WebsiteMockupCard :website="website" class="hidden md:block max-w-[330px]" />
      </div>

      <div class="flex flex-col gap-5 md:max-w-[330px] lg:max-w-[330px]">
        <WebsiteAboutCard :website />
        <WebsiteTestemonialCard v-if="website.testemonial" :website />
      </div>

      <div class="flex flex-col gap-5 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:max-w-[680px] md:max-lg:w-full lg:w-[244px]">
        <WebsiteLinksCard v-if="website.links.length" :website />
        <WebsiteMiscCard :website />
      </div>
    </div>
  </AppPadding>
</template>
