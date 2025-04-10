class Tarea {
  constructor(codigo, duracion, complejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad;
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
  }

  obtenerCosto (costoBase) {
    return this.complejidad.calcularCosto(this.duracion, costoBase)
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = []) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.costo = 0;
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }

  obtenerCosto(costoBase) {
    let costo = this.tareas.reduce((acum,tarea) => acum + tarea.obtenerCosto(costoBase), 0)
    if (this.tareas.length > 3) {
      costo *= 1.4
    }
    return costo

  }
}

module.exports = { Tarea, TareaCompuesta };
