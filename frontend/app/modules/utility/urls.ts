import type { Website } from '~/types/cms/collections/Website'

export function buildWebsiteProjectUrl(website: Website) {
  return `/web/${website.documentId}`
}
