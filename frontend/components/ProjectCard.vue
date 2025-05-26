<template>
  <div
    class="cursor-pointer rounded-md min-h-[75px] border hover:bg-purple-200/50 flex items-center p-4 gap-6 transition"
    :class="{'bg-gray-100/50 border-gray-200 text-gray-800': !selected, 'bg-purple-200/50 border-purple-200': selected}"
  >
    <ProjectIcon :palette="project.project_palette">
      {{ project.title.slice(0, 2) }}
    </ProjectIcon>
    <p class="text-xl font-medium">{{ project.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { Project } from '../types/Projects';
defineEmits(['selectedProject'])
defineProps<{ project: Project, selected: boolean }>()
</script>
