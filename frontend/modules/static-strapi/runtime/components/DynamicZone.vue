<template>
  <BlockRenderer :blocks />
</template>

<script setup lang="ts">
import { usePageContent } from '../composables/usePageContent'
import BlockRenderer from './BlockRenderer.vue'

const props = defineProps<{
  field: string
  contentType: string
}>()

const content = await usePageContent(props.contentType)

const blocks = computed(() => {
  if (content === undefined) {
    return []
  }
  if (!(props.field in content.data)) {
    throw new Error(`DynamicZone: Fieldname "${props.field}" not found "${props.contentType}" content`)
  }
  return content.data[props.field]
})
</script>
