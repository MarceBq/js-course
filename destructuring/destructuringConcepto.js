// Destructuring es una forma de extraer valores de un objeto o array y asignarlos a variables.


const user = [
    {name: 'Jhon', age: 25},
    {name: 'Jane', age: 22},]

// Destructuring de un array
const [firstUser, secondUser] = user;
console.log(firstUser);

// Destructuring de un objeto
const marcelo = {
    nam: 'Marcelo',
    age: 30,
    country: {
        cName: 'Peru'
    },
}

const {nam, age} = marcelo;
console.log(nam);

// Renombrado de propiedades
const {nam: nombre, age: edad} = marcelo;
console.log(nombre);

// Si no existe esa propiedad en el objeto, se asigna un valor por defecto

const {nam: nombre2, age: edad2, country = 'Peru'} = marcelo;

// No se asigna el valor por defecto porque ya existe la propiedad country
console.log(country);


// Acceder a propiedades de un objeto anidado
const {country: {cName} } = marcelo;
console.log(cName);
