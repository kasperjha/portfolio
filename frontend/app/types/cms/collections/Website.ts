import type { Media } from '../Media'
import type { Rich } from '../Rich'

export interface Website {
  // TODO: type remaining fields
  documentId: string
  slug: string
  mockups: {
    mobile: Media
    desktop: Media
  }
  about: {
    title: string
    ingress: string
    description: Rich
  }
}
