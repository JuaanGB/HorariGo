import { defineStore } from "pinia"
import { reactive, computed, ref, watch } from "vue"
import * as datos from "./datos"

export const useAsignaturasStore = defineStore('asignaturas', () => {

  // Datos obtenidos del fichero de datos para mejor organización
  const tercero = datos.tercero
  const cuarto = datos.cuarto
  const coloresAsignaturas = datos.colores

  // Inicializamos todos los checkboxes a false
  const terceroChecked = reactive(tercero.map(() => false))
  const cuartoChecked = reactive(cuarto.map(() => false))

  // Booleano que verifica si todas las asignaturas están seleccionadas
  const terceroAllSelected = computed(() => terceroChecked.every(Boolean))
  const cuartoAllSelected = computed(() => cuartoChecked.every(Boolean))

  // Referencia para el v-model de los select de grupos
  const grupoTercero = ref('')
  const grupoCuarto = ref('')

  // Para filtrar en función de la vista seleccionada
  const cuatrimestre = ref(1)

  // Asignaturas seleccionadas y clases filtradas
  const asignaturasTerceroSeleccionadas = ref([])
  const asignaturasCuartoSeleccionadas = ref([])
  const clasesFiltradas = ref([])

  // Acciones para marcar o desmarcar todas las asignaturas
  function toggleTercero(value) {
    terceroChecked.forEach((_, i) => terceroChecked[i] = value)
  }
  function toggleCuarto(value) {
    cuartoChecked.forEach((_, i) => cuartoChecked[i] = value)
  }

  // Ante un cambio en algún checkbox, seleccionamos asignaturas
  watch(terceroChecked, () => {
    asignaturasTerceroSeleccionadas.value = tercero.filter((_, i) => terceroChecked[i])
  }, { immediate: true })

  watch(cuartoChecked, () => {
    asignaturasCuartoSeleccionadas.value = cuarto.filter((_, i) => cuartoChecked[i])
  }, { immediate: true })

  // Cuando cambie el cuatrimestre, o las asignaturas seleccionadas o los grupos, actualizamos el horario completo
  watch(
    [cuatrimestre, asignaturasTerceroSeleccionadas, asignaturasCuartoSeleccionadas, grupoTercero, grupoCuarto],
    () => {
      const clasesTercero = datos.clases.filter(clase =>
        asignaturasTerceroSeleccionadas.value.includes(clase.asignatura) &&
        clase.curso === 3 &&
        grupoTercero.value &&
        clase.grupo === Number(grupoTercero.value.split('.')[0]) &&
        (clase.subgrupo === null || Number(clase.subgrupo) === Number(grupoTercero.value.split('.')[1])) &&
        clase.cuatri == cuatrimestre.value
      )

      const clasesCuarto = datos.clases.filter(clase =>
        asignaturasCuartoSeleccionadas.value.includes(clase.asignatura) &&
        clase.curso === 4 &&
        grupoCuarto.value &&
        clase.grupo === Number(grupoCuarto.value.split('.')[0]) &&
        (clase.subgrupo === null || Number(clase.subgrupo) === Number(grupoCuarto.value.split('.')[1])) &&
        clase.cuatri == cuatrimestre.value
      )

      clasesFiltradas.value = [...clasesTercero, ...clasesCuarto]
    },
    { immediate: true }
  )

  // Cambiamos el cuatrimestre cuando cambiamos de vista
  function setCuatrimestre(nuevo) {
    cuatrimestre.value = nuevo
  }

  return {
    tercero,
    cuarto,
    coloresAsignaturas,
    terceroChecked,
    cuartoChecked,
    cuatrimestre,
    terceroAllSelected,
    cuartoAllSelected,
    grupoTercero,
    grupoCuarto,
    clasesFiltradas,
    toggleTercero,
    toggleCuarto,
    setCuatrimestre
  }
})
