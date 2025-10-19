<script lang="ts" setup>
const post = ref()
const route = useRoute()
const strapi = useStrapi()
await strapi.findOne('posts', route.params.id as string)
  .then(res => post.value = res.data)

useBreadcrumbs([
  { label: 'home', to: '/' },
  { label: post.value.slug },
])
</script>

<template>
  <AppPadding>
    <div class="max-w-lg">
      <ProseH2>{{ post.title }}</ProseH2>

      <MDC :value="post.content" />
    </div>
  </AppPadding>
</template>
