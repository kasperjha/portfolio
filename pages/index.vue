<template>
  <div>

    <NuxtLink to="/now">
      <latest class="mb-14" />
    </NuxtLink>

    <div class="flex flex-col items-center text-center gap-5">
      <img src="/me.jpeg" alt="" class="min-w-40 h-40 w-40 rounded-full border-[5px]">
      <div class="space-y-4 max-w-sm">
        <h1 class="text-2xl font-bold">kas·per</h1>
        <p class="text-md">Hi there! I'm a freelance software developer, web designer and soon to be Computer Science graduate.</p>
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

    <h2 class="text-xl font-bold mt-16">About Me</h2>

    <p class="mt-2">
      I'm a passionate developer, with an eye for design, great academic merits and industry experience from both large and small companies. (<NuxtLink to="https://www.linkedin.com/in/kasper-alfarnes-a3b97b25b/">see LinkedIn!</NuxtLink>)
    </p>

    <h2 class="text-xl font-bold mt-16">My Services</h2>

    <p class="mt-2">
      As a freelancer, I offer web development and brand identity services. I especially enjoy creating highly-interactive and memorable digital experiences.
    </p>

    <h2 class="text-xl font-bold mt-16">Recent Work</h2>

    <p class="mt-2">
      My most recently I updated the digital portfolio of a long standing client; <a href="https://instagram.com/orkide.world">video producer Orkidé</a>. For this project, I designed a dark theme, created a solutions for displaying album art and integrated a OSS CMS.
    </p>

    <section class="flex flex-col items-center mt-20">
      <h2 class="text-xl font-bold text-center">
        Wanna stay in touch?
      </h2>
      <p class="text-center max-w-sm mt-2">
        Follow me on social media to stay up to
        date on what I'm currently working on.
      </p>
      <SocialsDisplay class="mt-8"/>
    </section>
  </div>
</template>
