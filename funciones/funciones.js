/* 
=> Funcion declarativa : Benificio de hosting

function nombre(parametro1, parametro2){
    //Code
    
    console.log(algo)
    return algo
}
*/

/* 
=> Funcion de expresion : No tiene benificio de hosting

const miVariable = function(parametro1, parametro2){
    //Code
    
    console.log(algo)
    return algo
}
*/


// Hosting => JavaScript prioriza las funciones declarativas y las guarda en memoria
 
// ----- Ejercicios -----

 
// 1)Función para calcular el área de un círculo:
// Define una función llamada calcularAreaCirculo que toma el radio como parámetro y devuelve el área del círculo.

function calcularAreaCirculo(radio){
    return Math.PI * Math.pow(radio, 2)
}

console.log(calcularAreaCirculo(2));


// 2)Función para verificar si un número es par o impar:
// Crea una función llamada esPar que toma un número como argumento y devuelve true si es par y false si es impar.

function verificarNum(num){
    return num % 2 === 0 ? `${num} es par` : `${num} no es par` 
}

console.log(verificarNum(13))

// 3)Función para encontrar el máximo entre dos números:
// Implementa una función llamada encontrarMaximo que toma dos números como parámetros y devuelve el mayor de los dos.

function maximoPosible(num1, num2){
    if(num1 > num2){
        return `${num1} es el mayor`
    }
    if(num1 < num2){
        return `${num2} es el mayor`
    }
    return `Ambos son iguales`
}

console.log(maximoPosible(6,5))

// 4)Función para invertir una cadena de texto:
// Crea una función llamada invertirCadena que toma una cadena como parámetro y devuelve la cadena invertida.

function invertirCadena(texto){
    let nuevoTexto = ''

    //  |        COMIENZO        | HASTA  | LO QUE HARA |
    for (let i = texto.length - 1; i >= 0 ; i--) {
        nuevoTexto += texto[i]
    }

    return nuevoTexto
}

console.log(invertirCadena('Hola Mundo'))

// 5)Función para contar el número de vocales en una cadena:
// Define una función llamada contarVocales que toma una cadena como argumento y devuelve el número de vocales presentes en ella.

function contarVocales(texto){
    let cantidadVocales = 0

    for (let i = 0; i <= texto.length; i++) {
        if(texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === '0' || texto[i] === 'u')
        cantidadVocales++
    }

    return cantidadVocales
}

console.log(contarVocales('Hola Mundo'));

// 6)Función para sumar todos los elementos de un array:
// Implementa una función llamada sumarArray que toma un array de números como parámetro y devuelve la suma de todos los elementos.

function sumarElementos(arr){
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    return total
}

console.log(sumarElementos([1,2,3,4,5]))

// 7)Función para verificar si un número es primo:
// Crea una función llamada esPrimo que toma un número como argumento y devuelve true si es primo y false si no lo es.

function esPrimo(num){
    if(num === 1){
        return `${num} no es primo`
    }
    if(num === 2){
        return `${num} es primo`
    }
    if(num % 2 === 0){
        return `${num} no es primo`
    }
    return `${num} es primo`
}

console.log(esPrimo(2));

// 8)Función para convertir grados Celsius a Fahrenheit:
// Define una función llamada celsiusToFahrenheit que toma una temperatura en grados Celsius y la convierte a Fahrenheit.

function celsiusToFarenheit(celsius){
    return (1.8 * celsius) + 32
}

console.log(celsiusToFarenheit(10));

// 9)Función para encontrar el número más grande en un array:
// Implementa una función llamada encontrarNumeroMaximo que toma un array de números como parámetro y devuelve el número más grande.

function encontrarNumeroMaximo(arr){

    //Inicializando desde posicion 1
    let maxE = arr[0]

    for (let i = 0; i < arr.length; i++) {  
        if(maxE < arr[i])  
        maxE = arr[i]   
    }

    return maxE
}

console.log(encontrarNumeroMaximo([2,9,6,1]));

// - 10)Función para generar un número aleatorio entre un rango dado:
// Crea una función llamada generarNumeroAleatorio que toma un rango (mínimo y máximo) como parámetros y devuelve un número aleatorio dentro de ese rango.
function generarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(generarNumeroAleatorio(100,400));