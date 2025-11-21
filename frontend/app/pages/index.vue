<script lang="ts" setup>
import type { Post } from '~/types/cms/collections/Post'
import type { Website } from '~/types/cms/collections/Website'
import { getDeskmatItems, sortDeskmatItems } from '~/modules/utility/deskmat'

// TODO: support preview feature
const strapi = useStrapi()

const websites = ref<Website[]>()
await strapi.find<Website>('websites', { populate: { mockups: { populate: '*' } } })
  .then(res => websites.value = res.data)

useBreadcrumbs([{ label: 'home', to: '/' }])
const posts = ref<Post[]>()
await strapi.find<Post>('posts')
  .then(res => posts.value = res.data)

const deskmatItems = computed(() =>
  sortDeskmatItems(getDeskmatItems(
    websites.value as Website[],
    posts.value as Post[],
  )),
)
</script>

<template>
  <AppPadding>
    <DeskmatGrid>
      <template v-for="{ key, item } in deskmatItems" :key="item.slug">
        <DeskmatWebsite v-if="key === 'website'" :website="(item as Website)" />
        <DeskmatPost v-else :post="(item as Post)" />
      </template>
    </DeskmatGrid>
  </AppPadding>
</template>
