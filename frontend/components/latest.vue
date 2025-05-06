<template>
  <button
    class="group text-xs w-full bg-purple-100/40 hover:brightness-95 border border-purple-200 py-2 px-4 rounded-full text-purple-600 flex items-center">
    <BoltIcon class="size-3 inline animate-pulse mr-1" />
    <p class="mr-3 animate-pulse">
      {{ latest[0].date }}
    </p>
    <p class="overflow-hidden truncate text-ellipsis">
      {{ latest[0].content }}
    </p>
  </button>
</template>

<script setup lang="ts">
import { BoltIcon } from '@heroicons/vue/16/solid';
import { latest } from '~/data/latest';
</script>
