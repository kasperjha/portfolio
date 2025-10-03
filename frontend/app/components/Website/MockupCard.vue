<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

defineProps<Props>()

interface Props {
  website: Website
}
</script>

<template>
  <AppCard :label="website.slug" class="w-[330px]">
    <img class="w-full h-[630px] object-cover" :src="useMediaUrl(website.mockups.mobile.url)"></img>
  </AppCard>
</template>
