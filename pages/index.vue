<template>
  <div>
    <NuxtLink to="/now">
      <latest class="mb-14" />
    </NuxtLink>

    <div class="flex flex-col items-center text-center gap-5">
      <img src="/me.jpeg" alt="" class="min-w-40 h-40 w-40 rounded-full border-[5px]">
      <div class="space-y-2 max-w-sm flex flex-col items-center">
        <BasePageTitle>Kasper JH Alfarnes</BasePageTitle>
        <p class="text-md">Hi there! I'm a freelance software developer, web designer and soon to be Computer Science
          graduate.</p>
      </div>
    </div>

    <section class="mt-32 text-gray-600 space-y-2">
      <BaseSubHeading :level="2" class="text-black">WHAT I DO</BaseSubHeading>
      <p class="pb-4">
        I'm interested in the intersection of design and technology.
        Building for the web strikes a perfect balance, so I design and develop on freelance basis.
      </p>

      <BaseButtonGroup>
        <BaseButton variant="primary">
          Work with me
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="size-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </BaseButton>

        <BaseButton variant="secondary">
          My projects
        </BaseButton>
      </BaseButtonGroup>
    </section>

    <section class="mt-32 text-gray-600 space-y-2">
      <BaseSubHeading :level="2" class="text-black">RECENT WRITING</BaseSubHeading>
      <p class="pb-6">
        Once in a while, I write about technology, design and ongoing projects.
        Here is my latest post:
      </p>
      <BlogPostCard :post="newestPost" />
    </section>

    <section class="mt-32 text-gray-600 space-y-2">
      <BaseSubHeading :level="2" class="text-black">STAY IN TOUCH</BaseSubHeading>
      <p class="pb-8">
        If you want to stay up to date on what im doing you can follow me here
      </p>
      <SocialsDisplay />
    </section>
  </div>
</template>

<script lang="ts" setup>
const newestPost = await queryContent().sort({ published: -1 }).findOne()
</script>
