// Array methods

// 1) Suma de todos los elementos:
// Crea una función que sume todos los elementos de un array.

// reduce => Reduce el array a un solo valor. Ejecuta una función reductora sobre cada elemento del array, devolviendo como resultado un único valor.
const arrNum = [1, 2, 3, 4, 5]
const sumArr = arrNum.reduce((acm, e) => acm + e, 0)
console.log(sumArr);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 2) Filtrar números pares:
// Filtra los números pares de un array.

// filter => Crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const arrNum2 = [1, 2, 3, 4, 5]
const arrPares = arrNum2.filter(e => e % 2 === 0)
console.log(arrPares);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 3) Duplicar cada elemento:
// Duplica cada elemento de un array.

// map => Crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const arrNum3 = [1, 2, 3, 4, 5]
const arrDup = arrNum3.map(e => e * 2)
console.log(arrDup)

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 4) Encontrar el máximo:
// Encuentra el valor máximo en un array numérico.

// Math.max => El método Math.max() devuelve el mayor de cero o más números.
const arrNum4 = [1, 2, 3, 4, 5]
const maxVal = arrNum4.reduce((max, e) => (e > max ? e : max), 0)
const maxVal2 = Math.max(...arrNum4)    

console.log(maxVal);
console.log(maxVal2);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 5) Eliminar duplicados:
// Elimina los elementos duplicados de un array.

// indexOf => El método indexOf() devuelve el primer índice en el que se puede encontrar un elemento dado en el array, ó devuelve -1 si el elemento no esta presente. Además filter sigue un orden en la función callback.
const arrNum5 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
const arrSinDup = arrNum5.filter((e, index, arr) => arr.indexOf(e) === index)

// Set => El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.
// ... => Operador de propagación, permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales).
const arrSinDup2 = [...new Set(arrNum5)]

console.log(arrSinDup);
console.log(arrSinDup2);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 6) Convertir a mayúsculas:
// Convierte todas las cadenas de un array a mayúsculas.
const arrStr6 = ['hola', 'mundo']
const arrMayus = arrStr6.map(e => e.toUpperCase())

console.log(arrMayus);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 7) Contar ocurrencias:
// Cuenta cuántas veces aparece un elemento específico en un array.
const arrNum7 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]

// (acm y e) son los parametros de la función callback, acm es el acumulador y e es el elemento actual. 
// Acm iniciará en 0 y 'e' irá recorriendo cada elemento del array.
const count = arrNum7.reduce((acm, e) => e === 1 ? acm + 1 : acm, 0)
console.log(count);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 8) Concatenar arrays:
// Combina dos arrays en uno solo.
const arrNum8 = [1, 2, 3, 4, 5]
const arrNum9 = [6, 7, 8, 9, 10]

// concat => El método concat() se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.   
const arrConcat = arrNum8.concat(arrNum9)
const arrConcat2 = [...arrNum8, ...arrNum9]

console.log(arrConcat);
console.log(arrConcat2);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 9) Invertir el orden:
// Invierte el orden de los elementos en un array.

// reverse => El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
const arrNum10 = [1, 2, 3, 4, 5]
const arrReverse = arrNum10.reverse()

console.log(arrReverse);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 10) Calcular promedio:
// Calcula el promedio de un array numérico.
const arrNum11 = [1, 2, 3, 4, 5]
const promedio = arrNum11.reduce((acm, e) => (acm + e),0) / arrNum11.length

console.log(promedio);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 11) Encontrar elementos mayores a un valor:
// Filtra los elementos mayores a un valor específico en un array numérico.
const arrNum12 = [1, 2, 3, 4, 5]
const arrMayores = arrNum12.filter(e => e > 3)

console.log(arrMayores);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 12) Comprobar todos los elementos positivos:
// Verifica si todos los elementos de un array numérico son positivos.

// every => El método every() comprueba si todos los elementos en un array pasan la prueba implementada por la función dada.
const verificarNumPositivos = arrNum12.every(e => e > 0)
console.log(verificarNumPositivos);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 13) Unir cadenas:
// Une todas las cadenas de un array en una sola cadena.
const arrStr13 = ['hola', 'mundo']

// join => El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.  
const arrJoin = arrStr13.join(' ')

console.log(arrJoin);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 14) Ordenar números de forma descendente:
// Ordena un array numérico en orden descendente.
const arrNum14 = [1, 13, 3, 34, 5]
const animales = ['perro', 'gato', 'elefante', 'leon', 'tigre', 'jirafa']

// sort => El método sort() ordena los elementos de un array localmente y devuelve el array ordenado. La forma de orden no es necesariamente estable. Modifica al array original.
console.log(animales.sort());

/*
Al ordenar números con el método sort en JavaScript, se recomienda emplear una función de comparación personalizada. Esta función compara dos elementos del array y devuelve un valor negativo si el primer elemento debe ir antes que el segundo, un valor positivo si debe ir después, y cero si son iguales, manteniendo así el orden deseado.
*/
const arrDesc = arrNum14.sort((a, b) => (b - a))
console.log(arrDesc);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 15) Dividir en grupos:
// Divide un array en grupos de un tamaño específico.

// slice => El método slice() devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio hasta fin (fin no incluido), tomando una posicion inicial x hasta una pósicion inicial y + 1. El array original no se modificará.
const dividirtGrupros = (arr, tamañoGrupo) => {
    const grupos = []
    
    for(let i = 0; i < arr.length; i += tamañoGrupo){
        grupos.push(arr.slice(i, i + tamañoGrupo))
    }

    return grupos
}

console.log(dividirtGrupros([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 16) Extraer último elemento

// pop => El método pop() elimina el último elemento de un array y lo devuelve. Este método cambia la longitud del array.
const arrNum16 = [1, 2, 3, 4, 5]
const arrSinUltimo = arrNum16.pop()


console.log(arrSinUltimo);
console.log(arrNum16);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 17) Agrega uno o mas elementos al INICIO 

// unshift => El método unshift() agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
const arrNum17 = [1, 2, 3, 4, 5]
const arrConInicio = arrNum17.unshift(0)

console.log(arrConInicio)
console.log(arrNum17);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 18) Elimina el primer elemento del array 
// shift => El método shift() elimina el primer elemento del array y lo retorna. Este método cambia la longitud del array.
const arrNum18 = [1, 2, 3, 4, 5]
const arrSinInicio = arrNum18.shift()

console.log(arrSinInicio);
console.log(arrNum18);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 19) Determinar si el elemento está 
// includes => El método includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
const arrNum19 = [1, 2, 3, 4, 5]
const incluye = arrNum19.includes(3)
const incluye2 = arrNum19.includes(3, 2) // El segundo parametro es el indice de inicio de la busqueda

console.log(incluye);

/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 20) Determinar si el elemento se encuentrea en el array
// indexOf => El método indexOf() devuelve el primer índice en el que se puede encontrar un elemento dado en el array, ó devuelve -1 si el elemento no esta presente.

const arrNum20 = [1, 2, 3, 4, 5 ]
const index = arrNum20.indexOf(3)

const index2 = arrNum20.indexOf(3, 0) // El segundo parametro es el indice de inicio de la busqueda

console.log(index);
console.log(index2);


/* ---------------------------------------------------------------------------------------------------------------------------------- */
/* ---------------------------------------------------------------------------------------------------------------------------------- */

// 21) Ejercicio con metodo splice
// splice => El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
// Formato splice => splice(inicio, borrar, agregar)


// Elimina el elemento en la posición 2
const arrNum21 = [1, 2, 3, 4, 5]
const arrSplice = arrNum21.splice(2, 1, 6, 7)

// Me da el array con el elemento eliminado
console.log(arrSplice);

// Me da el array modificado 
console.log(arrNum21);