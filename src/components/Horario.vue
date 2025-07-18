<template>
  <div class="overflow-auto max-w-full p-4">
    <div
      class="grid border border border-gray-300"
      :class="[
        'grid-cols-[80px_repeat(5,_1fr)]',
        'grid-rows-[40px_repeat(260,_2px)]'
      ]"
    >
      <!-- Esquina vacía -->
      <div class="bg-gray-100 col-start-[1] row-start-[1]"></div>

      <!-- Días -->
      <div
        v-for="(dia, i) in dias"
        :key="dia"
        class="bg-gray-100 text-center font-semibold sticky top-0 z-5"
        :class="[
          'row-start-[1]',
          `col-start-[${i + 2}]`
        ]"
      >
        {{ dia }}
      </div>

      <!-- Horas y celdas vacías -->
      <template v-for="(hora, i) in horas" :key="hora">
        <!-- Hora -->
        <div
          class="text-right pr-2 text-sm sticky left-0 bg-white z-5 border border-gray-300"
          :class="[
            `row-start-[${i*20+20+1}]`,
            `row-span-20`,
            'col-start-1'
          ]"
        >
          {{ hora }}
        </div>

      </template>

      <template v-for="row in 260" :key="row">
        <template v-for="col in 5" :key="col">
          <div
            class="border-l border-r border-gray-200"
            :style="`grid-row: ${row + 2}; grid-column: ${col + 1}`"
          ></div>
        </template>
      </template>


      <!-- Ejemplo de sesión posicionado -->
      <Clase v-for="(a,i) in asignaturas.clasesFiltradas"
        :key="`${a.asignatura}-${a.dia}-${a.hora_inicio}-${a.grupo}`"
        :class="`bg-${asignaturas.coloresAsignaturas[a.asignatura]}-400`"
        :curso="a.curso"
        :asignatura="a.asignatura"
        :tipo="a.tipo"
        :grupo="a.grupo"
        :subgrupo="a.subgrupo"
        :inicio="a.hora_inicio"
        :fin="a.hora_fin"
        :dia="a.dia"
      />

      
    </div>
  </div>
</template>

<script setup>
import { useAsignaturasStore } from '@/stores/asignaturas'
import Clase from './Clase.vue'

const asignaturas = useAsignaturasStore()

const props = defineProps('cuatri')
const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

const horas = []
for (let h = 9; h <= 21; h++) {
  horas.push(`${h.toString().padStart(2, "0")}:00`)
}
</script>
