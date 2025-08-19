<template>
  <NuxtLink :to="`/posts/${post.slug}`" class="block">
    <article class="rounded-lg p-6 border hover:bg-purple-200/50 border-gray-200 bg-gray-100/50 transition">
      <h2 class="mb-2 text-md text-black">{{ post.title }}</h2>
      <p class="text-sm text-gray-600 mb-6" v-if="variant !== 'small'">
        {{ post.description }}
      </p>

      <div class="space-x-6 text-xs text-purple-600">
        <span>{{ post.published }}</span>
        <div class="space-x-3 inline">
          <span v-for="tag in tags">#{{ tag }}</span>
        </div>
      </div>
    </article>
  </NuxtLink>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { Post } from '../types/Post';
import { parseStringList } from '../util/cms';

interface Props {
  post: Post
  variant?: 'default' | 'small'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default'
})

const tags = computed(() => parseStringList(props.post.tags))
</script>
