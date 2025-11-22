export interface Post {
  // TODO: extract to common type
  documentId: string
  publishedAt: string

  title: string
  description: string
  content: string
  slug: string
}
