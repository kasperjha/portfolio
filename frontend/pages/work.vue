<template>
  <div class="mb-48">

    <BasePageTitle class="mb-2">
      Work
    </BasePageTitle>

    <p class="mb-8">
      These websites have been designed and developed by
      me. You can read about the project or visit an online demo
      by interacting with one of the cards below.
    </p>

    <div class="space-y-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :selected="selectedProjectId === project.id"
        @click="selectProject(project.id)" />
    </div>

    <Transition
      enterActiveClass="ease-out duration-200"
      leaveActiveClass="ease-in duration-100"
      enterFromClass="translate-y-52"
      enterToClass="translate-y-0"
      leaveFromClass="translate-y-0"
      leaveToClass="translate-y-52"
      mode="out-in"
    >
      <ProjectDetails
        style="will-change: transform;"
        class="transform transition-transform transform-gpu"
        v-if="selectedProject"
        :key="selectedProject.id"
        :project="selectedProject"
        @close="selectedProjectId = undefined"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Project } from '../types/Projects';

useSeoMeta({
  title: 'alfarnes.dev - work',
  description: 'Websites built and designed by Kasper JH. Alfarnes. Check out live websites, online demos, github repos and see the project\'s tech stack.'
});

const strapi = useStrapi();
const projects = ref([]);

await strapi.find('projects', {
  populate: '*',
})
  .then((res)=> projects.value = res.data)
  .catch((error)=> console.error(error))

const selectedProjectId = ref<number | undefined>(undefined);
const selectedProject = computed(() => projects.value.find((project) => project.id === selectedProjectId.value))

function selectProject(id: number) {
  if (selectedProjectId.value === id) {
    selectedProjectId.value = undefined;
  } else {
    selectedProjectId.value = id;
  }
}
</script>
