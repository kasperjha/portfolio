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
strapi.find('websites', options)
  .then(res => websites.value = res.data)

useBreadcrumbs([{ label: 'home', to: '/' }])
</script>

<template>
  <AppPadding class="flex flex-wrap gap-5">
    <NuxtLink
      v-for="website in websites"
      :key="website.slug"
      :to="buildWebsiteProjectUrl(website)"
    >
      <WebsiteMockupCard :website="website" class="cursor-pointer" />
    </NuxtLink>
  </AppPadding>
</template>
