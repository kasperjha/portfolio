<script setup lang="ts">
import type { Website } from '~/types/cms/collections/Website'
import { buildWebsiteProjectUrl } from '~/modules/utility/urls'

interface Props {
  website: Website
}

defineProps<Props>()
</script>

<template>
  <NuxtLink
    :to="buildWebsiteProjectUrl((website as Website))"
    class="row-span-2"
  >
    <WebsiteMockupCard
      variant="horizontal"
      :website
      class="min-[760px]:hidden"
    />
    <WebsiteMockupCard
      variant="vertical"
      class="hidden min-[760px]:block"
      :website
    />
  </NuxtLink>
</template>
