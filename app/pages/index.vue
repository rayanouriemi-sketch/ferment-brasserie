<script setup lang="ts">
const { data: beers } = await useFetch('/api/beers')
</script>

<template>
  <main>
    <div class="marq"><div>BRASSÉ À LYON ★ NON FILTRÉ ★ HOUBLONS LOCAUX ★ TAPROOM OUVERT DU JEUDI AU DIMANCHE ★ BRASSÉ À LYON ★ NON FILTRÉ ★ HOUBLONS LOCAUX ★ TAPROOM OUVERT DU JEUDI AU DIMANCHE ★&nbsp;</div></div>
    <section class="page">
      <h1 class="anton">Bières <span>bruyantes</span><br>goûts sérieux.</h1>
      <div class="cans">
        <NuxtLink v-for="b in beers?.slice(0, 4)" :key="b.slug" :to="`/bieres/${b.slug}`" class="box can">
          <div class="tin" :style="{ background: b.color }">{{ b.style }}</div>
          <h3>{{ b.name }}</h3><p>{{ b.desc }}</p><span class="abv">{{ b.abv.toString().replace('.', ',') }} %</span>
        </NuxtLink>
      </div>
      <div class="cta"><NuxtLink to="/bieres" class="btn">Toutes nos bières →</NuxtLink><NuxtLink to="/taproom" class="btn ghost">Réserver une table</NuxtLink></div>
    </section>
  </main>
</template>

<style scoped>
.marq { overflow: hidden; border-bottom: 3px solid var(--ink); background: var(--ink); color: var(--y); white-space: nowrap; }
.marq div { display: inline-block; padding: 10px 0; font-family: Anton, sans-serif; font-size: 22px; animation: m 18s linear infinite; }
@keyframes m { to { transform: translateX(-50%); } }
h1 { font-size: clamp(64px, 11.5vw, 180px); line-height: 1.02; margin-bottom: 30px; }
h1 span { color: #fff; -webkit-text-stroke: 3px var(--ink); }
.cta { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }
.ghost { background: transparent; color: var(--ink); }
</style>
