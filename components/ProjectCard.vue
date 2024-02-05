<template>
  <div class="min-h-[75px] rounded-lg border bg-gray-200 border-gray-800 hover:bg-blue-200 flex p-4 gap-6 transition">
    <div class="flex flex-col justify-center gap-1" >
      <p class="text-xl font-bold">{{ project.title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from '../types/Projects';
defineEmits(['selectedProject'])
defineProps<{project: Project}>()
</script>
