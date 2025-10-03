import type { Media } from '../Media'
import type { Rich } from '../Rich'
import type { Tag } from './Tag'

export interface Website {
  // TODO: type remaining fields
  documentId: string
  slug: string
  // TODO: extract component type
  mockups: {
    mobile: Media
    desktop: Media
  }
  // TODO: extract component type
  about: {
    title: string
    ingress: string
    description: Rich
  }
  tags: Tag[]
}
