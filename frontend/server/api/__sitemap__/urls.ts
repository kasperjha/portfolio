import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import { Post } from '../../../types/Post';

// defines sitemap urls for blogposts
export default defineSitemapEventHandler(async (e) => {

  let posts: Post[] = []

  const strapi = useStrapi();
  strapi
    .find<Post>('posts').then((res) => posts = res.posts)
    .catch((error) => console.error(error))

  return posts
    .map(post => asSitemapUrl({
      loc: `/posts/${post.slug}`,
      lastmod: post.published
    }))
})
