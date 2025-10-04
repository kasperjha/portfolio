<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

interface Props {
  website: Website
}
defineProps<Props>()
</script>

<template>
  <AppCard label="testimonial">
    <div class="px-7 py-6 space-y-6">
      <p class="font-light">
        "{{ website.testimonial.quote }}"
      </p>

      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3.5">
          <NuxtPicture
            width="40px"
            height="40px"
            sizes="40px"
            :src="useMediaUrl(website.testimonial.avatar.url)"
            :alt="website.testimonial.avatar.alternativeText"
            :img-attrs="{ class: 'rounded-full size-10' }"
          />
          <div class="leading-none">
            <p class="font-bold">
              {{ website.testimonial.name }}
            </p>
            <p class="font-light">
              {{ website.testimonial.title }}
            </p>
          </div>
        </div>
        <img class="h-10" :src="useMediaUrl(website.testimonial.company_logo.url)" :alt="website.testimonial.company_logo.alternativeText">
      </div>
    </div>
  </AppCard>
</template>
