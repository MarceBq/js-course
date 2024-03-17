// Promesas
// Las promesas son un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca.
// Las promesas son una solución al problema de los callbacks anidados.
// Las promesas tienen 3 estados:
// - Pending: Inicial
// - Fulfilled: Éxito
// - Rejected: Error
// Las promesas tienen 2 métodos:
// - then: Se ejecuta cuando la promesa se resuelve
// - catch: Se ejecuta cuando la promesa es rechazada
// Resolve y reject son funciones que se pasan a la función callback de la promesa y se utilizan para resolver o rechazar la promesa.

// Ejemplo de promesa
// Ejemplo de promesa
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    const suma = 1 + 3;
    suma === 4 ? resolve(suma) : reject("Error en la suma");
  }, 2000);
});

promesa
  .then((suma) => {
    console.log(suma, "Promesa resuelta");
  })
  .catch((error) => {
    console.log("Hay un error en la promesa:", error);
  });
