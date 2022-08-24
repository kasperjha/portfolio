<template>
  <div class="space-y-10">

    <h1 class="pt-12 text-6xl leading-tight">
      <span class="italic font-bold">Heyo!</span><br>
      I'm Kasper
    </h1>

    <p class="max-w-lg">
      I am a developer and designer from Oslo.
      During daytime i study for a CompSci degree in NL, but on the side i enjoy building
      cool websites for cool people.
    </p>


    <div class="flex flex-col items-end gap-3 text-4xl">
      <BrandGradient class="transition hover:-translate-x-4">
        <NuxtLink to="/contact">CONTACT</NuxtLink>
      </BrandGradient>
      <BrandGradient class="transition hover:-translate-x-4">
        <NuxtLink to="/work" >WORK</NuxtLink>
      </BrandGradient>
    </div>
  </div>
</template>
