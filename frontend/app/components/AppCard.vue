<script lang="ts" setup>
interface Props {
  label: string
}
defineProps<Props>()
</script>

<template>
  <div class="rounded-xl border border-neutral-400 overflow-hidden">
    <div class="relative border-b border-neutral-400 bg-neutral-100 h-9 ">
      <slot name="header">
        <div class="h-full flex justify-center items-center">
          <p class="font-mono text-xs">
            {{ label }}
          </p>
        </div>
      </slot>
    </div>
    <slot />
  </div>
</template>
