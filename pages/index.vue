<template>
  <div>
    <div id="hero" class="flex gap-5 sm:gap-10 items-center" >
      <img src="/me.jpeg" alt="" class="min-w-32 w-32 h-32 sm:min-w-40 sm:h-40 sm:w-40  rounded-full border-[5px]">
      <div class="space-y-2">
        <h1 class="text-xl sm:text-2xl font-bold">kas·per</h1>
        <p>“Welcome! I'm a freelance web developer and soon to be CS graduate” </p>
      </div>
    </div>

    <div class="flex gap-3 mt-8 justify-around text-3xl" id="cta-links">
      <div class="transition p-5 ease-in-out duration-300 hover:scale-125">
        <BrandGradient>
          <NuxtLink to="/contact">CONTACT</NuxtLink>
        </BrandGradient>
      </div>
      <div class="transition p-5 ease-in-out duration-300 hover:scale-125">
        <BrandGradient>
          <NuxtLink to="/work">WORK</NuxtLink>
        </BrandGradient>
      </div>
    </div>

    <section id="availability">
      <h2 class="font-bold mt-20">Availability</h2>

      <p class="max-w-lg mt-2">
        I'm open to work fulltime on a freelance project from September 2024.
        Do you have a something for me? <text-link link="/contact">Reach out!</text-link>
      </p>
    </section>

    <section id="recent-work">
      <h2 class="font-bold mt-10">Recent Work</h2>

      <p class="max-w-lg mt-2">
        Recently I extended Orkidé's digital portfolio.
        I added a folder archive, darkmode and improved
        the overall user experience.
      </p>

      <p class="mt-2">
        <text-link link="https://orkide.world">Check it out!</text-link>
      </p>
    </section>
  </div>
</template>
