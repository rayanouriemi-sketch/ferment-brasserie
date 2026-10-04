// Créneaux du taproom : jeudi → dimanche, 18 h → 23 h
export default defineEventHandler(async (event) => {
  const { name, people, date, time } = await readBody<{ name?: string, people?: number, date?: string, time?: string }>(event)
  const day = date ? new Date(`${date}T12:00:00`).getDay() : -1
  if (!name?.trim()) throw createError({ statusCode: 422, statusMessage: 'Indiquez un nom.' })
  if (!(Number(people) >= 1 && Number(people) <= 12)) throw createError({ statusCode: 422, statusMessage: 'De 1 à 12 personnes.' })
  if (![0, 4, 5, 6].includes(day)) throw createError({ statusCode: 422, statusMessage: 'Le taproom est ouvert du jeudi au dimanche.' })
  if (!/^(1[89]|2[0-2]):(00|30)$/.test(time ?? '')) throw createError({ statusCode: 422, statusMessage: 'Choisissez un créneau entre 18 h et 22 h 30.' })
  return { ok: true, message: `Table pour ${people} réservée au nom de ${name.trim()} (démo : aucune réservation réelle).` }
})
