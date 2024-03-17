const personajes = ['Goku', 'Vegeta', 'Trunks'];

// Desestructuración de arreglos
const [ p1, p2, p3] = personajes;
console.log(p2, p3, p1);

const retornaArreglo = () => {
    return ['ABC', 123];
}
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea
// 1. El primer valor del arr se llamará nombre
// 2. Se llamará setNombre

const useState = (valor) => {
    return [valor, () => { console.log(`Hola ${valor}`) }];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre, setNombre);