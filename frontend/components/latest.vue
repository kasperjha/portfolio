<template>
  <button v-if="latest"
    class="group text-xs w-full bg-purple-100/40 hover:brightness-95 border border-purple-200 py-2 px-4 rounded-full text-purple-600 flex items-center">
    <BoltIcon class="size-3 inline animate-pulse mr-1" />
    <!-- TODO: remove hardcoded latest entries -->
    <p class="mr-3 animate-pulse">
      {{ latest.date }}
    </p>
    <p class="overflow-hidden truncate text-ellipsis">
      <StrapiBlocksText :nodes="latest.content" />
    </p>
  </button>
</template>

<script setup lang="ts">
import { BoltIcon } from '@heroicons/vue/16/solid';
import { latest } from '~/data/latest';

const strapi = useStrapi()
const latest = ref<LatestEntry | undefined>(undefined);

strapi.find('latest-updates', { sort: 'date:desc', populate: '*' })
  .then((res) => latest.value = res.data.length ? res.data[0] : undefined)
  .catch((error) => console.error(error))
</script>
