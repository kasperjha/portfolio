<script lang="ts" setup>
import type { Post } from '~/types/cms/collections/Post'
import { buildPostUrl } from '~/modules/utility/urls'

interface Props {
  post: Post
}
defineProps<Props>()
</script>

<template>
  <NuxtLink :to="buildPostUrl(post)">
    <PostCard :post class="row-span-1 h-full" />
  </NuxtLink>
</template>
