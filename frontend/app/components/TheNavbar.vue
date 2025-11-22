<script lang="ts" setup>
const { breadcrumbs } = useBreadcrumbs()

const links = [
  { label: 'All', icon: 'uil:layer-group', to: '/' },
  { label: 'Websites', icon: 'uil:globe', to: '/web' },
  { label: 'Posts', icon: 'uil:file-edit-alt', to: '/txt' },
  // { label: 'Pictures', icon: 'uil:camera', to: '/img' },
]
</script>

<template>
  <AppPadding>
    <nav class="rounded overflow-hidden bg-neutral-100">
      <div class="h-14 flex items-center px-5 gap-6 border-neutral-100 border-2 bg-neutral-50 rounded">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-sm group font-mono flex items-center gap-1 group"
        >
          <UIcon :name="link.icon" />
          <p class="underline group-[.router-link-active]:font-semibold">
            {{ link.label }}
          </p>
        </NuxtLink>
      </div>
      <UBreadcrumb :items="breadcrumbs">
        <template #separator>
          <span class="text-xs">/</span>
        </template>
      </UBreadcrumb>
    </nav>
  </AppPadding>
</template>
