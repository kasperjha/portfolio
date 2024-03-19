<template>
  <button
    class="py-2 px-4 border rounded-md"
    :class="variantStyles"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{variant: 'primary' | 'secondary'}>(), {
  variant: 'primary'
});

const variantStyles = computed(() => ({
  'bg-purple-600 text-white hover:brightness-95 border-purple-600': props.variant == 'primary',
  'text-purple-600 bg-purple-100/50 border-purple-200 hover:brightness-95': props.variant == 'secondary'
}))
</script>
