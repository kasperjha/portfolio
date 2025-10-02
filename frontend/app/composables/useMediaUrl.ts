// prefixes cms base url when needed
export function useMediaUrl(url: string) {
  const baseUrl = useRuntimeConfig().public.cms.url
  return url.startsWith('/uploads') ? baseUrl + url : url
}
