<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

interface Props {
  website: Website
}
defineProps<Props>()

const tags = ['klosure', 'web', 'design']
</script>

<template>
  <AppCard label="about" class="max-w-sm">
    <div class="px-7 py-8 space-y-8">
      <div class="space-y-4">
        <h2 class="text-2xl">
          {{ website.about.title }}
        </h2>

        <p class="text-lg">
          {{ website.about.ingress }}
        </p>

        <div class="flex gap-px flex-wrap">
          <div v-for="tag in tags" :key="tag" class="flex items-center font-mono text-xs h-7 px-3 bg-purple-100 text-purple-700">
            {{ tag }}
          </div>
        </div>
      </div>

      <div class="space-y-3">
        <StrapiBlocksText
          v-if="website.about.description"
          :nodes="website.about.description"
        />
      </div>
    </div>
  </AppCard>
</template>
