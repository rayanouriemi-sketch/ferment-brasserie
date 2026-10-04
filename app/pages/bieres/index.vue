<script setup lang="ts">
useHead({ title: 'Nos bières — Ferment' })
const style = ref('')
const { data: beers } = await useFetch('/api/beers', { query: { style } })
</script>

<template>
  <main class="page">
    <h1 class="anton">Nos bières</h1>
    <div class="chips">
      <button v-for="s in ['', 'IPA', 'Lager', 'Sour', 'Stout']" :key="s" class="box" :class="{ on: style === s }" @click="style = s">{{ s || 'Toutes' }}</button>
    </div>
    <div class="cans">
      <NuxtLink v-for="b in beers" :key="b.slug" :to="`/bieres/${b.slug}`" class="box can">
        <div class="tin" :style="{ background: b.color }">{{ b.style }}</div>
        <h3>{{ b.name }}</h3><p>{{ b.desc }}</p><span class="abv">{{ b.abv.toString().replace('.', ',') }} %</span>
      </NuxtLink>
    </div>
  </main>
</template>

<style scoped>
h1 { font-size: clamp(56px, 9vw, 130px); line-height: 1; }
.chips { display: flex; gap: 12px; margin: 22px 0 30px; flex-wrap: wrap; }
.chips button { font: inherit; font-weight: 800; text-transform: uppercase; padding: 10px 18px; cursor: pointer; box-shadow: 3px 3px 0 var(--ink); }
.chips button.on { background: var(--ink); color: var(--y); }
</style>
