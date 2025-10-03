<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'
import { formatRelativeTime } from '~/modules/utility/time'

interface Props {
  website: Website
}
defineProps<Props>()
</script>

<template>
  <AppCard label="links" class="w-3xs">
    <div class="px-7 py-6">
      <p>updated {{ formatRelativeTime(website.updatedAt) }}</p>
    </div>
  </AppCard>
</template>
