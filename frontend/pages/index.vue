<template>
  <div class="space-y-6">
    <p>
      I've been building and designing websites since 2019.
      For me it's a great way of combining design and technology.
      Over time I have gotten quite good at building with the Vue-ecosystem.
    </p>

    <p>
      I take website commissions through my web devlopment agency Klosure.
      We build high-end custom websites for businesses in creative industries.
      If your looking for one, please visit
      <NuxtLink to="https://klosure.dev">our website</NuxtLink> to schedule a call.
    </p>

    <p>
      If you need help with an existing Vue project I would also be interested in working together on a freelance basis.
      Visit my <NuxtLink to="/contact">contact page</NuxtLink>, to get in touch on LinkedIn.

    </p>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { Post } from '~/types/Post'

const strapi = useStrapi();
const newestPost = ref<Post | undefined>(undefined)

await strapi.find('posts', { sort: 'published:desc' })
  .then((res) => newestPost.value = res.data.length ? res.data[0] : undefined)
  .catch((error) => console.log(error))
</script>
