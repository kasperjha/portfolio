import type { Media } from '../Media'

export interface WebsiteTestimonial {
  quote: string
  name: string
  title: string
  avatar: Media
  company_logo?: Media
}
