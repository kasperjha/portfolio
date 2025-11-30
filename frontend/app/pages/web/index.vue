<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

const options = {
  populate: {
    mockups: { populate: '*' },
    about: { populate: '*' },
    testimonial: { populate: '*' },
  },
  sort: ['actuallyPublishedAt:desc', 'publishedAt'],
}

const strapi = useStrapi()
const { data: websites } = useAsyncData(
  async () => (await strapi.find<Website>('websites', options)).data,
)

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
