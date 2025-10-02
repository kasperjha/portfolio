import type { Media } from '../Media'

export interface Website {
  // TODO: type remaining fields
  slug: string
  mockups: {
    mobile: Media
    desktop: Media
  }
}
