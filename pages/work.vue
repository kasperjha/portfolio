<template>
  <div class="mt-6 space-y-6 mb-48 ">
    <p>
      These websites have been designed and developed by
      me. Interact with one of them to discover more about
      the project.
    </p>

    <div class="space-y-4">
      <ProjectCard
        v-for="project in projects"
        :key="project.title"
        :project="project"
        :selected="selectedProject !== null && project.title == selectedProject.title"
        @click="selectProject(project)"
      />
    </div>

    <Transition
      enterActiveClass="ease-out duration-200"
      leaveActiveClass="ease-in duration-100"
      enterFromClass=" translate-y-52 "
      enterToClass="translate-y-0"
      leaveFromClass="translate-y-0"
      leaveToClass="translate-y-52"
      mode="out-in"
    >
      <ProjectDetails
        style="will-change: transform;"
        class="transform transition-transform transform-gpu"
        v-if="selectedProject !== null"
        :key="selectedProject.title"
        :project="selectedProject"
        @close="selectedProject = null"
      />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { Project } from '../types/Projects';
import { projects } from '../data/projects'

useHead({
  title: 'kakka.dev - work',
  meta: [{ name: 'description', content: 'Completed client work by Kasper JHA. Latest project is portfolio site for Orkidé (orkide.world).'}]
});

const selectedProject = ref(null)
function selectProject(project: Project) {
  if (project === null) {
    return
  }
  if (selectedProject.value == null) {
    selectedProject.value = project
    return
  }
  if (selectedProject.value.title === project.title) {
    selectedProject.value = null
    return
  }
  selectedProject.value = project
}
</script>
