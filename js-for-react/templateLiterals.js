// Template literals 

const name = 'John';
const lastname = 'Doe';
const welcome = `Hello, my name is ${name} ${lastname}`;

console.log(welcome);

// React

function component({background}){
    return (
         <div className={`bg-color-${background}`}>Hello World</div>
    )
}