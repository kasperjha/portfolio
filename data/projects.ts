import { Project } from "../types/Projects";

export const projects: Project[] = [
  {
    title: 'ZvanzMP3 V2',
    short_description: 'Second iteration of a website promoting and selling beats produced by ZvanzMP3. Built with Vue2, Flask, Tailwind, Stripe and Paypal.',
    visit_url: 'https://zvanz-frontend.pages.dev'
  },
  {
    title: 'orkide.world',
    short_description: "A novel way of presenting music videos and album covers made by Orkidé Media. Built with Vue, Nuxt and Tailwind. Powered by self-hosted Strapi and Plausible instances.",
    visit_url: 'https://orkide.world'
  },
  {
    title: 'delivery-data',
    short_description: 'POC for a web application that enables tracking of package wear, deliverer performance and technical statistics from sensors. Team project for a CS course at RuG in the Netherlands.',
    github_url: 'https://github.com/kakka0903/delivery-data',
    visit_url: 'https://delivery-data.pages.dev/'
  }
]
