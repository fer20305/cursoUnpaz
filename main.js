const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
//const {ComplejidadMinima, ComplejidadMedia, ComplejidadMaxima} = require("./tiposComplejidad")
const { ComplejidadMinima, ComplejidadMedia, ComplejidadMaxima } = require("./tiposComplejidad");
const costoBase = 1000; //valor configurable
const complejidadMinima = new ComplejidadMinima;
const complejidadMedia = new ComplejidadMedia;
const complejidadMaxima = new ComplejidadMaxima;

const t1 = new Tarea("1", 3, complejidadMinima);
const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6, complejidadMedia),
  new TareaCompuesta("2.2", 8, [new Tarea("2.2.1", 3, complejidadMedia), new Tarea("2.2.2", 4, complejidadMaxima)]),
]);
const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6, complejidadMinima),
  new Tarea("3.2", 3, complejidadMaxima),
]);

proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();
console.log(`Duracion Total: ${proyecto.getDuracion()}`);
console.log(`Costo total del proyecto: ${proyecto.obtenerCostoTotal(costoBase)}`)
