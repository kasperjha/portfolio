<template>
  <div id="container" class="w-full">
    <div class="h-full w-full bg-purple-50 flex items-center justify-center">
      <div class="max-w-4xl mt-8">
        <h1 class="text-4xl m-0">{{ post.title }}</h1>
        <p class="m-0 text-3xl text-gray-600 pt-6">{{ post.description }}</p>
        <div class="flex text-3xl text-gray-600 flex-row items-center w-full mt-6">
          <img src="/me.jpeg" alt="Profile picture of Kasper Alfarnes"
            class="min-w-14 mr-4 size-14 rounded-full border-[4px] border-purple-600/50">
          <p class="mr-20 ">Kasper Alfarnes</p>
          <span v-for="tag in post.tags" class="text-purple-500 mr-8">#{{ tag }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from '../../types/Post';

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
