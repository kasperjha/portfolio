import type { Link } from '../components/Link'
import type { WebsiteAbout } from '../components/WebsiteAbout'
import type { WebsiteMockups } from '../components/WebsiteMockups'
import type { WebsiteTestemonial } from '../components/WebsiteTestemonial'
import type { Tag } from './Tag'

export interface Website {
  documentId: string
  slug: string
  live_url?: string
  mockups: WebsiteMockups
  about: WebsiteAbout
  testemonial?: WebsiteTestemonial
  tags: Tag[]
  links: Link[]
}
