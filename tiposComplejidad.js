const { Tarea, TareaCompuesta } = require("./Tareas");
//declaracion de distintos tipos de complejidades
let costoBase = 1000;

class ComplejidadMinima {

    calcularCosto(duracion,costoBase) {
        return costoBase * duracion 
    }
}

class ComplejidadMedia {
    calcularCosto(duracion,costoBase){
        return costoBase * duracion * 1.5
    }
}

class ComplejidadMaxima  {
    calcularCosto(duracion,costoBase) {
        let costo = costoBase * duracion
        if (duracion <= 10) {
            return costo * 1.7
        } else {
            let costoExtra = 1000 * (duracion - 10)
            return ( costo * 1.7 ) + costoExtra
        }

    }
   
}

module.exports = { ComplejidadMinima, ComplejidadMedia,ComplejidadMaxima};
  
/*
//ver como exportar 
module.exports = new CompeljidadMinima()
module.exports = new CompeljidadMedia()
module.exports = new CompeljidadMaxima()

const minima = new CompeljidadMinima()
console.log(minima.calcularCosto(10,100))
*/