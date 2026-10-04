<script setup lang="ts">
const route = useRoute()
const { data: b, error } = await useFetch(`/api/beers/${route.params.slug}`)
if (error.value) throw createError({ statusCode: 404, statusMessage: 'Bière introuvable', fatal: true })
useHead({ title: () => `${b.value?.name} — Ferment` })
</script>

<template>
  <main v-if="b" class="page product">
    <div class="tin big" :style="{ background: b.color }">{{ b.style }}</div>
    <div>
      <NuxtLink to="/bieres" class="back">← Toutes les bières</NuxtLink>
      <h1 class="anton">{{ b.name }}</h1>
      <p class="desc">{{ b.desc }}</p>
      <div class="stats">
        <div class="box"><b class="anton">{{ b.abv.toString().replace('.', ',') }} %</b><span>Alcool</span></div>
        <div class="box"><b class="anton">{{ b.ibu }}</b><span>IBU (amertume)</span></div>
      </div>
      <div class="meter"><span>Amertume</span><div class="box"><i :style="{ width: `${Math.min(100, (b.ibu / 70) * 100)}%`, background: b.color }" /></div></div>
      <p class="pair"><b>Accords :</b> {{ b.pairing }}</p>
    </div>
  </main>
</template>

<style scoped>
.product { display: grid; grid-template-columns: 1fr 1.2fr; gap: 48px; align-items: center; }
.big { height: 460px; font-size: 80px; box-shadow: 10px 10px 0 var(--ink); }
.back { font-weight: 800; text-transform: uppercase; font-size: 14px; }
h1 { font-size: clamp(56px, 8vw, 120px); line-height: .95; margin: 12px 0 16px; }
.desc { font-size: 20px; font-weight: 600; max-width: 520px; }
.stats { display: flex; gap: 16px; margin: 26px 0; }
.stats .box { padding: 18px 24px; display: grid; }
.stats b { font-size: 44px; }
.stats span { font-weight: 600; font-size: 13px; }
.meter { display: grid; gap: 8px; max-width: 440px; font-weight: 800; text-transform: uppercase; font-size: 13px; }
.meter .box { height: 26px; padding: 3px; box-shadow: 3px 3px 0 var(--ink); }
.meter i { display: block; height: 100%; border-radius: 16px; border-right: 3px solid var(--ink); }
.pair { margin-top: 22px; font-size: 16px; }
@media (max-width: 860px) { .product { grid-template-columns: 1fr; } .big { height: 300px; } }
</style>
