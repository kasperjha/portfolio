<template>
  <!-- TODO: extract bottom popover layout -->
  <div class="fixed left-0 bottom-0 w-full flex justify-center">
    <div class="w-full max-w-lg border border-gray-800 bg-white">

      <h2 class="font-bold text-xl">
        {{ project.title }}
      </h2>
      <p>
        {{ project.short_description }}
      </p>

      <!-- TODO: extract button component -->
      <NuxtLink v-if="project.visit_url" :to="project.visit_url">
        <button class="w-full border border-gray-800">
          Visit Website
        </button>
      </NuxtLink>

      <NuxtLink v-if="project.github_url" :to="project.github_url">
        <button class="w-full border border-gray-800">
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
