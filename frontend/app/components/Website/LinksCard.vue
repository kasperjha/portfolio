<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

interface Props {
  website: Website
}
defineProps<Props>()
</script>

<template>
  <AppCard label="links" class="w-3xs">
    <div class="px-7 py-6">
      <div v-for="link in website.links" :key="link.url">
        <NuxtLink class=" flex items-center gap-1" :to="link.url">
          <p class="underline text-blue-700">
            {{ link.label }}
          </p>
          <UIcon name="humbleicons:link" class="size-4" />
        </NuxtLink>
      </div>
    </div>
  </AppCard>
</template>
