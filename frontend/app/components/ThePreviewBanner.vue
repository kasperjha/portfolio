<script lang="ts" setup>
const { enabled, state } = useCmsPreviewMode()
</script>

<template>
  <div v-if="enabled" class="flex justify-center gap-1 items-center bg-amber-100 text-amber-600 px-6 h-8 rounded ">
    <UIcon name="humbleicons:eye" />
    <p class="text-xs font-mono">
      previewing {{ state.status }} content
    </p>
  </div>
</template>
