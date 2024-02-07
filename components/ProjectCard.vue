<template>
  <div
    class="cursor-pointer min-h-[75px] border bg-white border-gray-800 hover:bg-blue-100 flex items-center p-4 gap-6 transition"
    :class="{ 'border-blue-800 bg-blue-100': selected }"
  >
    <ProjectIcon :palette="project.project_palette">
      {{ project.title.slice(0, 2) }}
    </ProjectIcon>
    <p class="text-xl font-bold">{{ project.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { Project } from '../types/Projects';
defineEmits(['selectedProject'])
defineProps<{ project: Project, selected: boolean }>()
</script>
