<template>
  <div>
    <h1 class="font-bold text-2xl">What's up?</h1>
    <p class="mt-2">
      On this page I share what i've been focusing on recently
      (<a href="https://nownownow.com/about">now page</a>).
      Last updated on 19.03.24.
    </p>
    <div class="grid grid-cols-3 gap-x-2 gap-y-5 mt-10">
      <p class="text-purple-800">11.04.24</p>
      <p class="col-span-2">Looking for jobs in the industry👀</p>
    </div>
    <div class="grid grid-cols-3 gap-x-2 gap-y-5 mt-10">
      <p class="text-purple-800">01.04.24</p>
      <p class="col-span-2">Preparing for Operating Systems and Computer Graphics exams.</p>
    </div>
    <div class="grid grid-cols-3 gap-x-2 gap-y-5 mt-10">
      <p class="text-purple-800">19.03.24</p>
      <p class="col-span-2">Pitched Local Bloom for Innovasjon Norge</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'kakka.dev - now',
  ogTitle: 'kakka.dev - now',
  description: 'Read about what I\'ve been my focus lately.',
  ogDescription: 'Read about what I\'ve been my focus lately.',
  ogImage: '/me.jpeg'
})
</script>
