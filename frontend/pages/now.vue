<template>
  <div>
    <BasePageTitle>Latest</BasePageTitle>

    <div class="space-y-4">
      <div v-for="entry in entries" class="">
        <p class="text-purple-800">{{ entry.date }}</p>
        <div class="col-span-2">
          <StrapiBlocksText :nodes="entry.content" />
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Strapi from "strapi-sdk-js"
import { LatestEntry } from '../types/LatestEntry';
import { useStrapi } from '../composables/useStrapi';

const strapi = useStrapi()

const entries = ref<LatestEntry[]>([]);
await strapi.find<LatestEntry>('latest-updates', {
  sort: 'date:desc',
})
  .then((res) => entries.value = res.data)
  .catch((error) => console.error(error))

useSeoMeta({
  title: 'alfarnes.dev - now',
  ogTitle: 'alfarnes.dev - now',
  description: 'Read about what\'s been my focus lately.',
  ogDescription: 'Read about what\'s been my focus lately.',
  ogImage: '/me.jpeg'
})
</script>
