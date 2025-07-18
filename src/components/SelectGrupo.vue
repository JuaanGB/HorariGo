<template>
  <select v-model="modelo" class="select w-40">
    <option disabled>Grupo</option>
    <option v-for="g in grupos" :key="g" :value="g">{{ g }}</option>
  </select>
</template>

<script setup>
const modelo = defineModel()

const grupos = []
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    grupos.push(`${i}.${j}`)
  }
}
</script>
