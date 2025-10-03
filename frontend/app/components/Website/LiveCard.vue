<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

defineProps<Props>()

interface Props {
  website: Website
}
</script>

<template>
  <AppCard :label="website.slug">
    <template #header>
      <div class="h-full flex justify-center items-center">
        <p class="text-xs font-mono">
          {{ website.slug }}
        </p>
        <div class="flex items-center gap-1 absolute right-4">
          <p class="text-xs font-mono text-green-700">
            live
          </p>
          <div class="rounded-full size-1.5 bg-green-700 animate-pulse" />
        </div>
      </div>
    </template>
    <iframe :src="website.live_url" height="630" width="330" />
  </AppCard>
</template>
