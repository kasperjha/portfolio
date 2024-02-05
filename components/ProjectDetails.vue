<template>
  <!-- TODO: extract bottom popover layout -->
  <div class="fixed left-0 bottom-0 w-full flex justify-center">
    <div class="w-full max-w-lg border border-gray-800 bg-white p-6 pt-8 pb-4 text-base">

      <h2 class="text-2xl font-bold">
        {{ project.title }}
      </h2>

      <p class="pt-4">
        {{ project.short_description }}
      </p>

      <!-- TODO: extract button component -->
      <NuxtLink v-if="project.visit_url" :to="project.visit_url" class="block pt-6">
        <button class="w-full border border-gray-800 py-2">
          Visit Website
        </button>
      </NuxtLink>

      <NuxtLink v-if="project.github_url" :to="project.github_url" class="block pt-2">
        <button class="w-full border border-gray-800 py-2">
          View on GitHub
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Project } from '../types/Projects';
defineProps<{ project: Project }>();
</script>
