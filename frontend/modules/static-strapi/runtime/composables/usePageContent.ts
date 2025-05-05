import Strapi, { type StrapiResponse } from 'strapi-sdk-js'
import { LocalContentLoader } from '../LocalContentLoader'
import { LiveContentLoader } from '../LiveContentLoader'

export async function usePageContent<T>(contentType: string): Promise<StrapiResponse<T>> {
  const moduleOptions = useRuntimeConfig().public.staticStrapi

  if (!moduleOptions.useLiveContent) {
    return new LocalContentLoader().getSingleType(contentType)
  }

  const strapi = new Strapi(moduleOptions.strapi)
  const content = new LiveContentLoader(strapi, moduleOptions.singleTypes)
  return content.getSingleType<T>(contentType)
}
