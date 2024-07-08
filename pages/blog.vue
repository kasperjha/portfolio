<template>
  <div>
    <BasePageTitle class="mb-5">
      Blog
    </BasePageTitle>

    <section class="space-y-4">
      <NuxtLink v-for="post in data" :to="`/posts/${post.slug}`">
        <BlogPostCard :post="post" />
      </NuxtLink>
    </section>
  </div>
</template>

<script setup>
const data = await queryContent('posts').find();
</script>
