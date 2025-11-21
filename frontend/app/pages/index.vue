<script lang="ts" setup>

// TODO: support preview feature
const websites = ref()

const options = {
  populate: {
    mockups: { populate: '*' },
    about: { populate: '*' },
    testimonial: { populate: '*' },
  },
  sort: ['actuallyPublishedAt:desc', 'publishedAt'],
}

const strapi = useStrapi()
await strapi.find('websites', options)
  .then(res => websites.value = res.data)

useBreadcrumbs([{ label: 'home', to: '/' }])
</script>

<template>
  <AppPadding>
    <DeskmatGrid>
      <DeskmatWebsite v-for="website in websites" :key="website.slug" :website />
    </DeskmatGrid>
  </AppPadding>
</template>
