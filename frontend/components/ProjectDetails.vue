<template>
  <div class="fixed left-0 bottom-0 w-full flex justify-center pointer-events-none">
    <!-- TODO: extract bottom popover layout -->
    <div class="w-full max-w-lg border shadow-xl border-gray-200 rounded-t-lg bg-white/80 backdrop-blur-xl p-6 pt-6 pb-4 text-base pointer-events-auto">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-medium text-gray-800">
          {{ project.title }}
        </h2>
        <button @click="$emit('close')" class="h-6 w-6 p-1 box-content rounded-sm hover:bg-purple-200/50 transition">
          <XMarkIcon/>
        </button>
      </div>

      <div class="flex flex-wrap mt-2 gap-1">
        <span v-for="technology in technologies" class="text-xs bg-blue-100/40 border border-blue-200 py-1 px-2 rounded-full text-blue-600 flex items-center">
          {{ technology }}
        </span>
      </div>

      <p class="mt-6 text-gray-600 leading-relaxed">
        {{ project.short_description }}
      </p>

      <BlogPostCard
        v-if="project.related_post"
        variant="small"
        :post="project.related_post"
        class="mt-6"
      />


      <div class="mt-10 text-sm">
        <NuxtLink v-if="project.website_url" :to="project.website_url" class="block">
          <BaseButton class="w-full" variant="primary">
            Visit Website <ArrowTopRightOnSquareIcon class="w-4 h-4 inline"/>
          </BaseButton>
        </NuxtLink>

        <NuxtLink v-if="project.demo_url" :to="project.demo_url" class="block pt-2">
          <BaseButton class="w-full" variant="primary">
            Visit Demo <ArrowTopRightOnSquareIcon class="w-4 h-4 inline"/>
          </BaseButton>
        </NuxtLink>

        <NuxtLink v-if="project.github_url" :to="project.github_url" class="block pt-2">
          <BaseButton class="w-full" variant="secondary">
            View on GitHub <ArrowTopRightOnSquareIcon class="w-4 h-4 inline"/>
          </BaseButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/solid'
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/16/solid'
import type { Project } from '../types/Projects';
import type { Post } from '../types/Post';
import { parseStringList } from '../util/cms';
import { computed } from 'vue';

interface Props {
  project: Project
}

const props = defineProps<Props>();

const technologies = computed(() => parseStringList(props.project.technologies))
</script>
