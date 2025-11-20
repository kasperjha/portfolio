<script lang="ts" setup>
import type { Website } from '~/types/cms/collections/Website'

const route = useRoute()

const website = ref()

const options = {
  populate: {
    mockups: { populate: '*' },
    about: { populate: '*' },
    testimonial: { populate: '*' },
    tags: { populate: '*' },
    links: { populate: '*' },
  },
}

const strapi = useStrapi()
await strapi.findOne('websites', route.params.id as string, options)
  .then(res => website.value = res.data)

/**
 * Creates URL to og-image for website project.
 * Uses locally cached IPX desktop mockup image.
 * @param website
 */
function getOgImage(website: Website) {
  const image = useImage()
  return image(useMediaUrl(website.mockups.desktop.url))
}

useSeoMeta({
  title: `Project: ${website.value.about.title}`,
  ogTitle: `Project: ${website.value.about.title}`,
  description: website.value.about.ingress,
  ogDescription: website.value.about.ingress,
  ogImage: getOgImage(website.value),
})

useBreadcrumbs([
  { label: 'home', to: '/' },
  { label: website.value.slug },
])
</script>

<template>
  <AppPadding>
    <div class="flex max-md:flex-col md:flex-row md:flex-wrap gap-5">
      <div>
        <WebsiteMockupCard :website="website" variant="horizontal" class="md:hidden" />
        <WebsiteLiveCard v-if="website.live_url" :website="website" class="hidden md:block max-w-[330px]" />
        <WebsiteMockupCard v-else :website="website" class="hidden md:block max-w-[330px]" />
      </div>

      <div class="flex flex-col max-md:w-full gap-5 md:max-w-[330px] lg:max-w-[330px]">
        <WebsiteAboutCard :website />
        <WebsiteTestimonialCard v-if="website.testimonial" :website />
      </div>

      <div class="flex flex-col max-md:w-full gap-5 md:max-lg:grid md:max-lg:grid-cols-2 md:max-lg:max-w-[680px] md:max-lg:w-full lg:w-[244px]">
        <WebsiteLinksCard v-if="website.links.length" :website />
        <WebsiteMiscCard :website />
      </div>
    </div>
  </AppPadding>
</template>
