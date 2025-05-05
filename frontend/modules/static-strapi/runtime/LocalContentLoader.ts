import type { StrapiResponse } from 'strapi-sdk-js'
import type { ContentLoader } from '../types'
import content from '#build/StaticStrapiContentCache.mjs'

export class LocalContentLoader implements ContentLoader {
  async getSingleType<T>(contentType: string) {
    if (!(contentType in content)) {
      throw new Error(`StaticStrapi: Content type "${contentType}" not found in cache`)
    }
    return content[contentType] as StrapiResponse<T>
  }
}
