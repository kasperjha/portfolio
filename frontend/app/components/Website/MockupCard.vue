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
      <NuxtPicture
        class="w-full h-[630px] object-cover"
        width="330px"
        height="630px"
        format="webp"
        :src="useMediaUrl(website.mockups.mobile.url)"
        :alt="`Screenshot of ${website.slug} on mobile`"
      />
    </div>
    <!-- assuming horizontal mockup will not be shown larger than 557x343 px -->
    <div v-if="variant === 'horizontal'" class="aspect-[512/315]">
      <NuxtPicture
        class="w-full object-cover"
        :src="useMediaUrl(website.mockups.desktop.url)"
        width="557px"
        height="343px"
        format="webp"
        :alt="`Screenshot of ${website.slug} on desktop`"
      />
    </div>
  </AppCard>
</template>
