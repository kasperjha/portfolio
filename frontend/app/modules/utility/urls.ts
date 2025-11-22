import type { Post } from '~/types/cms/collections/Post'
import type { Website } from '~/types/cms/collections/Website'

export function buildWebsiteProjectUrl(website: Website) {
  return `/web/${website.documentId}`
}

export function buildPostUrl(post: Post) {
  return `/txt/${post.documentId}`
}
