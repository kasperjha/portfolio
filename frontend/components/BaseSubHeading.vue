<template>
  <component :is="headingTag" class="uppercase text-gray-900 text-md">
    <slot></slot>
  </component>
</template>

<script lang="ts" setup>
interface Props {
  level: number
}
const props = defineProps<Props>()
const headingTag = computed(() => `h${props.level}`);
</script>
