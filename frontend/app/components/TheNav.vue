<template>
  <AppPadding class="py-10">
    <nav class="flex items-center justify-between">
      <div class="flex items-center gap-5">
        <NuxtLink to="/">
          <img class="rounded-full size-14" src="/kasper-alfarnes-avatar.jpg">
        </NuxtLink>
        <div class="hidden sm:block">
          <p class="text-base">
            Kasper Alfarnes
          </p>
          <p class="text-xs font-mono text-neutral-600">
            Developer and designer
          </p>
        </div>
      </div>
      <NavToggle />
    </nav>
  </AppPadding>
</template>
