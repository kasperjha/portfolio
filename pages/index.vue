<template>
  <div>
    <h1 class="mt-16 text-6xl leading-tight ">Heyo!<br>I'm Kasper </h1>
    <p class="mt-6 text-lg" >I am a developer and designer from Oslo. Besides studying for a CompSci degree I create cool websites for cool people.</p>
    <div class="flex flex-col items-end gap-3 mt-12 text-4xl">
      <BrandGradient class="transition hover:-translate-x-4">
        <NuxtLink to="/contact">CONTACT</NuxtLink>
      </BrandGradient>
      <BrandGradient class="transition hover:-translate-x-4">
        <NuxtLink to="/work" >WORK</NuxtLink>
      </BrandGradient>
    </div>
  </div>
</template>
