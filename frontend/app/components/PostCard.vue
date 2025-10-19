<script lang="ts" setup>
import type { Post } from '~/types/cms/collections/Post'

interface Props {
  post: Post
}
const props = defineProps<Props>()
</script>

<template>
  <article class="rounded-xl border border-neutral-400 bg-neutral-100">
    <div class="border-4 border-neutral-50 px-7 space-y-5 py-8 rounded-xl h-full shadow-md flex flex-col">
      <h2 class="text-xl text-neutral-800 leading-8">
        {{ post.title }}
      </h2>
      <p class="leading-7 line-clamp-4">
        {{ post.description }}
      </p>
      <div class="font-mono flex justify-between mt-auto text-sm">
        <p>02 MAR, 24</p>
        <p>21 min read</p>
      </div>
    </div>
  </article>
</template>
