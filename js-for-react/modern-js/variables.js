const nombre = 'Juan';
let edad = 30;

console.log(nombre, edad);

// Esto pasa porque la variable nombre ya fue declarada con const y no se puede redeclarar con let o const en el mismo scope
if(true) {
  const nombre = 'Pedro';
  console.log(nombre, edad);
}