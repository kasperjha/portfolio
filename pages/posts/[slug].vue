<template>
  <div>
    <BasePageTitle class="mb-5">{{ post.title }}</BasePageTitle>
    <div class="flex gap-8 text-sm text-gray-600">
      <span>{{ post.published }}</span>
      <div class="flex gap-4 mb-10">
        <span v-for="tag in post.tags">#{{ tag }}</span>
      </div>
    </div>
    <ContentRenderer :value="post" />
  </div>
</template>

<script lang="ts" setup>
import type { Post } from '~/types/Post';

const route = useRoute();
const { data } = useAsyncData(() => queryContent('/posts/' + route.params.slug).findOne());
const post: Post = data;
</script>
