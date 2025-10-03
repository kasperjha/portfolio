<script lang="ts" setup>
const { breadcrumbs } = useBreadcrumbs()
</script>

<template>
  <AppPadding>
    <UBreadcrumb :items="breadcrumbs">
      <template #separator>
        <span class="text-xs">/</span>
      </template>
    </UBreadcrumb>
  </AppPadding>
</template>
