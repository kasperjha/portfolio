<template>
  <div class="h-10 w-10 flex items-center justify-center" :style="iconStyles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '../types/Projects';

const { palette } = defineProps<{ palette: Project['project_palette']}>()
const allIconColours = {
  'sapling': ['#030400', '#9CDB00'],
  'blue': ['#FFFFFF', '#0000FF'],
  'eyez': ['#FFFFFF', '#FF00FF'],
  'toxic': ['#82FF00', '#FF2B81'],
}
const iconColour = allIconColours[palette]
const iconStyles = computed(() => ({
  color: iconColour[0],
  'background-color': iconColour[1]
}))
</script>
