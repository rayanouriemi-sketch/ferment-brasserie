export default defineEventHandler((event) => {
  const { style } = getQuery(event)
  return style ? beers.filter(b => b.style === style) : beers
})
