
// Paso por valor -> aplicado para tipos de datos primitivos. Como por ejemplo los strings, numbers, booleans, null, undefined, NaN, Symbol.

let color = 'naranja'
let fruta =  color


color = 'verde'
console.log(color);
console.log(fruta);

// Paso por referencia -> aplicados para arrays, objetos y funciones.
const miArray = [1,2,3]
const nArray = miArray

console.log(miArray);
console.log(nArray);

nArray.push(4)

// Al modificar el array nArray, también se modifica el array miArray.
console.log(miArray);
console.log(nArray);