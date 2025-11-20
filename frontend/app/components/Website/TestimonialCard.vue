<script lang="ts" setup>
import type { WebsiteTestimonial } from '~/types/cms/components/WebsiteTestimonial'

interface Props {
  testimonial: WebsiteTestimonial
}
defineProps<Props>()
</script>

<template>
  <AppCard label="testimonial">
    <div class="px-7 py-6 space-y-6">
      <p class="font-light">
        "{{ testimonial.quote }}"
      </p>

      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3.5">
          <NuxtPicture
            width="40px"
            height="40px"
            sizes="40px"
            :src="useMediaUrl(testimonial.avatar.url)"
            :alt="testimonial.avatar.alternativeText"
            :img-attrs="{ class: 'rounded-full size-10' }"
          />
          <div class="leading-none">
            <p class="font-bold">
              {{ testimonial.name }}
            </p>
            <p class="font-light">
              {{ testimonial.title }}
            </p>
          </div>
        </div>
        <img class="h-10" :src="useMediaUrl(testimonial.company_logo.url)" :alt="testimonial.company_logo.alternativeText">
      </div>
    </div>
  </AppCard>
</template>
