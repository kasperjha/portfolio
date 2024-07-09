<template>
  <div>
    <BasePageTitle class="mb-5">
      Blog
    </BasePageTitle>

    <section class="space-y-4">
      <BlogPostCard v-for="post in data" :post="post" />
    </section>
  </div>
</template>

<script setup>
const data = await queryContent('posts').find();
</script>
