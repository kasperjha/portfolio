<template>
  <div v-for="block in blocks" :key="block.id">
    <component
      :is="componentMap.get(block.__component)"
      v-if="componentMap.has(block.__component)"
      v-bind="block"
    />
  </div>
</template>

<script setup lang="ts">
import componentMap from '#build/StaticStrapiComponentMap.ts'

interface StrapiBlock {
  id: number
  __component: string
}

const props = defineProps<{
  blocks: StrapiBlock[]
  debug?: boolean
}>()

props.blocks.forEach((block) => {
  if (componentMap.get(block.__component) === undefined) {
    throw new Error(`Could not find Vue component for ${block.__component}`)
  }
})
</script>
