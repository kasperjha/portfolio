<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

interface Props {
  website: Website
}
defineProps<Props>()
</script>

<template>
  <AppCard label="about">
    <div class="px-7 py-8 space-y-8">
      <div class="space-y-4">
        <h2 class="text-2xl">
          {{ website.about.title }}
        </h2>

        <p class="text-lg">
          {{ website.about.ingress }}
        </p>

        <div class="flex gap-px flex-wrap">
          <!-- TODO: make tags clickable -->
          <div v-for="tag in website.tags" :key="tag" class="flex items-center font-mono text-xs h-7 px-3 bg-purple-100 text-purple-700">
            {{ tag.name }}
          </div>
        </div>
      </div>

      <div v-if="website.about.description" class="space-y-3 font-light">
        <StrapiBlocksText :nodes="website.about.description" />
      </div>
    </div>
  </AppCard>
</template>
