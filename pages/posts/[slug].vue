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
const { data } = await useAsyncData(() => queryContent('/posts/' + route.params.slug).findOne());
const post = data;
</script>

<style>
.content p {
  margin-bottom: 1.25rem;
}
</style>
