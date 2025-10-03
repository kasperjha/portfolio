<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

interface Props {
  website: Website
}
defineProps<Props>()
</script>

<template>
  <AppCard label="testemonial" class="max-w-sm">
    <div class="px-7 py-6 space-y-6">
      <p class="font-light">
        "{{ website.testemonial.quote }}"
      </p>

      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3.5">
          <img class="rounded-full size-10" :src="useMediaUrl(website.testemonial.avatar.url)" :alt="website.testemonial.avatar.alternativeText">
          <div class="leading-none">
            <p class="font-bold">
              {{ website.testemonial.name }}
            </p>
            <p class="font-light">
              {{ website.testemonial.title }}
            </p>
          </div>
        </div>
        <img class="h-10" :src="useMediaUrl(website.testemonial.company_logo.url)" :alt="website.testemonial.company_logo.alternativeText">
      </div>
    </div>
  </AppCard>
</template>
