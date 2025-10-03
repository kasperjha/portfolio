<script lang="ts" setup>
const items = [
  { label: 'all', to: '/' },
  { label: 'web', to: '/web' },
]

const route = useRoute()
</script>

<template>
  <!-- TODO: implement working toggle -->
  <div class="flex bg-neutral-900 h-10 p-px rounded-full">
    <NuxtLink v-for="item in items" :key="item.to" :to="item.to" class="block px-4 py-3 font-mono text-neutral-100 text-xs rounded-full transition" :class="{ 'bg-neutral-100 text-neutral-900': route.path === item.to }">
      {{ item.label }}
    </NuxtLink>
  </div>
</template>
