<template>
  <div v-if="post !== undefined">
    <BasePageTitle class="mb-3">{{ post.title }}</BasePageTitle>
    <div class="flex gap-8 text-sm text-purple-600">
      <span>{{ post.published }}</span>
    </div>
    <div class="content text-gray-800">
      <StrapiBlocksText :nodes="post.content"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Post } from '../../types/Post';

const route = useRoute();
const strapi = useStrapi();

const post = ref<Post | undefined>(undefined)

const slug = route.params.slug
const options = {
  filters: { slug: { $eq: slug } },
  populate: '*',
}

await strapi.find<Post>('posts', options)
  .then((res) => {
    if(res.data.length < 1) {
      throw new Error('Could not fetch blogpost: no blogposts matching slug found.')
    } else {
      post.value = res.data[0]
    }
  })
  .catch((error) => console.error(error))

if (post.value === undefined) {
  throw new Error('Cannot render page. Post is undefined.')
}

useSeoMeta({
  title: post.value.title,
  description: post.value.description,
  ogType: 'article',
  ogUrl: `https://alfarnes.dev/posts/${post.value.slug}/`,
  ogTitle: post.value.title,
  ogDescription: post.value.description,
})

defineOgImageComponent('BlogPost', {
  post: post.value
})
</script>

<style>
.content p {
  margin-bottom: 1.25rem;
}
</style>
