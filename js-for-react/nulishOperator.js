// Operador Nulish
// El operador nulish es un operador de coalescencia nula que devuelve el operando de la derecha cuando el operando de la izquierda es nulo o indefinido. De lo contrario, devuelve el operando de la izquierda.

function sum(a, b) {

  a = a ?? 0;
  b = b ?? 0;


  return a + b;
}

console.log(sum(1, 2)); 

// React


function Avatar({ user }) {
  const name = user.name ?? "Stranger";
  return <img src={user.avatarURL} alt={name} />;
}