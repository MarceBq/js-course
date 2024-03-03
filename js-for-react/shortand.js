// Shortand 

const firstName = "Marcelo";
const age = 19
const twitter = 'https://twitter.com/marcelo';

const user = {
    firstName,
    age,
    twitter
}

console.log(firstName);


// React

function component({initialState, totalCount}){
    const [state, setState] = useState({initialState, totalCount});
}