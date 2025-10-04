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
        width="330px"
        height="630px"
        sizes="330px"
        :img-attrs="{ class: 'w-full h-[630px] object-cover' }"
        :src="useMediaUrl(website.mockups.mobile.url)"
        :alt="`Screenshot of ${website.slug} on mobile`"
        loading="lazy"
      />
    </div>
    <!-- assuming horizontal mockup will not be shown larger than 557x343 px -->
    <div v-if="variant === 'horizontal'" class="aspect-[512/315]">
      <NuxtPicture
        :src="useMediaUrl(website.mockups.desktop.url)"
        width="1024px"
        height="630px"
        sizes="558px sm:686px"
        :alt="`Screenshot of ${website.slug} on desktop`"
        :img-attrs="{ class: 'w-full object-cover' }"
        loading="lazy"
      />
    </div>
  </AppCard>
</template>
