<script lang="ts" setup>
const post = ref()
const route = useRoute()
const strapi = useStrapi()
await strapi.findOne('posts', route.params.id as string)
  .then(res => post.value = res.data)

useBreadcrumbs([
  { label: 'home', to: '/' },
  { label: post.value.slug, to: '/' },
])
</script>

<template>
  <AppPadding>
    <div class="max-w-lg">
      <h2>{{ post.title }}</h2>
    </div>
  </AppPadding>
</template>
