<template>
  <div>
    <BasePageTitle class="mb-3">{{ post.title }}</BasePageTitle>
    <div class="flex gap-8 text-sm text-purple-600">
      <span>{{ post.published }}</span>
      <div class="flex gap-4 mb-10">
        <span v-for="tag in post.tags">#{{ tag }}</span>
      </div>
    </div>
    <ContentRenderer :value="post" />
  </div>
</template>

<script setup>
const route = useRoute();
const { data } = await useAsyncData(() => queryContent('/posts/' + route.params.slug).findOne());
const post = data;
</script>
