<template>
  <div id="container">
    <div class="h-full w-full bg-purple-50/50 font-mono flex items-center justify-center border p-16 ">
      <div class="max-w-4xl">
        <h1 class="text-3xl">{{ post.title }}</h1>
        <p class="text-xl text-gray-600 leading-relaxed pt-4">{{ post.description }}</p>
        <div class="flex text-lg items-center gap-4 w-full mt-6 ">
          <img src="/me.jpeg" alt="" class="min-w-12 size-12 rounded-full border-[3px] border-purple-600/50">
          <p class="text-md mr-16 ">Kasper Alfarnes</p>
          <span v-for="tag in post.tags" class="text-purple-600">#{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from '../types/Post';

interface Props {
  post: Post
}
defineProps<Props>()
</script>

<style lang="css" scoped>
#container {
  --dot-bg: white;
  --dot-color: gray;
  --dot-size: 1px;
  --dot-space: 20px;
  background:
    linear-gradient(90deg, var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    linear-gradient(var(--dot-bg) calc(var(--dot-space) - var(--dot-size)), transparent 1%) center / var(--dot-space) var(--dot-space),
    var(--dot-color);
}
</style>
