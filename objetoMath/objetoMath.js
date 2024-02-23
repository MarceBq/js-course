// Objecto Math

// 1) Calcular el cuadrado de un número:
// Solicita al usuario que ingrese un número y muestra el cuadrado de ese número utilizando el objeto Math.
const numeroCuadraro = (num, calculadorNumero) => {
    return calculadorNumero(num)
}

function calcularNumero(num){
    return Math.pow(num,2)
}

console.log(numeroCuadraro(4,calcularNumero));


// 2) Generar un número aleatorio entre 1 y 100:
// Genera un número aleatorio entre 1 y 100 utilizando el método random del objeto Math.
const numeroAleatorio = (min, max, calcularNumeroA) => {
    return calcularNumeroA(min, max)
}

function generarNumAleatorio(min, max){
    const numeroAleatorio = Math.random() * (max - min) + min
    return Math.floor(numeroAleatorio)
}

console.log(numeroAleatorio(1,100, generarNumAleatorio));


// 3) Redondear un número decimal:
// Solicita al usuario que ingrese un número decimal y muestra ese número redondeado al entero más cercano utilizando el método round de Math.
const numRedondea = (num, redondearNum) => {
    return redondearNum(num)
}

function redondearNumR(num){
    return Math.round(num)
}

console.log(numRedondea(34.5, redondearNumR));
console.log(numRedondea(33.2,  redondearNumR));


// 4) Calcular la raíz cuadrada de un número:
// Solicita al usuario que ingrese un número y muestra la raíz cuadrada utilizando el método sqrt de Math.
const raizCuadradaNum = (num, raizCuadradaNum) => {
    return raizCuadradaNum(num)
}

function generarRaizC(num){
    return Math.sqrt(num)
}

console.log(raizCuadradaNum(25, generarRaizC));



// 5) Calcular el valor absoluto de un número:
// Solicita al usuario que ingrese un número y muestra el valor absoluto utilizando el método abs de Math.
const valorAbsolutoNum = (num, generarValorAbs) => {
    return generarValorAbs(num)
}

function cambiarValorAbsoluto(num){
    return Math.abs(num)
}

console.log(valorAbsolutoNum(-4.52, cambiarValorAbsoluto));

// 6) Calcular la potencia de un número:
// Solicita al usuario que ingrese dos números y muestra el resultado de elevar el primer número a la potencia del segundo número utilizando el método pow de Math.
const potenciaNum = (n1, n2, potencia) => {
    return potencia(n1,n2)
}

function resultadoPotencia(n1,n2){
    return Math.pow(n1,n2)
}

console.log(potenciaNum(4,2, resultadoPotencia));

// 7) Obtener el máximo de tres números:
// Solicita al usuario que ingrese tres números y muestra el máximo de esos tres números utilizando el método max de Math.
const maxNum = (n1,n2,n3, maximo) => {
    return maximo(n1,n2,n3)
}

function resultadoMaxNum(n1,n2,n3){
    return Math.max(n1,n2,n3)
}

console.log(maxNum(5,4,32 , resultadoMaxNum));


// 8) Obtener el mínimo de tres números:
// Solicita al usuario que ingrese tres números y muestra el mínimo de esos tres números utilizando el método min de Math.
const minNum = (n1,n2,n3, minimo) => {
    return minimo(n1,n2,n3)
}

function resultadoMin(n1,n2,n3){
    return Math.min(n1,n2,n3)
}

console.log(minNum(33,53,13, resultadoMin));


// 9) Convertir grados Celsius a Fahrenheit:
// Solicita al usuario que ingrese una temperatura en grados Celsius y muestra la temperatura equivalente en grados Fahrenheit utilizando la fórmula de conversión y mostrar la conversión a solo dos decimales.
const farenheit = (c, conversion) => {
    return conversion(c)
}

function celToFa(c){
    const resultado = (c * 9/5) + 32
    return resultado.toFixed(2)
}

// fixed -> elimina redondea a dos decimales y convierte el valor en un string 
console.log((farenheit(32.5321, celToFa)));


// 10) Calcular el seno de un ángulo:
// Solicita al usuario que ingrese un ángulo en grados y muestra el seno de ese ángulo utilizando el método sin de Math.
const seno = (ang, resultado) => {
    return resultado(ang)
}

function obtenerSeno(ang) {
    return Math.sin(ang)
}

console.log(seno(3, obtenerSeno));


// 11) Calcular el coseno de un ángulo:
// Solicita al usuario que ingrese un ángulo en grados y muestra el coseno de ese ángulo utilizando el método cos de Math.Calcular el logaritmo natural de un número:
const coseno = (ang, resultado) => {
    return resultado(ang)
}

function obtenerSeno(ang) {
    return Math.cos(ang)
}

console.log(coseno(32, obtenerSeno));


// 12) Solicita al usuario que ingrese un número y muestra el logaritmo natural (base e) de ese número utilizando el método log de Math.
const logaritmoNatural = (num, resultado) => {
    return resultado(num)
}

function obtenerLogaritmoNatura(num){
    return Math.log(num)
}

console.log(logaritmoNatural(12, obtenerLogaritmoNatura));
