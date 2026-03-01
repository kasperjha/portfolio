<script lang="ts" setup>
import type { Post } from '~/types/cms/collections/Post'
import { applyPreviewParams } from '~/utils/cms/applyPreviewParams'

const strapi = useStrapi()
const route = useRoute()
const documentId = route.params.id as string
const { data: post } = useAsyncData(`txt-${documentId}`, async () =>
  (await strapi.findOne<Post>('posts', documentId, applyPreviewParams({}))).data)

useBreadcrumbs([
  { label: 'home', to: '/' },
  { label: 'txt', to: '/txt' },
  { label: post.value?.slug },
])

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
  ogTitle: post.value?.title,
  ogDescription: post.value?.description,
})
</script>

<template>
  <AppPadding>
    <div class="max-w-lg">
      <ProseH2>{{ post?.title }}</ProseH2>

      <!-- TODO: change link styles and color -->
      <MDC :value="post?.content" />
    </div>
  </AppPadding>
</template>
