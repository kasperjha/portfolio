import type { Post } from '~/types/cms/collections/Post'
import type { Website } from '~/types/cms/collections/Website'

interface DeskmatItem {
  key: string
  item: Website | Post
}

/**
 * Wraps collection entries in object with a type key.
 * This allows them to be displayed in the same DeskmatGrid.
 */
export function getDeskmatItems(websites: Website[], posts: Post[]): DeskmatItem[] {
  const items: DeskmatItem[] = []
  items.push(...websites.map(item => ({ key: 'website', item })))
  items.push(...posts.map(item => ({ key: 'post', item })))
  items.sort((a, b) => new Date(b.item.publishedAt) - new Date(a.item.publishedAt))
  return items
}

/**
 * Sorts deskmat items based on their applicable published date.
 */
export function sortDeskmatItems(items: DeskmatItem[]) {
  function getApplicableDate(item: DeskmatItem) {
    const hasOtherDate = item.key === 'website' && (item.item as Website).actuallyPublishedAt !== null
    return hasOtherDate ? (item.item as Website).actuallyPublishedAt : item.item.publishedAt
  }
  items.sort((a, b) => {
    const aDate = getApplicableDate(a)
    const bDate = getApplicableDate(b)
    return bDate - aDate
  })
  return items
}
