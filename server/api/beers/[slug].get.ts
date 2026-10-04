export default defineEventHandler((event) => {
  const beer = beers.find(b => b.slug === getRouterParam(event, 'slug'))
  if (!beer) throw createError({ statusCode: 404, statusMessage: 'Bière introuvable' })
  return beer
})
