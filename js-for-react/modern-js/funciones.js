function saludar(nombre) {
  return `Hola ${nombre}`;
}
console.log(saludar("Marcelo"));

const saludar2 = (nombre) => `Hola ${nombre}`;
console.log(saludar2("Papu"));

// Esto pasa a ser un objeto con una funcion dentro de el
const getUser = () => ({
  uid: "ABC123",
  username: "El_Papi1502",
});

console.log(getUser());

// Tarea
// 1. Transformar a una funcion de flecha
// 2. Tiene que retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = () => ({
  uid: "ABC567",
  username: "CausitaXD",
  saludar() {
    console.log(`Hola mundo, soy ${this.username}`);
  },
});

console.log(getUsuarioActivo());