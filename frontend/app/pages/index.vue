<script lang="ts" setup>
// TODO: support preview feature
const websites = ref()

const options = {
  populate: {
    mockups: { populate: '*' },
    about: { populate: '*' },
    testemonial: { populate: '*' },
  },
}

const strapi = useStrapi()
strapi.find('websites', options)
  .then(res => websites.value = res.data)
</script>

<template>
  <AppPadding class="flex flex-wrap gap-5">
    <WorkItemWebsite
      v-for="website in websites"
      :key="website.slug"
      :website="website"
      class="cursor-pointer"
    />
  </AppPadding>
</template>
