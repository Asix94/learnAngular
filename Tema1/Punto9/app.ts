let prom1 = new Promise(function(resolve: any, reject: any) {
  setTimeout(() => {
    console.log("Promesa Terminada");

    resolve();

    //reject();
    
  }, 1500);
});

console.log("Paso 1");

prom1.then(
  function() {
    console.log("Ejecutarme cuandi se termine bien!");
  },
  function() {
    console.error("Ejecutar si todo sale mal");
  }
);

console.log("Paso 2");
