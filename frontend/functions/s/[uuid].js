export function onRequest(context) {
  const { uuid } = context.params

  if (uuid === 'abc123') {
    return Response.redirect('https://alfarnes.dev/web/lu20n4q82b0ffnx7jlggv778', 301)
  }

  return new Response('Link not found', { status: 404 })
}
