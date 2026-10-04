# Ferment

Concept de site pour une brasserie artisanale lyonnaise, en style néo-brutaliste. **Ferment est une marque fictive** : ce projet est un exercice de design et de développement.

## Pages

- `/` : hero typographique, bandeau défilant et bières phares
- `/bieres` : la gamme, filtrée par style côté serveur
- `/bieres/:slug` : fiche bière (degré, amertume, accords)
- `/taproom` : horaires et réservation de table, avec validation côté serveur (jours d'ouverture, créneaux)

## API (Nitro / Node)

- `GET /api/beers?style=IPA|Lager|Sour|Stout` · `GET /api/beers/:slug`
- `POST /api/booking` : valide la réservation (aucune donnée n'est stockée)

## Stack

Nuxt 4 · Vue 3 · TypeScript · Nitro (Node)

## Lancer le projet

```bash
pnpm install
pnpm dev
```
