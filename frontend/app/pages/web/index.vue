<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

// TODO: support preview feature
const websites = ref<Website[]>()

const options = {
  populate: {
    mockups: { populate: '*' },
    about: { populate: '*' },
    testimonial: { populate: '*' },
  },
  sort: ['actuallyPublishedAt:desc', 'publishedAt'],
}

const strapi = useStrapi()
await strapi.find<Website>('websites', options)
  .then(res => websites.value = res.data)

useSeoMeta({
  title: 'Websites',
  description: `${websites.value?.length} websites I have designed and/or developed.`,
  ogTitle: 'Websites',
  ogDescription: `${websites.value?.length} websites I have designed and/or developed.`,
})

useBreadcrumbs([
  { label: 'home', to: '/' },
  { label: 'web' },
])
</script>

<template>
  <AppPadding>
    <DeskmatGrid>
      <DeskmatWebsite
        v-for="website in websites"
        :key="website.slug"
        :website
      />
    </DeskmatGrid>
  </AppPadding>
</template>
