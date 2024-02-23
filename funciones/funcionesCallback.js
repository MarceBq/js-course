// Funcion callback => Función que recibe como parametro otra Función

// ---- Ejercicio ----


// 1) Sumar dos números:
// Crea una función llamada sumar que tome dos números como parámetros y utilice un callback para mostrar la suma.

function sumaNum(num1, num2, mostrarResultado){
    const resultado = num1 + num2
    mostrarResultado(resultado)
}

function resultadoSuma(resultado){
    console.log(`El resultado de la suma es: ${resultado}`);
}

sumaNum(5,6, resultadoSuma)


// 2) Multiplicar elementos de un array:
// Escribe una función llamada multiplicarArray que tome un array de números y utilice un callback para devolver el producto de todos los elementos.

function multiplicarArray(arr, totalArray){
    const resultado = totalArray(arr)
    return resultado
}

function resultadoMultiplicacion(arr){
    let resultado = arr[0]

    for (let i = 1; i < arr.length; i++) {
        resultado *= arr[i]
    }

    return resultado
}

console.log(multiplicarArray([5,6,7], resultadoMultiplicacion));

// 3) Filtrar elementos pares:
// Implementa una función llamada filtrarPares que tome un array de números y utilice un callback para devolver un nuevo array con solo los números pares.

function filtrarPares(arr, filtroArr){
    const arrPares = filtroArr(arr)
    return arrPares    
}

function filtrarArrPares(arr){
    const nuevoArr = arr.filter(e => e % 2 === 0)
    return nuevoArr
}

console.log(filtrarPares([1,4,5,6,8,9], filtrarArrPares));


// 4) Convertir a mayúsculas:
// Crea una función llamada convertirMayusculas que tome una cadena de texto y utilice un callback para devolver la misma cadena en mayúsculas.

function convetirMayusculas(texto, cambioMayus) {
    const textoMayus = cambioMayus(texto)
    return textoMayus
}

function cambiarTextoMayus(texto){
    const nuevoTexto = texto.toUpperCase()
    return nuevoTexto
}

// Otra forma xd
function cambiarTextoMayus2(texto){
    let nuevoTexto = ''

    for (let i = 0; i < texto.length; i++) {
        if(texto[i] === texto[i].toUpperCase()){
            nuevoTexto += texto[i]
        }else{
            nuevoTexto += texto[i].toUpperCase()
        }
    }

    return nuevoTexto
}


console.log(convetirMayusculas('marcelo barrientos quispe', cambiarTextoMayus));

console.log(convetirMayusculas('marcelo barrientos quispe', cambiarTextoMayus2));

// 5) Contar letras:
// Escribe una función llamada contarLetras que tome una cadena de texto y utilice un callback para devolver la cantidad de letras que contiene.

function contarLetras(texto, totalLetras){
    const cantidadLetras = totalLetras(texto)
    return cantidadLetras
} 

function contarCantidadLetras(texto){
    let acumuladorLetras = 0

    for (let i = 0; i < texto.length; i++) {
        if(texto[i].match(/[a-zA-ZáéíóúÁÉÍÓÚ]/))
        acumuladorLetras++   
    }
    return acumuladorLetras
}


console.log(contarLetras('Cocinando Código', contarCantidadLetras));

// 6) Operación personalizada:
// Define una función llamada operacionPersonalizada que tome dos números y una función callback que realice alguna operación personalizada (por ejemplo, elevar uno al cuadrado y sumar el otro).

// Forma 1
function operacionPersonalizada(num1, num2, resultadoOperacion){
    const resultado = resultadoOperacion(num1,num2)
    return resultado
}

const valorOperacion = (num1, num2) => {
    return Math.pow(num1, 2) * num2
}

console.log(operacionPersonalizada(3,2 , valorOperacion));


// Forma 2
const operacion = (num1,num2,resultadoOperacion) => {
    const resultado = resultadoOperacion(num1,num2)
    return resultado
}

function resolverOperacion(num1, num2){
    return Math.pow(num1, 2) * num2
}

console.log(operacion(5,2, resolverOperacion));

// 7) Filtrar elementos de un array según una condición:
// Crea una función llamada filtrarSegunCondicion que tome un array y una función de condición como callback, y devuelva un nuevo array con los elementos que cumplen la condición

const filtrarElementos = (arr, elementosFiltrados) => {
    const nuevoArr = elementosFiltrados(arr)
    return nuevoArr
}

function filtrarArr(arr){
    return arr.filter(e => e % 2 === 0)
}

console.log(filtrarElementos([1,2,4,5,6,7,8], filtrarArr));