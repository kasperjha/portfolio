import Strapi from "strapi-sdk-js";

/**
 * Get the strapi client with the appropriate url.
 */
export function useStrapi() {
  const config = useRuntimeConfig();
  return new Strapi({
    url: config.public.strapi.url
  })
}
