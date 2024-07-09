<template>
  <div>
    <BasePageTitle class="mb-2">
      What's up?
    </BasePageTitle>

    <p class="mb-8">
      On this page I share what i've been focusing on recently
      (<a href="https://nownownow.com/about">now page</a>).
      Last updated on {{ latest[0].date }}.
    </p>

    <div v-for="entry in latest" class="grid grid-cols-3 gap-x-2 gap-y-5 mb-10">
      <p class="text-purple-800">{{ entry.date }}</p>
      <p class="col-span-2">{{ entry.content }}</p>
    </div>

  </div>
</template>

<script setup lang="ts">

import { latest } from '~/data/latest'

useSeoMeta({
  title: 'kakka.dev - now',
  ogTitle: 'kakka.dev - now',
  description: 'Read about what\'s been my focus lately.',
  ogDescription: 'Read about what\'s been my focus lately.',
  ogImage: '/me.jpeg'
})
</script>
