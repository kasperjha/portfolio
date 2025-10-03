<script lang="ts" setup>
import { buildWebsiteProjectUrl } from '~/modules/utility/urls'

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
await strapi.find('websites', options)
  .then(res => websites.value = res.data)

useBreadcrumbs([{ label: 'home', to: '/' }, { label: 'web' }])
</script>

<template>
  <AppPadding class="flex gap-5">
    <NuxtLink
      v-for="website in websites"
      :key="website.slug"
      :to="buildWebsiteProjectUrl(website)"
    >
      <WebsiteMockupCard :website="website" variant="horizontal" class="sm:hidden cursor-pointer" />
      <WebsiteMockupCard :website="website" class="hidden sm:block cursor-pointer max-w-[330px]" />
    </NuxtLink>
  </AppPadding>
</template>
