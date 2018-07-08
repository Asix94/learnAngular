"use strict";
// Uso de let y const
//var nombre = "Ricardo Tapia";
//var edad = 23;
//var PERSONAJE = {
//    nombre: nombre,
//    edad: edad
//};
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
var batman = {
    nombre: "Bruno Diaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una function de flecha
//function resultadoDoble(a,b){
//    return (a + b) * 2;
//}
var resultadoDoble = function (a, b) { return (a + b) * 2; };
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
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un poder " + poder;
    }
}
// Cree una clase que permita manejar la siguiente estructura
// la clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
// * base
// * altura
// Tambien un método que calcule el área = base * altura,
// ese método debe de retornar un numero 
var Rectangulo = /** @class */ (function () {
    function Rectangulo() {
    }
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
