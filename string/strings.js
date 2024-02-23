// Strings -> inmutables

// String primitivo
let cadena = 'Hola mundo'
console.log(typeof(cadena));


// Objeto string
let cadena2 = new String('Cocina del dev')
console.log(typeof(cadena2));


// Encontrar la ultima letra de la cadadena
console.log(cadena[cadena.length-1]);


// --- Metodos ---


// Contar letras:
// Dada una cadena, utiliza el método length para contar cuántos caracteres contiene.
const texto1 = 'Hola cocineros de código'
console.log(texto1.length);

// Convertir a mayúsculas:
// Convierte una cadena a mayúsculas utilizando el método toUpperCase.
const texto2 = 'Hola cocineros de código'
console.log(texto2.toUpperCase());

// Convertir a minúsculas:
// Convierte una cadena a minúsculas utilizando el método toLowerCase.
const texto3 = 'Hola cocineros de código'
console.log(texto3.toLocaleLowerCase());

// Reversa una cadena:
// Dada una cadena, invierte el orden de los caracteres utilizando el método split, reverse y join.
const texto4 = 'Hola cocineros de código'

// Split -> Separa el código
const texto4Separado = texto4.split('')

// reverse -> invierte el orden
const textoInvertido = texto4Separado.reverse()

// join -> une las cadenas
const textoUnido = textoInvertido.join()
console.log(textoUnido);

// Extraer subcadena:
// Dada una cadena, extrae una subcadena utilizando el método substring o slice.
const texto5 = 'Hola cocineros de código'

// Substring -> Comienza a partir de la posicion tomada, en este caso 2; y crea una nueva cadena
console.log(texto5.substring(2));

// Slice -> Corta en un rango determinado
console.log(texto5.slice(2,4));

// Eliminar espacios en blanco:
// Dada una cadena que contiene espacios en blanco al principio y al final, elimina esos espacios utilizando trim.
const texto6 = ' Hola cocineros de código '

// trim -> Elimina los espacios de los lados
console.log(texto6.trim());

// trimEnd -> Elimina el espacio de la parte final
console.log(texto6.trimEnd());

// trimStart -> Elimina el espacio de la parte inicial
console.log(texto6.trimStart());

// Encontrar posición de una palabra:
// Encuentra la posición de una palabra específica en una cadena utilizando el método indexOf o search.
const texto7 = 'Hola cocineros de código'

// indexOf -> busca la primera aparición del carácter y devuelve la posición
console.log(texto7.indexOf('c'));

// indexOf con segundo argumento -> busca la primera aparición del carácter después de la posición 3
console.log(texto7.indexOf('o', 2));

// search -> busca el primer caracter y da la posicion
console.log(texto7.search('e'));

// Reemplazar caracteres:
// Reemplaza un carácter específico o una subcadena con otra utilizando el método replace.
const texto8 = 'Hola cocineros de código'

// replace -> reemplaza el caracter o conjunto de caracteres seleccionado por otro
console.log(texto8.replace("cocineros", "asadores"));

// Dividir una cadena:
// Divide una cadena en un array de subcadenas utilizando el método split.
const texto9 = 'Hola cocineros de código'
console.log(texto9.split(''));

// Concatenar cadenas:
// Concatena dos o más cadenas utilizando el operador + o el método concat.
const texto10 = 'Hola cocineros de código'
const texto11 = ' y desarrolladores profesionales'

const texto12 = texto10 + " " + texto11
const texto13 = texto10.concat(" ", texto11)

console.log(texto12);
console.log(texto13);