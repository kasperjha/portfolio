<template>
  <div class="space-y-10">

    <h1 class="text-5xl leading-tight">
      <span class="italic font-bold">Heyo!</span><br>
      I'm Kasper
    </h1>

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
