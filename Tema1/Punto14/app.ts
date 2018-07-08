// Uso de let y const

//var nombre = "Ricardo Tapia";
//var edad = 23;
//var PERSONAJE = {
//    nombre: nombre,
//    edad: edad
//};

let nombre:string = "Ricardo Tapia";
let edad:number = 23;
const PERSONAJE:{nombre:string, edad:number} = {
    nombre: nombre,
    edad: edad
}

// Cree una interfaz que sirva para validar el siguiente objeto

//var batman = {
    //nombre: "Bruno Diaz",
    //artesMarciales: ["karate","Aikido","Wing Chun","Jiu-Jitsu"]
//}

interface Batman{
    nombre:string;
    artesMarciales:string[];
}

let batman:Batman = {
    nombre: "Bruno Diaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
}

// Convertir esta funcion a una function de flecha

//function resultadoDoble(a,b){
//    return (a + b) * 2;
//}

let resultadoDoble = (a:number,b:number) => (a+b)*2

// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//    PODER = opcional
//    ARMA = por defecto = "arco"

//function getAvenger( nombre, poder, arma){
//    var mensaje;
//    if( poder ){
//        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
//    }else{
//        mensaje = nombre + " tiene un " + poder
//    }
//};

function getAvenger(nombre:string, poder?:string, arma:string = "arco"){
    
    var mensaje:string;

    if( poder ){
        mensaje = `${nombre} tiene el poder de: ${poder} y un arma: ${arma}`
    }else{
        mensaje = `${nombre} tiene un poder ${poder}`
    }
}

// Cree una clase que permita manejar la siguiente estructura
// la clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
// * base
// * altura
// Tambien un método que calcule el área = base * altura,
// ese método debe de retornar un numero 

class Rectangulo{

    base:number;
    altura:number
    
    calcularArea():number{
        return this.base * this.altura
    }
}