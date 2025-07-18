# HorariGo

Web visual y personalizable para generar tu horario de clase, desarrollada con Vue 3 + Vite + Pinia.

## Requisitos

- Node.js ≥ 18

## Clonado y ejecución del proyecto

1. Clona el repositorio y muévete a la carpeta del repositorio:

```sh
git clone https://github.com/JuaanGB/HorariGohttps://github.com/JuaanGB/HorariGo
cd HorariGo
```

2. Instala las dependencias:

```sh
npm install
```

3. Lanza el entorno de desarrollo:

```sh
npm run dev
```

## Estructura de datos (`src/stores/datos.js`)

Este fichero contiene los datos del horario. Debes introducirlos manualmente en el siguiente formato:

```js
export const clases = [

  /* Ejemplo de clase:
  {
    asignatura: "A",            // Nombre corto de la asignatura
    tipo: "LM",                 // Tipo de clase: LM, Lab, etc.
    curso: 2,                   // Curso (numérico)
    cuatri: 1,                  // Cuatrimestre (1 o 2)
    grupo: 1,                   // Grupo general
    subgrupo: "1",              // Subgrupo o null si no aplica
    dia: 0,                     // Día (0 = Lunes, 1 = Martes, ..., 6 = Domingo)
    hora_inicio: "09:00",       // Hora de inicio en formato HH:mm
    hora_fin: "10:00"           // Hora de fin en formato HH:mm
  }
  */

]
```

También se define un mapa de colores para cada asignatura:

```js
// Mapa con colores Tailwind para las asignaturas
export const colores = {
  // Ejemplo:
  // A: "blue",
}
```

> ✅ Colores válidos: `red`, `green`, `yellow`, `blue`, `purple`, `orange`, etc.

---

Proyecto desarrollado con ❤️ para estudiantes organizados y amantes del frontend.
