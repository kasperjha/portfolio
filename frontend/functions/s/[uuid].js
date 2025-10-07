/**
 * Handles shortlink redirects to `/s/<uuid>`.
 * Shortlinks are defined in Cloudflare KV.
 */
export async function onRequest(context) {
  const { uuid } = context.params
  const links = context.env.SHORTLINKS

  const url = await links.get(uuid)

  return url
    ? Response.redirect(url, 301)
    : new Response('Link not found', { status: 404 })
}
