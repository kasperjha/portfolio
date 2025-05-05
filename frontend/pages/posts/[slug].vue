<template>
  <div>
    <BasePageTitle class="mb-3">{{ post.title }}</BasePageTitle>
    <div class="flex gap-8 text-sm text-purple-600">
      <span>{{ post.published }}</span>
      <div class="flex gap-4 mb-10">
        <span v-for="tag in post.tags">#{{ tag }}</span>
      </div>
    </div>
    <div class="content text-gray-800">
      <ContentRenderer :value="post" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = await useAsyncData(() => queryContent().where({ 'slug': route.params.slug }).findOne());
const post = data;

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
