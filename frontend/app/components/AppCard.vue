<script lang="ts" setup>
interface Props {
  label: string
}
defineProps<Props>()
</script>

<template>
  <div class="rounded-xl border border-neutral-400 w-[330px] overflow-hidden">
    <div class="border-b border-neutral-400 bg-neutral-100 h-9 flex justify-center items-center">
      <p class="font-mono text-xs text-neutral-700">
        {{ label }}
      </p>
    </div>
    <slot />
  </div>
</template>
