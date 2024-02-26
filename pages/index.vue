<template>
  <div class="space-y-10">

    <div class="flex gap-10 items-center">
      <img src="/me.jpeg" alt="" class="min-w-40 w-40 h-40 rounded-full border-[5px]">
      <div class="space-y-2">
        <h1 class="text-2xl font-bold">kas·per</h1>
        <p>“Welcome! I'm a freelance web developer and soon to be CS graduate” </p>
      </div>
    </div>

    <p class="max-w-lg">
      I am a freelance web developer and designer from Oslo.
      Currently I study Computing Science at Rijksuniversiteit Groningen,
      and make websites in my spare time.
    </p>


    <div class="flex flex-col gap-3 items-end text-3xl">
      <BrandGradient class="transition ease-in-out duration-300 hover:-translate-x-4">
        <NuxtLink to="/contact">CONTACT</NuxtLink>
      </BrandGradient>
      <BrandGradient class="transition ease-in-out duration-300 hover:-translate-x-4">
        <NuxtLink to="/work">WORK</NuxtLink>
      </BrandGradient>
    </div>

    <p class="max-w-lg">
      Most recently I built a portfolio for Orkidé.
      He is a music video producer for rap groups in Oslo.
      The website has a untraditional colorway and bold design. <text-link link="https://orkide.world">Check it out!</text-link>
    </p>
  </div>
</template>
