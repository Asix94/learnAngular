class Avenger {
    
  nombre: string = "Sin Nombre";
  equipo: string = "undefined";
  nombreReal: string = "undefined";

  puedePelear: boolean = false;
  peleasGanadas: number = 0;

  constructor(nombre: string, equipo: string, nombreReal: string) {
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }
}

let antman: Avenger = new Avenger("Antman", "cap", "Scott Lang");

console.log(antman);
