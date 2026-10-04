<script setup lang="ts">
useHead({ title: 'Le taproom — Ferment' })
const form = reactive({ name: '', people: 2, date: '', time: '19:00' })
const result = ref<{ ok: boolean, text: string } | null>(null)
const slots = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']

async function book() {
  try {
    const r = await $fetch('/api/booking', { method: 'POST', body: form })
    result.value = { ok: true, text: r.message }
  }
  catch (e: any) {
    result.value = { ok: false, text: e?.data?.statusMessage ?? 'Réservation impossible.' }
  }
}
</script>

<template>
  <main class="page wrap">
    <div>
      <h1 class="anton">Le taproom</h1>
      <p class="lead">12 tireuses, des planches de charcuterie lyonnaise et vue directe sur les cuves.</p>
      <ul class="box hours">
        <li><b>Jeudi – vendredi</b><span>18 h – minuit</span></li>
        <li><b>Samedi</b><span>15 h – 1 h</span></li>
        <li><b>Dimanche</b><span>15 h – 22 h</span></li>
        <li><b>Lundi – mercredi</b><span>Fermé (on brasse)</span></li>
      </ul>
    </div>
    <form class="box form" @submit.prevent="book">
      <h2 class="anton">Réserver une table</h2>
      <label>Nom<input v-model="form.name"></label>
      <label>Personnes<input v-model.number="form.people" type="number" min="1" max="12"></label>
      <label>Date<input v-model="form.date" type="date"></label>
      <label>Heure<select v-model="form.time"><option v-for="s in slots" :key="s">{{ s }}</option></select></label>
      <button class="btn">Réserver</button>
      <p v-if="result" class="msg" :class="{ err: !result.ok }">{{ result.text }}</p>
    </form>
  </main>
</template>

<style scoped>
.wrap { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; align-items: start; }
h1 { font-size: clamp(56px, 9vw, 130px); line-height: 1; }
.lead { font-size: 20px; font-weight: 600; margin: 14px 0 28px; max-width: 460px; }
.hours { list-style: none; padding: 8px 22px; }
.hours li { display: flex; justify-content: space-between; padding: 14px 0; border-bottom: 2px dashed var(--ink); }
.hours li:last-child { border: 0; }
.form { padding: 28px; display: grid; gap: 14px; }
h2 { font-size: 36px; }
label { display: grid; gap: 6px; font-weight: 800; text-transform: uppercase; font-size: 13px; }
input, select { font: inherit; font-weight: 600; text-transform: none; border: 3px solid var(--ink); border-radius: 12px; padding: 12px; background: var(--y); }
.msg { font-weight: 800; padding: 12px 16px; border: 3px solid var(--ink); border-radius: 12px; background: #19b36b; color: #fff; }
.msg.err { background: #ff4b2b; }
@media (max-width: 860px) { .wrap { grid-template-columns: 1fr; } }
</style>
