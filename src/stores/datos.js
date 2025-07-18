export const clases = [
 
  /* JSON con propiedades. Ejemplo:
  {asignatura: "A", tipo: "Teoría", curso: 2, cuatri: 1, grupo: 1, subgrupo: "1", dia: 0, hora_inicio: "09:00", hora_fin: "10:00"}
  - Si no hay subgrupo, pon null.
  - Los días se mapean a 0 (lunes), 1 (martes), 2 (miércoles), etc.
  */

]

// Calculamos las asignaturas a partir de las clases
export let tercero = clases
  .filter(item => item.curso === 3)
  .map(item => item.asignatura);
tercero = [...new Set(tercero)]

export let cuarto = clases
  .filter(item => item.curso === 4)
  .map(item => item.asignatura);
cuarto = [...new Set(cuarto)]

// Mapa con colores Tailwind para asignaturas
// Algunos colores recomendados (no harían falta más. Si quieres más, me replantería matricularme de menos asignaturas)
//      red, green, yellow, blue, purple, orange
// Formato JSON clave (nombre de asignatura. El mismo que en 'tercero' y 'cuarto') valor (color, alguno de los de arriba)
export const colores = {
    // asignatura: "color"
}
