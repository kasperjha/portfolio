/**
 * Builds client side URL for preview feature.
 * Returns null if preview is not enabled for content type.
 */
export function getPreviewPath(contentType: string, documentId?: string) {
  const pathMap = {
    'api::post.post': (id) => `/txt/${id}`,
    'api::website.website': (id) => `/web/${id}`,
  }

  if (!pathMap[contentType] || !documentId) {
    return null
  }

  return pathMap[contentType](documentId)
}
