import Strapi from 'strapi-sdk-js'
import type { ModuleOptions, SingleTypeContentMap } from './types'
import { LiveContentLoader } from './runtime/LiveContentLoader'

/**
 * Get content for all configured singe type content.
 * @param options Module configuration for single types.
 * @returns Content type to response data map.
 */
export async function getAllSingleTypeContent(options: ModuleOptions) {
  const strapi = new Strapi(options.strapi)
  const content = new LiveContentLoader(strapi, options.singleTypes)
  const contentPromises = Object.keys(options.singleTypes).map(async contentType => ({
    [contentType]: await content.getSingleType(contentType),
  }))
  const contentArray = await Promise.all(contentPromises)
  return contentArray.reduce((acc, curr) => ({ ...acc, ...curr }), {})
}

/**
 * Build the contents of the content cache file.
 * @param content Content type to response data map.
 * @returns Content of content cache file.
 */
export function buildContentCacheContents(content: SingleTypeContentMap) {
  const contentString = JSON.stringify(content)
  return `export default ${contentString}`
}
