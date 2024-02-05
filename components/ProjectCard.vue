<template>
  <div
    class="cursor-pointer min-h-[75px] border border-gray-800 hover:bg-blue-100 flex p-4 gap-6 transition"
    :class="{ 'border-blue-800 bg-blue-100': selected }"
  >
    <div class="flex flex-col justify-center gap-1" >
      <p class="text-xl font-bold">{{ project.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from '../types/Projects';
defineEmits(['selectedProject'])
defineProps<{project: Project, selected: boolean}>()
</script>
