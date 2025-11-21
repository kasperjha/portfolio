<script setup lang="ts">
const posts = ref()
const strapi = useStrapi()
await strapi.find('posts')
  .then(res => posts.value = res.data)

useBreadcrumbs([
  { label: 'home', to: '/' },
  { label: 'txt' },
])
</script>

<template>
  <AppPadding>
    <DeskmatGrid>
      <DeskmatPost v-for="post in posts" :key="post.slug" :post />
    </DeskmatGrid>
  </AppPadding>
</template>
