<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

defineProps<Props>()

interface Props {
  website: Website
}
</script>

<template>
  <div class="rounded-xl border border-neutral-400 w-[330px] overflow-hidden">
    <div class="border-b border-neutral-400 bg-neutral-100 h-9 flex justify-center items-center">
      <p class="font-mono text-xs text-neutral-700">
        {{ website.slug }}
      </p>
    </div>
    <img class="w-full h-[630px] object-cover" :src="useMediaUrl(website.mockups.mobile.url)">
  </div>
</template>
