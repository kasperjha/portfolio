<template>
  <component :is="headingTag" class="uppercase text-black text-md">
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
