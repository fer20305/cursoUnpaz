class Proyecto {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  getDuracion() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), 0);
  }

  obtenerCostoTotal(costoBase) {
    return this.tareas.reduce((acum, tarea) => acum + tarea.obtenerCosto(costoBase), 0)
  }

  mostrarTareas() {
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }

  cleanTareas() {
    this.tareas = [];
  }
}

module.exports = new Proyecto();
