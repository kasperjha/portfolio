<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

withDefaults(defineProps<Props>(), {
  variant: 'vertical',
})

interface Props {
  website: Website
  variant?: 'vertical' | 'horizontal'
}
</script>

<template>
  <AppCard :label="website.slug">
    <img
      v-if="variant === 'vertical'"
      class="w-full h-[630px] object-cover"
      width="330px"
      height="630px"
      :src="useMediaUrl(website.mockups.mobile.url)"
    >
    <img
      v-if="variant === 'horizontal'"
      class="w-full object-cover"
      :src="useMediaUrl(website.mockups.desktop.url)"
    >
  </AppCard>
</template>
