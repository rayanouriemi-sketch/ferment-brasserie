export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'fr' },
      title: 'Ferment — Brasserie artisanale',
      meta: [
        { name: 'description', content: "Concept de site pour une brasserie artisanale lyonnaise (marque fictive)." },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Anton&family=Work+Sans:wght@400;600;800&display=swap' },
      ],
    },
  },
})
