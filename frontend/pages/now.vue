<template>
  <div>
    <BasePageTitle class="mb-2">
      What's up?
    </BasePageTitle>

    <p class="mb-8">
      On this page I share what i've been focusing on recently
      (<a href="https://nownownow.com/about">now page</a>).
      <span v-if="entries.length">
        Last updated on {{ entries[0].date }}.
      </span>
    </p>


    <div v-for="entry in entries" class="grid grid-cols-3 gap-x-2 gap-y-5 mb-10">
      <p class="text-purple-800">{{ entry.date }}</p>
      <div class="col-span-2">
        <StrapiBlocksText :nodes="entry.content" />
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
await strapi.find<LatestEntry>('latest-updates')
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
