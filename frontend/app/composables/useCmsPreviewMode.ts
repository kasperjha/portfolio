export function useCmsPreviewMode() {
  const route = useRoute()
  const { preview, status } = route.query
  return usePreviewMode({
    shouldEnable: () => preview === 'true' && (status === 'published' || status === 'draft'),
    getState: () => ({
      status,
    }),
  })
}
