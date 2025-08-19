<template>
  <div>
    <BasePageTitle>Posts</BasePageTitle>

    <p class="mb-8">
      Once in a while I write about software, design and ongoing projects.
      Please do reach out if you have any thoughts, comments or suggestions.
    </p>

    <section class="space-y-4">
      <BlogPostCard v-for="post in posts" :post="post" />
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Post } from '../types/Post';

const strapi = useStrapi();

const posts = ref<Post[]>([]);

strapi.find<Post>('posts')
  .then((res) => posts.value = res.data)
  .catch((error) => console.error('Could not fetch posts: ', error))

useSeoMeta({
  title: 'alfarnes.dev - blog',
  description: 'Once in a while I write about software, design and ongoing projects. Please do reach out if you have any thoughts, comments or suggestions.'
})

</script>
