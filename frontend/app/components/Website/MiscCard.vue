<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'
import { formatRelativeTime } from '~/modules/utility/time'

interface Props {
  website: Website
}
defineProps<Props>()
</script>

<template>
  <AppCard label="misc">
    <div class="px-7 py-6 font-light">
      <p v-if="website.actuallyPublishedAt">
        published {{ formatRelativeTime(website.actuallyPublishedAt) }}
      </p>
      <p v-else>
        published {{ formatRelativeTime(website.createdAt) }}
      </p>
      <p>updated {{ formatRelativeTime(website.updatedAt) }}</p>
    </div>
  </AppCard>
</template>
