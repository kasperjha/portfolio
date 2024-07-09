<template>
  <div>
    <BasePageTitle class="mb-2">
      Blog
    </BasePageTitle>

    <p class="mb-8">
      Once in a while I write about software, design and ongoing projects.
      Please do reach out if you have any thoughts, comments or suggestions.
    </p>

    <section class="space-y-4">
      <BlogPostCard v-for="post in data" :post="post" />
    </section>
  </div>
</template>

<script setup>
const data = await queryContent('posts').find();

useSeoMeta({
  title: 'kakka.dev - blog',
  description: 'Once in a while I write about software, design and ongoing projects. Please do reach out if you have any thoughts, comments or suggestions.'
})

</script>
