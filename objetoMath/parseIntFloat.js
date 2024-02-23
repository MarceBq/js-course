// PerseInt / ParseFloat

/*
Sirve para convertir un string a entero o 
flaot respectivamente
*/

const cadena1 = '25.4'
const cadena2 = '234.32'
const cadena3 = '18 años'
const cadena4 = 'Hola soy Marcelo y tengo 18'

console.log(parseInt(cadena1));

console.log(parseFloat(cadena2));

console.log(parseInt(cadena3));

console.log(parseInt(cadena4.slice(cadena4.length - 2)));