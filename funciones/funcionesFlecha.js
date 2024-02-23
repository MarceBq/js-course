//Un arrow functions es una funcion expresiva

const funcionFlecha = (numTotal) => {
    for (let i = 1; i <= numTotal; i++) {
        const resultado = i * numTotal
        console.log(`${i} * ${numTotal} = ${resultado}`) 
    }
}

funcionFlecha(12)

// Ejercicios

//Suma de dos números:
//Crea una arrow function llamada sumar que tome dos parámetros y devuelva la suma de esos dos números.

const sumaNumeros = (num1, num2) =>{
    const resultado = num1 + num2
    
    return resultado
}

console.log(sumaNumeros(5,9));

//Verificar número par:
//Define una arrow function llamada esPar que tome un número como parámetro y devuelva true si es par y false si es impar.

const validarNumeroPar = (num1) => {
    let resultado = ''
    
    num1 % 2 === 0 ? resultado = `${num1} es par` : resultado = `${num1} no es par`

    return resultado
}

console.log(validarNumeroPar(10));

//Elevar al cuadrado:
//Implementa una arrow function llamada cuadrado que tome un número como parámetro y devuelva su valor elevado al cuadrado.

const numAlCuadrado = num => {
    const resultado = Math.pow(num,2)
    return resultado
}

console.log(numAlCuadrado(4));

//Filtrar números pares:
//Crea una arrow function llamada filtrarPares que tome un array de números como parámetro y devuelva un nuevo array con solo los números //pares.

const filtrarPares = arr => {
    const nuevoArr = arr.filter(num => num % 2 === 0)   
    return nuevoArr
}

console.log(filtrarPares([1,4,5,6,7,8,10,34]));

//Contar total letras en una cadena
const totalLetras = cadena => {
    let totalCaracteres = 0

    for (let i = 0; i < cadena.length; i++) {
        
        /* -- match -> solo cuenta los caracteres que cumplan esa condición -- */
        if(cadena[i].match(/[a-zA-Z]/))
        totalCaracteres++
    }

    return totalCaracteres
}

console.log(totalLetras('Hola Mundo'));

//Define una arrow function llamada contarLetras que tome una cadena de texto como parámetro y devuelva un objeto con la cantidad de veces que aparece cada letra (ignorando espacios y haciendo la comparación sin distinguir entre mayúsculas y minúsculas).

const contarLetras = cadena => {
    let resultado = {}

    //Itera un caracter a la vez
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i].toLowerCase()

        //Si es caracter no es vacío
        if(caracter !== ' '){
            //Si noexiste en el objeto resultado
            if(!resultado[caracter]){
                resultado[caracter] = 1
            }else{
                resultado[caracter]++ 
            }
        }
    }

    return resultado
}

console.log(contarLetras('Hola Mundo'));