import type { Link } from '../components/Link'
import type { WebsiteAbout } from '../components/WebsiteAbout'
import type { WebsiteMockups } from '../components/WebsiteMockups'
import type { WebsiteTestimonial } from '../components/WebsiteTestimonial'
import type { Tag } from './Tag'

export interface Website {
  // TODO: extract to common type
  documentId: string
  publishedAt: string

  slug: string
  live_url?: string
  actuallyPublishedAt?: string
  mockups: WebsiteMockups
  about: WebsiteAbout
  testimonial?: WebsiteTestimonial
  tags: Tag[]
  links: Link[]
}
