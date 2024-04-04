import { Project } from "../types/Projects";

export const projects: Project[] = [
  {
    title: 'kakka.dev',
    short_description: 'Personal portfolio website for demonstrating past web development projects.',
    github_url: 'https://github.com/kakka0903/kakka.dev',
    project_palette: 'blue',
    technologies: ['vue', 'nuxt']
  },
  {
    title: 'orkide.world',
    short_description: "Portfolio website promoting the work of Orkidé Media.",
    github_url: 'https://github.com/kakka0903/orkide-frontend',
    website_url: 'https://orkide.world',
    project_palette: 'sapling',
    technologies: ['vue', 'nuxt', 'strapi']
  },
  {
    title: 'delivery-data',
    short_description: 'POC for a web application for tracking package wear, deliverer performance and sensor data.',
    github_url: 'https://github.com/kakka0903/delivery-data',
    demo_url: 'https://delivery-data.pages.dev/',
    project_palette: 'blue',
    technologies: ['vue', 'nuxt', 'mapbox']
  },
  {
    title: 'ZvanzMP3 V2',
    short_description: 'Second iteration of a website promoting and selling the work of ZvanzMP3.',
    demo_url: 'https://zvanz-frontend.pages.dev',
    project_palette: 'eyez',
    technologies: ['flask', 'vue', 'stripe'],
  },
  {
    title: 'ZvanzMP3 V1',
    short_description: 'A website selling digial music licences for the work of ZvanzMP3.',
    demo_url: 'https://zvanzflask.kakk.dev',
    github_url: 'https://github.com/kakka0903/zvanzflask',
    project_palette: 'eyez',
    technologies: ['flask', 'stripe'],
  },


]
