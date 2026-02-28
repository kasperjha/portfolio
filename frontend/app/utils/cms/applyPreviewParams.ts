import type { StrapiRequestParams } from 'strapi-sdk-js'

// fixes types for https://github.com/Stun3R/strapi-sdk-js/issues/230
type PatchedRequestParams = Omit<StrapiRequestParams, 'state'> & { status?: 'published' | 'draft' }

export function applyPreviewParams(params: PatchedRequestParams) {
  const { enabled } = usePreviewMode()
  const { query } = useRoute()

  if (!enabled.value) {
    return params
  }

  const status = query.status

  if (!(status === 'published' || status === 'draft')) {
    throw new Error('Mising or invalid value for status query parameter.')
  }

  params.status = status

  return params
}
