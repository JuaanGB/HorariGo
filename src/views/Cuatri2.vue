<template>
  <div class="flex flex-col">

    <Horario></Horario>

  </div>
</template>

<script setup>
import Horario from '@/components/Horario.vue';
import { useAsignaturasStore } from '@/stores/asignaturas';
import { onMounted } from 'vue';

const asignaturasStore = useAsignaturasStore()

onMounted( () => asignaturasStore.setCuatrimestre(2))

</script>
