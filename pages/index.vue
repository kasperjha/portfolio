<template>
  <div class="space-y-10">

    <h1 class="text-5xl leading-tight">
      <span class="italic font-bold">Heyo!</span><br>
      I'm Kasper
    </h1>

    <p class="max-w-lg">
      I am a developer and designer from Oslo.
      During daytime i study for a CompSci degree, but on the side i enjoy building
      cool websites for cool people.
    </p>


    <div class="flex flex-col items-end gap-3 text-3xl">
      <BrandGradient class="transition hover:-translate-x-4">
        <NuxtLink to="/contact">CONTACT</NuxtLink>
      </BrandGradient>
      <BrandGradient class="transition hover:-translate-x-4">
        <NuxtLink to="/work" >WORK</NuxtLink>
      </BrandGradient>
    </div>

    <p class="max-w-lg">
      Most recently <NuxtLink>built a portfolio website for Orkidé.</NuxtLink> I helped them emphasize their originality with a untraditional colorway
      and a bold attention demanding design.
    </p>

  </div>
</template>
