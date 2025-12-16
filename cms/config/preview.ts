/**
 * Builds client side URL for preview feature.
 * Returns null if preview is not enabled for content type.
 */
export function getPreviewPath(contentType: string, documentId: string) {
  if (contentType === 'api::post.post' && documentId) {
    return `/txt/${documentId}`
  }
  return null
}
