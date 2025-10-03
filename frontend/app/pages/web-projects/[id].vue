<script lang="ts" setup>
const route = useRoute()

const website = ref()

const options = {
  populate: {
    mockups: { populate: '*' },
    about: { populate: '*' },
    testemonial: { populate: '*' },
  },
}

const strapi = useStrapi()
await strapi.findOne('websites', route.params.id as string, options)
  .then(res => website.value = res.data)
</script>

<template>
  <AppPadding class="flex gap-5 items-start">
    <WebsiteMockupCard :website />
    <WebsiteAboutCard :website />
  </AppPadding>
</template>
