<script setup>
import { computed } from 'vue'

const props = defineProps([
  'curso',
  'dia',
  'asignatura',
  'tipo',
  'grupo',
  'subgrupo',
  'inicio',
  'fin'
])

function horaToFila(hora) {
  const [h, m] = hora.split(':').map(Number)
  return Math.floor(20 * (h - 9) + 2 * (m / 6) + 2)
}

const gridStyle = {
  gridColumnStart: props.dia + 2, // +1 por columna de horas
  gridRowStart: horaToFila(props.inicio),
  gridRowEnd: horaToFila(props.fin)
}

const esCorto = computed(() => {
  const [h1, m1] = props.inicio.split(':').map(Number)
  const [h2, m2] = props.fin.split(':').map(Number)
  const duracionMin = (h2 * 60 + m2) - (h1 * 60 + m1)
  return duracionMin <= 90 // 1h30min o menos
})
</script>

<template>
  <div
    class="rounded-box shadow-md p-3 text-white text-sm opacity-70"
    :class="esCorto ? 'flex flex-row items-center gap-2 justify-between' : 'flex flex-col gap-1'"
    :style="gridStyle"
  >
    <span class="font-semibold text-base flex items-center gap-2 opacity-100 whitespace-nowrap">
      <span>{{ `${props.curso}º ${props.asignatura}-${props.tipo}` }}</span>
      <span class="text-xs font-normal">{{ `${props.inicio} - ${props.fin}` }}</span>
    </span>
    <span v-if="!esCorto">
      {{ `Grupo ${props.grupo}${props.subgrupo ? '.' + props.subgrupo : ''}` }}
    </span>
    <span v-else class="whitespace-nowrap">
      {{ `Grupo ${props.grupo}${props.subgrupo ? '.' + props.subgrupo : ''}` }}
    </span>
  </div>
</template>

