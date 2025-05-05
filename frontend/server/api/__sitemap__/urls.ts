import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { serverQueryContent } from '#content/server'
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

// defines sitemap urls for blogposts
export default defineSitemapEventHandler(async (e) => {
  const contentList = (await serverQueryContent(e).find()) as ParsedContent[]
  const urls = contentList
    .filter(c => c._dir == 'posts')
    .map(c => asSitemapUrl({
      loc: `/posts/${c.slug}`,
      lastmod: c.published
    }))
  return urls;
})
