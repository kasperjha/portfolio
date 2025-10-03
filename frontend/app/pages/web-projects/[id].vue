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
  <AppPadding>
    <WebsiteMockupCard :website />
  </AppPadding>
</template>
