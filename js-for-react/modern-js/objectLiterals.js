const person = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        ciudad: 'Bogotá',
        zip: 111111,
        lat: 14.3232,
        lng: 34.923332
    } 
}

// Clonar un objeto
const person2 = {...person}
person2.nombre = 'Peter'

// Creando un nuevo objeto con el mismo nombre de las variables
console.log(person) // {}
console.log(person2) // {}