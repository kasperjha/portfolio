<template>
  <div>
    <div class="flex justify-center">
      <div class="max-w-md text-center flex flex-col items-center">
        <NuxtLink to="/now" class="w-full">
          <latest />
        </NuxtLink>
        <img src="/me.jpeg" alt="" class="min-w-40 mt-12 mb-6 h-40 w-40 rounded-full border-[5px]">
        <BasePageTitle>Kasper JH Alfarnes</BasePageTitle>
        <p class="text-md">Hi there! I'm a freelance software developer, web designer and soon to be CS
          graduate.</p>
      </div>
    </div>

    <section class="mt-32 space-y-2">
      <BaseSubHeading :level="2">WHAT I DO</BaseSubHeading>
      <p class="pb-4">
        I'm interested in the intersection of design and technology.
        Building for the web strikes a perfect balance, so I design and develop on freelance basis.
      </p>

      <BaseButtonGroup>


        <NuxtLink to="/contact">
          <BaseButton variant="primary">
            Work with me
            <ArrowLongRightIcon class="size-5" />
          </BaseButton>
        </NuxtLink>

        <NuxtLink to="/work">
          <BaseButton variant="secondary">
            My projects
          </BaseButton>
        </NuxtLink>
      </BaseButtonGroup>
    </section>

    <section class="mt-32 space-y-2">
      <BaseSubHeading :level="2">RECENT WRITING</BaseSubHeading>
      <p class="pb-6">
        Once in a while, I write about technology, design and ongoing projects.
        Here is my latest post:
      </p>
      <BlogPostCard :post="newestPost" />
    </section>

    <section class="mt-32 space-y-2">
      <BaseSubHeading :level="2">STAY IN TOUCH</BaseSubHeading>
      <p class="pb-8">
        If you want to stay up to date on what im doing you can follow me here
      </p>
      <SocialsDisplay />
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLongRightIcon } from '@heroicons/vue/20/solid';
const newestPost = await queryContent().sort({ published: -1 }).findOne()
</script>
