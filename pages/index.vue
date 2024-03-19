<template>
  <div>

    <NuxtLink to="/now">
      <latest class="mb-14">
        Pitched Local Bloom for Innovasjon Norge
      </latest>
    </NuxtLink>

    <div class="flex flex-col items-center text-center gap-5">
      <img src="/me.jpeg" alt="" class="min-w-40 h-40 w-40 rounded-full border-[5px]">
      <div class="space-y-4 max-w-sm">
        <h1 class="text-2xl font-bold">kas·per</h1>
        <p class="text-md">Hi there! I'm a freelance software developer and web designer and soon to be Computer Science graduate.</p>
        <div class="space-x-4 pt-2 text-sm">
          <NuxtLink to="/work">
            <BaseButton>
              See Projects
            </BaseButton>
          </NuxtLink>
          <NuxtLink to="/contact">
            <BaseButton variant="secondary">
              Reach out!
            </BaseButton>
          </NuxtLink>
        </div>
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
        <text-link link="https://orkide.world">Check it out!</text-link>
      </p>
    </section>

    <section class="flex flex-col items-center mt-20">
      <h2 class="text-xl font-bold text-center">
        Wanna stay in touch?
      </h2>
      <p class="text-center max-w-sm mt-2">
        Follow me on social media to stay up to
        date on what I'm currently working on.
      </p>
      <div class="mt-8 flex col justify-center gap-8">
        <NuxtLink to="https://instagram.com/kasperkode">
          <BaseCard>
            <IconInstagram class="w-12 h-12 text-purple-600"/>
          </BaseCard>
        </NuxtLink>
        <NuxtLink to="https://pinterest.com/kasperjha">
          <BaseCard>
            <IconPinterest class="w-12 h-12 text-purple-600"/>
          </BaseCard>
        </NuxtLink>
        <NuxtLink to="https://x.com/kasperjha">
          <BaseCard>
            <IconX class="w-12 h-12 text-purple-600"/>
          </BaseCard>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
