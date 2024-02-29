// Arrays
const arrayEjemplo = [1,2,3,4,5,6,7,8,9,10]

console.log(arrayEjemplo[0]);
console.log(arrayEjemplo.length);
console.log(arrayEjemplo[arrayEjemplo.length - 2]);

// Los elementos del array si se pueden modificar pero es mala practica
arrayEjemplo[0] = 100
console.log(arrayEjemplo);

// Agregar un elemento en el array en la posicion final(no recomendable)
arrayEjemplo[arrayEjemplo.length] = 32
console.log(arrayEjemplo);

// Acceder a un elemento de un array que esta dentro de otro array
const arrayEjemplo2 = [1,2,3,4,5,6,7,8,9,10, ['Pepe',11,12,13,14,15]]
console.log(arrayEjemplo2[10][0]);
console.log(arrayEjemplo2[10][0][0]);