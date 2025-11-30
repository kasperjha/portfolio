<script setup lang="ts">
import type { Post } from '~/types/cms/collections/Post'

const strapi = useStrapi()
const { data: posts } = useAsyncData(
  async () => (await strapi.find<Post>('posts')).data,
)

useBreadcrumbs([
  { label: 'home', to: '/' },
  { label: 'txt' },
])

useSeoMeta({
  title: 'Posts',
  description: `${posts.value?.length} posts about something I found interesting.`,
  ogTitle: 'Posts',
  ogDescription: `${posts.value?.length} posts about something I found interesting.`,
})
</script>

<template>
  <AppPadding>
    <DeskmatGrid>
      <DeskmatPost v-for="post in posts" :key="post.slug" :post />
    </DeskmatGrid>
  </AppPadding>
</template>
