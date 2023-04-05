class Banda {
    constructor({
      nombre,
      generos = [],
    }) {
      this.nombre = nombre;
      this.generos = generos;
      this.integrantes = [];
    }
    agregarIntegrante(integranteNuevo) {
      // Tu código aquí 👈
      const baterista =  this.integrantes.some(
        (integrante => integrante.instrumento === "Bateria"
        ));
      if (integranteNuevo.instrumento != "Bateria") {
          this.integrantes.push(integranteNuevo);
      }
      else {
        if (!baterista)
          this.integrantes.push(integranteNuevo);
        else
          console.log("Ya hay baterista en esta banda");
      }
    }
  }
  //Crear clase Integrante
  class Integrante {
    // Tu código aquí 👈
    constructor({
      nombre,
      instrumento
    }) {
      this.nombre = nombre,
      this.instrumento = instrumento
    }
  }
  export {
    Banda,
    Integrante,
  }