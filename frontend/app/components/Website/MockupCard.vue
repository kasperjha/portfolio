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
    <div v-if="variant === 'vertical'" class="aspect-[11/21]">
      <img
        class="w-full h-[630px] object-cover"
        :src="useMediaUrl(website.mockups.mobile.url)"
        :alt="`Screenshot of ${website.slug} on mobile`"
      >
    </div>
    <div v-if="variant === 'horizontal'" class="aspect-[512/315]">
      <img
        class="w-full object-cover"
        :src="useMediaUrl(website.mockups.desktop.url)"
        :alt="`Screenshot of ${website.slug} on desktop`"
      >
    </div>
  </AppCard>
</template>
