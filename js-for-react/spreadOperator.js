// Spread Operator

// Array
const arrNum = [1, 2, 3, 4, 5];
const arrNum2 = [6, 7, 8, 9, 10];

const newArr = [...arrNum, ...arrNum2];
console.log(newArr);

// Object
const obj = {
    a: 'a',
    b: 'b',
    c: 'c'
}

const obj2 = {
    d: 'd',
    e: 'e',
    f: 'f'
}

const newObj = {...obj, ...obj2};
console.log(newObj);

// React

function component({id, name, username, profile}){
    return <newComponent key={id} name={name} username={username} profile={profile}></newComponent>
}


function component({id, ...props}){
    return <newComponent key={id} {...props}></newComponent>
}