// Condicionales

// Ordenar tres números:
// Pide al usuario que ingrese tres números. Luego, utiliza condicionales para ordenar los números de menor a mayor.



// Calcular el día de la semana:
// Pide al usuario que ingrese un número del 1 al 7 que represente un día de la semana. Utiliza condicionales para mostrar el nombre del día correspondiente.
const diaSemana = (num) => {
    const diaSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado']
    let diaEncontrado = ''

    if(num >= 1 && num <= 7){
        
        diaEncontrado = diaSemana[num - 1]
    }

    return diaEncontrado    
}

console.log(diaSemana(4));


// Verificar si un año es bisiesto:
// Solicita al usuario que ingrese un año y utiliza condicionales para determinar si es bisiesto o no.
const añoViciesto = (anho) => {
    // Todo año bisiesto es divisible entre 4
    anho % 4 === 0 ? resultado = `${anho} es bisiesto` : resultado = `${anho} no es bisiesto`
    
    return resultado
}

console.log(añoViciesto(2000));


// Calificar un examen:
// Pide al usuario que ingrese la puntuación de un examen (0-100) y muestra la calificación correspondiente (A, B, C, D, F) utilizando condicionales.
const notaExamen = (calif) => {
    
    let resultado = ''

    // Usando if/else
    if(calif >= 0 && calif <= 20){
        resultado = 'F'
    }
    if(calif >= 21 && calif <= 40){
        resultado = 'D'
    }
    if(calif >= 41 && calif <= 60){
        resultado = 'C'
    }
    if(calif >= 61 && calif <= 80){
        resultado = 'B'
    }
    if(calif >= 81 && calif <= 100){
        resultado = 'A'
    }

    return resultado
}

console.log(notaExamen(43));

// Forma corta
const notaExamen2 = (calif) => {

    // Crear array de objects
    const calificaciones = [
        {min: 0, max: 20, valor: 'F'},
        {min: 21, max: 40, valor: 'D'},
        {min: 41, max: 60, valor: 'C'},
        {min: 61, max: 80, valor: 'B'},
        {min: 81, max: 100, valor: 'A'}
    ]

    const nota = calificaciones.reduce((valor, rango) => {
        calif >= calificaciones.min && calificaciones <=calificaciones.max ? rango.valor :  valor = ' ';
    }, 0) 

    return nota
}  

console.log(notaExamen(29));

// Determinar si un número es primo:
// Solicita al usuario que ingrese un número y utiliza condicionales para determinar si es un número primo.
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


// Verificar si un año es de la era actual:
// Pide al usuario que ingrese un año y utiliza condicionales para verificar si pertenece a la era actual (después de 2000) o no.
const actual = (anho) => {
    let resutaltado = ''

    if(anho >= 2000){
       return resutaltado = `${anho} pertenece al nuevo milenio`   
    }
    return resutaltado = `${anho} no pertenece al nuevo milenio`

}

console.log(actual(2003));

// Calcular el descuento en una tienda:
// Solicita al usuario que ingrese el monto total de compra y utiliza condicionales para aplicar un descuento del 10% si la compra es mayor a $100.
const descuento = (precio) => {
    let resultado = 0

    if(precio > 100){
        return resultado = precio - ((precio * 10) / 100)
    }
    return resultado
}

console.log(descuento(123));

// Determinar si un triángulo es equilátero, isósceles o escaleno:
// Pide al usuario que ingrese las longitudes de los lados de un triángulo y utiliza condicionales para determinar su tipo.
const equilatero = (l1,l2,l3)=>{
 
    if (!(l1 === l2 && l2 === l3)) {
        return 'No es equilátero';
    }
        return 'Es equilátero';
}

console.log(equilatero(1,1,1));


// Calcular el índice de masa corporal (IMC):
// Solicita al usuario que ingrese su peso y altura, y utiliza condicionales para calcular y mostrar su IMC.
const validarIMC = (p,a, valorImc) => {
    const imc = valorImc(p,a)

    if(imc < 18.5){
        return 'Bajo'
    }
    if(imc >= 18.5 && imc <= 24.9){
        return 'Normal'
    }
    if(imc >= 25 && imc <= 29.9){
        return 'Sobrepeso'
    }
    return 'Obeso'
}

function calcularIMC(p,a){
    return (p/Math.pow(a,2))
}

console.log(validarIMC(73, 1.72, calcularIMC));

// Juego de piedra, papel o tijeras:
// Implementa un juego simple de piedra, papel o tijeras. Pide al usuario que elija una opción, genera una opción aleatoria para la computadora y determina el ganador utilizando condicionales.
const juegoPPT = (opJugador, resultadoJuego) => {
    const opciones = ['Tijera', 'Papel', 'Piedra']
    const numAleatorio = Math.floor(Math.random() * opciones.length)
    const opcionComputadora = opciones[numAleatorio]
    const resultado = resultadoJuego(opcionComputadora, opJugador)

    return resultado
}

function sistema(opcionC, opcionJ){
    if(opcionC === opcionJ){
        return 'EMPATE, ambos elijieron lo mismo'
    }
    if(
    (opcionC === 'Tijera' && opcionJ === 'Papel') ||
    (opcionC === 'Papel' && opcionJ === 'Piedra') ||
    (opcionC === 'Piedra' && opcionJ === 'Tijera') ){
        return `PERDISTE, tu ${opcionJ} no pudo con el/la ${opcionC}`
    } 
        return `GANASTE, tu ${opcionJ} pudo con el/la ${opcionC}`
}

console.log(juegoPPT('Papel', sistema));