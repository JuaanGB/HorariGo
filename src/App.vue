<script setup>
    import { RouterLink, RouterView } from 'vue-router'
import { useAsignaturasStore } from './stores/asignaturas';
import { computed } from 'vue';
import SelectGrupo from './components/SelectGrupo.vue';

    const asignaturasStore = useAsignaturasStore()

    // Puedes usar estos computed para el checkbox padre
    const tercero = computed({
    get: () => asignaturasStore.terceroAllSelected,
    set: (val) => asignaturasStore.toggleTercero(val)
    })

    const cuarto = computed({
    get: () => asignaturasStore.cuartoAllSelected,
    set: (val) => asignaturasStore.toggleCuarto(val)
    })

</script>

<template>
    <header class="sticky top-0 z-10">
        
        <nav class="bg-primary sticky top-0 z-10 flex justify-between items-center p-4 z-10">

            <RouterLink class="btn btn-primary rounded-xl text-2xl" to="/">HorariGo</RouterLink>
            <div class="flex flex-row gap-4 items-center">
                <RouterLink class="btn btn-primary rounded-xl ml-auto" to="/cuatri1">Primer cuatrimestre</RouterLink>
                <RouterLink class="btn btn-primary rounded-xl" to="/cuatri2">Segundo cuatrimestre</RouterLink>
                <p class="text-white text-sm">Desarrollada por <a href="https://github.com/JuaanGB/HorariGo">JuaanGB</a></p>
            </div>
            
        </nav>
        
    </header>
    <section class="min-h-screen">

        <!-- Tercero -->
        <div class="bg-base-200 p-4 flex flex-row gap-10 items-center">
            <div class="flex gap-2">
                <input type="checkbox" id="tercero" class="checkbox" v-model="tercero" />
                <label for="tercero">Tercero</label>
            </div>
            <SelectGrupo v-model="asignaturasStore.grupoTercero"></SelectGrupo>
        </div>

        
        
        <div class="flex flex-row gap-6 p-4 pl-10">
            <div v-for="(a, i) in asignaturasStore.tercero" :key="a" class="flex gap-1">
                <input type="checkbox" class="checkbox" :id="'check-'+a" v-model="asignaturasStore.terceroChecked[i]" />
                <label :for="'check-'+a">{{ a }}</label>
            </div>
        </div>

        <!-- Cuarto -->
        <div class="bg-base-200 p-4 flex flex-row gap-10 items-center">
            <div class="flex gap-2">
                <input type="checkbox" id="cuarto" class="checkbox" v-model="cuarto" />
                <label for="cuarto">Cuarto</label>
            </div>
            <SelectGrupo v-model="asignaturasStore.grupoCuarto"></SelectGrupo>
        </div>
        
        <div class="flex flex-row gap-6 p-4 pl-10">
            <div v-for="(a, i) in asignaturasStore.cuarto" :key="a" class="flex gap-1">
                <input type="checkbox" class="checkbox" :id="'check-cuarto-'+a" v-model="asignaturasStore.cuartoChecked[i]" />
                <label :for="'check-cuarto-'+a">{{ a }}</label>
            </div>
        </div>

        <RouterView />
    </section>
    
</template>

<style>
    @import 'tailwindcss';
    @plugin 'daisyui';

    a:hover {
        text-decoration: underline;
    }

</style>
