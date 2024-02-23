// Operador ternario 

// Número positivo o negativo:
// Escribe una expresión utilizando el operador ternario que determine si un número es positivo o negativo.

function validar(num){
    let resultado = ''

    num >= 0 ? resultado = 'Num positivo' : resultado = 'Num negativo' 

    return resultado
}

console.log(validar(-32));

// Día laboral o fin de semana:
// Crea una expresión que, dado un día de la semana, determine si es un día laboral o un fin de semana.

function diaLaboral(dia) {
    return (dia >= 1 && dia <= 5) ? 'Día laboral' : 'Día libre';
}


console.log(diaLaboral(1));

// Calificación aprobatoria:
// Utiliza el operador ternario para determinar si la calificación de un estudiante es aprobatoria (mayor o igual a 60) o no.
function aprobar(nota){
    let resultado = ''

    nota >= 60 ? resultado = 'Aprobo' : resultado = 'Desaprobo' 

    return resultado
}

console.log(aprobar(63));

// Tipo de animal:
// Dada la cantidad de patas de un animal, escribe una expresión que determine si es un insecto (6 patas), mamífero (4 patas), o si no 
// corresponde a estos tipos.
function tipoAnimal(patas){
    let resultado = ''

    patas === 4 ? resultado = 'Es mamifero' : resultado = 'Es insecto'

    return resultado
}

console.log(tipoAnimal(4));

// Comparación de dos números:
// Escribe una expresión que compare dos números y determine cuál es el mayor, utilizando el operador ternario.
function comparación(num1, num2){
    let resultado = ''

    num1 > num2 ? resultado = `${num1} es mayor` : `${num2} es mayor`

    return resultado
}

console.log(comparación(4,5));