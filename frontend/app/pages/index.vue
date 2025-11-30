<script lang="ts" setup>
import type { Post } from '~/types/cms/collections/Post'
import type { Website } from '~/types/cms/collections/Website'
import { getDeskmatItems, sortDeskmatItems } from '~/modules/utility/deskmat'

const { data } = await useAsyncData(async () => {
  const strapi = useStrapi()
  const [websites, posts] = await Promise.all([
    strapi.find<Website>('websites', { populate: { mockups: { populate: '*' } } }),
    strapi.find<Post>('posts'),
  ])
  return { websites, posts }
})

const deskmatItems = computed(() => {
  if (!data.value) {
    return []
  }
  const { posts, websites } = data.value
  return sortDeskmatItems(getDeskmatItems(websites.data, posts.data))
})

useBreadcrumbs([{ label: 'home' }])
</script>

<template>
  <AppPadding>
    <DeskmatGrid>
      <template v-for="{ key, item } in deskmatItems" :key="item.slug">
        <DeskmatWebsite v-if="key === 'website'" :website="(item as Website)" />
        <DeskmatPost v-else :post="(item as Post)" />
      </template>
    </DeskmatGrid>
  </AppPadding>
</template>
