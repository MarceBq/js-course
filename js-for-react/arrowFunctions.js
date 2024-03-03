// Arrow Functions

function greet(){
    return 'Hello, World!';
}

const greet = () => 'Hello, World!';
console.log(greet());


// React

// Cuando recorro un array con map, puedo usar arrow functions para hacerlo más legible(usualmente con listados de elementos)

function List(){
    return (
        <ul>
            {list.map(e => (<li>e.name</li>))}
        </ul>
    )
}