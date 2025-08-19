<template>
  <div v-if="post !== undefined">
    <BasePageTitle class="mb-3">{{ post.title }}</BasePageTitle>
    <div class="flex gap-8 text-sm text-purple-600">
      <span>{{ post.published }}</span>
      <div class="flex gap-4 mb-10">
        <span v-for="tag in tags">#{{ tag }}</span>
      </div>
    </div>
    <div class="content text-gray-800">
      <StrapiBlocksText :nodes="post.content"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { Post } from '../../types/Post';
import { parseStringList } from '../../util/cms';

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
    post.value = res.data.length ? res.data[0] : undefined;
    if(post.value === undefined) {
      throw new Error('Could not fetch blogpost: no blogposts matching slug found.')
    }
  })
  .catch((error) => console.error(error))

if (post.value === undefined) {
  throw new Error('Cannot render page. Post is undefined.')
}

const tags = computed(() => parseStringList(post.value.tags))

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
