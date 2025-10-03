import type { BreadcrumbItem } from '@nuxt/ui'

/**
 * Composeable for specifying page breadcrumbs.
 */
export function useBreadcrumbs(value?: BreadcrumbItem[]) {
  const breadcrumbs = useState<BreadcrumbItem[]>('breadcrumbs', () => [])
  if (value) {
    breadcrumbs.value = value
  }
  return { breadcrumbs }
}
