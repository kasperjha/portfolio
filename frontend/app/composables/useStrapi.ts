import Strapi from 'strapi-sdk-js'

/**
 * Returns a strapi client instance with the appropriate base URL.
 */
export function useStrapi() {
  return new Strapi({
    url: useRuntimeConfig().public.cmsUrl as string,
  })
}
