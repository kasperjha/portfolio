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
      <!-- assuming the verical mockup will not be shown larger than 330x630 px -->
      <NuxtImg
        class="w-full h-[630px] object-cover"
        width="330px"
        height="630px"
        :src="useMediaUrl(website.mockups.mobile.url)"
        :alt="`Screenshot of ${website.slug} on mobile`"
      />
    </div>
    <!-- assuming horizontal mockup will not be shown larger than 557x343 px -->
    <div v-if="variant === 'horizontal'" class="aspect-[512/315]">
      <NuxtImg
        class="w-full object-cover"
        :src="useMediaUrl(website.mockups.desktop.url)"
        width="557"
        height="343"
        :alt="`Screenshot of ${website.slug} on desktop`"
      />
    </div>
  </AppCard>
</template>
